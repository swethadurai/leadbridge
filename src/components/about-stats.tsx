import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Award, Rocket, Code, Globe, Shield, Heart } from 'lucide-react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function AboutStats() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    const stats = [
        { icon: <Users className="w-14 h-14 text-[#FF6B2C] mb-3" strokeWidth={1} />, value: 50, label: "Team Members" },
        { icon: <Target className="w-14 h-14 text-[#FF6B2C] mb-3" strokeWidth={1} />, value: 200, label: "Clients Served" },
        { icon: <Lightbulb className="w-14 h-14 text-[#FF6B2C] mb-3" strokeWidth={1} />, value: 1000000, label: "AI Interactions" },
        { icon: <Award className="w-14 h-14 text-[#FF6B2C] mb-3" strokeWidth={1}/>, value: 15, label: "Industry Awards" }
    ];

    return (
        <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-wrap justify-center gap-24">
                {stats.map((stat, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="text-center p-8 bg-white w-48 h-48 flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-300"
                    >
                        {stat.icon}
                        <h3 className="text-3xl font-bold">
                            {inView && <CountUp start={0} end={stat.value} duration={2} separator="," />}+
                        </h3>
                        <p className="text-gray-600">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default AboutStats;
