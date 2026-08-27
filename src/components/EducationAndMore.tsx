import React from 'react';
import { educations, languages, hobbies } from '../data/cvData';
import { Language } from '../types';
import { 
  GraduationCap, 
  Languages as LanguagesIcon, 
  Heart, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Award,
  Footprints,
  Compass,
  Gamepad2
} from 'lucide-react';

interface EducationAndMoreProps {
  lang: Language;
}

export const EducationAndMore: React.FC<EducationAndMoreProps> = ({ lang }) => {
  const getHobbyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Footprints':
        return <Footprints className="w-5 h-5 text-emerald-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-purple-400" />;
      default:
        return <Heart className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="education" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                  {lang === 'vi' ? 'Học Vấn & Đào Tạo' : 'Education & Qualifications'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  {lang === 'vi' ? 'Nền tảng học thuật chuẩn mực về Công nghệ Thông tin' : 'Academic foundations and accredited software engineering programs'}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {educations.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 hover:border-slate-700 transition-all shadow-lg group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                        {edu.degree[lang]}
                      </h3>
                      <p className="text-sm font-medium text-cyan-300">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5 bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400 mt-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                    {edu.description[lang]}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{lang === 'vi' ? 'Chuyên ngành Công Nghệ Thông Tin' : 'Major: Information Technology'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Hobbies Column */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Languages Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  <LanguagesIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
                    {lang === 'vi' ? 'Ngoại Ngữ' : 'Languages'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {lang === 'vi' ? 'Giao tiếp và phối hợp với đối tác quốc tế' : 'Working proficiency with global stakeholders'}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {languages.map((lng, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-base text-white">
                        {lng.name[lang]}
                      </span>
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                        {lng.level}
                      </span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        style={{ width: `${lng.percent}%` }}
                      />
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {lng.note[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests Section */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
                    {lang === 'vi' ? 'Sở Thích & Đam Mê' : 'Hobbies & Interests'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {lang === 'vi' ? 'Cân bằng cuộc sống và duy trì cảm hứng sáng tạo' : 'Maintaining life balance and creative flow'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {hobbies.map((h, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center space-y-2 hover:border-slate-700 transition-colors"
                  >
                    <div className="w-10 h-10 mx-auto rounded-xl bg-slate-800 flex items-center justify-center">
                      {getHobbyIcon(h.icon)}
                    </div>
                    <h4 className="text-xs font-bold text-white">
                      {h.name[lang]}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      {h.desc[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
