import React, { useState, useRef, useEffect } from "react"

export const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true)
            // Optional: Stop observing once visible to run animation only once
            // observer.unobserve(domRef.current);
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    )

    const currentRef = domRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  )
}
