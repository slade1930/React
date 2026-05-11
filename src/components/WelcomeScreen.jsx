import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Enfermera from '../assets/images/Enfermera.png'

const WelcomeScreen = ({ setStage }) => {
  const [showSubtext, setShowSubtext] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = 'La chica mas enana del mundo'

  // Efecto de máquina de escribir
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
        setShowSubtext(true)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative z-10"
    >
      {/* Fondo con brillos animados detrás de la foto */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-400"
            initial={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.1, 0],
              scale: [1, 1.5, 2]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </motion.div>

      {/* Marco decorativo alrededor de la foto */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
        className="mb-6 relative"
      >
        {/* Anillo de corazones alrededor */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4"
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xl"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-70px)`,
                transformOrigin: 'center'
              }}
            >
              {['💗'][i % 4]}
            </motion.div>
          ))}
        </motion.div>

        {/* Foto principal con efecto glow */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-pink-400 shadow-2xl mx-auto relative z-10 bg-gradient-to-br from-pink-200 to-red-100">
            <motion.img 
              src={Enfermera} 
              alt="Mi enfermera hermosa"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Efecto de brillo pulsante */}
          <motion.div
            className="absolute inset-0 rounded-full bg-pink-400 opacity-0 -z-10"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0, 0.3, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Emoji flotante 1 */}
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ repeat: Infinity, duration: 2, delay: 0 }}
          className="absolute -top-4 -right-4 text-4xl z-20"
        >
          👩‍⚕️
        </motion.div>

        {/* Emoji flotante 2 */}
        <motion.div 
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, -10, 10, 0]
          }}
          transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
          className="absolute -bottom-4 -left-4 text-3xl z-20"
        >
          🩺
        </motion.div>

        {/* Emoji flotante 3 */}
        <motion.div 
          animate={{ 
            y: [0, -18, 0],
            rotate: [0, 15, -15, 0]
          }}
          transition={{ repeat: Infinity, duration: 3, delay: 1 }}
          className="absolute top-1/2 -right-8 text-3xl z-20"
        >
          💕
        </motion.div>
      </motion.div>

      {/* Título principal con efecto de onda */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-red-500 to-pink-600 bg-clip-text text-transparent mb-3"
      >
        Para la enfermera
      </motion.h1>

      {/* Subtítulo con efecto de brillo */}
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text mb-4"
      >
        más hermosa de mi vida 
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="inline-block"
        >
          ❤️
        </motion.span>
      </motion.h2>

      {/* Texto con máquina de escribir */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mb-6"
      >
        <p className="text-xl md:text-2xl text-pink-600 font-semibold">
          {typedText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="inline-block w-0.5 h-6 bg-pink-500 ml-1"
          />
        </p>
      </motion.div>

      {/* Fecha con efecto especial */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="mb-8"
      >
        <div className="bg-white/30 backdrop-blur rounded-full px-6 py-2 inline-block">
          <p className="text-gray-700 font-medium">
            📅 12 de Mayo - Día de la Enfermera 👩‍⚕️
          </p>
        </div>
      </motion.div>

      {/* Frases románticas que aparecen después */}
      {showSubtext && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 space-y-2"
        >
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            ✨ "No sé qué tiene más poder: tus cuidados o esos ojitos lindos." ✨
          </motion.p>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-sm"
          >
            🩺 Cada latido es por ti 💕
          </motion.p>
        </motion.div>
      )}

      {/* Botón principal con efecto 3D */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200, bounce: 0.6 }}
        whileHover={{ 
          scale: 1.08,
          boxShadow: "0 0 30px rgba(236,72,153,0.6)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setStage(1)}
        className="group relative px-10 py-4 text-xl font-bold text-white rounded-full shadow-2xl transition-all duration-300 overflow-hidden"
      >
        {/* Gradiente del botón */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-size-200 animate-gradient" />
        
        {/* Brillo del botón al hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
        </div>
        
        {/* Texto del botón */}
        <span className="relative z-10 flex items-center gap-2">
          mira por aqui 
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            💖
          </motion.span>
        </span>
      </motion.button>

      {/* Decoración inferior */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 text-2xl opacity-50"
      >
        
      </motion.div>
    </motion.div>
  )
}

export default WelcomeScreen