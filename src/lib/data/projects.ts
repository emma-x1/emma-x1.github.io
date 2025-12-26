// src/lib/data/projects.ts
export type Project = {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    image?: string;
    video?: string;
    tech: string[];
  };
  
  export const projects: Project[] = [
    {
      id: 'vim',
      name: 'Vm',
      description: 'Clone of text editor vm, complete with insert/command mode and command execution.',
      longDescription:
        'blah',
      image: '/sample.png',
      tech: ['C++', 'Ncurses']
    },
    {
      id: 'vim2',
      name: 'Vm',
      description: 'Clone of text editor vm, complete with insert/command mode and command execution.',
      longDescription:
        'blah',
      image: '/sample.png',
      tech: ['C++', 'Ncurses']
    },
    {
      id: 'vim3',
      name: 'Vm',
      description: 'Clone of text editor vm, complete with insert/command mode and command execution.',
      longDescription:
        'blah',
      image: '/sample.png',
      tech: ['C++', 'Ncurses']
    }
  ];
  