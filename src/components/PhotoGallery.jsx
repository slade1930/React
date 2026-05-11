import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Importar las 6 fotos
import A1 from '../assets/images/A1.jpeg'
import A2 from '../assets/images/A2.jpeg'
import A3 from '../assets/images/A3.jpeg'
import A4 from '../assets/images/A4.jpeg'
import A5 from '../assets/images/A5.jpeg'
import A6 from '../assets/images/A6.jpeg'

const PhotoGallery = ({ setStage }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  
  // Array de fotos con mensajes bonitos
  const photos = [
    { id: 1, img: A1, title: "Con verte", message: "Desde ese momento supe que eras especial 💕", emoji: "💖" },
    { id: 2, img: A2, title: "Te amo", message: "Gracias por ser quien eres, mi enfermera hermosa 👩‍⚕️", emoji: "✨" },
    { id: 3, img: A3, title: "El tiempo contigo", message: "Cada segundo a tu lado es un tesoro 🦋", emoji: "💫" },
    { id: 4, img: A4, title: "Quien lo diria", message: "pero te robaste, robaste con mucho cuidado mi corazón ❤️", emoji: "🩺" },
    { id: 5, img: A5, title: "Eres mi todo", message: "Mi persona favorita en este mundo 🌎", emoji: "⭐" },
    { id: 6, img: A6, title: "Por ti ", message: "hago de todo, solo por poder seguir admirando mas esa hermosa sonrisa que tienes", emoji: "💝" }
  ]

  // Fotos para el collage de fondo (desordenadas)
  const collagePhotos = [...photos, ...photos, ...photos] // Repetir para más densidad

  return (
    <div className="relative min-h-screen overflow-y-auto py-16 px-4">
      {/* COLLAGE DE FONDO */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-red-100"></div>
        <div className="grid grid-cols-4 gap-2 p-4 absolute inset-0">
          {collagePhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="relative overflow-hidden rounded-lg shadow-md"
              style={{
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
              }}
            >
              <img 
                src={photo.img} 
                alt=""
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-300/50 to-transparent"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold text-center text-pink-600 mb-4"
        >
          Mi seccion Favorita 📸
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-700 mb-12 text-lg"
        >
          con solo verte ya es especial...
        </motion.p>

        {/* Grid de fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setSelectedPhoto(photo)}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-3xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={photo.img} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3 text-3xl">
                  {photo.emoji}
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">{photo.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{photo.message}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setStage(4)}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Leer carta 💌
          </button>
        </div>
      </div>

      {/* MODAL PARA VER FOTO AMPLIADA */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedPhoto.img} 
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-pink-600">{selectedPhoto.title}</h3>
                <p className="text-gray-700 mt-2 text-lg">{selectedPhoto.message}</p>
                <p className="text-pink-500 mt-4 text-xl">{selectedPhoto.emoji}</p>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600"
                >
                  Cerrar ❤️
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
    </AnimatePresence>
    </div>
  )
}

export default PhotoGallery