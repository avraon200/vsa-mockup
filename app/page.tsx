"use client";
import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { 
  Camera, ShieldCheck, Smartphone, 
  Zap, Layout, Phone, 
  ShieldAlert, Clock, Activity,
  ChevronDown, Cpu, Eye, Target, 
  Waves, Radio, Binary, MessageCircle, Send
} from 'lucide-react';

export default function VSACyberFinal() {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // הגדרת הטיפוס כ-Variants או כאובייקט פרופס של Framer Motion
  const fadeInUp: any = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#020203] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden italic antialiased" dir="rtl">
      
      {/* --- BACKGROUND ENGINE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full" />
        
        <motion.div 
          style={{ y: yRange }}
          className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" 
        />
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] brightness-50 mix-blend-overlay" />
      </div>

      {/* --- NAV BAR --- */}
      <nav className="fixed top-0 w-full z-[100] bg-black/60 backdrop-blur-2xl border-b border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] group overflow-hidden">
              <img 
                src="/vsa2.jpg" 
                alt="VSA Logo" 
                className="w-full h-full object-contain p-1 z-10" 
                onError={handleImageError}
              />
              <Cpu size={24} className="absolute text-white/40 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-[1000] tracking-tighter uppercase">V.S.A</span>
              <span className="text-[8px] font-black text-blue-500 uppercase tracking-[0.3em]">Advanced_Security</span>
            </div>
          </div>
          <a href="tel:0503029336" className="bg-blue-600 p-2 md:px-6 md:py-2 rounded-full text-white shadow-lg hover:bg-white hover:text-black transition-all">
            <Phone size={18} />
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-blue-500/20 rounded-full bg-blue-500/5 mb-8 backdrop-blur-md">
            <Activity size={14} className="text-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-blue-400">System_Protocol: V.S.A_Elite</span>
          </div>

          <h1 className="text-6xl md:text-[13rem] font-[1000] leading-[0.8] tracking-tighter mb-8 uppercase">
            ביטחון <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #3b82f6' }}>ללא פשרות.</span>
          </h1>

          <p className="max-w-4xl mx-auto text-xl md:text-3xl text-slate-400 font-light leading-relaxed mb-16 px-4">
            נמאס לכם ממערכות זולות שמתקלקלות? <br className="hidden md:block" />
            ב-V.S.A אנחנו לא מוכרים "הכי זול" - אנחנו מתקינים <span className="text-white font-bold italic underline decoration-blue-600 underline-offset-8">שקט נפשי.</span>
          </p>

          <div className="flex justify-center items-center">
            <a href="tel:0503029336" className="w-full md:w-auto px-16 py-7 bg-blue-600 text-white font-[1000] text-2xl md:text-3xl rounded-2xl shadow-[0_0_50px_rgba(37,99,235,0.4)] hover:scale-105 transition-all text-center">
              050-3029336
            </a>
          </div>
        </motion.div>

        <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 opacity-20">
          <ChevronDown size={40} />
        </motion.div>
      </section>

      {/* --- INFO GRID --- */}
      <section className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Zap />, t: "חומרה מובחרת", d: "רק ציוד מהדור החדש ביותר. אפס פשרות על איכות הרכיבים." },
            { icon: <Layout />, t: "ביצוע הנדסי", d: "התקנות נקיות, מדויקות ומוצפנות בסטנדרט פרימיום." },
            { icon: <ShieldCheck />, t: "אחריות מלאה", d: "אנחנו כאן גם ביום שאחרי. שירות וליווי לטווח ארוך." },
            { icon: <Clock />, t: "זמינות 24/7", d: "שקט נפשי אמיתי עם מענה מקצועי מסביב לשעון." }
          ].map((f, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.02, borderColor: 'rgba(59, 130, 246, 0.5)' }}
              className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] backdrop-blur-3xl transition-all"
            >
              <div className="mb-6 text-blue-500">{f.icon}</div>
              <h3 className="text-xl font-black mb-3 italic uppercase tracking-tighter">{f.t}</h3>
              <p className="text-slate-500 leading-relaxed text-sm italic">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- DYNAMIC TECH SECTION --- */}
      <section className="py-40 px-6 z-10 bg-blue-600/5 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition}>
            <h2 className="text-5xl md:text-8xl font-[1000] italic leading-[0.8] mb-10 uppercase">
              סוף לעבודות <br/><span className="text-blue-500 italic">החובבניות.</span>
            </h2>
            <p className="text-xl text-slate-400 italic mb-10 leading-relaxed">
              ויקטור טהר מעניק לכם מעטפת אבטחה שלמה. משלב התכנון ועד למסירת מערכת מוכנה לעבודה מלאה.
            </p>
            <div className="space-y-4">
              {[
                { t: "תכנון מקצועי לפי מבנה הנכס", icon: <Target /> },
                { t: "ציוד ברמה גבוהה מאוד", icon: <Activity /> },
                { t: "הגדרה מלאה ושליטה מהנייד", icon: <Smartphone /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 bg-black/40 rounded-2xl border border-white/5 group hover:border-blue-500 transition-colors">
                  <span className="text-blue-500 group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="text-lg font-bold italic tracking-tight">{item.t}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="relative">
             <div className="relative p-12 bg-black border border-blue-500/20 rounded-[4rem] text-center shadow-[0_0_100px_rgba(37,99,235,0.1)]">
                <Binary size={120} className="mx-auto text-blue-500/20 mb-8 animate-pulse" />
                <p className="text-3xl font-[1000] italic tracking-tighter text-white uppercase">V.S.A Core</p>
                <div className="mt-6 flex justify-center gap-2">
                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="relative py-48 px-6 z-10">
        <motion.div 
          className="max-w-6xl mx-auto bg-[#0a0a0c] border border-blue-500/30 p-8 md:p-20 rounded-[4rem] relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-right">
            <div>
              <h2 className="text-5xl md:text-8xl font-[1000] italic leading-tight mb-8 uppercase tracking-tighter">
                דברו <br /><span className="text-blue-500 font-black">איתנו.</span>
              </h2>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="https://wa.me/972503029336" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 px-8 py-6 bg-green-600 hover:bg-green-500 text-white rounded-3xl font-black text-2xl md:text-3xl transition-all shadow-[0_0_30px_rgba(22,163,74,0.3)]"
                >
                  <MessageCircle size={32} />
                  וואטסאפ ישיר
                </a>
                <a 
                  href="tel:0503029336" 
                  className="flex items-center justify-center gap-4 px-8 py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-black text-2xl md:text-3xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                >
                  <Phone size={32} />
                  050-3029336
                </a>
              </div>
            </div>

            <div className="bg-white/[0.03] p-8 md:p-12 rounded-[3rem] border border-white/5 backdrop-blur-xl">
              <h3 className="text-2xl font-black italic mb-8 border-r-4 border-blue-500 pr-4 uppercase">השאירו פרטים</h3>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <input 
                  type="text" 
                  placeholder="שם מלא" 
                  className="w-full bg-black/50 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none transition-all italic"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="טלפון" 
                  className="w-full bg-black/50 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none transition-all italic"
                  required
                />
                <textarea 
                  placeholder="איך נוכל לעזור?" 
                  rows={3}
                  className="w-full bg-black/50 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none transition-all italic"
                ></textarea>
                <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-white hover:text-black text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3">
                  <Send size={20} />
                  שליחת בקשה
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/5 px-6 opacity-30 text-[9px] font-black uppercase tracking-[0.5em] text-center italic">
        V.S.A SECURITY SYSTEMS // VICTOR TAHAR // © 2026 // PRO GRADE SOLUTIONS
      </footer>

    </div>
  );
}