import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import videoWS from '../assets/videoWS.mp4'
import p1 from '../assets/G1.png'
import p2 from '../assets/G2.png'
import p3 from '../assets/G3.png'
import p4 from '../assets/G4.jpg'

const VideoReels = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true) // Start muted - manual sound control
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef(null)
  const sectionRef = useRef(null)

  // Main reel video data - single video on the left
  const mainVideo = {
    id: 1,
    src: videoWS,
    title: 'Hard Water, Hidden Harm',
    description: 'Discover how untreated water damages skin, hair, and appliances — our softener shields against dryness, scale, and wear',
    thumbnail: 'https://via.placeholder.com/540x960/0ea5e9/ffffff?text=Main+Reel+9:16'
  }

  // Static graphical posts for the right side grid - 4:5 ratio images
  const graphicalPosts = [
    {
      id: 1,
      type: 'image',
      src: p1,
      title: 'Five Key Benefits',
      description: 'Protects hair and appliances'
    },
    {
      id: 2,
      type: 'image',
      src: p2,
      title: 'Why Choose Soft Water',
      description: 'Better skin and hair'
    },
    {
      id: 3,
      type: 'image',
      src: p3,
      title: 'Safe Water Softeners',
      description: 'Purity without compromise'
    },
    {
      id: 4,
      type: 'image',
      src: p4,
      title: 'Quick Easy Installation',
      description: 'Ready in 3 minutes'
    }
  ]

  // Intersection Observer for auto-play when visible (muted only)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
          // Auto-play muted when component comes into view
          setTimeout(async () => {
            if (videoRef.current) {
              try {
                // Always start muted for autoplay
                videoRef.current.muted = true
                videoRef.current.volume = 0.8 // Set volume for when user unmutes

                // Play the video muted
                await videoRef.current.play()
                setIsPlaying(true)
                setIsMuted(true)
              } catch (error) {
                console.log('Muted autoplay failed:', error)
              }
            }
          }, 300)
        } else {
          // Pause when component goes out of view
          if (videoRef.current) {
            videoRef.current.pause()
            setIsPlaying(false)
          }
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Initial muted autoplay attempt when video loads
  useEffect(() => {
    const attemptAutoplay = async () => {
      if (videoRef.current && isVisible) {
        try {
          // Always start muted for autoplay
          videoRef.current.muted = true
          videoRef.current.volume = 0.8 // Set volume for when user unmutes
          await videoRef.current.play()
          setIsPlaying(true)
          setIsMuted(true)
        } catch (error) {
          console.log('Muted autoplay failed:', error)
        }
      }
    }

    if (!isLoading && !hasError) {
      attemptAutoplay()
    }
  }, [isLoading, hasError, isVisible])

  // Keyboard navigation for single video
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!isVisible) return

      switch (event.key) {
        case ' ':
        case 'k':
          event.preventDefault()
          togglePlayPause()
          break
        case 'm':
          event.preventDefault()
          toggleMute()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isVisible, isPlaying, isMuted])

  // Handle video play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  // Handle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Handle video end - loop the same video
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  // Handle video loading
  const handleVideoLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  // Handle video error
  const handleVideoError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <section ref={sectionRef} className="video-reels-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>🌊 Experience the Wonders of Soft Water</h2>
          <p>💧 See real results, demonstrations, and discover how WS softeners protect your skin, hair, and home.</p>
        </motion.div>

        <div className="video-reels-container">
          {/* Main Video Player - Left Side */}
          <motion.div
            className="main-video-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="main-video-wrapper">
              <video
                ref={videoRef}
                className="video-element active"
                src={mainVideo.src}
                muted={isMuted}
                autoPlay
                loop={false}
                playsInline
                onEnded={handleVideoEnd}
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
                poster={mainVideo.thumbnail}
                preload="auto"
              />

              {/* Loading Indicator */}
              {isLoading && (
                <div className="video-loading">
                  <div className="loading-spinner"></div>
                  <p>Loading video...</p>
                </div>
              )}

              {/* Error State */}
              {hasError && (
                <div className="video-error">
                  <p>Unable to load video. Please try again.</p>
                  <button
                    className="retry-btn"
                    onClick={() => {
                      setHasError(false)
                      setIsLoading(true)
                      if (videoRef.current) {
                        videoRef.current.load()
                      }
                    }}
                  >
                    Retry
                  </button>
                </div>
              )}

              {/* Video Controls Overlay */}
              <div className="video-controls">
                <button
                  className="control-btn play-pause-btn"
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                </button>

                <button
                  className="control-btn mute-btn"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>
            </div>

            {/* Main Video Info */}
            <div className="main-video-info">
              <h3>{mainVideo.title}</h3>
              <p>{mainVideo.description}</p>
            </div>
          </motion.div>

          {/* Static Posts Grid - Right Side */}
          <motion.div
            className="posts-grid-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="posts-grid">
              {graphicalPosts.map((post) => (
                <motion.div
                  key={post.id}
                  className="grid-post-item"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="grid-post-wrapper">
                    <img
                      src={post.src}
                      alt={post.title}
                      loading="lazy"
                    />
                    <div className="grid-post-overlay">
                      <div className="post-content">
                        <h4>{post.title}</h4>
                        <p>{post.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default VideoReels
