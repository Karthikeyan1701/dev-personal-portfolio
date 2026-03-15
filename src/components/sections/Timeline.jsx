import {
  Briefcase,
  GraduationCap,
  Laptop,
  BookOpen,
  Clock,
} from 'lucide-react';
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
    <section id="timeline" className="relative py-20 bg-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-1/3 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-1/3 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl" />
      </div>

      {/* Optional grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
        linear-gradient(to right, white 1px, transparent 1px),
        linear-gradient(to bottom, white 1px, transparent 1px)
      `,
          backgroundSize: '30px 30px',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-30">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wider uppercase">
                Career Timeline
              </span>
            </div>

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
              <div key={item.id} className="relative flex items-start mb-20">
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
                    rounded-2xl p-8 backdrop-blur-sm hover:border-primary/30 transition-all duration-300
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
