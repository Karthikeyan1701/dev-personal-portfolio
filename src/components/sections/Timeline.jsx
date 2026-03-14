import { Briefcase, GraduationCap, Laptop, BookOpen } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { timeline } from '../../data/timeline';

const iconMap = {
  work: Briefcase,
  internship: Laptop,
  education: GraduationCap,
  gap: BookOpen,
};

const Timeline = () => {
  return (
    <section id="timeline" className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              Career Journey
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              A timeline highlighting my professional experience, education, and
              continuous learning in software development.
            </p>
          </div>
        </FadeIn>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Stem */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 -bottom-10 w-0.5 bg-primary" />
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = iconMap[item.type];

            return (
              <div key={item.id} className="relative flex items-start mb-32">
                {/* Node */}
                <div
                  className="absolute left-1/2 -translate-x-1/2
                    w-12 h-12 bg-black border border-primary
                    rounded-full flex items-center justify-center z-10 mt-12.5"
                >
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Timeline Card */}
                <FadeIn delay={index * 100}>
                  <div
                    className={`relative z-20 w-[45%] bg-white/5 border border-white/10
                    rounded-2xl p-8 backdrop-blur-sm
                    ${isLeft ? 'mr-auto text-right' : 'ml-auto text-left'}`}
                  >
                    {/* Period */}
                    <p className="text-primary text-sm mb-2">{item.period}</p>

                    {/* Title */}
                    <h3 className="text-xl text-white font-medium mb-2">
                      {item.title}
                    </h3>

                    {/* Organization */}
                    <p className="text-white/70 text-sm mb-2">
                      {item.organization}
                    </p>

                    {/* Location */}
                    {item.location && (
                      <p
                        className={`text-white/50 text-xs mb-4 ${
                          isLeft ? 'text-right' : 'text-left'
                        }`}
                      >
                        {item.location}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Skills */}
                    <div
                      className={`flex flex-wrap gap-2 ${
                        isLeft ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full
                          bg-primary/10 border border-primary/30 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
