import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';
import { insights } from '../../data/insights';
import FadeIn from '../animations/FadeIn';

const Insights = () => {
  const scrollContainerRef = useRef(null);

  const extendedInsights = [
    insights[insights.length - 1],
    ...insights,
    insights[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const scrollToIndex = (index, smooth = true) => {
    if (!scrollContainerRef.current) return;

    const containerWidth = scrollContainerRef.current.offsetWidth;
    scrollContainerRef.current.scrollTo({
      left: containerWidth * index,
      behavior: smooth ? 'smooth' : 'auto',
    });

    setCurrentIndex(index);
  };

  const nextInsight = () => {
    scrollToIndex(currentIndex + 1);
  };

  const prevInsight = () => {
    scrollToIndex(currentIndex - 1);
  };

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const containerWidth = scrollContainerRef.current.offsetWidth;

    if (currentIndex === extendedInsights.length - 1) {
      setTimeout(() => {
        scrollContainerRef.current.scrollTo({
          left: containerWidth,
          behavior: 'auto',
        });
        setCurrentIndex(1);
      }, 400);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        scrollContainerRef.current.scrollTo({
          left: containerWidth * insights.length,
          behavior: 'auto',
        });
        setCurrentIndex(insights.length);
      }, 400);
    }
  }, [currentIndex, extendedInsights.length]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;

      scrollContainerRef.current.scrollTo({
        left: containerWidth,
        behavior: 'auto',
      });
    }
  }, []);

  return (
    <section id="insights" className="relative py-20 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-90 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wider uppercase">
                Engineering Insights
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-2xl mx-auto">
              Lessons learned while building scalable applications
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Real-world learnings from frontend optimization, backend
              architecture, security, and deployment workflows.
            </p>
          </div>
        </FadeIn>

        {/* Carousel */}
        <FadeIn delay={100}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-hidden"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              <div className="flex">
                {extendedInsights.map((insight, i) => (
                  <div
                    key={i}
                    className="w-full shrink-0 px-4"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                      {/* Category */}
                      <div className="mb-3">
                        <span className="text-xs uppercase tracking-wider text-primary">
                          {insight.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl text-white font-medium mb-4">
                        {insight.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 text-lg leading-relaxed mb-6">
                        {insight.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {insight.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {insights.map((_, index) => {
                const active = currentIndex === index + 1;
                return (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index + 1)}
                    className={`transition-all duration-300 rounded-full ${
                      active
                        ? 'bg-white w-6 h-2'
                        : 'bg-white/30 w-2 h-2 hover:bg-white/50'
                    }`}
                  />
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevInsight}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextInsight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
              aria-label="Next insight"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Insights;
