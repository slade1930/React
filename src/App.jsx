import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WelcomeScreen from './components/WelcomeScreen'
import ECGAnimation from './components/ECGAnimation'
import PhotoGallery from './components/PhotoGallery'
import LoveLetter from './components/LoveLetter'
import FinalSurprise from './components/FinalSurprise'
import FloatingHearts from './components/FloatingHearts'
import NurseSection from './components/NurseSection'
import MusicPlayer from './components/MusicPlayer'
import './App.css'

function App() {
  const [stage, setStage] = useState(0)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Efecto para el título de la pestaña
  useEffect(() => {
    const titles = [
      "❤️ Para mi enfermera especial",
      "🩺 Te quiero mucho",
      "💕 Feliz Día Enfermera",
      "❤️ Mi amor ❤️",
      "👩‍⚕️ Mi heroína",
      "💖 Te amo enfermera"
    ]
    let index = 0
    const interval = setInterval(() => {
      document.title = titles[index % titles.length]
      index++
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Seguir el mouse para efectos
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="app-container relative min-h-screen overflow-hidden">
      
      {/* ========== DECORACIONES DE ENFERMERÍA ========== */}
      
      {/* Estetoscopio flotante decorativo */}
      <motion.div
        className="fixed top-20 left-10 text-7xl opacity-20 z-0 pointer-events-none"
        animate={{ 
          rotate: [0, 10, -10, 0],
          y: [0, -20, 0]
        }}
        transition={{ repeat: Infinity, duration: 8 }}
      >
        🩺
      </motion.div>

      {/* Jeringa decorativa */}
      <motion.div
        className="fixed bottom-20 right-10 text-6xl opacity-20 z-0 pointer-events-none"
        animate={{ 
          rotate: [0, -15, 15, 0],
          x: [0, -15, 0]
        }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        💉
      </motion.div>

      {/* Pastillas decorativas */}
      <motion.div
        className="fixed top-40 right-20 text-5xl opacity-15 z-0 pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 360]
        }}
        transition={{ repeat: Infinity, duration: 12 }}
      >
        💊
      </motion.div>

      {/* Cruz médica decorativa */}
      <motion.div
        className="fixed bottom-40 left-20 text-6xl opacity-15 z-0 pointer-events-none"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        ⚕️
      </motion.div>

      {/* Corazón con estetoscopio */}
      <motion.div
        className="fixed top-1/2 left-5 text-5xl opacity-10 z-0 pointer-events-none"
        animate={{ 
          scale: [1, 1.3, 1],
        }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ❤️🩺
      </motion.div>

      {/* ========== EFECTO DE MOUSE (brillo que sigue al cursor) ========== */}
      <motion.div
        className="fixed w-96 h-96 rounded-full bg-pink-400 opacity-10 blur-3xl pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />

      {/* ========== DECORACIONES FLOTANTES ADICIONALES ========== */}
      
      {/* Vendaje decorativo */}
      <motion.div
        className="fixed top-5 right-5 text-4xl opacity-30 z-0 pointer-events-none"
        animate={{ 
          rotate: [0, 5, -5, 0],
        }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        🩹
      </motion.div>

      {/* Termómetro decorativo */}
      <motion.div
        className="fixed bottom-5 left-5 text-4xl opacity-30 z-0 pointer-events-none"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        🌡️
      </motion.div>

      {/* Componentes flotantes */}
      <FloatingHearts />
      <MusicPlayer musicPlaying={musicPlaying} setMusicPlaying={setMusicPlaying} />
      
      {/* Partículas flotantes mejoradas - con colores médicos */}
      <div className="particles-container">
        {[...Array(40)].map((_, i) => {
          const colors = ['#ec4899', '#f43f5e', '#06b6d4', '#10b981', '#f59e0b']
          const color = colors[Math.floor(Math.random() * colors.length)]
          const size = Math.random() * 4 + 2
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -1200],
                x: [0, (Math.random() - 0.5) * 200],
                opacity: [0, Math.random() * 0.4 + 0.2, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                delay: Math.random() * 15,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                position: 'absolute',
                borderRadius: '50%',
                boxShadow: `0 0 ${size * 2}px ${color}`
              }}
            />
          )}
        )}
      </div>

      {/* Decoración esquinas con cruz médica */}
      <div className="fixed top-0 left-0 w-32 h-32 z-0 pointer-events-none">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
          <path d="M50 20 L50 80 M20 50 L80 50" stroke="#ec4899" strokeWidth="8"/>
        </svg>
      </div>
      
      <div className="fixed bottom-0 right-0 w-32 h-32 z-0 pointer-events-none transform rotate-180">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
          <path d="M50 20 L50 80 M20 50 L80 50" stroke="#ec4899" strokeWidth="8"/>
        </svg>
      </div>

      {/* Texto decorativo de fondo */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="text-9xl font-bold text-pink-500 whitespace-pre-wrap text-center leading-tight">
          👩‍⚕️<br/>ENFERMERA<br/>❤️<br/>AMOR
        </div>
      </motion.div>

      {/* ========== Navegación por etapas ========== */}
      <div className="main-content relative z-10">
        <AnimatePresence mode="wait">
          {stage === 0 && <WelcomeScreen setStage={setStage} />}
          {stage === 1 && <ECGAnimation setStage={setStage} />}
          {stage === 2 && <NurseSection setStage={setStage} />}
          {stage === 3 && <PhotoGallery setStage={setStage} />}
          {stage === 4 && <LoveLetter setStage={setStage} />}
          {stage === 5 && <FinalSurprise />}
        </AnimatePresence>
      </div>

      {/* Indicador de progreso (opcional) */}
      {stage > 0 && stage < 5 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-20 bg-white/80 backdrop-blur rounded-full px-4 py-2 shadow-lg"
        >
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  s === stage ? 'bg-pink-500 w-4' : s < stage ? 'bg-pink-300' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default App