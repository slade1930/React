import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([])
  const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '🩺', '💝']

  useEffect(() => {
    // Menos corazones pero más fluidos
    const interval = setInterval(() => {
      // Solo crear 1-2 corazones por vez (menos congestión)
      const numberOfHearts = Math.random() > 0.7 ? 2 : 1
      
      for (let i = 0; i < numberOfHearts; i++) {
        const newHeart = {
          id: Date.now() + Math.random() + i,
          x: Math.random() * 100,
          size: Math.random() * 35 + 20, // Tamaños variados: 20-55px
          emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
          duration: Math.random() * 8 + 8, // Más lento: 8-16 segundos
          delay: i * 0.3,
          rotationSpeed: (Math.random() - 0.5) * 200, // Rotación variada
          wobble: Math.random() * 30 - 15 // Movimiento lateral
        }
        
        setHearts(prev => [...prev, newHeart])
        
        setTimeout(() => {
          setHearts(prev => prev.filter(h => h.id !== newHeart.id))
        }, newHeart.duration * 1000)
      }
    }, 800) // Crear cada 800ms (más espaciado)

    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5,
        overflow: 'hidden'
      }}
    >
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          style={{
            position: 'absolute',
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            filter: 'drop-shadow(0 0 3px rgba(236,72,153,0.3))',
            willChange: 'transform, opacity'
          }}
          initial={{ 
            y: '100vh',
            opacity: 0,
            scale: 0,
            rotate: 0
          }}
          animate={{ 
            y: '-20vh',
            opacity: [0, 0.7, 0.9, 0],
            scale: [0, 1, 1.1, 0.5],
            rotate: [0, heart.rotationSpeed],
            x: [0, heart.wobble, -heart.wobble, 0]
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: [0.4, 0, 0.2, 1], // Curva de easing suave
            times: [0, 0.2, 0.6, 1],
            opacity: {
              times: [0, 0.2, 0.7, 1],
              duration: heart.duration
            }
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts