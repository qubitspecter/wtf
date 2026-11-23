export const site = { name: 'Decoheron', url: 'https://decoheron.com' };

export const lorem = {
  short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  long: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
};

export interface NavLink { label: string; href: string }
export interface NavItem { label: string; href?: string; children?: NavLink[] }

// Add an industry here and it gets a page, a menu entry, a footer link and a home page chip.
export const industries = [
  { slug: 'wealth-management', name: 'Wealth Management' },
  { slug: 'legal', name: 'Legal' },
  { slug: 'accounting', name: 'Accounting' },
  { slug: 'cyber-security', name: 'Cyber Security' },
  { slug: 'operational-technology', name: 'Operational Technology' },
  { slug: 'msps', name: 'MSPs' },
];

export const nav: NavItem[] = [
  { label: 'Product', href: '/veristate/' },
  { label: 'Approach', href: '/approach/' },
  { label: 'Industries', children: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}/` })) },
  { label: 'Case Studies', href: '/case-studies/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
