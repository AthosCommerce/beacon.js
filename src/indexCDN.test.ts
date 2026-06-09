describe('CDN bootstrap', () => {
	const originalCurrentScriptDescriptor = Object.getOwnPropertyDescriptor(document, 'currentScript');

	const setCurrentScript = (script: HTMLScriptElement | null) => {
		Object.defineProperty(document, 'currentScript', {
			configurable: true,
			get: () => script,
		});
	};

	const loadModule = async (context: Record<string, unknown>) => {
		const mockBeacon = jest.fn().mockReturnValue({ track: jest.fn() });
		const mockGetContext = jest.fn().mockReturnValue(context);

		jest.doMock('./Beacon', () => ({ Beacon: mockBeacon }));
		jest.doMock('./utils/getContext', () => ({ getContext: mockGetContext }));

		const script = document.createElement('script');
		setCurrentScript(script);

		await jest.isolateModulesAsync(async () => {
			await import('./indexCDN');
		});

		return { mockBeacon, mockGetContext, script };
	};

	afterAll(() => {
		if (originalCurrentScriptDescriptor) {
			Object.defineProperty(document, 'currentScript', originalCurrentScriptDescriptor);
		}
	});

	beforeEach(() => {
		jest.resetModules();
		jest.clearAllMocks();
		delete (window as typeof window & { athos?: unknown }).athos;
		delete (window as typeof window & { searchspring?: unknown }).searchspring;
	});

	it('logs an error and skips initialization when siteId is missing', async () => {
		const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
		const { mockBeacon, mockGetContext, script } = await loadModule({});

		expect(mockGetContext).toHaveBeenCalledWith(['siteId', 'siteid', 'config'], script);
		expect(mockBeacon).not.toHaveBeenCalled();
		expect(errorSpy).toHaveBeenCalledTimes(1);
		const [loggedError] = errorSpy.mock.calls[0];
		expect(loggedError).toBeInstanceOf(Error);
		expect((loggedError as Error).message).toContain('No siteId found in script context');
	});

	it('initializes Beacon when siteId exists in script context', async () => {
		const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
		const { mockBeacon } = await loadModule({ siteId: ' AbC123 ' });

		expect(errorSpy).not.toHaveBeenCalled();
		expect(mockBeacon).toHaveBeenCalledTimes(1);
		expect(mockBeacon).toHaveBeenCalledWith({ siteId: 'abc123' }, expect.objectContaining({ initiator: expect.stringContaining('/cdn/beaconjs/') }));
	});

	it('initializes Beacon when lowercase siteid alias is provided', async () => {
		const { mockBeacon } = await loadModule({ siteid: ' XYZ789 ' });

		expect(mockBeacon).toHaveBeenCalledWith({ siteId: 'xyz789' }, expect.objectContaining({ initiator: expect.stringContaining('/cdn/beaconjs/') }));
	});

	it('includes sanitized custom initiator when config initiator is provided', async () => {
		const { mockBeacon } = await loadModule({
			siteId: 'abc123',
			config: { initiator: '  StoreFront  ' },
		});

		expect(mockBeacon).toHaveBeenCalledWith(
			{ siteId: 'abc123' },
			expect.objectContaining({ initiator: expect.stringContaining('/storefront/cdn/beaconjs/') })
		);
	});

	it('uses athos domain prefix when siteId starts with at', async () => {
		const { mockBeacon } = await loadModule({ siteId: ' AT1234 ' });

		expect(mockBeacon).toHaveBeenCalledWith(
			{ siteId: 'at1234' },
			expect.objectContaining({ initiator: expect.stringContaining('athos/cdn/beaconjs/') })
		);
	});

	it('warns and skips initialization when existing Snap tracker is detected', async () => {
		const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
		(window as typeof window & { searchspring?: unknown }).searchspring = {
			tracker: { track: jest.fn() },
		};

		const { mockBeacon } = await loadModule({ siteId: 'abc123' });

		expect(warnSpy).toHaveBeenCalledWith('Beacon: This script should be removed. An existing Snap instance is already on the page.');
		expect(mockBeacon).not.toHaveBeenCalled();
	});

	it('warns and skips initialization on duplicate Beacon inclusion', async () => {
		const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
		(window as typeof window & { athos?: unknown }).athos = {
			tracker: {},
		};

		const { mockBeacon } = await loadModule({ siteId: 'abc123' });

		expect(warnSpy).toHaveBeenCalledWith('Beacon: Beacon script included multiple times. Second initialization ignored.');
		expect(mockBeacon).not.toHaveBeenCalled();
	});
});
