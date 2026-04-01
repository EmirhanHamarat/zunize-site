"use client"

import { useEffect, useState } from "react"
import BoxCard from "../../components/BoxCard"

export default function CollectionsPage() {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const collections = [
    {
      title: "Artisan Koleksiyonu",
      slug: "artisan",
      description: "Özenle elde hazırlanan, seçkin kakao çekirdeklerinden doğan rafine çikolatalar."
    },
    {
      title: "Kuruyemiş Koleksiyonu",
      slug: "nut",
      description: "Özenle kavrulmuş seçkin kuruyemişlerin, yoğun ve pürüzsüz çikolatayla buluştuğu zengin lezzetler."
    },
    {
      title: "Meyve Koleksiyonu",
      slug: "fruit",
      description: "Canlı meyve notalarının kaliteli çikolatayla dengelendiği ferah ve zarif tatlar."
    }
  ]

  return (

    <main className="min-h-screen bg-[#FAFAF7] px-6 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <h1
            style={{ fontFamily: "'Cormorant Garamond', 'Didot', 'Georgia', serif", letterSpacing: "0.08em" }}
            className={`text-3xl font-light text-[#2A1A14] mb-6 uppercase transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Koleksiyonlarımız
          </h1>

          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mb-12" />

          <p className="text-center text-[15px] text-[#2A1A14]/70 leading-relaxed max-w-2xl mx-auto">
            Dünyanın farklı kakao ve içeriklerinden ilham alınarak hazırlanmış
            özel çikolata seçkileri.
          </p>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {collections.map((col, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              <BoxCard collection={col} />
            </div>
          ))}

        </div>

        {/* ALT MESAJ */}
        <div className="mt-28 text-center">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#2A1A14]/50">
            Her koleksiyon, farklı bir hikaye anlatır
          </p>
        </div>

      </div>

    </main>

  )
}