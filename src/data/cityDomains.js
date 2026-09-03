// Keep city domains on their local landing page even if the host serves index.html.
const cityDomainPaths = {
  'erwinlocksmith.com': '/Erwin',
  'bunnlevellocksmith.com': '/Bunnlevel',
  'coatslocksmith.com': '/Coats',
};

export function getCityDomainEntryPath({ hostname, pathname, search = '', hash = '' }) {
  // Never replace an explicit city, blog, or other deep link.
  if (pathname !== '/' && pathname !== '/index.html') return null;

  const domain = hostname.toLowerCase().replace(/\.$/, '').replace(/^www\./, '');
  const cityPath = Object.hasOwn(cityDomainPaths, domain) ? cityDomainPaths[domain] : null;

  return cityPath ? `${cityPath}${search}${hash}` : null;
}
