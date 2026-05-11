import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ECGAnimation = ({ setStage }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showButton, setShowButton] = useState(false)

  // 6 Frases románticas para enfermera
  const phrases = [
    {
      text: "No sé curar heridas, pero desde que te conocí entendí cómo se siente sanar con una sonrisa.",
      emoji: "😊💕",
      icon: "🩺"
    },
    {
      text: "Si fueras medicamento, serías de los que crean adicción… porque no dejo de pensar en ti.",
      emoji: "💊❤️",
      icon: "💊"
    },
    {
      text: "Con esa mirada deberías trabajar en urgencias, porque me dejaste sin respiración.",
      emoji: "👀💨",
      icon: "🏥"
    },
    {
      text: "No necesito chequeo médico para saber que tengo síntomas de enamoramiento.",
      emoji: "📋❤️",
      icon: "🌡️"
    },
    {
      text: "Debe existir un diagnóstico para esto, porque cada vez que te veo el corazón se me altera.",
      emoji: "💓📊",
      icon: "❤️"
    },
    {
      text: "Tú curas personas... pero tú sanaste mi corazón. Eres mi medicina favorita.",
      emoji: "💕✨",
      icon: "⭐"
    }
  ]

  const currentPhrase = phrases[currentPhraseIndex]

  // Efecto de máquina de escribir para cada frase
  useEffect(() => {
    setIsTyping(true)
    setDisplayText('')
    setShowButton(false)
    
    let i = 0
    const interval = setInterval(() => {
      if (i <= currentPhrase.text.length) {
        setDisplayText(currentPhrase.text.slice(0, i))
        i++
      } else {
        clearInterval(interval)
        setIsTyping(false)
        // Mostrar botón después de 1.5 segundos
        setTimeout(() => setShowButton(true), 1500)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [currentPhraseIndex, currentPhrase.text])

  // Cambiar a la siguiente frase automáticamente cada 8 segundos
  useEffect(() => {
    if (!isTyping && !showButton) {
      const timer = setTimeout(() => {
        if (currentPhraseIndex < phrases.length - 1) {
          setCurrentPhraseIndex(prev => prev + 1)
        } else {
          setShowButton(true)
        }
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isTyping, showButton, currentPhraseIndex, phrases.length])

  const handleNext = useCallback(() => {
    if (currentPhraseIndex < phrases.length - 1) {
      setCurrentPhraseIndex(prev => prev + 1)
    } else {
      setStage(2)
    }
  }, [currentPhraseIndex, setStage])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl max-w-2xl">
        
        {/* Contador de frases */}
        <div className="flex justify-center gap-2 mb-4">
          {phrases.map((_, idx) => (
            <motion.div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentPhraseIndex ? 'bg-pink-500 w-8' : 'bg-pink-200 w-2'
              }`}
              animate={idx === currentPhraseIndex ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>

        {/* Título animado */}
        <motion.div
          key={`title-${currentPhraseIndex}`}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="text-4xl">{currentPhrase.icon}</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-500 bg-clip-text text-transparent">
            Mi enfermera favorita
          </h2>
          <span className="text-4xl">❤️</span>
        </motion.div>
        
        {/* ECG Animado - Con variaciones por frase */}
        <motion.div 
          className="mb-8"
          key={`ecg-${currentPhraseIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg width="450" height="150" viewBox="0 0 450 150" className="mx-auto">
            {/* Línea base del ECG */}
            <motion.polyline
              points="0,75 50,75 60,45 70,105 80,75 130,75 140,25 150,125 160,75 210,75 220,60 230,90 240,75 290,75 300,40 310,110 320,75 370,75 380,55 390,95 400,75 450,75"
              fill="none"
              stroke="#ec4899"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            {/* Corazón latiendo en el pico */}
            <motion.circle
              cx="225"
              cy="75"
              r="6"
              fill="#ef4444"
              animate={{ 
                scale: [1, 1.6, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            {/* Puntos decorativos en el ECG */}
            {[0, 1, 2, 3].map((i) => (
              <motion.circle
                key={i}
                cx={75 + i * 100}
                cy="75"
                r="2"
                fill="#f472b6"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Frase con animación de entrada/salida */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhraseIndex}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="min-h-[120px]"
          >
            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
              {displayText}
              {isTyping && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-0.5 h-6 bg-pink-500 ml-1 align-middle"
                />
              )}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Emoji decorativo animado */}
        {!isTyping && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
            className="mt-4 text-3xl"
          >
            {currentPhrase.emoji}
          </motion.div>
        )}

        {/* Botón de siguiente */}
        {showButton && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-bold shadow-lg hover:shadow-pink-500/50 transition-all flex items-center gap-2 mx-auto"
          >
            {currentPhraseIndex < phrases.length - 1 ? (
              <>Siguiente frase 💕</>
            ) : (
              <>Continuar historia ➡️</>
            )}
          </motion.button>
        )}

        {/* Indicador de progreso numérico */}
        <div className="mt-4 text-sm text-gray-400">
          {currentPhraseIndex + 1} / {phrases.length}
        </div>
      </div>
    </motion.div>
  )
}

export default ECGAnimation