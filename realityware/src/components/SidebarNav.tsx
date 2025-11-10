'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// icons :hellmo:
const HubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const GalleryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <circle cx="9" cy="9" r="2"></circle>
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
  </svg>
);

const ProjectsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
  </svg>
);

const VotingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Z"></path>
    <path d="M8 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Z"></path>
    <path d="M12 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"></path>
    <path d="M20 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"></path>
  </svg>
);

const StoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const WorldIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

export default function SidebarNav() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/hub', icon: HubIcon, label: 'Hub' }, /* oh btw, ismail said that the hub thing wasnt, a great idea, we might want to replace it with smt eles, until we have time to talk abt that */
    { href: '/gallery', icon: GalleryIcon, label: 'Gallery' },
    { href: '/projects', icon: ProjectsIcon, label: 'Projects' },
    { href: '/voting', icon: VotingIcon, label: 'Voting' },
    { href: '/store', icon: StoreIcon, label: 'Store' },
    { href: '/world', icon: WorldIcon, label: 'World' },
  ];

  return (
    <>
      <div className="text-3xl py-4 text-center font-bold text-primary">Realityware</div>
      <nav className="flex-grow mt-8">
        <ul className="space-y-2 text-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link href={link.href} className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary/20 text-primary' : 'text-foreground hover:bg-background/50'}`}>
                  <link.icon className="w-6 h-6" /> {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-neutral mt-4 pt-4">
        <Link href="/profile" className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${pathname === '/profile' ? 'bg-primary/20 text-primary' : 'text-foreground hover:bg-background/50'}`}>
          <div className="w-12 h-12 rounded-full bg-secondary"></div>
          <div>
            <p className="font-bold">Username</p>
            <p className="text-sm text-neutral-400">123 Tickets</p> 
          </div>
        </Link>
      </div>
    </>
  );
}
