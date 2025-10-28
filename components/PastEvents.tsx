'use client';

import { useForm } from 'react-hook-form';
import Image from 'next/image';

export default function PastEvents() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await response.json();
      
      if (result.success) {
        alert('Uspešno ste se prijavili na newsletter!');
      } else {
        alert('Napaka pri prijavi. Poskusite znova.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Napaka pri prijavi. Poskusite znova.');
    }
  };

  return (
    <section id="dogodki" className="w-full py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
          Dogodki
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-4">
          Ustvarjamo prostor za vaš napredek
        </p>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 hidden md:block">
            <a
              href="/arhiv"
              className="inline-block text-[#004b94] font-semibold hover:text-[#003a73] transition"
            >
              Prikaži vse dogodke →
            </a>
          </div>

          <div className="relative grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Desktop Arrow */}
            <a 
              href="/arhiv" 
              className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 z-10 hover:opacity-70 transition"
            >
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
            {/* Middle Event - Order 1 on mobile (TOP) */}
            <div className="flex flex-col order-1 md:order-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex-1">
                <div className="relative aspect-[277/347]">
                  <Image
                    src="https://gscljubljana.org/assets/images/image23.jpg?v=8d89fc03"
                    alt="Misli globalno, izvajaj lokalno"
                    width={960}
                    height={1200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Misli globalno, izvajaj lokalno: Mreže, ki povezujejo
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Navdihujoče predavanje dr. Žige Vavpotiča o vlogi voditelja in uravnoteževanju globalne vizije z lokalnim izvajanjem.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><code className="bg-gray-100 px-2 py-1 rounded">📍Impact Hub Ljubljana</code></p>
                    <p>🗓️ Sreda, 24. 9.<br />🕔 Ob 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Event - Order 2 on mobile */}
            <div className="flex flex-col order-2 md:order-1">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex-1">
                <div className="relative aspect-[277/347]">
                  <Image
                    src="https://gscljubljana.org/assets/images/image17.jpg?v=8d89fc03"
                    alt="Daniel Nath: The Pilot Mindset"
                    width={960}
                    height={1200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Daniel Nath: The Pilot Mindset
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Z Danielom Nathom o podjetništvu ki ne prinaša le profita, ampak tudi pozitivne spremembe.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><code className="bg-gray-100 px-2 py-1 rounded">📍Impact Hub Ljubljana</code></p>
                    <p>🗓️ Torek, 24. 6.<br />🕔 Ob 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Form - Order 3 on mobile (BOTTOM) */}
            <div className="flex flex-col items-center p-6 order-3 md:order-3">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Ostanite na tekočem z<br />našimi novicami in dogodki
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-8 text-center max-w-md">
                Prijavite se na naš newsletter in bodite obveščeni o dogodkih, delavnicah in novih projektih Global Shapers Ljubljana. Enkrat mesečno vam pošljemo kratek pregled dogajanja in prihodnjih priložnosti.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                <div className="flex gap-3">
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email je obvezen',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Neveljaven email naslov'
                      }
                    })}
                    placeholder="Vaš e-naslov"
                    className="flex-1 px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004b94] text-sm placeholder:text-black"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#004b94] text-white rounded-lg font-semibold hover:bg-[#003a73] transition-colors whitespace-nowrap"
                  >
                    Prijavi se
                  </button>
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-2 text-center">{errors.email.message as string}</p>
                )}
              </form>
              
              {/* Archive Button - Mobile Only */}
              <a
                href="/arhiv"
                className="mt-6 px-6 py-3 bg-white text-[#004b94] rounded-lg font-semibold border-2 border-[#004b94] hover:bg-gray-50 transition-colors md:hidden"
              >
                Prikaži vse dogodke →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
