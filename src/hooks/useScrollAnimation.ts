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
    if (!el) return

    const observeElements = () => {
      el.querySelectorAll(
        '.fade-up:not(.visible), .fade-left:not(.visible), .fade-right:not(.visible), .zoom-in:not(.visible), .stagger-item:not(.visible)'
      ).forEach((target) => observer.observe(target))
    }

    observeElements()

    // Observe dynamic elements added after mount (e.g., tab switches or route transitions)
    const mutationObserver = new MutationObserver(() => {
      observeElements()
    })

    mutationObserver.observe(el, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
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
