import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-auto py-8 border-t border-white/10 bg-slate-950/80 text-center">
      <p className="text-slate-400 text-sm px-4">
        © 2026 Flood-Guard System | Developed by <span className="text-cyan-400"> 
          <a href="https://www.linkedin.com/in/bhumika-jain-1548622a1" target="_blank" className="hover:text-cyan-700 transition-colors whitespace-nowrap">Bhumika</a>, 
          <a href="https://www.linkedin.com/in/aditya-raj-sinha-50" target="_blank" className="hover:text-cyan-700 transition-colors whitespace-nowrap">Aditya</a>, 
          <a href="https://www.linkedin.com/in/sneha-kumari-1548622a1" target="_blank" className="hover:text-cyan-700 transition-colors whitespace-nowrap">Sneha</a> & 
          <a href="https://www.linkedin.com/in/aditi-sharma-1548622a1" target="_blank" className="hover:text-cyan-700 transition-colors whitespace-nowrap">Aditi</a>
        </span>
      </p>

      <div className="mt-2 flex flex-wrap justify-center items-center gap-2 md:gap-4 text-slate-500 px-4 text-xs md:text-sm">
        <a href="https://github.com/bhumikajain-hash" target="_blank" className="hover:text-white transition-colors whitespace-nowrap">GitHub Repository</a>
        
        <span>|</span>
        <a href="mailto:jainbhumika666@gmail.com" className="hover:text-white transition-colors whitespace-nowrap">jainbhumika666@gmail.com</a>
            <span>|</span>
        <a href="mailto:adityarajsinha50@gmail.com" className="hover:text-white transition-colors whitespace-nowrap">adityarajsinha50@gmail.com</a>
      </div>
      <p className="mt-4 text-[10px] text-slate-600 uppercase tracking-widest px-4">
        College Project - Sixth Semester
      </p>
      <p className="mt-2 text-[10px] text-slate-600 uppercase tracking-widest px-4">
        College : sirtbhopal@sirtbhopal.ac.in
      </p>
    </footer>
  );
};

export default Footer;