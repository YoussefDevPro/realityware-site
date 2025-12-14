import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react";

// icons
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


export default function SidebarNav() {
const [username, setUsername] = useState("Guest");
const [tickets, setTickets] = useState(0);

useEffect(() => {
  if (typeof window !== "undefined") {
    const initialData = (window as any).__INITIAL_DATA__ || {};
    setUsername(initialData.username || "Guest");
    setTickets(initialData.tickets || 0);
  }
}, []);


  const location = useLocation();
  const pathname = location.pathname;

  const navLinks = [
    { href: '/hub', icon: HubIcon, label: 'Hub' },
    { href: '/gallery', icon: GalleryIcon, label: 'Gallery' },
    { href: '/projects', icon: ProjectsIcon, label: 'Projects' },
    { href: '/voting', icon: VotingIcon, label: 'Voting' },
    { href: '/shop', icon: StoreIcon, label: 'Shop' },
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
                <Link
                  to={link.href}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                    isActive ? 'bg-primary/20 text-primary' : 'text-foreground hover:bg-background/50'
                  }`}
                >
                  <link.icon className="w-6 h-6" /> {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-neutral mt-4 pt-4">
        <Link
          to="/profile"
          className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
            pathname === '/profile' ? 'bg-primary/20 text-primary' : 'text-foreground hover:bg-background/50'
          }`}
        >
          <img src="#" alt="User avatar" className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-bold">{username}</p>
            <p className="text-sm text-neutral-400">{tickets} Tickets</p>
          </div>
        </Link>
      </div>
    </>
  );
}

