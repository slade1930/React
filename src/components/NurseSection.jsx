import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Enfermera from '../assets/images/Enfermera.png'

const NurseSection = ({ setStage }) => {
  const [showExtraMessage, setShowExtraMessage] = useState(false)
  const [typedMessage, setTypedMessage] = useState('')
  const fullMessage = 'A pesar de ser una "enanita" , eres la mujer más GRANDE que conozco. Tu tamaño no define tu grandeza, la define tu corazón y tu vocación. ❤️'

  useEffect(() => {
    // Mostrar mensaje extra después de 2 segundos
    const timer = setTimeout(() => setShowExtraMessage(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showExtraMessage) {
      let i = 0
      const interval = setInterval(() => {
        if (i <= fullMessage.length) {
          setTypedMessage(fullMessage.slice(0, i))
          i++
        } else {
          clearInterval(interval)
        }
      }, 40)
      return () => clearInterval(interval)
    }
  }, [showExtraMessage, fullMessage])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-8"
    >
      <div className="bg-white/85 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl max-w-2xl w-full">
        
        {/* Foto con animación */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="relative mx-auto w-32 h-32 mb-4"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-400 shadow-xl">
            <img src={Enfermera} alt="Enfermera" className="w-full h-full object-cover" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-2 -right-2 text-2xl"
          >
            👩‍⚕️
          </motion.div>
        </motion.div>
        
        {/* Título */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-3"
        >
          🩺 Mi enfermera favorita 🩺
        </motion.h2>
        
        {/* Mensaje principal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-3 mb-5"
        >
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Gracias por cuidar a los demás con tanto amor,<br/>
            por tener un corazón tan noble y generoso,<br/>
            y por ser la enfermera más hermosa del mundo.
          </p>
          
          <p className="text-base md:text-lg text-pink-600 font-semibold leading-relaxed">
            Admiro tu esfuerzo cada día, tu dedicación y esa vocación<br/>
            que te hace especial. No cualquiera tiene la fortaleza<br/>
            para ser enfermera, y tú lo haces con una sonrisa. ✨
          </p>
        </motion.div>

        {/* Mensaje personalizado "enana" */}
        <AnimatePresence>
          {showExtraMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 my-4 border border-pink-200"
            >
              <div className="flex items-start gap-2">
                <span className="text-2xl">💕</span>
                <p className="text-sm md:text-base text-gray-700 italic text-left">
                  {typedMessage}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-0.5 h-4 bg-pink-500 ml-1"
                  />
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Grid de cualidades */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-3 my-6"
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-xl cursor-pointer transition-all"
          >
            <div className="text-3xl">💊</div>
            <p className="text-sm font-medium mt-1">Cuidados con amor</p>
            <p className="text-xs text-gray-500">Siempre atenta</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-xl cursor-pointer transition-all"
          >
            <div className="text-3xl">🩺</div>
            <p className="text-sm font-medium mt-1">Corazón de enfermera</p>
            <p className="text-xs text-gray-500">Tu mayor virtud</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-xl cursor-pointer transition-all"
          >
            <div className="text-3xl">❤️</div>
            <p className="text-sm font-medium mt-1">Amor infinito</p>
            <p className="text-xs text-gray-500">El que te doy</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-xl cursor-pointer transition-all"
          >
            <div className="text-3xl">⭐</div>
            <p className="text-sm font-medium mt-1">Eres mi heroína</p>
            <p className="text-xs text-gray-500">Siempre lo serás</p>
          </motion.div>
        </motion.div>

        {/* Frase destacada */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="my-4 p-3 bg-pink-500/10 rounded-xl"
        >
          <p className="text-sm md:text-base text-pink-700 font-medium">
            "Que hay preciosa, ganas por hoy eh, <br/>
            Por que siempre vas a hacer mi perdedora #1."
          </p>
        </motion.div>
        
        {/* Botón */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setStage(3)}
          className="mt-4 px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-bold shadow-lg hover:shadow-pink-500/50 transition-all flex items-center gap-2 mx-auto"
        >
          dale play  📸
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ➡️
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default NurseSection