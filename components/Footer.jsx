export default function Footer() {
  return (
    <footer className="border-t border-[#E6D5B8] bg-[#FAFAF7] mt-32">

      <div className="max-w-4xl mx-auto px-8 py-24">

        <h2
          style={{ fontFamily: "'Cormorant Garamond', 'Didot', 'Georgia', serif", letterSpacing: "0.08em" }}
          className="text-3xl font-light text-[#2A1A14] mb-4 uppercase"
        >
          Bize Ulaşın
        </h2>

        <div className="w-12 h-[1px] bg-[#C5A880] mb-8" />

        <p className="text-[14px] text-[#2A1A14]/60 leading-relaxed mb-8 max-w-md">
          Aklınıza takılan her türlü soru, destek ve bilgi için bizimle iletişime geçebilirsiniz.
        </p>

        {/* İLETİŞİM */}
        <div className="flex flex-col gap-4 text-[14px]">

          <a
            href="https://wa.me/905436446284"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#2A1A14] hover:text-[#C5A880] transition duration-300"
          >
            +90 543 644 62 84
          </a>

          <a
            href="mailto:zunizechocolate@gmail.com"
            className="text-[#2A1A14]/80 hover:text-[#C5A880] transition duration-300"
          >
            zunizechocolate@gmail.com
          </a>

          <a
            href="https://www.instagram.com/zunizechocolate/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2A1A14]/70 hover:text-[#C5A880] transition duration-300"
          >
            @zunizechocolate
          </a>

        </div>

      </div>

      {/* ALT */}
      <div className="border-t border-[#E6D5B8]/60 max-w-4xl mx-auto px-8 py-6">
        <p className="text-[11px] text-[#2A1A14]/40 tracking-[0.15em] uppercase">
          © {new Date().getFullYear()} Zunize — Tüm hakları saklıdır
        </p>
      </div>

    </footer>
  )
}