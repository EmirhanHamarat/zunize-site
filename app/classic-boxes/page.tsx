import { notFound } from "next/navigation"

export default function ClassicBoxesPage() {
  notFound()

  return (
    <main className="min-h-screen bg-[#FAFAF7] px-6 py-24">

      <div className="max-w-6xl mx-auto">

        {/* BAŞLIK */}
        <h1
          style={{ fontFamily: "'Cormorant Garamond', 'Didot', 'Georgia', serif", letterSpacing: "0.08em" }}
          className="text-3xl font-light text-[#2A1A14] mb-6 uppercase text-center"
        >
          Klasik Kutular
        </h1>

        <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mb-12" />

        {/* AÇIKLAMA */}
        <p className="text-center text-[15px] text-[#2A1A14]/70 leading-relaxed max-w-2xl mx-auto mb-20">
          Zamansız tasarımlar ve özenle seçilmiş içeriklerle hazırlanan klasik kutularımız,
          her anı daha anlamlı kılmak için tasarlandı.
        </p>

        {/* ÜRÜN GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group cursor-pointer"
            >

              <div className="aspect-[4/5] bg-[#F1ECE6] mb-4 overflow-hidden">
                <div className="w-full h-full group-hover:scale-105 transition duration-500 bg-gradient-to-br from-[#E8DED3] to-[#F5F1EB]" />
              </div>

              <h2 className="text-[15px] tracking-[0.08em] uppercase text-[#2A1A14] mb-2">
                Classic Box {item}
              </h2>

              <p className="text-[13px] text-[#2A1A14]/60 mb-3">
                Kısa ürün açıklaması buraya gelecek.
              </p>

              <p className="text-[14px] text-[#2A1A14]">
                ₺999
              </p>

            </div>
          ))}

        </div>

        <div className="mt-28 text-center">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#2A1A14]/50">
            Her kutu, özel bir deneyim sunar
          </p>
        </div>

      </div>

    </main>
  )
}