import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger client-side helper
export function initScrollTrigger() {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
}

// Hero Text Reveal: Staggers words in with vertical movement and opacity
export function animateHeroText(containerSelector: string) {
  if (typeof window === 'undefined') return;
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const words = container.querySelectorAll('.word-reveal');
  if (words.length === 0) return;

  gsap.fromTo(
    words,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.08,
      duration: 1,
      ease: 'power4.out',
    }
  );
}

// Section Headings: clipPath wipe reveal (clipPath: inset(0 100% 0 0) -> inset(0 0% 0 0))
export function animateSectionHeading(elementSelector: string) {
  if (typeof window === 'undefined') return;
  const elements = document.querySelectorAll(elementSelector);
  
  elements.forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

// Parallax backgrounds: All full-width banner sections move at speed factor
export function animateParallax(elementSelector: string, speed = 0.4) {
  if (typeof window === 'undefined') return;
  const elements = document.querySelectorAll(elementSelector);

  elements.forEach((el) => {
    const shiftPercent = speed * 30; // Scale speed to yPercent offset
    gsap.fromTo(
      el,
      { yPercent: -shiftPercent },
      {
        yPercent: shiftPercent,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });
}

// Number counters: Stats animate from 0 to target number when scrolled into view
export function animateCounter(elementSelector: string, targetValue: number, duration = 2) {
  if (typeof window === 'undefined') return;
  const elements = document.querySelectorAll(elementSelector);

  elements.forEach((el) => {
    const obj = { value: 0 };
    gsap.to(obj, {
      value: targetValue,
      duration: duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        el.textContent = Math.floor(obj.value).toLocaleString() + (targetValue === 500 ? '+' : '');
      },
    });
  });
}

// Horizontal card reveal: cards slide in from alternating left/right with stagger on scroll
export function animateCardsReveal(containerSelector: string, cardSelector: string) {
  if (typeof window === 'undefined') return;
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const cards = container.querySelectorAll(cardSelector);
  cards.forEach((card, index) => {
    const direction = index % 2 === 0 ? -100 : 100; // Left or Right
    gsap.fromTo(
      card,
      { x: direction, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}
