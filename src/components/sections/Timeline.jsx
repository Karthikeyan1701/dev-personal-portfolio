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
    <section
      id="timeline"
      className="relative py-20 bg-black overflow-x-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-1/3 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-1/3 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
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
          <div className="text-center mb-24">
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
          {/* Stem */}
          <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 -top-10 -bottom-10 w-0.5 bg-primary" />

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = iconMap[item.type];

            return (
              <div
                key={item.id}
                className="relative flex items-start gap-x-6 lg:gap-x-12 mb-14 lg:mb-20 pl-14 lg:pl-0"
              >
                {/* Node */}
                <div
                  className="absolute left-6 lg:left-1/2 -translate-x-1/2
                  w-10 h-10 lg:w-12 lg:h-12
                  bg-black border border-primary
                  rounded-full flex items-center justify-center z-10 mt-10"
                >
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                  </div>
                </div>

                {/* Timeline Card */}
                <FadeIn delay={index * 100}>
                  <div
                    className={`relative z-20 w-full lg:w-[45%]
                    bg-white/5 border border-white/10
                    rounded-2xl p-5 lg:p-8 backdrop-blur-sm
                    hover:border-primary/30 transition-all duration-300
                    ${
                      isLeft
                        ? 'lg:mr-auto lg:text-right text-left'
                        : 'lg:ml-auto text-left'
                    }`}
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
                          isLeft ? 'lg:text-right text-left' : 'text-left'
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
                        isLeft
                          ? 'lg:justify-end justify-start'
                          : 'justify-start'
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
