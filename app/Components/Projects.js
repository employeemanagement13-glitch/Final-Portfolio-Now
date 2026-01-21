'use client';

const projects = [
  {
    title: 'Employee Management System',
    domain: 'Web Development',
    link: "https://employee-management-sys-foryou.vercel.app/",
    description: 'An employee management system for Companies to manage their employees having 4 roles ( Admin, HR, Department manager, Employee ) with real time updates.',
    technologies: ['Next.js', 'Tailwind Css', 'PERN','Real time Subscription']
  },
  {
    title: 'Security Firm',
    domain: 'Web Development',
    link: "https://wabnet.vercel.app/",
    description: 'Real time security firm website with admin panel. ',
    technologies: ['Next.js', 'Tailwind Css', 'PERN','Real time Subscription']
  },
  {
    title: 'Architecture Firm',
    domain: 'Web Development',
    link: "https://holeve-firm.vercel.app/",
    description: 'Real time architecture firm website with admin panel. ',
    technologies: ['Next.js', 'Tailwind Css', 'PERN','Real time Subscription']
  },
  {
    title: 'ERP System',
    domain: 'Web Development',
    link: "https://erp-final-eight.vercel.app/",
    description: 'ERP System for organization having role based access with real time updates.',
    technologies: ['Next.js', 'Tailwind Css', 'PERN','Real time Subscription']
  },
  {
    title: 'Flappy Bird Game',
    domain: 'Web Development',
    link: "https://flappy-bird-game-pearl.vercel.app/",
    description: 'A browser-based Flappy Bird clone using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript','DOM Manipulation']
  },
  {
    title: 'Ranking App',
    domain: 'Web Development',
    description: 'Developed a responsive ranking app to dynamically list items based on user clicks, using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation']
  },
  {
    title: 'Tic Tac Toe Game',
    domain: 'Web Development',
    link: "https://tic-tac-toe-game-tan-one.vercel.app/",
    description: 'Created an interactive two-player Tic Tac Toe game with reset functionality using Vanilla Js.',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Waxwing',
    domain: 'Web Development',
    link: "https://waxwing0.vercel.app",
    description: 'A company website (built for practice) using Next.js with optimized performance.',
    technologies: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    title: 'Friends Challenge Game',
    domain: 'Web Development',
    link: "https://friends-challenge-game.vercel.app/",
    description: 'Developed a React-based game for friends to challenge each other with custom questions and score tracking.',
    technologies: ['React', 'JavaScript', 'Hooks', 'State Management']
  },
  {
    title: 'Spotify Clone',
    domain: 'Web Development',
    description: 'Designed a front-end clone of Spotify’s UI with music control features and playlists using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
  },
  {
    title: 'Netflix Clone',
    domain: 'Web Development',
    description: 'Designed a static front-end Netflix clone featuring dynamic movie thumbnails, responsive layout, and styled sections.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
  },
  {
    title: 'Quiz App',
    domain: 'Web Development',
    description: 'Developed a React-powered quiz application with multiple-choice questions, score tracking, and conditional rendering.',
    technologies: ['React', 'JavaScript', 'Hooks', 'State Management']
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      {/* bg-gradient-to-b from-[#020718] via-[#02081a] to-[#02091d] */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Projects</h2>
        <div className="w-20 h-1 bg-[#ff2c2c] mx-auto mb-6 rounded-full" />
        <p className="text-gray-100 mb-8 text-base sm:text-lg">
          Key projects from my professional experience at leading tech companies
        </p>

        <div className="space-y-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#111111fa] border border-[#222222] rounded-xl p-6 text-left shadow-lg hover:-translate-y-2 hover:border-[#440000] transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                {/* <div className="text-red-400 text-xl">📘</div> */}
                <h3 className="text-lg md:text-xl text-gray-100 font-bold">{project.title}</h3>
              </div>
              <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full inline-block my-2">
                {project.domain}
              </span>
              <p className="text-gray-300 mb-4 text-sm md:text-base">{project.description}</p>
              <a href={project.link} className={`${project.link ? "text-sm text-[#ff2c2c] border border-[#fd1919] px-4 py-1 rounded hover:bg-[#fd1919] hover:text-white transition" : "" }`}>
                {project.link ? "View" : ""}
              </a>
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#fd1919] text-white text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
