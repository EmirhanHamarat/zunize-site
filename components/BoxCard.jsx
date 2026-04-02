"use client"

import Link from "next/link"
import Image from "next/image"

export default function BoxCard({ collection }) {

  const imageMap = {
    artisan: "/images/karamelli.jpg",
    nut: "/images/fistikli-pralin.jpg",
    fruit: "/images/kuru-portakal-bitter.jpg",
    "build-box": "/images/kuru-cilekli-beyaz.jpg"
  }

  const imageSrc = imageMap[collection.slug] || "/images/placeholder.jpg"
  const isBuildBox = collection.slug === "build-box"

  return (
    <Link
      href={
        isBuildBox
          ? "/build-box"
          : `/collections/${collection.slug}`
      }
      className="group block"
    >

      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#F5F5F5]">

        <Image
          src={imageSrc}
          alt={collection.title}
          fill
          className="object-cover brightness-[0.98] contrast-[1.05] transition duration-700 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition" />

        <div className="absolute bottom-7 left-0 w-full text-center px-4">

          <h3 className="text-[14px] md:text-[15px] tracking-[0.28em] uppercase text-black/80 group-hover:text-black transition">
            {collection.title}
          </h3>

          <div className="mt-2 w-12 h-[1px] bg-black/40 mx-auto group-hover:w-20 group-hover:bg-black transition-all duration-300" />

        </div>

      </div>

    </Link>
  )
}