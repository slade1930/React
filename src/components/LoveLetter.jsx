import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LoveLetter = ({ setStage }) => {
  const [visibleText, setVisibleText] = useState('')
  const fullLetter = `Mi amor,

En este Día de la Enfermera, quiero que sepas lo orgulloso que me siento de ti.

No solo por tu increíble habilidad de seguir adelante con todo, sino por la forma tan hermosa en la que eres.

Admiro tu fortaleza, tu ternura y esa sonrisa que ilumina hasta los días más de mierda

Gracias por ser la enfermera más increíble del mundo,
pero sobre todo, gracias por ser mi compañera, mi amor y mi enanita.

Feliz Día de la Enfermera, mi vida. ❤️

Con todo mi amor,
Te re amo mucho `

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullLetter.length) {
        setVisibleText(fullLetter.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [fullLetter])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-8"
    >
      <div className="max-w-2xl bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-8">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-6">
          💌 Carta para mi enfermera favorita 💌
        </h2>
        <div className="prose prose-lg text-gray-700 whitespace-pre-wrap font-serif">
          {visibleText}
          <span className="animate-pulse text-pink-500">|</span>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => setStage(5)}
            className="px-6 py-3 bg-gradient-to-r from-pink-400 to-red-400 text-white rounded-full hover:shadow-lg transition-all"
          >
            Ver sorpresa final 🎁
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default LoveLetter