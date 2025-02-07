import { Beacon } from './Beacon';

describe('Beacon', () => {
	it('can resolve initialized promise', () => {
		const beacon = new Beacon({
			siteId: 'test',
		});
		expect(beacon).toBeDefined();
	});
    it('can getContext', async () => {
        const beacon = new Beacon({
            siteId: 'test',
        });
        expect(beacon).toBeDefined();

        const context = await beacon.getContext();
        expect(context.pageLoadId).toBeDefined();
    });
});
