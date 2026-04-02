import { products } from "@/data/products"
import Link from "next/link"
import Image from "next/image"

export default async function CollectionPage({ params }: any) { // ✅ sadece burası değişti

  const { slug } = await params
  const items = products[slug] || []

  const titles = {
    artisan: "Artisan",
    nut: "Kuruyemiş",
    fruit: "Meyve"
  }

  const title = titles[slug] || slug
  const offsets: Record<string, number> = {
    artisan: 0,
    nut: products.artisan.length,
    fruit: products.artisan.length + products.nut.length
  }

  return (

    <main className="min-h-screen bg-[#FAFAF7] text-[#2A1A14]">

      {/* HEADER */}
      <section className="max-w-[1500px] mx-auto px-6 pt-24 pb-10">

        <Link
          href="/collections"
          className="text-sm text-[#C5A880] hover:opacity-70 transition mb-8 inline-block"
        >
          ← Koleksiyonlara geri dön
        </Link>

        <h1 className="text-3xl md:text-4xl text-center font-serif mb-3 tracking-wide">
          {title} Koleksiyonu
        </h1>

        <div className="w-12 h-[1px] bg-[#C5A880] mx-auto"></div>

      </section>

      {/* GRID */}
      <section className="max-w-[1500px] mx-auto px-6 pb-16">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">

          {items.map((product, index) => (

            <Link
              key={index}
              href={`/products/${product.slug}`}
              className="group block"
            >

              <div className="relative w-full aspect-[3/4] overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  unoptimized
                  className="
                    object-cover
                    transition-all duration-700
                    group-hover:scale-[1.05]
                  "
                />

                <div className="
                  absolute inset-0
                  bg-gradient-to-t from-black/60 via-black/20 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                " />

                <div className="
                  absolute bottom-4 left-0 w-full text-center px-3
                  translate-y-4 opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500
                ">

                  <p className="text-white/60 text-[10px] tracking-[0.25em] mb-1">
                    NO.{(offsets[slug] || 0) + index + 1}
                  </p>

                  <h3 className="
                    text-white
                    text-sm md:text-base
                    tracking-[0.15em]
                    uppercase
                    mb-1
                  ">
                    {product.name}
                  </h3>

                  <p className="text-white/80 text-xs leading-snug max-w-[180px] mx-auto">
                    {product.description}
                  </p>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  )
}