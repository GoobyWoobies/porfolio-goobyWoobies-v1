"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Section d'accueil */}
      <section id="accueil" className="h-screen flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/20"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Bienvenue sur mon Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-gray-300 max-w-lg"
          >
            Je suis <span className="text-blue-400">GoobyWoobies</span>, développeur passionné. Découvrez mes projets et contactez-moi !
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-6 flex space-x-4"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md cursor-pointer transition-all hover:bg-blue-600"
              href="#projets"
            >
              Voir mes Projets
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-gray-700 text-white rounded-full shadow-md cursor-pointer transition-all hover:bg-gray-800"
              href="#contact"
            >
              Me Contacter
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Section À Propos */}
      <section id="apropos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">À Propos de Moi</h2>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/20 max-w-2xl mx-auto">
            <p className="text-gray-300">
              Passionné par le développement web et les nouvelles technologies, je mets mes compétences au service de projets innovants. Curieux et autodidacte, j'aime apprendre et relever de nouveaux défis.
            </p>
          </div>
        </div>
      </section>

      {/* Section Parcours Professionnel */}
      <section id="parcours" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Mon Parcours Professionnel</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              {
                title: "Développeur Full-Stack",
                company: "TechCorp",
                date: "2021 - Présent",
                description: "Développement d'applications web et mobiles avec React, Node.js et MongoDB.",
              },
              {
                title: "Stagiaire Développeur",
                company: "WebStart",
                date: "2020 - 2021",
                description: "Participation à la refonte d'une plateforme e-commerce avec Vue.js et Laravel.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-white/20"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-400">{item.company} | {item.date}</p>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="competences" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Mes Compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["React", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "Git", "Docker", "Figma"].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-white/20 text-center"
              >
                <p className="text-gray-300">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Mes Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Plateforme E-commerce",
                description: "Développement d'une plateforme e-commerce avec React et Node.js.",
                link: "#",
              },
              {
                title: "Application de Gestion de Tâches",
                description: "Création d'une application de gestion de tâches avec Vue.js et Firebase.",
                link: "#",
              },
              {
                title: "Portfolio Personnel",
                description: "Conception et développement de ce portfolio en utilisant Next.js et Tailwind CSS.",
                link: "#",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-white/20"
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <a href={project.link} className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all">
                  Voir le Projet
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}