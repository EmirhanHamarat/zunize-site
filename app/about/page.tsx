export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF7] px-6 py-24">

      <div className="max-w-3xl mx-auto">

        {/* BAŞLIK */}
        <h1
          style={{ fontFamily: "'Cormorant Garamond', 'Didot', 'Georgia', serif", letterSpacing: "0.08em" }}
          className="text-3xl font-light text-[#2A1A14] mb-6 uppercase text-center"
        >
          Hakkımızda
        </h1>

        <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mb-16" />

        {/* METİNLER */}
        <div className="flex flex-col gap-10 text-[14px] text-[#2A1A14]/70 leading-relaxed text-center">

          <p>
            Biz iki öğrencinin hayaliyle başladık. Not defterlerinin arasında, sınav haftalarının yorgunluğunda, mutfağın içten sıcaklığında doğdu bu marka.
          </p>

          <p>
            Çünkü çikolata bizim için sadece bir tatlı değil; emek, paylaşım ve samimiyet demekti. Bu yüzden yola “İçimizden geldiği gibi” diyerek çıktık.
          </p>

          <p>
            El yapımı üretim yapıyor; içeriğimizi mümkün olduğunca doğal, sade ve taze tutmaya özen gösteriyoruz. En iyi malzemeleri seçiyor, her ürünü küçük partiler halinde, sabırla ve dikkatle hazırlıyoruz. Seri ve ruhsuz üretim yerine emeği ve özeni merkeze koyuyoruz.
          </p>

          <p>
            Biz bir öğrenci ekibiyiz. Dinamik, öğrenmeye açık ve üretmekten heyecan duyan bir grubuz. Bu marka; genç bir cesaretin ve birlikte emek vermenin hikâyesi.
          </p>

          <p>
            Sipariş geldiği anda mutfağımız yeniden hareketlenir. Ürünlerimiz stokta beklemez; her biri sizin için o an hazırlanır, tazeliğini koruması için özenle paketlenir.
          </p>

        </div>

        {/* ALT VURGU */}
        <div className="mt-20 text-center">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#2A1A14]/50">
            Her bir çikolatamız gerçekten içimizden geldiği gibi hazırlanır. Çünkü biz inanıyoruz ki en güzel tat, samimiyetten gelir.
          </p>
        </div>

      </div>

    </main>
  )
}