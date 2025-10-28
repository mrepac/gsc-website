import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-32 bg-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Oblikujemo prihodnost
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                Global Shapers Ljubljana povezuje mlade z idejami, ki spreminjajo svet. 
                Naša skupnost je del globalne mreže <a href="https://www.weforum.org/" className="text-[#004b94] underline">World Economic Forum</a>.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 md:order-2">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/gas25.png"
                  alt="Hero illustration"
                  width={800}
                  height={600}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
