"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import BoxCard from "../components/BoxCard"

// Fade-in hook
function useFadeIn() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

export default function Home() {

  const [step, setStep] = useState(0)

  const heroRef = useRef<HTMLDivElement | null>(null)
  const collectionsRef = useRef<HTMLDivElement | null>(null)
  const buildBoxRef = useRef<HTMLDivElement | null>(null)

  // Fade refs
  const subtitleFade = useFadeIn()
  const col0Fade = useFadeIn()
  const col1Fade = useFadeIn()
  const col2Fade = useFadeIn()
  const buildBoxFade = useFadeIn()

  const colFades = [col0Fade, col1Fade, col2Fade]

  // STEP CALC
  useEffect(() => {

    const handleScroll = () => {
      const collectionsTop = collectionsRef.current?.getBoundingClientRect().top || 0
      const buildTop = buildBoxRef.current?.getBoundingClientRect().top || 0

      if (collectionsTop > window.innerHeight / 2) {
        setStep(0)
      } else if (buildTop > window.innerHeight / 2) {
        setStep(1)
      } else {
        setStep(2)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  const collections = [
    { title: "Artisan Koleksiyonu", slug: "artisan" },
    { title: "Kuruyemiş Koleksiyonu", slug: "nut" },
    { title: "Meyve Koleksiyonu", slug: "fruit" },
    { title: "Kendi Kutunuzu Oluşturun", slug: "build-box" }
  ]

  const topCollections = collections.filter(c => c.slug !== "build-box")
  const buildBox = collections.find(c => c.slug === "build-box")

  // SCROLL BUTTON
  const handleScroll = () => {
    if (step === 0) {
      collectionsRef.current?.scrollIntoView({ behavior: "smooth" })
    } else if (step === 1) {
      buildBoxRef.current?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (

    <main className="bg-[#FAFAF7] text-[#2A1A14]">

      {/* HERO */}
      <section
        ref={heroRef}
        className="h-screen flex flex-col items-center justify-center text-center px-6"
      >

        <Image
          src="/images/zunize-logo.png"
          alt="Zunize Logo"
          width={520}
          height={200}
          priority
          className="mb-6"
        />

        <div className="h-[1px] bg-[#C5A880] w-[320px] md:w-[400px] my-6" />

        <div
          ref={subtitleFade.ref}
          style={{
            opacity: subtitleFade.visible ? 1 : 0,
            transform: subtitleFade.visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <p className="tracking-[0.35em] uppercase text-xs text-[#2A1A14]/60">
            El Yapımı Çikolatalar
          </p>
        </div>

      </section>

      {/* COLLECTIONS */}
      <section
        ref={collectionsRef}
        className="min-h-screen flex items-center px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto">
          {topCollections.map((col, i) => (
            <div
              key={i}
              ref={colFades[i].ref}
              style={{
                opacity: colFades[i].visible ? 1 : 0,
                transform: colFades[i].visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
              }}
            >
              <BoxCard collection={col} />
            </div>
          ))}
        </div>
      </section>

      {/* BUILD BOX */}
      <section
        ref={buildBoxRef}
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div
          ref={buildBoxFade.ref}
          className="w-full max-w-[800px]"
          style={{
            opacity: buildBoxFade.visible ? 1 : 0,
            transform: buildBoxFade.visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <BoxCard collection={buildBox} />
        </div>
      </section>

      {/* SCROLL BUTTON */}
      <button
        onClick={handleScroll}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 text-xl text-[#2A1A14]/50 hover:text-[#2A1A14] transition"
      >
        {step === 2 ? "↑" : "↓"}
      </button>

    </main>
  )
}