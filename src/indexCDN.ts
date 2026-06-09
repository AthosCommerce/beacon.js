import packageJSON from '../package.json';
export const { version } = packageJSON;
import { Beacon } from './Beacon';
import { getContext } from './utils/getContext';

type BeaconConfigCDN = {
	initiator?: string;
};

const scriptEl = document.currentScript as HTMLScriptElement;
if (scriptEl) {
	try {
		const context = getContext(['siteId', 'siteid', 'config'], scriptEl);
		const rawSiteId = [context.siteId, context.siteid].find(
			(value) => typeof value === 'string' && value.trim().length > 0
		);
		const siteId = rawSiteId ? rawSiteId.trim().toLowerCase() : '';
		const config: BeaconConfigCDN = context.config || {};
		const initiator = `${typeof config.initiator === 'string' ? config.initiator : ''}`.trim().toLowerCase();
		let initializeBeacon = true;

		if (typeof window !== 'undefined') {
			if (window.searchspring?.tracker?.track || window.athos?.tracker?.track) {
				console.warn('Beacon: This script should be removed. An existing Snap instance is already on the page.');
				initializeBeacon = false;
			}
			if (window.athos?.tracker && !window.athos?.tracker?.track) {
				console.warn('Beacon: Beacon script included multiple times. Second initialization ignored.');
				initializeBeacon = false;
			}
			if (!siteId) {
				throw new Error('Beacon: No siteId found in script context. Beacon will not initialize.');
			}
			if (initializeBeacon) {
				const domain = siteId.startsWith('at') ? 'athos' : 'searchspring';
				window.athos = window.athos || {};
				window.athos.tracker = new Beacon({ siteId }, { initiator: `${domain}/${initiator ? initiator + '/' : ''}cdn/beaconjs/${version}` });
			}
		}
	} catch (e) {
		console.error(e);
	}
}
