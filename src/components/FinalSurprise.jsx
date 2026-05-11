import React, { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FinalSurprise = () => {
  const [hearts, setHearts] = useState([])
  const [confetti, setConfetti] = useState([])
  const [showMessage, setShowMessage] = useState(false)
  const [countdown, setCountdown] = useState(3)

  // Efecto de cuenta regresiva
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          setShowMessage(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Generar corazones de forma optimizada
  useEffect(() => {
    if (!showMessage) return

    const interval = setInterval(() => {
      // Solo generar 2-3 corazones por vez (menos congestión)
      const numHearts = Math.floor(Math.random() * 2) + 2
      
      for (let i = 0; i < numHearts; i++) {
        const newHeart = {
          id: Date.now() + Math.random() + i,
          x: Math.random() * window.innerWidth,
          size: Math.random() * 40 + 25,
          emoji: ['❤️', '💖', '💗', '💓', '💕', '🩺'][Math.floor(Math.random() * 6)],
          duration: Math.random() * 3 + 3,
          rotation: Math.random() * 360
        }
        setHearts(prev => [...prev, newHeart])
        
        setTimeout(() => {
          setHearts(prev => prev.filter(h => h.id !== newHeart.id))
        }, newHeart.duration * 1000)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [showMessage])

  // Generar confeti
  useEffect(() => {
    if (!showMessage) return

    const colors = ['#ec4899', '#f43f5e', '#f472b6', '#fb7185', '#fbcfe8']
    const confettiInterval = setInterval(() => {
      const newConfetti = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 2 + 2,
        size: Math.random() * 8 + 4
      }
      setConfetti(prev => [...prev, newConfetti])
      
      setTimeout(() => {
        setConfetti(prev => prev.filter(c => c.id !== newConfetti.id))
      }, newConfetti.duration * 1000)
    }, 100)

    return () => clearInterval(confettiInterval)
  }, [showMessage])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-rose-500 to-red-600 z-50 overflow-hidden"
    >
      {/* Decoración de fondo con cruces médicas */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            ⚕️
          </div>
        ))}
      </div>

      {/* Cuenta regresiva */}
      {!showMessage && countdown > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="text-center z-20"
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: countdown }}
            className="text-8xl md:text-9xl font-bold text-white drop-shadow-2xl"
          >
            {countdown}
          </motion.div>
          <p className="text-white text-xl mt-4">Prepárate para tu sorpresa ✨</p>
        </motion.div>
      )}

      {/* Mensaje principal (aparece después del countdown) */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.3 }}
            className="text-center z-10 bg-white/20 backdrop-blur-2xl rounded-3xl p-6 md:p-10 m-4 max-w-3xl shadow-2xl border border-white/30"
          >
            {/* Título principal */}
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-7xl font-bold text-white mb-4"
            >
              Feliz Día de la Enfermera
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block ml-2"
              >
                ❤️
              </motion.span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-yellow-100 mt-2"
            >
              mi amor
            </motion.p>

            {/* Icono central animado (sin rotación infinita) */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-7xl md:text-8xl mt-6"
            >
              🩺❤️
            </motion.div>

            {/* Mensaje adicional */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-lg md:text-xl text-white mt-6 font-medium"
            >
              Eres mi heroína todos los días 💕
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-base md:text-lg text-pink-100 mt-3"
            >
              Gracias por ser la enfermera más increíble<br/>
              y la mujer más maravillosa del mundo.
            </motion.p>

            {/* Botón para reiniciar o cerrar (opcional) */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="mt-8 px-6 py-2 bg-white/30 backdrop-blur rounded-full text-white font-semibold hover:bg-white/40 transition-all"
            >
              Ver de nuevo 🎉
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lluvia de corazones optimizada */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: heart.x,
            fontSize: heart.size,
            position: 'absolute',
            filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'
          }}
          initial={{ y: -50, opacity: 0, rotate: 0, scale: 0 }}
          animate={{ 
            y: window.innerHeight + 100, 
            opacity: [0, 1, 1, 0],
            rotate: heart.rotation,
            scale: [0, 1, 1, 0.5]
          }}
          transition={{ 
            duration: heart.duration, 
            ease: "easeOut",
            times: [0, 0.1, 0.7, 1]
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}

      {/* Confeti decorativo */}
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: piece.x,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            position: 'absolute'
          }}
          initial={{ y: -50, opacity: 1, rotate: 0 }}
          animate={{ 
            y: window.innerHeight + 100,
            x: piece.x + (Math.random() - 0.5) * 200,
            opacity: 0,
            rotate: 360
          }}
          transition={{ duration: piece.duration, ease: "easeOut" }}
        />
      ))}
    </motion.div>
  )
}

export default FinalSurprise