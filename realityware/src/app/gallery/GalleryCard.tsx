'use client';

import React from 'react';
import Image from 'next/image';

const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
  
  const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
  );
  
  const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
  );
  
  const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
);

interface GalleryItem { /* i like how this looks like rust :3 (i mean, the syntax, but i still prefer String rather than string ) */
    name: string;
    description: string;
    imageUrl: string;
    pageUrl: string;
    repoUrl: string;
    peopleWorking: number;
    followers: number;
}

interface GalleryCardProps {
  item: GalleryItem;
}

export default function GalleryCard({ item }: GalleryCardProps) {
  return (
    <>
      {/* the card :p well uh, im not very sure abt the black gradient thing bc uh, it doesnt really match the theme of the website, but uh, its easily editable ig */}
      <div className="relative rounded-xl shadow-md overflow-hidden border-2 border-neutral h-96">
        <Image src={item.imageUrl} alt={item.name} fill className="absolute object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative flex flex-col justify-end h-full text-white">
            <div className="absolute top-2 right-2 flex items-center gap-2 p-2 rounded-xl bg-black/30">
                <HeartIcon className="w-6 h-6 text-red-500" />
                <span className="font-bold">{item.followers}</span>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <p className="mt-2 mb-4">{item.description}</p>
                <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <UsersIcon className="w-4 h-4" />
                        <p>{item.peopleWorking} people working</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end"> 
              <div className="flex w-1/2">
                <a href={item.pageUrl} className="flex items-center justify-center gap-2 px-4 py-3 text-white hover:bg-neutral/10 transition-colors flex-1 border border-neutral border-r-0 rounded-tl-3xl border-b-0">
                  <ExternalLinkIcon className="w-4 h-4" />
                  View Page
                </a>
                <a href={item.repoUrl} className="flex items-center justify-center gap-2 px-4 py-3 text-white hover:bg-neutral/10 transition-colors flex-1 border border-neutral border-b-0 border-r-0">
                  <GitHubIcon className="w-4 h-4" />
                  Repository
                </a>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

