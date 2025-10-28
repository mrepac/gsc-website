import Image from 'next/image';

export default function Programs() {
  const programs = [
    {
      title: 'Global Shapers Academy',
      subtitle: 'Platforma za uresničevanje idej',
      description: 'Shapers Academy je naš prostor, kjer lahko mladi razvijajo in delijo svoje poglede na svet. Pri nas dobiš podporo, da svojo zamisel izpiliš in jo samozavestno predstaviš drugim - brez pritiska, z veliko spodbude.',
      image: 'https://gscljubljana.org/assets/images/image03.jpg?v=8d89fc03',
    },
    {
      title: 'Predavanja in dogodki',
      subtitle: 'Veščine, ki jih v šoli ne učijo',
      description: 'Na naših srečanjih govorimo o stvareh, ki jih v šolah običajno preskočijo. Podjetništvo v praksi, kako razvijati svoj način razmišljanja, kako se najti v svetu financ, kako vzdrževati ravnovesje med delom in življenjem... Prinašamo ti uporabno znanje, ki ga boš dejansko potreboval v življenju.',
      image: '/vavpotic_slika.jpeg',
    },
    {
      title: 'Poletna šola',
      subtitle: 'INVESTICIJA V MLADE',
      description: 'Naša poletna šola je petdnevno doživetje za dijake, ki je popolnoma brezplačno. Spoznaš podjetništvo v praksi, odkrivaš svoje talente, razmisliš o študijskih možnostih in se učiš stvari, ki ti bodo koristile, ne glede na to, kam te bo življenje zaneslo. Plus, spoznaš kup super ljudi!',
      image: 'https://gscljubljana.org/assets/images/image06.jpg?v=8d89fc03',
    },
  ];

  return (
    <section id="programi" className="w-full py-12 md:py-20 lg:py-32 bg-white">
      <div id="academy"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
Iniciative
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-600 mb-12">
            Priložnosti za tvoj razvoj in povezovanje
          </p>

          <div className="space-y-12 md:space-y-16">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 md:p-10">
                    <p className="text-[#004b94] font-semibold text-sm mb-2 uppercase tracking-wide">
                      {program.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {program.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

