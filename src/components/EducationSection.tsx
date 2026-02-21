import { motion } from "framer-motion";
import { memo } from "react";

const education = [
  {
    institution: "Govt. Polytechnic College",
    degree: "DIPLOMA IN ELECTRONICS ENGINEERING",
    field: "Studienfach Elektronik und Automation",
    color: "from-blue-100 to-blue-50"
  },
  {
    institution: "Govt. Polytechnic College",
    degree: "ADVANCED DIPLOMA IN INDUSTRIAL AUTOMATION",
    field: "Studienfach Elektronik und Automation",
    color: "from-indigo-100 to-indigo-50"
  }
];

const EducationCard = memo(function EducationCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass-shinkai group overflow-hidden border-none shadow-xl hover:shadow-2xl h-full flex flex-col dark:glow-box-hover dark:three-d-card dark:hover:bg-white/[0.03]"
    >
      {/* Light mode gradient header */}
      <div className={`h-48 bg-gradient-to-br ${edu.color} relative overflow-hidden p-10 dark:hidden`}>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
      </div>

      {/* Dark mode header bar */}
      <div className="hidden dark:block p-10 pb-0">
        <div className="w-12 h-1 bg-blue-500/50 mb-6 rounded-full" />
      </div>
      
      <div className="p-10 flex-1">
        <h3 className="text-3xl font-black text-blue-600 mb-4 tracking-tight uppercase italic group-hover:translate-x-2 transition-transform leading-tight dark:text-white dark:not-italic dark:text-2xl">
          {edu.degree}
        </h3>
        <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm mb-6 dark:text-blue-500">
          {edu.institution}
        </p>
        <p className="text-slate-500 leading-relaxed text-lg font-medium dark:text-white/60">
          {edu.field}
        </p>
      </div>

      <div className="p-10 pt-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-1 bg-blue-500/20 rounded-full dark:bg-blue-500/50" />
          <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest dark:text-white/30">Educational Record // Verified</span>
        </div>
      </div>
    </motion.div>
  );
});

export default function EducationSection() {
  return (
    <section id="education" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-4xl sm:text-6xl font-black text-blue-600 text-center tracking-tighter mb-4 uppercase dark:text-white dark:glow-text">Allgemeine und berufliche Bildung</h2>
          <div className="w-32 h-2 bg-blue-500/20 rounded-full dark:bg-blue-600/30 dark:shadow-[0_0_20px_rgba(37,99,235,0.4)]" />
        </div>
        
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
          {education.map((e, i) => (
            <EducationCard key={i} edu={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
