import React from 'react'
import { motion } from 'framer-motion'
import A1 from '../assets/images/A1.jpg'
import A2 from '../assets/images/A2.jpg'
import A3 from '../assets/images/A3.jpg'
import A4 from '../assets/images/A4.jpg'
import A5 from '../assets/images/A5.jpg'
import A6 from '../assets/images/A6.jpg'

const CollageBackground = () => {
  const images = [A1, A2, A3, A4, A5, A6]
  const tiles = []
  
  // Crear grid de 6x6 para collage
  for (let i = 0; i < 36; i++) {
    const img = images[Math.floor(Math.random() * images.length)]
    const rotation = Math.random() * 20 - 10
    const scale = Math.random() * 0.5 + 0.7
    tiles.push({ img, rotation, scale, id: i })
  }

  return (
    <div className="fixed inset-0 z-0 opacity-15 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-red-100 to-pink-200"></div>
      <div className="grid grid-cols-6 gap-1 p-2 h-full">
        {tiles.map((tile) => (
          <motion.div
            key={tile.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: tile.id * 0.02 }}
            className="relative overflow-hidden rounded-lg"
            style={{
              transform: `rotate(${tile.rotation}deg) scale(${tile.scale})`,
            }}
          >
            <img 
              src={tile.img} 
              alt=""
              className="w-full h-full object-cover"
              style={{ minHeight: '100px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-400/20 to-transparent"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CollageBackground