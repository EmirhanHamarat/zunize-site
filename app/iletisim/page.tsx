"use client"

import { useState } from "react"

export default function IletisimPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const phone = "905436446284"

    const text = `Merhaba, Zunize ile iletişime geçiyorum.%0A%0A
Ad Soyad: ${name}%0A
E-posta: ${email}%0A
Mesaj: ${message}`

    const url = `https://wa.me/${phone}?text=${text}`

    window.open(url, "_blank")
  }

  return (
    <main className="min-h-screen bg-[#FAFAF7] px-6 py-24">

      <div className="max-w-5xl mx-auto">

        <h1
          style={{ fontFamily: "'Cormorant Garamond', 'Didot', 'Georgia', serif", letterSpacing: "0.08em" }}
          className="text-3xl font-light text-[#2A1A14] mb-6 uppercase text-center"
        >
          İletişim
        </h1>

        <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mb-16" />

        <div className="grid md:grid-cols-2 gap-16">

          {/* SOL */}
          <div className="flex flex-col gap-6 text-[14px] text-[#2A1A14]/70 leading-relaxed">

            <p>
              Sorularınız, önerileriniz veya özel talepleriniz için bizimle iletişime geçebilirsiniz.
            </p>

            <div className="flex flex-col gap-2 mt-6">

              <a
                href="https://wa.me/905436446284"
                target="_blank"
                className="hover:text-[#C5A880] transition duration-300"
              >
                +90 543 644 62 84
              </a>

              <a
                href="mailto:zunizechocolate@gmail.com"
                className="hover:text-[#C5A880] transition duration-300"
              >
                zunizechocolate@gmail.com
              </a>

              <a
                href="https://www.instagram.com/zunizechocolate/"
                target="_blank"
                className="hover:text-[#C5A880] transition duration-300"
              >
                @zunizechocolate
              </a>

            </div>

          </div>

          {/* SAĞ FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">

            <input
              type="text"
              placeholder="Ad Soyad"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-b border-[#2A1A14]/20 bg-transparent outline-none py-3 text-[14px] placeholder:text-[#2A1A14]/40 focus:border-[#C5A880] transition"
            />

            <input
              type="email"
              placeholder="E-posta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-b border-[#2A1A14]/20 bg-transparent outline-none py-3 text-[14px] placeholder:text-[#2A1A14]/40 focus:border-[#C5A880] transition"
            />

            <textarea
              placeholder="Mesajınız"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="border-b border-[#2A1A14]/20 bg-transparent outline-none py-3 text-[14px] placeholder:text-[#2A1A14]/40 focus:border-[#C5A880] transition resize-none"
            />

            <button
              type="submit"
              className="mt-8 border border-[#C5A880] text-[#C5A880] py-3 text-[13px] tracking-[0.2em] uppercase hover:bg-[#C5A880] hover:text-white transition duration-300"
            >
              WhatsApp ile Gönder
            </button>

          </form>

        </div>

      </div>

    </main>
  )
}