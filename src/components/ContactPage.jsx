import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';
import {
  Mail,
  Send,
  School,
  GraduationCap,
  Handshake,
  HelpCircle,
  CheckCircle2,
  User,
  Building,
  Phone,
} from 'lucide-react';

const CATEGORY_ICONS = { school: School, training: GraduationCap, partner: Handshake, general: HelpCircle };

const COPY = {
  ko: {
    title: 'AI 교육의 미래를 함께 만들어요',
    subtitle1: '학교 커리큘럼, 교사 연수, 교육 파트너십에 대해 궁금한 점이 있으신가요?',
    subtitle2: '공인 전문팀에게 문의주시면 브릭싱크와 함께할 수 있는 다양한 가능성을 안내해드립니다.',
    sendInquiry: '문의 보내기',
    formDesc: '문의 카테고리를 선택하고 내용을 입력해주세요. 빠르게 답변드리겠습니다.',
    inquiryCategory: '문의 카테고리',
    categories: [
      { id: 'school', label: '학교 커리큘럼', desc: 'K-12 및 캠프 도입' },
      { id: 'training', label: '교사 워크숍', desc: '교육자 연수' },
      { id: 'partner', label: '파트너십', desc: '기업 및 R&D' },
      { id: 'general', label: '일반 / 지원', desc: '제품 문의' },
    ],
    yourName: '이름',
    organization: '소속 기관 / 학교',
    emailAddress: '이메일 주소',
    contactNumber: '연락처',
    optional: '(선택)',
    inquiryDetails: '문의 내용',
    namePlaceholder: '예: 홍길동',
    orgPlaceholder: '예: 서울초등학교',
    emailPlaceholder: 'your.email@example.com',
    phonePlaceholder: '010-1234-5678',
    messagePlaceholder: '관심 있는 커리큘럼, 학생/교육자 수, 희망 일정, 궁금한 점 등을 자유롭게 남겨주세요...',
    sending: '전송 중...',
    submit: '문의 보내기',
    successTitle: '문의가 정상적으로 접수되었습니다!',
    successBody: (name, email) => (
      <>감사합니다, <strong className="text-slate-800">{name}</strong>님. 문의하신 내용이 브릭싱크 인증 리더십 팀에 전달되었습니다. <strong className="text-[#08326e]">{email}</strong>(으)로 빠르게 답변드리겠습니다.</>
    ),
    sendAnother: '다른 문의 보내기',
  },
  en: {
    title: 'Let’s Build the Future of AI Education',
    subtitle1: 'Have questions about school curriculum, teacher training, or educational partnership?',
    subtitle2: 'Reach out to our certified team and explore the possibilities with BrickSync.',
    sendInquiry: 'Send an Inquiry',
    formDesc: 'Please select your inquiry category and fill in your details. We will respond promptly.',
    inquiryCategory: 'Inquiry Category',
    categories: [
      { id: 'school', label: 'School Curriculum', desc: 'K-12 & Camp Adoption' },
      { id: 'training', label: 'Teacher Workshop', desc: 'Educator Training' },
      { id: 'partner', label: 'Partnership', desc: 'Corporate & R&D' },
      { id: 'general', label: 'General / Support', desc: 'Product Inquiries' },
    ],
    yourName: 'Your Name',
    organization: 'Organization / School',
    emailAddress: 'Email Address',
    contactNumber: 'Contact Number',
    optional: '(Optional)',
    inquiryDetails: 'Inquiry Details',
    namePlaceholder: 'e.g. Hong Gil-dong',
    orgPlaceholder: 'e.g. Seoul Elementary School',
    emailPlaceholder: 'your.email@example.com',
    phonePlaceholder: '010-1234-5678',
    messagePlaceholder: 'Please share details regarding your curriculum interests, number of students/educators, scheduled timeline, or questions...',
    sending: 'Sending Inquiry...',
    submit: 'Submit Inquiry',
    successTitle: 'Inquiry Successfully Received!',
    successBody: (name, email) => (
      <>Thank you, <strong className="text-slate-800">{name}</strong>. Your message has been routed to our certified leadership team. We will get back to you at <strong className="text-[#08326e]">{email}</strong> shortly.</>
    ),
    sendAnother: 'Send Another Message',
  },
};

export const ContactPage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const t = COPY[lang];
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
      const selectedCategory = t.categories.find((c) => c.id === inquiryType)?.label || inquiryType;
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

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins text-slate-800">

      {/* Main Content Area */}
      <div className="w-full flex flex-col items-center flex-1 py-6 sm:py-10 md:py-12 px-4 sm:px-8 md:px-12">

        <div className="w-full max-w-[1340px] flex flex-col items-center pb-12 sm:pb-16 md:pb-20">

          {/* Header Title Section (Enlarged Scale) */}
          <div className="text-center max-w-4xl mb-8 sm:mb-12">
            <h1 className="text-[clamp(1.75rem,4.6vw,3.25rem)] font-bold text-white tracking-tight leading-tight mb-3 sm:mb-4 break-keep">
              {t.title}
            </h1>
            <div className="text-white/95 text-[clamp(0.85rem,1.7vw,1.25rem)] font-normal leading-relaxed flex flex-col gap-1 sm:gap-1.5 break-keep">
              <p>{t.subtitle1}</p>
              <p>{t.subtitle2}</p>
            </div>
          </div>

          {/* Inquiry Form, centered, with photo alongside */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[1180px] flex flex-col md:flex-row bg-white/95 rounded-2xl md:rounded-3xl border border-white/60 overflow-hidden">
              <div className="w-full md:w-[36%] shrink-0">
                <img
                  src="/images/contact_kids_photo.jpg"
                  alt=""
                  className="w-full h-56 sm:h-64 md:h-full object-cover"
                />
              </div>
              <div className="w-full md:flex-1 p-6 sm:p-8 md:p-9">

              {!submitted ? (
                <div>
                  <div className="mb-6 sm:mb-7">
                    <h2 className="text-xl sm:text-2xl font-black text-[#08326e] tracking-tight mb-2">
                      {t.sendInquiry}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed break-keep">
                      {t.formDesc}
                    </p>
                  </div>

                  {/* Category Pill Selector */}
                  <div className="mb-6">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                      {t.inquiryCategory}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                      {t.categories.map((cat) => {
                        const Icon = CATEGORY_ICONS[cat.id];
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
                            <span className="text-xs font-semibold leading-tight break-keep">{cat.label}</span>
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
                          {t.yourName} <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder={t.namePlaceholder}
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
                          {t.organization}
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder={t.orgPlaceholder}
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
                          {t.emailAddress} <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            placeholder={t.emailPlaceholder}
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
                          {t.contactNumber} <span className="text-slate-400 font-normal">{t.optional}</span>
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            placeholder={t.phonePlaceholder}
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
                        {t.inquiryDetails} <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          required
                          rows={5}
                          placeholder={t.messagePlaceholder}
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
                          <span>{t.sending}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-amber-300" />
                          <span>{t.submit}</span>
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
                  <h3 className="text-2xl font-bold text-[#08326e] mb-2 break-keep">
                    {t.successTitle}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base max-w-md mb-6 leading-relaxed break-keep">
                    {t.successBody(formData.name, formData.email)}
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="py-2.5 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              )}

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Global Domain Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
};
