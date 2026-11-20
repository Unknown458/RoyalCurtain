import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const el = ref.current
    if (el) {
      el.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in, .stagger-item').forEach(
        (target) => observer.observe(target)
      )
    }

    return () => observer.disconnect()
  }, [])

  return ref
}

export function useNavScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.royal-navbar')
      if (!navbar) return
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}
