"use client";
import { useState } from "react";

// Frontend-specific project type
interface Project {
  id: number;
  name: string;
  description: string;
  contributors: { id: number; name: string; avatar?: string }[];
  owner_id: number;
  link?: string;
  bannerImage?: string;
}

const initialProjects: Project[] = [
  {
    id: 1,
    name: "aaaaaaaaaaaaaaaaaaaa",
    description: "aaaaaaaa",
    contributors: [{ id: 1, name: "John Doe" }],
    owner_id: 1,
    bannerImage: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da844c684955960e9a379b2a75e8",
  },
  {
    id: 2,
    name: "aaaaaaaaaaaaaa",
    description: "aaaaaaaaaaaa",
    contributors: [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }],
    owner_id: 2,
    bannerImage: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da844c684955960e9a379b2a75e8",
  },
    {
    id: 3,
    name: "aaaaaaaaaaaaaaaaaddddddddddaaa",
    description: "aaaaaaaa",
    contributors: [{ id: 1, name: "John Doe" }],
    owner_id: 1,
    bannerImage: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da844c684955960e9a379b2a75e8",
  },
  {
    id: 4,
    name: "aaaaaaaaaddddddddddddddddddddaaaaa",
    description: "aaaaaaaaaaaa",
    contributors: [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }],
    owner_id: 2,
    bannerImage: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da844c684955960e9a379b2a75e8",
  },
];

export default function ProjectsPage() {
  const [projects, _] = useState<Project[]>(initialProjects);

  return (
    <>
      <main className="w-full bg-gray-50">
        <div className="max-w-8xl mx-auto relative">
          <a 
            href="#"
            className="absolute right-0 top-0 mt-2 mr-2 w-auto h-10 px-4 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 flex items-center justify-center z-10"
            aria-label="Add Project"
          >
            Create Project
          </a>
          <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
          {projects.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] h-[60vh] w-full">
              <img
                src="https://emoji.slack-edge.com/T0266FRGM/confused-dino/19304734719223da.png"
                alt="No projects"
                className="w-20 h-20 mb-6 opacity-80 animate-bounce-slow"
                style={{ animation: "bounce 2s infinite" }}
              />
              <p className="mb-4 text-2xl font-semibold text-gray-500 text-center">No projects yet.</p>
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Create Project
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="relative rounded-xl shadow-md overflow-hidden border-2 border-neutral h-96 flex flex-col justify-end"
                >
                  {project.bannerImage && (
                    <img
                      src={project.bannerImage}
                      alt={project.name + ' banner'}
                      className="absolute object-cover w-full h-full"
                      style={{ zIndex: 0 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="relative flex flex-col justify-end h-full text-white z-10">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                      <p className="mt-2 mb-1 text-blue-100 text-base whitespace-pre-line">{project.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold">{project.contributors.length}</span>
                        <span>contributors</span>
                      </div>
                      <div className="flex items-center mt-1 -space-x-2">
                        {project.contributors.slice(0, 5).map((contributor) => (
                          <img key={contributor.id} src={contributor.avatar || `https://ui-avatars.com/api/?name=${contributor.name}&background=bfdbfe&color=2563eb`} alt={contributor.name} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
                        ))}
                        {project.contributors.length > 5 && (
                          <span className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-gray-700 font-bold text-sm shadow-sm">
                            +{project.contributors.length - 5}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
