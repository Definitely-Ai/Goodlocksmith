import { businessFacts } from './businessFacts.js';

export const getCityCanonicalUrl = (city) => `https://www.goodlocksmith.com/${city.slug}`;

export const getCityTitle = (city) => `${city.name} Locksmith | A Good Locksmith, LLC`;

export const getCityMetaDescription = (city) => {
    return `${city.name} locksmith service from licensed owner Michael Galdine of Lillington-based A Good Locksmith. Automotive, residential and commercial. ${businessFacts.experienceYears} years. ${businessFacts.licenseNumber}.`;
};

export const getCityFaqs = (city) => [
    {
        question: `Does A Good Locksmith provide mobile locksmith service in ${city.name}?`,
        answer: `${city.description} Service is provided at the customer's location, subject to current availability and travel distance.`,
    },
    {
        question: `Is A Good Locksmith local to ${city.name}?`,
        answer: city.localContext,
    },
    {
        question: 'Is A Good Locksmith licensed in North Carolina?',
        answer: `${businessFacts.legalName} advertises under ${businessFacts.licenseNumber}. Owner ${businessFacts.ownerName} has ${businessFacts.experienceYears} years of professional locksmithing experience.`,
    },
    {
        question: 'How long has A Good Locksmith been in business?',
        answer: `${businessFacts.publicName} was established in ${businessFacts.establishedYear}. ${businessFacts.ownerName}'s ${businessFacts.experienceYears} years in locksmithing include experience gained before he established the company.`,
    },
    {
        question: `What locksmith services are available in ${city.name}?`,
        answer: `${city.serviceFocus} Services are confirmed for the specific job and location when the customer calls.`,
    },
];

export const getCitySchema = (city) => {
    const canonicalUrl = getCityCanonicalUrl(city);
    const areaType = city.isCounty ? 'AdministrativeArea' : 'City';
    const areaName = `${city.name}, NC`;

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': `${canonicalUrl}#webpage`,
                url: canonicalUrl,
                name: getCityTitle(city),
                description: getCityMetaDescription(city),
                about: { '@id': 'https://www.goodlocksmith.com/#business' },
                breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
            },
            {
                '@type': 'BreadcrumbList',
                '@id': `${canonicalUrl}#breadcrumb`,
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'A Good Locksmith',
                        item: 'https://www.goodlocksmith.com/',
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: `${city.name} Locksmith`,
                        item: canonicalUrl,
                    },
                ],
            },
            {
                '@type': 'Locksmith',
                '@id': 'https://www.goodlocksmith.com/#business',
                name: businessFacts.legalName,
                url: 'https://www.goodlocksmith.com/',
                telephone: '+1-984-480-5397',
                foundingDate: businessFacts.establishedYear,
                founder: {
                    '@type': 'Person',
                    name: businessFacts.ownerName,
                    jobTitle: 'Licensed Locksmith and Owner',
                },
                identifier: {
                    '@type': 'PropertyValue',
                    name: 'North Carolina Locksmith License',
                    value: businessFacts.licenseNumber,
                },
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Lillington',
                    addressRegion: 'NC',
                    addressCountry: 'US',
                },
                areaServed: {
                    '@type': areaType,
                    name: areaName,
                },
            },
            {
                '@type': 'Service',
                '@id': `${canonicalUrl}#mobile-locksmith-service`,
                name: `${city.name} mobile locksmith service`,
                description: city.serviceFocus,
                serviceType: 'Automotive, motorcycle, residential and commercial locksmith services',
                provider: { '@id': 'https://www.goodlocksmith.com/#business' },
                areaServed: {
                    '@type': areaType,
                    name: areaName,
                },
            },
            {
                '@type': 'FAQPage',
                '@id': `${canonicalUrl}#frequently-asked-questions`,
                mainEntity: getCityFaqs(city).map(({ question, answer }) => ({
                    '@type': 'Question',
                    name: question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: answer,
                    },
                })),
            },
        ],
    };
};
