import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Mail, Phone, School, Send, CheckCircle2, Award } from 'lucide-react';

export const ContactSection = () => {
  const { lang } = useLanguage();
  const t = content[lang].contact;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#06101f] canva-diamond-bg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <span>GET IN TOUCH // CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-cyan-300 font-medium max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 text-left">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              {t.desc}
            </p>

            <div className="glass-card p-6 rounded-3xl border border-white/15 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-yellow-400" />
                <h4 className="text-base font-bold text-white">{t.authorsTitle}</h4>
              </div>
              <span className="text-lg font-extrabold text-cyan-300 block mb-1">{t.authors}</span>
              <span className="text-xs text-slate-400 block mb-4">{t.authorRole}</span>
              
              <div className="flex items-center gap-2 text-xs text-slate-300 pt-3 border-t border-white/10">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{t.email}</span>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl border border-white/20 shadow-2xl text-left">
              {submitted ? (
                <div className="p-8 text-center flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">접수 완료!</h4>
                  <p className="text-sm text-slate-300">{t.form.successMsg}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">{t.form.nameLabel}</label>
                      <input
                        type="text"
                        required
                        placeholder="홍길동 (선생님 / 대표)"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">{t.form.orgLabel}</label>
                      <input
                        type="text"
                        required
                        placeholder="○○초등학교 / ○○센터"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">{t.form.emailLabel}</label>
                      <input
                        type="email"
                        required
                        placeholder="example@school.kr"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">{t.form.phoneLabel}</label>
                      <input
                        type="tel"
                        placeholder="010-0000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5">{t.form.messageLabel}</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="수업 대상 인원, 일정, 도입 희망 내용 등을 적어주세요."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-sm shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all hover:scale-102"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.form.submitBtn}</span>
                  </button>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
