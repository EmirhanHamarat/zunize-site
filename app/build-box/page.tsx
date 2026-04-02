"use client"

import { useState } from "react"
import { products } from "@/data/products"

type CollectionKey = "artisan" | "nut" | "fruit"
type BoxSize = 6 | 8 | 16 | 24

export default function BuildBox(){

const [boxSize, setBoxSize] = useState<BoxSize>(6)
const [selected, setSelected] = useState<string[]>([])
const [activeCollection, setActiveCollection] = useState<CollectionKey>("artisan")
const [warning, setWarning] = useState("")

const allProducts = [
  ...products.artisan,
  ...products.nut,
  ...products.fruit
]

const basePrices: Record<BoxSize, number> = {
  6: 740, 8: 860, 16: 1520, 24: 1960
}

const maxTypes: Record<BoxSize, number> = {
  6: 3, 8: 4, 16: 4, 24: 6
}

const minPerType: Record<BoxSize, number> = {
  6: 2, 8: 2, 16: 3, 24: 3
}

const addProduct = (name: string) => {
  setWarning("")
  if(selected.length >= boxSize){
    setWarning("Kutu dolu")
    return
  }
  const counts: Record<string, number> = {}
  selected.forEach(x => counts[x] = (counts[x] || 0) + 1)
  const types = Object.keys(counts)
  if(!counts[name] && types.length >= maxTypes[boxSize]){
    setWarning(`Maksimum ${maxTypes[boxSize]} çeşit seçebilirsiniz`)
    return
  }
  setSelected([...selected, name])
}

const removeProduct = (i: number) => {
  const copy = [...selected]
  copy.splice(i, 1)
  setSelected(copy)
}

const counts: Record<string, number> = {}
selected.forEach(x => counts[x] = (counts[x] || 0) + 1)

const extraCount = selected.filter(name =>
  products.nut.some(p => p.name === name) ||
  products.fruit.some(p => p.name === name)
).length

const totalPrice = basePrices[boxSize] + (extraCount * 15)

const sendWhatsAppOrder = () => {
  if(selected.length !== boxSize){
    setWarning("Kutuyu tamamen doldurun")
    return
  }
  const invalid = Object.values(counts).some((count) => count < minPerType[boxSize])
  if(invalid){
    setWarning(`Her çeşitten en az ${minPerType[boxSize]} adet seçmelisiniz`)
    return
  }
  const message = `
Merhaba,

${boxSize}'lı Zunize kutusu siparişi:

${Object.entries(counts)
  .map(([k, v]) => `${k} x${v}`)
  .join("\n")}

Toplam: ${totalPrice} TL
`
  window.open(`https://wa.me/905436446284?text=${encodeURIComponent(message)}`)
}

return(
<main className="min-h-screen bg-[#FAFAF7] text-[#2A1A14] font-sans">
<section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

  {/* KUTU */}
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Kutunuz</h2>
        <div className="flex gap-2">
          {([6, 8, 16, 24] as BoxSize[]).map(size => {
            const lastDigit = size % 10

            let suffix = "lı"
            if ([1, 2, 5, 7, 8].includes(lastDigit)) suffix = "li"
            else if ([3, 4].includes(lastDigit)) suffix = "lü"
            else if (lastDigit === 9) suffix = "lu"

            return (
              <button
                key={size}
                onClick={() => { setBoxSize(size); setSelected([]) }}
                className={`px-3 py-1 text-xs border ${boxSize === size ? "bg-[#2A1A14] text-white" : "border-[#E6D5B8]"}`}
              >
                {size}'{suffix}
              </button>
            )
          })}
        </div>
      </div>

    <div className="border p-4 bg-white shadow-sm w-full overflow-hidden">
      <div
        className={`
          grid gap-2 w-full
          ${boxSize === 6 ? "grid-cols-3" : ""}
          ${boxSize === 8 ? "grid-cols-4" : ""}
          ${boxSize === 16 ? "grid-cols-4" : ""}
          ${boxSize === 24 ? "grid-cols-3" : ""}
        `}
      >
        {[...Array(boxSize)].map((_, i) => {
          const p = selected[i]
          return(
            <div
              key={i}
              onClick={() => removeProduct(i)}
              className="aspect-square border hover:bg-[#F3EDE5] cursor-pointer"
            >
              {p && (
                <img
                  src={allProducts.find(x => x.name === p)?.image}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  </div>

  {/* SEÇİMLER */}
  <div>
    <h2 className="text-lg mb-4 font-semibold">Seçimleriniz</h2>
    <div className="space-y-2 text-sm">
      {Object.entries(counts).map(([k, v], i) => (
        <div key={k} className="flex justify-between border-b pb-1">
          <span>{i + 1} - {k}</span>
          <span>{v} / {minPerType[boxSize]} min</span>
        </div>
      ))}
    </div>
    <div className="mt-6 flex justify-between text-sm font-medium">
      <span>Toplam</span>
      <span>{totalPrice} TL</span>
    </div>
    <button
      onClick={sendWhatsAppOrder}
      className="mt-4 w-full bg-[#2A1A14] text-white py-3 hover:opacity-90 transition"
    >
      Sipariş Gönder
    </button>
    {warning && <p className="text-red-500 text-sm mt-3">{warning}</p>}
  </div>

  {/* ÇİKOLATALAR */}
  <div>
    <h2 className="text-xl mb-4 font-semibold">Çikolatalar</h2>
    <div className="flex gap-2 mb-4">
      {(["artisan", "nut", "fruit"] as CollectionKey[]).map(c => (
        <button
          key={c}
          onClick={() => setActiveCollection(c)}
          className={`px-3 py-1 text-xs border ${activeCollection === c ? "bg-[#2A1A14] text-white" : "border-[#E6D5B8]"}`}
        >
          {c === "artisan" ? "Artisan" : c === "nut" ? "Kuruyemişli" : "Meyveli"}
        </button>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-4">
      {products[activeCollection].map((p, i) => (
        <button
          key={i}
          onClick={() => addProduct(p.name)}
          className="border p-2 hover:scale-105 transition bg-white"
        >
          <img src={p.image} className="mb-2" />
          <p className="text-xs">{p.name}</p>
        </button>
      ))}
    </div>
  </div>

  {/* KILAVUZ */}
  <div>
    <h2 className="text-xl mb-4 font-semibold">Sipariş Kılavuzu</h2>
    <div className="text-sm space-y-4 leading-relaxed">
      <p><b>1.</b> 6'lı, 8'li, 16'lı veya 24'lü kutu seçeneklerinden birini seçin.</p>
      <p><b>2.</b> Bir kutuya en fazla 6 farklı çeşitte çikolata ekleyebilirsiniz. (6'lı kutuda 3 çeşit, 8'li kutuda ise 4 çeşit ile sınırlandırılmıştır.)</p>
      <p><b>3.</b> Üretim standartlarımız gereği, seçtiğiniz her çeşitten kutunuza en az 3 adet eklemelisiniz. (6'lı ve 8'li kutularda bu sınır en az 2 adettir.)</p>
      <p><b>4.</b> Menüdeki seçkin lezzetlerde adet başına ek fiyat uygulanabilir.</p>
      <p><b>5.</b> Siparişinizi tamamladıktan sonra WhatsApp üzerinden bizimle iletişime geçerek siparişinizi oluşturabilirsiniz.</p>
    </div>
  </div>

</section>
</main>
)
}