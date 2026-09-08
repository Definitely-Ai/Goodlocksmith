import { businessFacts } from './businessFacts.js';

export const getCityCanonicalUrl = (city) => `https://www.goodlocksmith.com/${city.slug}`;
export const getCityTitle = (city) => `${city.name} Locksmith NC | Rekeying, Lockouts & Smart Locks`;
export const getCityMetaDescription = (city) => `${city.name}, NC locksmith service from Lillington-based A Good Locksmith. Residential & commercial rekeying, lockouts, smart locks and mobile service. ${businessFacts.experienceYears} years experience.`;

export const getCityFaqs = (city) => [
    { question: `Who provides locksmith service in ${city.name}, NC?`, answer: `A Good Locksmith provides mobile locksmith service in ${city.name} from its Lillington, NC home base. ${city.description}` },
    { question: `Can I get locks rekeyed in ${city.name}?`, answer: `Yes. A Good Locksmith provides residential, rental-property and commercial rekeying in ${city.name}, subject to current availability and the exact service address.` },
    { question: `Can a locksmith help with a home or business lockout in ${city.name}?`, answer: `Yes. Home and business lockout service is available in ${city.name}. Call with the exact location so current response availability can be confirmed.` },
    { question: `Does A Good Locksmith install smart locks in ${city.name}?`, answer: `Yes. Smart-lock and keypad-lock installation and assistance are offered in ${city.name} for compatible residential and commercial doors.` },
    { question: `Is A Good Locksmith local to ${city.name}?`, answer: city.localContext },
    { question: 'Is A Good Locksmith licensed in North Carolina?', answer: `${businessFacts.legalName} advertises under ${businessFacts.licenseNumber}. Owner ${businessFacts.ownerName} has ${businessFacts.experienceYears} years of professional locksmithing experience.` },
    { question: `What locksmith services are available in ${city.name}?`, answer: `${city.serviceFocus} Services are confirmed for the specific job and location when the customer calls.` },
];

export const getCitySchema = (city) => {
    const canonicalUrl = getCityCanonicalUrl(city);
    const areaType = city.isCounty ? 'AdministrativeArea' : 'City';
    const areaName = `${city.name}, NC`;
    return { '@context': 'https://schema.org', '@graph': [
        { '@type': 'WebPage', '@id': `${canonicalUrl}#webpage`, url: canonicalUrl, name: getCityTitle(city), description: getCityMetaDescription(city), about: { '@id': 'https://www.goodlocksmith.com/#business' }, breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` } },
        { '@type': 'BreadcrumbList', '@id': `${canonicalUrl}#breadcrumb`, itemListElement: [ { '@type': 'ListItem', position: 1, name: 'A Good Locksmith', item: 'https://www.goodlocksmith.com/' }, { '@type': 'ListItem', position: 2, name: `${city.name} Locksmith`, item: canonicalUrl } ] },
        { '@type': 'Locksmith', '@id': 'https://www.goodlocksmith.com/#business', name: businessFacts.legalName, url: 'https://www.goodlocksmith.com/', telephone: '+1-984-480-5397', foundingDate: businessFacts.establishedYear, founder: { '@type': 'Person', name: businessFacts.ownerName, jobTitle: 'Licensed Locksmith and Owner' }, identifier: { '@type': 'PropertyValue', name: 'North Carolina Locksmith License', value: businessFacts.licenseNumber }, address: { '@type': 'PostalAddress', addressLocality: 'Lillington', addressRegion: 'NC', addressCountry: 'US' }, areaServed: { '@type': areaType, name: areaName } },
        { '@type': 'Service', '@id': `${canonicalUrl}#mobile-locksmith-service`, name: `${city.name} residential and commercial locksmith service`, description: city.serviceFocus, serviceType: 'Rekeying, residential lockouts, commercial lockouts, smart locks, lock installation and mobile locksmith services', provider: { '@id': 'https://www.goodlocksmith.com/#business' }, areaServed: { '@type': areaType, name: areaName } },
        { '@type': 'FAQPage', '@id': `${canonicalUrl}#frequently-asked-questions`, mainEntity: getCityFaqs(city).map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }
    ] };
};
