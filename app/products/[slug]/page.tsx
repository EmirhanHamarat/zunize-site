import { products } from "@/data/products"
import Link from "next/link"
import Image from "next/image"

export default async function ProductPage({ params }) {

  const { slug } = await params

  let product = null
  let collection = null
  let index = 0

  for (const key in products) {
    const foundIndex = products[key].findIndex(p => p.slug === slug)
    if (foundIndex !== -1) {
      product = products[key][foundIndex]
      collection = key
      index = foundIndex
      break
    }
  }
  // OFFSETS
  const offsets: Record<string, number> = {
    artisan: 0,
    nut: products.artisan.length,
    fruit: products.artisan.length + products.nut.length
  }

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Ürün bulunamadı.</p>
      </main>
    )
  }

  return (

    <main className="min-h-screen bg-[#FAFAF7] text-[#2A1A14]">

      <section className="max-w-[1400px] mx-auto px-6 pt-24 pb-24 grid md:grid-cols-2 gap-20">

        {/* IMAGE */}
        <div className="relative w-full aspect-[4/5]">

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />

        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center">

          <Link
            href={`/collections/${collection}`}
            className="text-sm text-[#C5A880] hover:opacity-70 transition mb-6"
          >
            ← Koleksiyona geri dön
          </Link>

          {/* NO + TITLE */}
          <p className="text-[#2A1A14]/60 tracking-[0.25em] text-sm mb-2">
            NO.{(offsets[collection] || 0) + index + 1}
          </p>

          <h1 className="text-3xl md:text-4xl font-serif leading-snug mb-4">
            {product.name}
          </h1>

          <div className="w-full h-[1px] bg-[#2A1A14]/20 mb-6"></div>

          {/* DESCRIPTION */}
          <p className="text-[#2A1A14]/70 leading-relaxed mb-10 max-w-[500px]">
            {product.description}
          </p>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm mb-10">

            <div>
              <p className="uppercase text-xs tracking-[0.2em] mb-3 text-[#2A1A14]/60">
                Tüketim Tarihi
              </p>
              <p className="text-[#2A1A14]/70 leading-relaxed">
                Artisan koleksiyon ürünleri için önerilen tüketim süresi 7 gündür. 
                Kuruyemiş ve meyve koleksiyonlarında bu süre 30 güne kadar uzayabilir.
              </p>
            </div>

            <div>
              <p className="uppercase text-xs tracking-[0.2em] mb-3 text-[#2A1A14]/60">
                Saklama Koşulları
              </p>
              <p className="text-[#2A1A14]/70 leading-relaxed">
                Minimum Sıcaklık: +4°C
                Maksimum Sıcaklık: +19°C
                Serin ve kuru bir yerde, kokudan ve direkt ışıktan uzakta saklayın. Ürünlerimiz doğal içeriklere sahip olduğundan buzdolabında saklanması tavsiye edilir.
                Ani sıcaklık değişimi kaynaklı çikolata yüzeyinde beyazlaşmalar olursa bu durum kakao yağının yüzeye çıkmasından kaynaklanmaktadır, korkulacak bir durum yoktur.
              </p>
            </div>

            <div>
              <p className="uppercase text-xs tracking-[0.2em] mb-3 text-[#2A1A14]/60">
                Alerjen Bilgisi
              </p>
              <p className="text-[#2A1A14]/70 leading-relaxed">
                Eser miktarda soya ürünleri, süt bileşenleri, gluten, fındık, badem, yer fıstığı ve antep fıstığı içerebilir.
              </p>
            </div>

          </div>

          {/* BUTTON */}
          <a
            href={`https://wa.me/905436446284?text=${encodeURIComponent(product.name + " ürünü hakkında sipariş vermek istiyorum.")}`}
            className="inline-block border border-[#2A1A14] px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-[#2A1A14] hover:text-white transition w-fit"
          >
            WhatsApp ile Sipariş
          </a>

        </div>

      </section>

    </main>
  )
}