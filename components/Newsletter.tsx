'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Uspešno ste se prijavili na newsletter!');
        setEmail('');
      } else {
        alert('Napaka pri prijavi. Poskusite znova.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Napaka pri prijavi. Poskusite znova.');
    }
  };

  return (
    <section id="pridruz-se" className="w-full py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-white p-8 md:p-12 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ostanite na tekočem z našimi novicami in dogodki
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Prijavite se na naš newsletter in bodite obveščeni o dogodkih, delavnicah in novih 
            projektih Global Shapers Ljubljana. Enkrat mesečno vam pošljemo kratek pregled dogajanja 
            in prihodnjih priložnosti.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Vaš e-naslov"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004b94] text-base placeholder:text-black"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#004b94] text-white rounded-lg font-semibold hover:bg-[#003a73] transition-colors whitespace-nowrap"
            >
              Prijavi se
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


