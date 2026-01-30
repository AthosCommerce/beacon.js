import { Beacon } from './Beacon';
import { getContext } from '@searchspring/snap-toolbox';

const scriptEl = document.currentScript as HTMLScriptElement;
if (scriptEl) {
    try {
        const context = getContext(['siteId', 'siteid'], scriptEl);
        const siteId = context.siteId || context.siteid;
        let initializeBeacon = true;

        if (typeof window !== 'undefined') {
            if (window.searchspring?.tracker?.track || window.athos?.tracker?.track) {
                console.warn('Beacon: This script should be removed. An exisiting Snap instance is already on the page.');
                // TODO: add this later: "For more information see https://searchspring.github.io/snap/snap-tracking/"
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
                window.athos = window.athos || {};
                window.athos.tracker = new Beacon({ siteId });
            }
        }
    } catch (e) {
        console.error(e);
    }
}