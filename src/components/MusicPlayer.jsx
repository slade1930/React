import React, { useRef, useEffect } from 'react'

const MusicPlayer = ({ musicPlaying, setMusicPlaying }) => {
  const audioRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio()
      audioRef.current.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
      audioRef.current.loop = true
      audioRef.current.volume = 0.3
    }

    if (musicPlaying) {
      audioRef.current.play().catch(e => console.log("Error:", e))
    } else {
      audioRef.current.pause()
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [musicPlaying])

  return (
    <button
      className="music-btn"
      onClick={() => setMusicPlaying(!musicPlaying)}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {musicPlaying ? '🔊' : '🔇'}
    </button>
  )
}

export default MusicPlayer