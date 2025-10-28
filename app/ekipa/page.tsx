import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Ekipa() {
  const teamMembers = [
    { name: 'Marko Grad', role: 'CURATOR' },
    { name: 'Nik Slobodjanac', role: 'VICE CURATOR' },
    { name: 'Timotej Lemut', role: null },
    { name: 'Marko Pleterski', role: null },
    { name: 'Lara Sodec', role: null },
    { name: 'Nejc Krevs', role: null },
    { name: 'Taj Lavrič', role: null },
    { name: 'Filip Kolle', role: null },
    { name: 'Mark Repac', role: null },
    { name: 'Domen Bergant', role: null },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 pb-20 md:pb-0">
        <section className="w-full py-12 md:py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* O nas Section */}
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  O nas
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
                  Global Shapers Ljubljana smo skupnost mladih, ki verjame v moč povezovanja in znanja. 
                  Smo del globalne mreže World Economic Forum, ki združuje mlade med 18. in 30. letom v več kot 450 mestih po vsem svetu.
                </p>
              </div>

              {/* Naše poslanstvo Section */}
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Naše poslanstvo
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
                  Ustvarjamo prostor, kjer mladi lahko razvijajo svoje potenciale in ideje pretvarjajo v dejanja. 
                  Naši programi zapolnjujejo vrzel med formalnim izobraževanjem in praktičnimi veščinami, ki jih mladi potrebujejo za uspeh v hitro spreminjajočem se svetu.
                </p>
              </div>

              {/* Kdo smo Section */}
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Kdo smo?
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
                  Smo ekipa prostovoljcev z raznolikimi ozadji - od podjetnikov in strokovnjakov za tehnologijo do umetnikov in raziskovalcev. 
                  Povezuje nas skupna želja po ustvarjanju pozitivnih sprememb v lokalni skupnosti in širše.
                </p>
              </div>

              {/* Team Members */}
              <div className="mt-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
                  Naša ekipa
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="text-center">
                      <div className="mb-2">
                        <p style={{ 
                          color: '#141414',
                          fontSize: '1.625em',
                          lineHeight: '1.375',
                          fontWeight: 500
                        }}>
                          {member.name}
                        </p>
                        {member.role && (
                          <p className="text-sm text-[#004b94] font-medium mt-2">
                            {member.role}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

