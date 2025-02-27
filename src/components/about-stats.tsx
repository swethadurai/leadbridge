import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Award } from "lucide-react";

function AboutStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    team: 0,
    clients: 0,
    interactions: 0,
    awards: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const animateNumbers = (key: keyof typeof animatedValues, target: number) => {
        let start = 0;
        const duration = 2000;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(timer);
          }
          setAnimatedValues((prev) => ({ ...prev, [key]: Math.floor(start) }));
        }, stepTime);
      };

      animateNumbers("team", 50);
      animateNumbers("clients", 200);
      animateNumbers("interactions", 1000000);
      animateNumbers("awards", 15);
    }
  }, [inView]);

  const stats = [
    { icon: <Users className="w-14 h-14 text-[#FF6B2C] mb-3" strokeWidth={1} />, value: animatedValues.team, label: "Team Members" },
    { icon: <Target className="w-14 h-14 text-[#FF6B2C] mb-3" strokeWidth={1} />, value: animatedValues.clients, label: "Clients Served" },
    { icon: <Lightbulb className="w-14 h-14 text-[#FF6B2C] mb-3" strokeWidth={1} />, value: animatedValues.interactions, label: "AI Interactions" },
    { icon: <Award className="w-14 h-14 text-[#FF6B2C] mb-3" strokeWidth={1} />, value: animatedValues.awards, label: "Industry Awards" }
  ];
  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-wrap justify-center gap-0 sm:gap-24">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-center p-8 bg-white w-48 h-48 flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-300"
          >
            {stat.icon}
            <h3 className="text-3xl font-bold">{stat.value.toLocaleString()}+</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
  
}

export default AboutStats;
