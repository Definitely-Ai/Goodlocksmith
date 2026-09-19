// Every domain is an existing address owned by A Good Locksmith.
// Keep the canonical on the city domain; these are full landing pages.
export const cityDomains = Object.freeze({
    'angierlocksmith.com': 'Angier',
    'dunnlocksmith.com': 'Dunn',
    'harnettcountylocksmith.com': 'Harnett-County',
    'wakecountylocksmith.com': 'Wake-County',
    'locksmithfuquay.com': 'Fuquay-Varina',
    'lillingtonlocksmith.com': 'Lillington',
    'erwinlocksmith.com': 'Erwin',
    'bunnlevellocksmith.com': 'Bunnlevel',
    'coatslocksmith.com': 'Coats',
});

export const getDomainCanonicalUrl = (domain) => `https://www.${domain}/`;
