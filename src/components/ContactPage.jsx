import React, { useState } from 'react';
import { Footer } from './Footer';
import { 
  Mail, 
  Send, 
  School, 
  GraduationCap, 
  Handshake, 
  HelpCircle, 
  Globe, 
  Gamepad2, 
  Award, 
  CheckCircle2, 
  User, 
  Building, 
  Phone, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export const ContactPage = ({ setCurrentView }) => {
  const [inquiryType, setInquiryType] = useState('school');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);

    try {
      const selectedCategory = categories.find((c) => c.id === inquiryType)?.label || inquiryType;
      await fetch('https://formsubmit.co/ajax/jaihaklee67@naver.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Organization: formData.organization || 'N/A',
          Email: formData.email,
          Phone: formData.phone || 'N/A',
          Category: selectedCategory,
          Message: formData.message,
          _subject: `[BrickSync Inquiry] ${formData.name} - ${selectedCategory}`,
          _template: 'table',
          _captcha: 'false'
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      message: '',
    });
    setSubmitted(false);
    setIsSubmitting(false);
  };

  const categories = [
    { id: 'school', label: 'School Curriculum', icon: School, desc: 'K-12 & Camp Adoption' },
    { id: 'training', label: 'Teacher Workshop', icon: GraduationCap, desc: 'Educator Training' },
    { id: 'partner', label: 'Partnership', icon: Handshake, desc: 'Corporate & R&D' },
    { id: 'general', label: 'General / Support', icon: HelpCircle, desc: 'Product Inquiries' },
  ];

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins text-slate-800">
      
      {/* Main Content Area */}
      <div className="w-full flex flex-col items-center flex-1 py-6 sm:py-10 md:py-12 px-4 sm:px-8 md:px-12">
        
        <div className="w-full max-w-[1340px] flex flex-col items-center pb-12 sm:pb-16 md:pb-20">
          
          {/* Header Title Section (Enlarged Scale) */}
          <div className="text-center max-w-4xl mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight mb-3 sm:mb-4">
              Let’s Build the Future of AI Education
            </h1>
            <div className="text-white/95 text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed flex flex-col gap-1 sm:gap-1.5">
              <p>Have questions about school curriculum, teacher training, or educational partnership?</p>
              <p>Reach out to our certified team and explore the possibilities with BrickSync.</p>
            </div>
          </div>

          {/* 2-Column Grid: Info Cards (Left) & Inquiry Form (Right) */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* LEFT COLUMN: Contact Cards & Accreditation (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
              
              {/* Card 1: Direct Contact Channels */}
              <div className="bg-white/95 rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-white/60">
                <h2 className="text-lg sm:text-xl font-bold text-[#08326e] mb-4 flex items-center gap-2.5">
                  <Mail className="w-5 h-5 text-[#0066cc]" />
                  <span>Direct Inquiries</span>
                </h2>
                
                <div className="flex flex-col gap-3.5">
                  <a 
                    href="mailto:jaihaklee67@naver.com"
                    className="group flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/70 hover:border-blue-300 transition-all duration-200"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500 font-medium">Instructor (Cliff Lee)</span>
                      <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-[#0066cc]">
                        jaihaklee67@naver.com
                      </span>
                    </div>
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-[#0066cc] transition-colors" />
                  </a>

                  <a 
                    href="mailto:wjsthdb@naver.com"
                    className="group flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/70 hover:border-blue-300 transition-all duration-200"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500 font-medium">Instructor (Emma Jeon)</span>
                      <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-[#0066cc]">
                        wjsthdb@naver.com
                      </span>
                    </div>
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-[#0066cc] transition-colors" />
                  </a>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Globe className="w-4 h-4 text-sky-600" />
                      Official Domain
                    </span>
                    <a 
                      href="https://www.bricksync.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-[#08326e] hover:underline"
                    >
                      www.bricksync.org
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Gamepad2 className="w-4 h-4 text-amber-500" />
                      Fortnite Island Code
                    </span>
                    <span className="font-mono font-bold text-slate-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                      7603-2493-0825
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Certified Leadership & Accreditation */}
              <div className="bg-gradient-to-br from-[#0c2e60] to-[#082046] text-white rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-white/20">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 rounded-xl bg-amber-400/20 text-amber-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-white">Certified Leadership</h3>
                    <p className="text-xs text-amber-300/90 font-medium">Epic Games Authorized</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  BrickSync is developed and directed by <strong className="text-white">Cliff Lee & Emma Jeon</strong>, 
                  Epic Games Certified Unreal Authorized Instructors (UAI) dedicated to next-generation Phygital STEM education.
                </p>
              </div>

              {/* Card 3: Consultation Topics */}
              <div className="bg-white/90 rounded-2xl md:rounded-3xl p-6 border border-white/60">
                <h3 className="text-sm font-bold text-[#08326e] uppercase tracking-wider mb-3">
                  Consultation Topics
                </h3>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Elementary, Middle, High School & Camp Curriculum Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Teacher Training Programs & Certified Educator Workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>LEGO SPIKE Hub & Fortnite UEFN Technical Consultation</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* RIGHT COLUMN: Interactive Inquiry Form (7 cols) */}
            <div className="lg:col-span-7 bg-white/95 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-9 border border-white/60">
              
              {!submitted ? (
                <div>
                  <div className="mb-6 sm:mb-7">
                    <h2 className="text-xl sm:text-2xl font-black text-[#08326e] tracking-tight mb-2">
                      Send an Inquiry
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      Please select your inquiry category and fill in your details. We will respond promptly.
                    </p>
                  </div>

                  {/* Category Pill Selector */}
                  <div className="mb-6">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                      {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = inquiryType === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setInquiryType(cat.id)}
                            className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-[#08326e] border-[#08326e] text-white'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                            }`}
                          >
                            <Icon className={`w-4 h-4 mb-1.5 ${isSelected ? 'text-amber-300' : 'text-slate-500'}`} />
                            <span className="text-xs font-semibold leading-tight">{cat.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Your Name <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="e.g. Hong Gil-dong"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:bg-white focus:border-[#08326e] focus:outline-none transition-all"
                          />
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        </div>
                      </div>

                      {/* Organization / School */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Organization / School
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="e.g. Seoul Elementary School"
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:bg-white focus:border-[#08326e] focus:outline-none transition-all"
                          />
                          <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:bg-white focus:border-[#08326e] focus:outline-none transition-all"
                          />
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Contact Number <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            placeholder="010-1234-5678"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:bg-white focus:border-[#08326e] focus:outline-none transition-all"
                          />
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        </div>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Inquiry Details <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          required
                          rows={5}
                          placeholder="Please share details regarding your curriculum interests, number of students/educators, scheduled timeline, or questions..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:bg-white focus:border-[#08326e] focus:outline-none transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#08326e] hover:bg-[#0c408a] disabled:bg-slate-400 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed active:scale-[0.995]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-amber-300" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>

                  </form>
                </div>
              ) : (
                /* Success Confirmation State */
                <div className="py-12 px-4 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#08326e] mb-2">
                    Inquiry Successfully Received!
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base max-w-md mb-6 leading-relaxed">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. Your message has been routed to our certified leadership team. We will get back to you at <strong className="text-[#08326e]">{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="py-2.5 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* Global Domain Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
};
