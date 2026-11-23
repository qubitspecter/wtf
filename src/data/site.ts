export const site = { name: 'Decoheron', url: 'https://decoheron.com' };

export const lorem = {
  short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  long: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
};

export interface NavLink { label: string; href: string }
export interface NavItem { label: string; href?: string; children?: NavLink[] }

// Add an industry here and it gets a page, a menu entry, a footer link and a home page chip.
export const sectors = [
  { sect: 'wealth-management', name: 'Wealth Management' },
  { sect: 'legal', name: 'Legal' },
  { sect: 'accounting', name: 'Accounting' },
  { sect: 'cyber-security', name: 'Cyber Security' },
  { sect: 'operational-technology', name: 'Operational Technology' },
  { sect: 'msps', name: 'MSPs' },
  { sect: 'case-studies', name: 'Case Studies'}
];

// Add an industry here and it gets a page, a menu entry, a footer link and a home page chip.
export const services = [
  { sect: 'vciso', name: 'Virtual CISO' },
  { sect: 'tech-advice', name: 'Technical Advisory' }
];

export const nav: NavItem[] = [
  { label: 'VeriState', href: '/veristate/' },
  { label: 'Services', children: services.map((i) => ({ label: i.name, href: `/services/${i.sect}/` })) },
  { label: 'Sectors', children: sectors.map((i) => ({ label: i.name, href: `/sectors/${i.sect}/` })) },
  { label: 'WTF?', href: '/case-studies/' },
  { label: 'About', href: '/about/' },
  { label: 'Get Started', href: '/contact/' },
];
