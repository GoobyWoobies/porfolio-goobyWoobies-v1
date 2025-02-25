"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
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
  );
}