'use client';

import Image from "next/image";

export default function ContactSection() {
    return (
        <section id="contact" className="bg-black text-white py-20 px-6">
            {/* bg-gradient-to-b from-[#02091d] via-[#02081a] to-[#020718] */}
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Get In Touch</h2>
                    <div className="w-20 h-1 bg-[#ff2c2c] mx-auto mt-2 rounded-full" />
                    <p className="text-gray-100 mt-4 text-base sm:text-lg">
                        Let&apos;s discuss how we can work together on your next project
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left: Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <p className="text-gray-300 mb-6 text-sm">
                            I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-4 text-sm">
                            <div className="bg-[#111111fa] border border-[#222222] p-4 rounded-lg transition-all duration-200 hover:scale-[99%] hover:ml-2">
                                <strong className="flex gap-2 items-center mb-1 "><Image src="/mail.png" height={25} width={25} className="invert" alt="Image"/> Email</strong>
                                <a href="mailto:shehzilshahzad51@gmail.com" className="ml-6 text-[#ff2c2c] hover:text-[#fd1919]">shehzilshahzad51@gmail.com</a>
                            </div>
                            <div className="bg-[#111111fa] border border-[#222222] p-4 rounded-lg transition-all duration-200 hover:scale-[99%] hover:ml-2">
                                <strong className="flex gap-2 items-center mb-1 "><Image src="/linkedinn.webp" height={25} width={25} className="invert" alt="Image"/> LinkedIn</strong>
                                <a href="https://www.linkedin.com/in/shehzil-shahzad-563b8031a/" className="ml-6 text-[#ff2c2c] hover:text-[#fd1919]">Muhammad Shahzil Shahzad</a>
                            </div>
                            <div className="bg-[#111111fa] border border-[#222222] p-4 rounded-lg transition-all duration-200 hover:scale-[99%] hover:ml-2">
                                <strong className="flex gap-2 items-center mb-1 "><Image src="/github.webp" height={25} width={25} className="invert" alt="Image"/> GitHub</strong>
                                <a href="https://github.com/shahzil-shahzad1" className="ml-6 text-[#ff2c2c] hover:text-[#fd1919]">shahzil-shahzad</a>
                            </div>
                            <div className="bg-[#111111fa] border border-[#222222] p-4 rounded-lg transition-all duration-200 hover:scale-[99%] hover:ml-2">
                                <strong className="flex gap-2 items-center mb-1 "><Image src="/instagram.webp" height={25} width={25} className="invert" alt="Image"/> Instagram</strong>
                                <a href="https://www.instagram.com/deploy_with_shahzil/#" className="ml-6 text-[#ff2c2c] hover:text-[#fd1919]">deploy-with-shahzil</a>
                            </div>
                            
                            {/* <div className="bg-[#111111fa] border border-[#222222] p-4 rounded-lg border border-gray-700 text-green-400 font-medium">
                                ● Available for new opportunities
                            </div> */}
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-[#111111fa] border border-[#222222] p-8 rounded-lg">
                        <form className="space-y-6 text-sm">
                            <div>
                                <label htmlFor="name" className="block mb-3 text-lg text-gray-300">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full bg-[#030303] text-white p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#fd1919] focus:ring-offset-0 placeholder-gray-200"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-3 text-lg text-gray-100">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full bg-[#030303] text-white p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#fd1919] focus:ring-offset-0 placeholder-gray-200"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-3 text-lg text-gray-100">Subject</label>
                                <input
                                    id="subject"
                                    type="text"
                                    className="w-full bg-[#030303] text-white p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#fd1919] focus:ring-offset-0 placeholder-gray-200"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-3 text-lg text-gray-100">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full bg-[#030303] text-white p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#fd1919] focus:ring-offset-0 placeholder-gray-200"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#ff2c2c] hover:bg-[#fd1919] text-white font-medium px-6 py-2 rounded shadow-lg transition cursor-pointer"
                            >
                                ➤ SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
