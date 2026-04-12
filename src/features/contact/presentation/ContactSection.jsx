import React, { useRef, useState } from 'react';
import ReactGA from 'react-ga4';
import { TiSocialLinkedin } from "react-icons/ti";
import { FaBehance, FaGithub } from "react-icons/fa";
import { useContact } from "./hooks/useContact.js";

export default function ContactSection() {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Send Message');
    const [isSuccess, setIsSuccess] = useState(false);
    const { sendContactMessage } = useContact();

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText('Sending...');

        sendContactMessage.execute(form.current)
            .then((result) => {
                console.log('SUCCESS!', result.text);
                setButtonText('Message Sent!');
                setIsSuccess(true);
                form.current.reset();

                ReactGA.event({
                    category: 'Contact',
                    action: 'Form Submission Success',
                });

                setTimeout(() => {
                    setButtonText('Send Message');
                    setIsSuccess(false);
                }, 3000);
            }, (error) => {
                console.log('FAILED...', error.text);
                setButtonText('Failed to send');

                ReactGA.event({
                    category: 'Contact',
                    action: 'Form Submission Failed',
                    label: error.text
                });

                setTimeout(() => setButtonText('Send Message'), 3000);
            });
    };


    return (
        <div className="relative flex flex-col justify-center items-center py-20 px-6 overflow-hidden w-full text-slate-100 font-Inter">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#ff2d95]/10 via-[#bc13fe]/5 to-transparent rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ec5b13]/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 md:gap-40 gap-10 items-center z-10">
                <div className="flex flex-col space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center space-x-2 bg-[#bc13fe]/10 border border-[#bc13fe]/20 px-3 py-1 rounded-full w-fit">
                            <span className="w-2 h-2 rounded-full bg-[#bc13fe] animate-pulse"></span>
                            <span className="text-[#bc13fe] text-xs font-bold uppercase tracking-widest">Available for Hire</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Let's build the <span className="text-[#ff2d95] drop-shadow-[0_0_8px_rgba(255,45,149,0.4)]">future</span> together.
                        </h2>
                        <p className="text-lg leading-relaxed max-w-md text-slate-300">
                            Have a project in mind or just want to say hi? I'm always open to discussing new creative ideas or bold visions.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Connect Elsewhere</h3>
                        <div className="flex gap-4">
                            <a className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ff2d95]/50 transition-all duration-300"
                               href="https://www.linkedin.com/in/nouradawy/"
                               onClick={() => {
                                   ReactGA.event({
                                       category: 'Social',
                                       action: 'Click LinkedIn',
                                   });
                               }}
                            >
                                <span className=" text-slate-400 group-hover:text-[#ff2d95] transition-colors"><TiSocialLinkedin className="text-2xl"/></span>
                            </a>
                            <a className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#bc13fe]/50 transition-all duration-300"
                               href="https://www.behance.net/gamerhypeee"
                               onClick={() => {
                                   ReactGA.event({
                                       category: 'Social',
                                       action: 'Click Behance',
                                   });
                               }}
                            >
                                <span className="text-slate-400 group-hover:text-[#bc13fe] transition-colors"><FaBehance className="text-xl"/></span>
                            </a>
                            <a className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ec5b13]/50 transition-all duration-300"
                               href="https://github.com/Nouradawy"
                               onClick={() => {
                                   ReactGA.event({
                                       category: 'Social',
                                       action: 'Click GitHub',
                                   });
                               }}
                            >
                                <span className="text-slate-400 group-hover:text-[#ec5b13] transition-colors"><FaGithub className="text-xl"/></span>
                            </a>
                        </div>
                    </div>

                    <div className="pt-8 flex items-center space-x-4">
                        <div className="w-35 h-35 rounded-full overflow-hidden border-2 border-[#bc13fe]/30 bg-black flex items-center justify-center">
                            <img className="w-full h-full object-cover" alt="Nouradawy" src={`/assets/projects/Avatar.png`} onError={(e) => { e.target.style.display = 'none' }} />
                        </div>
                        <div>
                            <p className="font-bold text-white text-lg">Nouradawy</p>
                            <p className="text-slate-400 text-sm">Full-Stack Software Engineer</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff2d95]/20 to-transparent blur-2xl"></div>
                    <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1 text-slate-300">Full Name</label>
                            <div className="relative group">
                                <input name="user_name" required className="w-full bg-black/40 border border-white/10 focus:border-[#ff2d95] focus:ring-1 focus:ring-[#ff7cf5]/30 rounded-xl px-4 py-4 text-white placeholder:text-slate-500 transition-all outline-none resize-none" placeholder="Enter your name" type="text" />
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#ff2d95] transition-colors">person</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1 text-slate-300">Email Address</label>
                            <div className="relative group">
                                <input name="user_email" required className="w-full bg-black/40 border border-white/10 focus:border-[#ff2d95] focus:ring-1 focus:ring-[#ff7cf5]/30 rounded-xl px-4 py-4 text-white placeholder:text-slate-500 transition-all outline-none resize-none" placeholder="hello@example.com" type="email" />
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#bc13fe] transition-colors">alternate_email</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1 text-slate-300">Your Message</label>
                            <textarea name="message" required className="w-full bg-black/40 border border-white/10 focus:border-[#ff2d95] focus:ring-1 focus:ring-[#ff7cf5]/30 rounded-xl px-4 py-4 text-white placeholder:text-slate-500 transition-all outline-none resize-none" placeholder="Tell me about your project..." rows="4"></textarea>
                        </div>

                        <button disabled={buttonText === 'Sending...'} className={`w-full py-4 text-white font-bold rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 group ${isSuccess ? 'bg-green-500 shadow-green-500/20' : 'bg-gradient-to-r from-[#ff2d95] to-[#bc13fe] shadow-[#ff2d95]/20 hover:shadow-[#bc13fe]/40'}`} type="submit">
                            <span>{buttonText}</span>
                            {!isSuccess && <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>}
                        </button>

                        <p className="text-center text-xs text-slate-400 pt-2">
                            Expected response time: <span className="text-[#bc13fe] font-medium">Under 24 hours</span>
                        </p>
                    </form>
                </div>
            </div>

            <div className="mt-32 w-full max-w-7xl border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 z-10">
                <p>© 2026 Nouradawy. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a className="hover:text-[#ff2d95] transition-colors" href="#">Privacy Policy</a>
                    <a className="hover:text-[#ff2d95] transition-colors" href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    );
}
