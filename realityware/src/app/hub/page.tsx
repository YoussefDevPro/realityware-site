import React from 'react';

const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
);

const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
<svg  viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg"><path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z"/></svg>
);

export default function HubPage() {
  // Placeholder data
  const teamStats = {
    hours: 1234,
    commits: 5678,
    additions: 123456,
    deletions: 78901,
  };

  const teammates = [
    { name: 'Youssef', hours: 200, isActive: true },
    { name: 'Ismail', hours: 200, isActive: false },
    { name: 'ShadowLight', hours: 200, isActive: true },
    { name: 'Eva', hours: 200, isActive: false },
    { name: 'Keyaan', hours: 200, isActive: true },
    { name: 'Hastnat', hours: 200, isActive: true }
  ];

  const projects = [
    {
      name: 'meow mraow meow meow',
      description: 'meow mraow meow meow meow mraow meow meow meow mraow meow meow',
      pageUrl: '#',
      repoUrl: '#',
    },
       {
      name: 'meow mraow meow meow mraow' ,
      description: 'meow mraow meow meow meow mraow meow meow meow mraow meow meow',
      pageUrl: '#',
      repoUrl: '#',
    },
        {
      name: 'meow mraow meow meow mrp',
      description: 'meow mraow meow meow meow mraow meow meow meow mraow meow meow',
      pageUrl: '#',
      repoUrl: '#',
    },
  ];

  return (
    <div className="text-foreground space-y-8">
      {/* thats here where we see the team stats and the list of teams, and uh, maybe replace the team stats with just our own stats ? idk */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* the stats where we see what the team have done so far */}
        <div className="lg:col-span-2 bg-background/50 p-6 rounded-xl shadow-md flex flex-col border-2 border-neutral h-full overflow-hidden">
          <h2 className="text-2xl font-bold mb-4 text-primary">Team Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow overflow-y-auto">
            <div className="bg-background/50 p-4 rounded-xl shadow-md border-2 border-neutral">
              <p className="text-sm text-neutral">Hours Worked</p>
              <p className="text-3xl font-semibold">{teamStats.hours.toLocaleString()}</p>
            </div>
            <div className="bg-background/50 p-4 rounded-xl shadow-md border-2 border-neutral">
              <p className="text-sm text-neutral">Commits</p>
              <p className="text-3xl font-semibold">{teamStats.commits.toLocaleString()}</p>
            </div>
            <div className="bg-background/50 p-4 rounded-xl shadow-md border-2 border-neutral">
              <p className="text-sm text-neutral">Additions</p>
              <p className="text-3xl font-semibold text-green-500">{`+${teamStats.additions.toLocaleString()}`}</p>
            </div>
            <div className="bg-background/50 p-4 rounded-xl shadow-md border-2 border-neutral">
              <p className="text-sm text-neutral">Deletions</p>
              <p className="text-3xl font-semibold text-red-500">{`-${teamStats.deletions.toLocaleString()}`}</p>
            </div>
          </div>
        </div>

        {/* here there is a list of each member of the team */}
        <div className="lg:col-span-2 bg-background/50 p-6 rounded-xl shadow-md flex flex-col max-h-full overflow-hidden border-2 border-neutral">
          <h2 className="text-2xl font-bold mb-4 text-primary">Our Team</h2>
          <div className="flex-grow overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teammates.map((mate) => (
                <div key={mate.name} className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-secondary"></div>
                      <span className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ${mate.isActive ? 'bg-green-500' : 'bg-neutral'} border-2 border-background`}></span>
                    </div>
                    <div>
                      <p className="font-bold">{mate.name}</p>
                      <p className="text-sm text-neutral">{mate.hours} hours</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*  in this bottom half we see the projects */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-primary">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="bg-background/50 rounded-xl shadow-md overflow-hidden border-2 border-neutral flex flex-col">
              <div className="h-40 bg-accent"></div> {/* place holder until we get the server running :3*/}
              <div className="p-6 flex-grow"> 
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-neutral mt-2 mb-4">{project.description}</p>
              </div>
              <div className="flex justify-end"> 
                <div className="flex w-1/2">
                  <a href={project.pageUrl} className="flex items-center justify-center gap-2 px-4 py-3 text-foreground hover:bg-neutral/10 transition-colors flex-1 border border-neutral border-r-0 rounded-tl-3xl border-b-0">
                    <ExternalLinkIcon className="w-4 h-4" />
                    View Page
                  </a>
                  <a href={project.repoUrl} className="flex items-center justify-center gap-2 px-4 py-3 text-foreground hover:bg-neutral/10 transition-colors flex-1 border border-neutral border-b-0 border-r-0">
                    <GitHubIcon className="w-4 h-4" />
                    Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
