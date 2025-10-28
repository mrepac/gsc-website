import Image from 'next/image';

export default function About() {
  return (
    <section id="o-nas" className="w-full py-12 md:py-20 lg:py-32 bg-[#004b94]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
            O nas
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-white mb-6">
              Global Shapers Ljubljana je skupnost mladih voditeljev, ki aktivno deluje v Ljubljani in širše v Sloveniji. 
              Naša skupnost je del globalne mreže World Economic Forum.
            </p>
            <p className="text-lg md:text-xl text-white mb-6">
              Skupaj ustvarjamo projekte, ki pozitivno vplivajo na lokalno skupnost in krepijo povezanost mladih po vsem svetu.
            </p>
            
            {/* Single Image */}
            <div className="my-12">
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/gas25.png"
                  alt="Global Shapers"
                  width={1200}
                  height={675}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Button to Ekipa page */}
            <div className="text-center mb-8">
              <a
                href="/ekipa"
                className="inline-block px-8 py-3 bg-white text-[#004b94] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Spoznaj našo ekipo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

