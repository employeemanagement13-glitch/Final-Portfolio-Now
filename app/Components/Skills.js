'use client';

import Image from "next/image";

export default function SkillsSection() {
    const skills = [
        {
            title: 'Programming Languages',
            icon: '/programming.png',
            tags: [
                'Python (Beginning)',
                'JavaScript (ES6+)',
                'C++',
                "C",
                'HTML5 & CSS3',
                'Javascript',
            ],
        },
        {
            title: 'Frontend Development',
            icon: '/frontend.png',
            tags: [
                'React.js & Redux',
                'CSS3 & Sass',
                'Three.js',
                'Anime.js',
                'GSAP',
                'Framer Motion',
                'Tailwind Css',
                'TypeScript',
                'Vite',
                'Next.js',
                'Bootstrap5',
                'Chakra UI',
                'Vanilla Js'
            ],
        },
        {
            title: 'Backend Development',
            icon: '/backend.png',
            tags: [
                'Node.js',
                'Express.js',
                'SQL',
                'PostgreSQL',
                'Supabase',
                'Firebase',
                'MongoDB',
                'Cloud Storages',
                'Prisma'
            ],
        },
        {
            title: 'Graphic Designing',
            icon: '/designing.png',
            tags: [
                'Adobe Photoshop',
                'Canva',
                'Figma',
                'Logo & Brand Identity',
                'UI Mockups & Wireframes',
                'Social Media Graphics',
                'Print & Digital Design',
            ],
        },
    ];

    return (
        <section className="bg-black text-white py-20 px-6 text-center" id="skills">
            {/* bg-gradient-to-b from-[#020718] via-[#02081a] to-[#02091d] */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                    Skills <span className="">& Expertise</span>
                </h2>
                <div className="w-32 h-[3px] bg-[#ff2c2c] mx-auto mb-6 rounded-full"></div>
                <p className="text-gray-100 mb-8 text-base sm:text-lg">
                    A comprehensive overview of my technical skills and areas of expertise
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <div
                            key={index}
                            className="bg-[#111111fa] border border-[#222222] rounded-xl p-6 shadow-[0_4px_20px_#1a1a1ac4] hover:-translate-y-2 hover:border-[#ff2c2c] transition-all duration-300 text-left flex flex-col items-start"
                        >
                            {/* <Image
                                src={category.icon}
                                alt={category.title}
                                width={32}
                                height={32}
                                className="mb-4 filter-aqua"
                            /> */}
                            <h3 className="text-lg sm:text-xl font-bold text-[#ff2c2c] mb-2">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="relative cursor-pointer inline-block overflow-hidden rounded-full bg-[#ff030331] px-4 py-2 text-sm text-gray-300 transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-red-600 before:opacity-20 before:blur-md before:transition-all before:duration-500 hover:text-red-300 hover:before:w-full"
                                    >
                                        <span className="relative z-10">{tag}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
