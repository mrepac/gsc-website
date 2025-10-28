export default function SummerSchool() {
  return (
    <section id="poletna-sola" className="w-full py-12 md:py-20 lg:py-32 bg-[#004b94] text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-lg text-sm md:text-base">
              INVESTICIJA V MLADE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Poletna šola
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Naša poletna šola je petdnevno doživetje za dijake, ki je popolnoma brezplačno. 
            Spoznaš podjetništvo v praksi, odkrivaš svoje talente, razmisliš o študijskih možnostih 
            in se učiš stvari, ki ti bodo koristile, ne glede na to, kam te bo življenje zaneslo. 
            Plus, spoznaš kup super ljudi!
          </p>
          <a
            href="#pridruz-se"
            className="inline-block px-8 py-3 bg-white text-[#004b94] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Več informacij →
          </a>
        </div>
      </div>
    </section>
  );
}


