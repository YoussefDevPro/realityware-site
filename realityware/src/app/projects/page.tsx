"use client"; // nextjs client component
import React from "react";
import Link from "next/link"; // Used for View Project button
import { useState } from "react";
import { useNotification } from "../../components/NotificationManager";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

type Project = {
  id: string;
  name: string;
  desc: string;
  link?: string;
  collaborators: string[];
  bannerImage?: string; 
};

const initialProjects: Project[] = [
  
];

{/* tons of users bc im lazy to type random stuff */}
const people = [
  "lkjhgfd", "yjhtgrfed", "nbvctgf", "juyhgfds", "olikujhgf",
  ...Array.from({length: 99}, (_, i) => `user${i+1}`)
];

function Tooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-block align-middle">
      <span
        className="text-red-500 cursor-help ml-1"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        tabIndex={0}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        aria-label="Required field"
        style={{ position: 'relative', zIndex: 50 }}
      >
        *
        {show && (
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded shadow-lg z-50 whitespace-nowrap pointer-events-none animate-tooltipIn">
            {text}
          </span>
        )}
      </span>
    </span>
  );
}

import ReactDOM from "react-dom";
function CollaboratorSelector({ selected, setSelected }: { selected: string[]; setSelected: (v: string[]) => void }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [dropdownPos, setDropdownPos] = useState<{top: number, left: number, width: number}>({top: 0, left: 0, width: 224});
  const filteredPeople = people.filter(person => person.toLowerCase().includes(search.toLowerCase()));

  const [dropdownAbove, setDropdownAbove] = useState(false);
  React.useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropdownHeight = 220;
      const spaceBelow = window.innerHeight - rect.bottom;
      setDropdownAbove(spaceBelow < dropdownHeight);
      setDropdownPos({
        top: dropdownAbove ? rect.top - dropdownHeight + window.scrollY : rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width || 224,
      });
    }
  }, [open, dropdownAbove]);

  React.useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      const dropdownEl = document.getElementById("collab-dropdown");
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node) &&
        (!dropdownEl || !dropdownEl.contains(e.target as Node))
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  const dropdown = (
    <div
      id="collab-dropdown"
      style={{
        position: "absolute",
        top: dropdownPos.top,
        left: dropdownPos.left,
        width: dropdownPos.width,
        zIndex: 1000,
      }}
      className="bg-white border border-gray-200 rounded-lg shadow-lg max-h-56 flex flex-col"
      tabIndex={-1}
    >
      <input
        type="text"
        className="m-2 px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
        placeholder="Search users..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        autoFocus
      />
      <div className="overflow-y-auto max-h-40">
        {filteredPeople.length === 0 ? (
          <div className="px-4 py-2 text-gray-400">No users found</div>
        ) : (
          filteredPeople.map((person) => (
            <div
              key={person}
              className={"px-4 py-1 cursor-pointer hover:bg-blue-50 flex items-center gap-2" + (selected.includes(person) ? " bg-blue-100" : "")}
              onClick={() => {
                if (selected.includes(person)) {
                  setSelected(selected.filter((p) => p !== person));
                } else {
                  setSelected([...selected, person]);
                }
              }}
            >
              <span className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-sm shadow-sm">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#bfdbfe" />
                  <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#2563eb">{person[0].toUpperCase()}</text>
                </svg>
              </span>
              <span className="text-sm">{person}</span>
              {selected.includes(person) && (
                <span className="ml-auto text-xs text-blue-600">✓</span>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg border border-blue-300 hover:bg-blue-200 transition"
        onClick={() => setOpen((o) => !o)}
      >
        {selected.length === 0 ? "Add Collaborators" : `Collaborators (${selected.length})`}
      </button>
      {open && ReactDOM.createPortal(dropdown, typeof window !== "undefined" ? document.body : document.createElement("div"))}
      <div className="flex flex-wrap gap-2 mt-2">
        {selected.map((person) => (
          <span key={person} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center gap-1">
            {person}
            <button type="button" className="ml-1 text-blue-600 hover:text-blue-900" onClick={() => setSelected(selected.filter((p) => p !== person))}>&times;</button>
          </span>
        ))}
      </div>
    </div>
  );
}

  export default function ProjectsPage() {
   const [bannerFile, setBannerFile] = useState<File|null>(null);
 const [bannerPreview, setBannerPreview] = useState<string>("");
 const [projects, setProjects] = useState(initialProjects);
 const [showModal, setShowModal] = useState(false);
 const [modalClosing, setModalClosing] = useState(false);
 const [collaborators, setCollaborators] = useState<string[]>([]);

 // notification manager
 const { showNotification } = useNotification();

 const [editingProject, setEditingProject] = useState<Project|null>(null);
 const [projectName, setProjectName] = useState("");
 const [projectLink, setProjectLink] = useState("");
 const [bannerInput, setBannerInput] = useState("");
 const [projectDesc, setProjectDesc] = useState("");

   const closeModal = () => {    setModalClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setModalClosing(false);
      setCollaborators([]);
    }, 300); 
  };

  return (
    <>

      <main className="w-full bg-gray-50">
        <div className="max-w-8xl mx-auto relative">
          <button 
            className="absolute right-0 top-0 mt-2 mr-2 w-10 h-10 bg-gray-200 text-gray-700 border border-gray-300 rounded-md shadow hover:bg-gray-300 flex items-center justify-center z-10"
            aria-label="Add Project"
            onClick={() => {
              setEditingProject(null);
              setShowModal(true);
              setBannerFile(null);
              setBannerPreview("");
              setCollaborators([]);
              setProjectName("");
              setProjectLink("");
              setBannerInput("");
              setProjectDesc("");
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
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
<button
  className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
  onClick={() => {
    setEditingProject(null);
    setShowModal(true);
    setBannerFile(null);
    setBannerPreview("");
    setCollaborators([]);
    setProjectName("");
    setProjectLink("");
    setBannerInput("");
    setProjectDesc("");
  }}
>
  Create Project
</button>
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
                    <div className="p-6 pb-0">
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                      <p className="mt-2 mb-1 text-blue-100 text-base whitespace-pre-line">{project.desc}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold">{project.collaborators.length}</span>
                        <span>collaborators</span>
                      </div>
                      <div className="flex items-center mt-1 -space-x-2">
                        {project.collaborators.slice(0, 5).map((person, idx) => (
                          <span key={person} className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-blue-700 font-bold text-sm shadow-sm">
                            {person[0].toUpperCase()}
                          </span>
                        ))}
                        {project.collaborators.length > 5 && (
                          <span className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-gray-700 font-bold text-sm shadow-sm">
                            +{project.collaborators.length - 5}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="flex">
                        <Link href={`/projects/${project.id}`} className="flex items-center justify-center gap-2 text-white hover:bg-neutral/10 transition-colors flex-1 border border-neutral border-r-0 border-b-0 rounded-tl-3xl px-6 py-3">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          View
                        </Link>
                        <button
                          className="flex items-center justify-center gap-2 text-white hover:bg-neutral/10 transition-colors flex-1 border-t border-neutral rounded-none px-6 py-3 border-l border-neutral"
                          onClick={() => {
                            setEditingProject(project);
                            setShowModal(true);
                            setBannerFile(null);
                            setBannerPreview(project.bannerImage || "");
                            setCollaborators(project.collaborators);
                            setProjectName(project.name);
                            setProjectLink(project.link || "");
                            setBannerInput(project.bannerImage || "");
                            setProjectDesc(project.desc || "");
                          }}
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                          </svg>
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {showModal && (
  <div
    className={`fixed inset-0 flex items-center justify-center z-50 bg-blue-100/40 backdrop-blur-md transition-all duration-300 ${modalClosing ? 'animate-fadeOutBg' : 'animate-fadeInBg'}`}
    onClick={closeModal}
  >
    <div
      className={`bg-white rounded-lg p-8 shadow-lg w-full max-w-2xl h-[90vh] relative scale-100 opacity-100 ${modalClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
      style={{
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        background: "rgba(255,255,255,0.85)",
      }}
      onClick={e => e.stopPropagation()}
    >
      <div className="overflow-y-auto" style={{maxHeight: 'calc(90vh - 72px)'}}>
        <div className="w-full h-56 relative flex items-center justify-center overflow-hidden rounded-t-lg shadow-sm group cursor-pointer">
          <input
            type="file"
            accept="image/*"
            id="banner-upload"
            style={{ display: 'none' }}
            onChange={e => {
              const file = e.target.files?.[0];
              if (file) {
                setBannerFile(file);
                setBannerPreview(URL.createObjectURL(file));
              } else {
                setBannerFile(null);
                setBannerPreview("");
              }
            }}
          />
          <div
            className="absolute inset-0 w-full h-full flex items-center justify-center focus:outline-none"
            style={{
              backgroundImage: `url(${bannerPreview || bannerInput || '/globe.svg'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: bannerPreview || bannerInput ? undefined : '#e0e7ef',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
            }}
            onClick={() => document.getElementById('banner-upload')?.click()}
            aria-label="Select banner image"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent pointer-events-none z-10"></div>
            {!bannerPreview && !bannerInput && (
              <span className="absolute inset-0 flex items-center justify-center text-blue-400 text-xl z-20">No Banner</span>
            )}
            {/* Overlay at top, appears on hover */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 bg-white/40 backdrop-blur">
  <span className="px-6 py-2 rounded-full bg-black/60 text-white font-bold text-xl drop-shadow-lg">Change Banner</span>
</div>
          </div>
        </div>
        <form
          id="project-form"
          className="flex flex-col gap-8 pt-8"
          onSubmit={e => {
            e.preventDefault();
            // Validation
            if (!projectName.trim()) {
              showNotification('error', 'Project name is required.');
              return;
            }
            if (!projectDesc.trim()) {
              showNotification('error', 'Project description is required.');
              return;
            }
            if (collaborators.length === 0) {
              showNotification('error', 'Please add at least one collaborator.');
              return;
            }
            if (editingProject) {
              // Update existing project
              setProjects(projects.map(p => p.id === editingProject.id ? {
                ...p,
                name: projectName,
                desc: projectDesc,
                link: projectLink,
                collaborators,
                bannerImage: bannerPreview || bannerInput || "/globe.svg"
              } : p));
              showNotification('success', 'Project updated!');
            } else {
              // Create new project
              const newProject = {
                id: (projects.length + 1).toString(),
                name: projectName,
                desc: projectDesc,
                link: projectLink,
                collaborators,
                                bannerImage: bannerPreview || bannerInput || "/globe.svg"
              };
              setProjects([...projects, newProject]);
              showNotification('success', 'Project created!');
            }
            closeModal();
          }}
        >
          <div>
            <label className="block font-semibold text-blue-700 mb-1">Project Name <Tooltip text="A name helps identify your project." /></label>
            <input name="name" required className="w-full border-2 border-blue-200 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:border-blue-500 transition" placeholder="Project name" value={projectName} onChange={e => setProjectName(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-blue-700 mb-1">Description <Tooltip text="A short summary for your project." /></label>
            <textarea
              name="desc"
              className="w-full border-2 border-blue-200 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:border-blue-500 transition min-h-[80px] resize-y"
              placeholder="Short description"
              value={projectDesc}
              onChange={e => setProjectDesc(e.target.value)}
              rows={3}
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-blue-700 mb-1">Collaborators</label>
            <CollaboratorSelector selected={collaborators} setSelected={setCollaborators} />
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-blue-700 mb-1">GitHub Link (optional)</label>
            <input name="github" className="w-full border-2 border-blue-200 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:border-blue-500 transition" placeholder="https://github.com/yourrepo" value={projectLink} onChange={e => setProjectLink(e.target.value)} />
          </div>
        </form>
      </div>
      <div className="absolute bottom-6 right-8 flex gap-2 z-20">
        <button type="submit" form="project-form" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Submit</button>
        <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition" onClick={closeModal}>Cancel</button>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.95); }
        }
        @keyframes fadeInBg { 
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOutBg {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
        .animate-fadeOut {
          animation: fadeOut 0.3s ease;
        }
        .animate-fadeInBg {
          animation: fadeInBg 0.3s ease;
        }
        .animate-fadeOutBg {
          animation: fadeOutBg 0.3s ease;
        }
        @keyframes tooltipIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-tooltipIn {
          animation: tooltipIn 0.2s ease;
        }
      `}</style>
    </div>
  </div>
)}
      </div>

    </main>
  </>
  );
}
