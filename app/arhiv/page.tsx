import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Arhiv() {
  const events = [
    {
      title: 'Shapetalk',
      description: 'Moderirana debata o delu in kako nas ta definira. Prijavi se za zagotovitev svojega mesta.',
      speaker: null,
      location: null,
      date: null,
    },
    {
      title: 'Od koncepta do produkta',
      speaker: 'Marko Grad',
      location: 'Impact Hub Ljubljana, Slovenska cesta 56',
      date: 'Torek, 20. maj 2025 ob 17:00',
    },
    {
      title: 'Poletna šola: Pot do uspeha 2024',
      location: 'Bohinj',
      date: '6. do 10. julij 2024',
    },
    {
      title: 'Umetna inteligenca: najvplivnejša sila sodobnega sveta',
      speaker: 'Mark Boris Andrijanič',
      location: 'Impact Hub Ljubljana, Slovenska cesta 56',
      date: 'Torek, 22. april 2025 ob 17:00',
    },
    {
      title: 'Work-life balnce?',
      speaker: 'Manca Šalehar',
      location: 'Impact Hub Ljubljana, Slovenska cesta 56',
      date: 'Četrtek, 4. april 2024 ob 18:00',
    },
    {
      title: 'Mi lahko uspe brez mreženja?',
      speaker: 'Boško Praštalo',
      location: 'Impact Hub Ljubljana, Slovenska cesta 56',
      date: 'Torek, 28. maj 2024 ob 18:00',
    },
    {
      title: 'The Pilot Mindset',
      speaker: 'Daniel Nath',
      location: 'Impact Hub Ljubljana, Slovenska cesta 56',
      date: 'Torek, 24. Junij 2025 ob 17:00',
    },
    {
      title: 'Think Global, Execute Local: Leadership in Networks',
      speaker: 'Dr. Žiga Vavpotič',
      location: 'Impact Hub Ljubljana, Slovenska cesta 56',
      date: 'Sreda, 24. September 2025 ob 17:00',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 pb-20 md:pb-0">
        <section className="w-full py-12 md:py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
                Arhiv preteklih srečanj in dogodkov
              </h1>
              <p className="text-lg md:text-xl text-center text-gray-600 mb-12">
                Tukaj najdeš pregled naših preteklih dogodkov, predavanj in projektov.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {event.title}
                      </h3>
                      {event.description && (
                        <p className="text-gray-700 mb-4 text-sm">
                          {event.description}
                        </p>
                      )}
                      {event.speaker && (
                        <div className="mb-2">
                          <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm text-gray-900">
                            {event.speaker}
                          </span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-start gap-2 mb-2 text-sm text-gray-600">
                          <span className="text-red-500 mt-0.5">📍</span>
                          <span>{event.location}</span>
                        </div>
                      )}
                      {event.date && (
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-0.5">🗓️</span>
                          <span>{event.date}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

