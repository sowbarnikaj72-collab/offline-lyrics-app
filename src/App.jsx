import { useState, useEffect } from 'react'
import songs from '../songs.json'
import './App.css'

function App() {
  const [selectedSong, setSelectedSong] = useState(null)
  const [fontSize, setFontSize] = useState(20)
  useEffect(() => {
  const handleBackButton = () => {
    if (selectedSong) {
      setSelectedSong(null)
    }
  }

  window.addEventListener('popstate', handleBackButton)

  return () => {
    window.removeEventListener('popstate', handleBackButton)
  }
}, [selectedSong])

  if (selectedSong) {
    return (
      <div className="app">
        <button
          className="back-button"
          onClick={() => setSelectedSong(null)}
        >
          ← Back
        </button>

        <h1>{selectedSong.title}</h1>

       <div
  className="lyrics"
  style={{ fontSize: `${fontSize}px` }}
>
  {selectedSong.lyrics.split('\n').map((line, index) => (
    <div key={index}>{line}</div>
  ))}
</div>

<div className="font-controls">
  <button onClick={() => setFontSize(Math.max(16, fontSize - 2))}>
    A−
  </button>

  <span>{fontSize}px</span>

  <button onClick={() => setFontSize(Math.min(32, fontSize + 2))}>
    A+
  </button>
</div>
      </div>
    )
  }

  return (
    <div className="app">
      <h1>🎵 Devotional Songs</h1>

      <div className="song-list">
        {songs.map((song, index) => (
          <button
            key={index}
            className="song-button"
            onClick={() => {
  window.history.pushState({ song: song.title }, '')
  setSelectedSong(song)
}}
          >
            {song.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App