"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Maximize2, Minimize2, RotateCcw, Settings, Volume2, VolumeX } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface PanoramaViewerProps {
  src: string
  title: string
  className?: string
}

export default function PanoramaViewer({ src, title, className = "" }: PanoramaViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isVRMode, setIsVRMode] = useState(false)
  const [hasAudio, setHasAudio] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  // Handle iframe load
  const handleIframeLoad = () => {
    // Add a small delay to ensure the panorama content is fully rendered
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  // Reset loading state when src changes
  useEffect(() => {
    setIsLoading(true)
  }, [src])

  const toggleFullscreen = async () => {
    const element = document.getElementById("panorama-container")
    if (!element) return

    try {
      if (!document.fullscreenElement) {
        await element.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (error) {
      console.error("Error toggling fullscreen:", error)
    }
  }

  const resetView = () => {
    // This would reset the panorama view to default position
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src
    }
  }

  return (
    <div className={`relative ${className}`}>
      <div
        id="panorama-container"
        className={`relative overflow-hidden rounded-xl shadow-2xl ${
          isFullscreen ? "w-screen h-screen" : "w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]"
        }`}
      >
        <iframe
          ref={iframeRef}
          src={`${src}${isVRMode ? "&mode=vr" : ""}&autoplay=1`}
          className="w-full h-full border-0"
          title={`360° view of ${title}`}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          onLoad={handleIframeLoad}
        />

        {/* Loading Overlay */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-black/20 flex items-center justify-center z-20"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                <p className="text-sm text-muted-foreground">Loading 360° Experience...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Controls Overlay */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <div className="flex items-center space-x-2">
            <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">{title}</div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setHasAudio(!hasAudio)}
            >
              {hasAudio ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/50 hover:bg-black/70 text-white"
              onClick={resetView}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setIsVRMode(!isVRMode)}
            >
              <Settings className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/50 hover:bg-black/70 text-white"
              onClick={toggleFullscreen}
            >
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
          </div>
        </motion.div>

        {/* VR Mode Indicator */}
        {isVRMode && (
          <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium z-10">
            VR Mode Active
          </div>
        )}
      </div>

      {/* Enhanced Instructions */}
      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
        <h4 className="font-semibold mb-2">Navigation Instructions</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
          <div>• Click and drag to look around</div>
          <div>• Scroll to zoom in/out</div>
          <div>• Double-click for fullscreen</div>
          <div>• Use VR headset for immersive experience</div>
        </div>
      </div>
    </div>
  )
}
