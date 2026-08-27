import React, { useState } from 'react';
import { personalDetails } from '../data/cvData';
import { Language } from '../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Globe2, 
  MessageSquare,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedSkype, setCopiedSkype] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone' | 'skype') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedSkype(true);
      setTimeout(() => setCopiedSkype(false), 2000);
    }

    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.85 },
      colors: ['#06b6d4', '#3b82f6']
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'vi' ? 'Kết Nối & Tuyển Dụng' : 'Get In Touch'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            {lang === 'vi' ? 'Liên Hệ & Hợp Tác Làm Việc' : 'Let\'s Build Something Great Together'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'vi'
              ? 'Tôi luôn sẵn sàng trao đổi về các cơ hội nghề nghiệp Frontend, dự án Web/Mobile và hợp tác phát triển phần mềm chất lượng cao.'
              : 'Feel free to reach out for frontend opportunities, project inquiries, or technical consultations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all group flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400 block">Email</span>
                  <a
                    href={`mailto:${personalDetails.email}`}
                    className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors font-mono"
                  >
                    {personalDetails.email}
                  </a>
                </div>
              </div>
              <button
                id="contact-copy-email-btn"
                onClick={() => handleCopy(personalDetails.email, 'email')}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all group flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400 block">
                    {lang === 'vi' ? 'Số Điện Thoại' : 'Phone Number'}
                  </span>
                  <a
                    href={`tel:${personalDetails.phone}`}
                    className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors font-mono"
                  >
                    {personalDetails.phone}
                  </a>
                </div>
              </div>
              <button
                id="contact-copy-phone-btn"
                onClick={() => handleCopy(personalDetails.phone, 'phone')}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all group flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400 block">
                    {lang === 'vi' ? 'Địa Điểm Làm Việc' : 'Location'}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {personalDetails.location}
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-slate-800 px-2.5 py-1 rounded">
                Remote / On-site
              </span>
            </div>

            {/* Skype & Professional Links */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                {lang === 'vi' ? 'Kênh Trao Đổi Nhanh' : 'Quick Connect Channels'}
              </span>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  id="copy-skype-btn"
                  onClick={() => handleCopy(personalDetails.skype, 'skype')}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500 text-left transition-colors text-xs text-slate-200"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-sky-400" />
                    <span>Skype</span>
                  </div>
                  {copiedSkype ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                </button>

                <a
                  id="linkedin-link"
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500 text-left transition-colors text-xs text-slate-200"
                >
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Quick Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  {lang === 'vi' ? 'Gửi Tin Nhắn Trực Tiếp' : 'Send a Message'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {lang === 'vi'
                    ? 'Điền thông tin bên dưới để gửi tin nhắn đến Trần Khắc Điệu. Tôi sẽ phản hồi trong thời gian sớm nhất.'
                    : 'Drop a line with your project details or job description. I will get back to you promptly.'}
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {lang === 'vi' ? 'Đã gửi tin nhắn thành công!' : 'Message Sent Successfully!'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {lang === 'vi'
                      ? 'Cảm ơn bạn đã liên hệ. Bạn cũng có thể gửi email trực tiếp tới khacdieu1195@gmail.com để trao đổi nhanh hơn.'
                      : 'Thank you for reaching out. I will respond to your email shortly.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-2 text-xs font-semibold text-cyan-400 underline hover:text-cyan-300"
                  >
                    {lang === 'vi' ? 'Gửi tin nhắn khác' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {lang === 'vi' ? 'Họ và tên của bạn' : 'Your Name'} *
                      </label>
                      <input
                        id="contact-form-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={lang === 'vi' ? 'Nguyễn Văn A / HR / Tech Lead' : 'John Doe / Recruiter'}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {lang === 'vi' ? 'Địa chỉ Email' : 'Email Address'} *
                      </label>
                      <input
                        id="contact-form-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'vi' ? 'Chủ đề / Vị trí tuyển dụng' : 'Subject / Position'}
                    </label>
                    <input
                      id="contact-form-subject"
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder={lang === 'vi' ? 'Frontend Developer Opportunity / Dự án Web' : 'Senior Frontend Developer Role'}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'vi' ? 'Nội dung tin nhắn' : 'Message'} *
                    </label>
                    <textarea
                      id="contact-form-message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={lang === 'vi' ? 'Mô tả ngắn gọn về nhu cầu tuyển dụng hoặc dự án...' : 'Brief description of your project or requirements...'}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{lang === 'vi' ? 'Gửi Tin Nhắn Cho Tôi' : 'Send Message'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
