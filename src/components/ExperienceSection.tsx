import { motion } from "framer-motion";
import { memo } from "react";

const experiences = [
  {
    company: "ARABIAN INDUSTRIES PROJECTS",
    role: "INSTRUMENT TECHNICIAN",
    period: "01.03.2022 – 18.06.2025",
    points: [
      "Instrumentenkalibrierung (Regelventile, Druckschalter, Drucktransmitter, Füllstandstransmitter, Durchfluss‐transmitter, Temperaturtransmitter, Vibrationssensoren)",
      "Reparatur, Wartung und Installation von Instrumenten vor Ort",
      "Verlegung, Verschraubung (Glanding), Anschluss und Prüfung von Instrumentenkabeln",
      "Kabelanschluss und -terminierung in Schaltschränken",
      "Bearbeitung und Interpretation von R&I-Fließschemata (P&ID)",
      "Unterstützung von Lieferanten bei Konfiguration und Programmierung",
      "Isolationsmessungen (Megger-Tests) bei Installationen",
      "Erstellung von Kalibrierzertifikaten und technische Dokumentation"
    ],
  },
  {
    company: "J LAWRENCE PRO AUDIO PVT. LTD",
    role: "ELECTRONICS ENGINEERING TECHNICIAN",
    period: "15.03.2018 – 30.09.2020",
    points: [
      "Produktionssteuerung des gesamten Werks und Führung eines Teams von über 25 Mitarbeitenden",
      "Tägliche Überwachung der Produktionsabläufe, Schadensmanagement und Fehlerbehebung",
      "Sicherstellung der Produktqualität bei der Herstellung von Audiosystemen (Lautsprecher, Verstärker, etc.)",
      "Erstellung und Einreichung von Berichten und Abwicklung verkaufter Produkte"
    ],
  },
  {
    company: "DOHA PETROLEUM CONSTRUCTION PVT. LTD",
    role: "ELECTRONICS ENGINEERING TECHNICIAN",
    period: "20.04.2014 – 17.01.2016",
    points: [
      "Prüfung, Fehlersuche und Reparatur von Ventilen, pneumatischen Antrieben und Stellungsreglern",
      "Hydraulische Druckprüfung von Rohrleitungen und Behältern",
      "Installation und Wartung von Regelventilen, Kugelhähnen und verschiedenen Ventilarten",
      "Installation von Stellungsreglern (Positionern) an Regelventilen"
    ],
  },
];

const ExperienceCard = memo(function ExperienceCard({ exp, i }: { exp: typeof experiences[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass-shinkai p-12 border-none shadow-xl hover:shadow-2xl transition-all dark:glow-box-hover dark:three-d-card dark:hover:bg-white/[0.05] dark:sm:p-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 dark:mb-10">
          <div>
            <h3 className="text-3xl font-black text-blue-600 uppercase italic tracking-tighter dark:text-white dark:not-italic dark:tracking-tight">
              {exp.company}
            </h3>
            <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm mt-2 dark:text-blue-500">
              {exp.role}
            </p>
          </div>
          <span className="px-6 py-2 rounded-full bg-blue-50 text-blue-400 font-black text-[10px] tracking-widest border border-blue-100 uppercase dark:rounded-xl dark:bg-white/5 dark:text-white/60 dark:border-white/5 dark:text-xs">
            {exp.period}
          </span>
        </div>
        
        <ul className="space-y-6">
          {exp.points.map((p, j) => (
            <li key={j} className="text-slate-500 leading-relaxed text-lg font-medium flex gap-4 dark:text-white/60">
              <span className="text-blue-300 dark:text-blue-500 dark:text-2xl">✦</span>{p}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
});

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-4xl sm:text-6xl font-black text-blue-600 text-center tracking-tighter mb-4 uppercase dark:text-white dark:glow-text">Berufserfahrung</h2>
          <div className="w-24 h-2 bg-blue-500/20 rounded-full dark:bg-blue-600/30 dark:shadow-[0_0_20px_rgba(37,99,235,0.4)]" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
