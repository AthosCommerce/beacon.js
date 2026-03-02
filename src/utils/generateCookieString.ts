export const generateCookieString = (name: string, value: string, samesite: string, expiration: number, domain?: string): string => {
	const secureString = window.location.protocol == 'https:' ? 'Secure;' : '';
	const sameSiteString = 'SameSite=' + (samesite || 'Lax') + ';';
	let expiresString = '';
	if (expiration) {
		const d = new Date();
		d.setTime(d.getTime() + expiration);
		expiresString = 'expires=' + d['toUTCString']() + ';';
	}
	const valueString = encodeURIComponent(value) + ';';

	if (domain) {
		// TODO: does domain need a semicolon?
		return name + '=' + valueString + expiresString + sameSiteString + secureString + 'path=/; domain=' + domain;
	}

	const host = window?.location?.hostname;
	if (!host || host.split('.').length === 1) {
		return name + '=' + valueString + expiresString + sameSiteString + secureString + 'path=/';
	}

	const domainParts = host.split('.');
	domainParts.shift();
	domain = '.' + domainParts.join('.');

	return name + '=' + valueString + expiresString + sameSiteString + secureString + 'path=/; domain=' + domain;
};
