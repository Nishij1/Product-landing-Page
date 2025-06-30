import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../../utils/cn"

export function IntegratedTubelightNav({ items, className, onItemClick, activeSection }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item)
    }
  }

  return (
    <nav className={cn("integrated-tubelight-nav", className)}>
      <div className="nav-container">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.section

          return (
            <button
              key={item.name}
              onClick={() => handleItemClick(item)}
              className={cn(
                "nav-item",
                isActive && "nav-item-active"
              )}
            >
              <Icon size={16} className="nav-icon" />
              <span className="nav-text">{item.name}</span>
              
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="active-indicator"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="tubelight-effect"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                >
                  <div className="glow-top" />
                  <div className="glow-blur-1" />
                  <div className="glow-blur-2" />
                  <div className="glow-blur-3" />
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
