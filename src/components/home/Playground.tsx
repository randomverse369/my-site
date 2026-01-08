"use client";

import { motion } from "framer-motion";

const experiments = [
    {
        title: "AI Prototypes",
        type: "Interaction",
        color: "bg-purple-500"
    },
    {
        title: "Shape Algebra",
        type: "WebGL Experiment",
        color: "bg-blue-500"
    },
    {
        title: "Fluid Typography",
        type: "Visual",
        color: "bg-orange-500"
    },
    {
        title: "Neural Fields",
        type: "Generative Art",
        color: "bg-green-500"
    }
];

export default function Playground() {
    return (
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500">Playground</h2>
                <p className="text-gray-400 text-sm hidden md:block">Experiments & Explorations</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {experiments.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 0.98 }}
                        className="aspect-square relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 group cursor-pointer"
                    >
                        {/* Placeholder visual */}
                        <div className={`absolute inset-0 opacity-20 ${item.color} blur-3xl transition-opacity duration-500 group-hover:opacity-40`} />

                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                            <span className="text-xs font-mono text-gray-500">{item.type}</span>
                            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
                                {item.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
