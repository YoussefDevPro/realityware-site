import React from 'react';
import GalleryCard from './GalleryCard';

export default function GalleryPage() {
  const galleryItems = [
    {
      name: 'Project 1',
      description: 'A beautiful project that does amazing things.',
      imageUrl: 'https://i.pinimg.com/736x/7c/5a/49/7c5a4920a5094190b777c434443e1844.jpg',
      pageUrl: '#',
      repoUrl: '#',
      peopleWorking: 5,
      followers: 120,
    },
    {
      name: 'Project 2',
      description: 'Another beautiful project that does amazing things.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItl9l0FpxAs4VK7m-m0qxaGE2Nkp-ueO7ig&s',
      pageUrl: '#',
      repoUrl: '#',
      peopleWorking: 3,
      followers: 80,
    },
    {
      name: 'Project 3',
      description: 'Yet another beautiful project that does amazing things.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Cd2he581EhPukyXbYF_oeJ5d2Of0ybPoEg&s',
      pageUrl: '#',
      repoUrl: '#',
      peopleWorking: 8,
      followers: 250,
    },
    {
      name: 'Project 4',
      description: 'This one is also a beautiful project that does amazing things.',
      imageUrl: 'https://cdn.pfps.gg/banners/4674-oneshot-niko-and-rue.png',
      pageUrl: '#',
      repoUrl: '#',
      peopleWorking: 2,
      followers: 50,
    },
    {
        name: 'Project 5',
        description: 'You get the idea. A beautiful project that does amazing things.',
        imageUrl: 'https://static.wikia.nocookie.net/xtaleunderverse4071/images/0/0d/XCharaProvisional_Remastered.png/revision/latest?cb=20210606233844',
        pageUrl: '#',
        repoUrl: '#',
        peopleWorking: 10,
        followers: 500,
    },
    {
        name: 'Project 7',
        description: 'A beautiful project that does amazing things. Last one.',
        imageUrl: 'https://static.wikia.nocookie.net/xtaleunderverse4071/images/0/0d/XCharaProvisional_Remastered.png/revision/latest?cb=20210606233844',
        pageUrl: '#',
        repoUrl: '#',
        peopleWorking: 4,
        followers: 150,
    },
  ];

  return (
    <div className="text-foreground space-y-8">
      <h2 className="text-3xl font-bold mb-6 text-primary">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {galleryItems.map((item) => (
          <GalleryCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
