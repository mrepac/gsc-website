export default function Benefits() {
  const benefits = [
    {
      icon: 'Upload',
      title: 'Razvoj vodstvenih sposobnosti',
      description: 'Skozi različne programe boste razvili ključne vodstvene kompetence za uspešno kariero in vodenje projektov z družbenim vplivom.',
    },
    {
      icon: 'Heart',
      title: 'Močna mreža kontaktov',
      description: 'Dostop do mreže ambicioznih mladih voditeljev in priznanih mentorjev iz različnih področij v Sloveniji in po svetu.',
    },
    {
      icon: 'Information',
      title: 'Realizacija idej',
      description: 'Podporno okolje, kjer vaše ideje postanejo konkretni projekti s pomočjo mentorstva, znanja in dostopa do virov.',
    },
    {
      icon: 'Globe',
      title: 'Globalna perspektiva',
      description: 'Del globalne mreže World Economic Forum s povezavami v več kot 150 mestih po vsem svetu.',
    },
    {
      icon: 'User',
      title: 'Vpliv na družbo',
      description: 'Priložnost za ustvarjanje pozitivnih sprememb v lokalnem okolju in reševanje izzivov, ki so pomembni za vas.',
    },
    {
      icon: 'Buttondown',
      title: 'Osebna in strokovna rast',
      description: 'Kontinuirano učenje in razvoj skozi praktične izkušnje, delavnice in mentorstvo izkušenih strokovnjakov.',
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
          Ključne prednosti sodelovanja z Global Shapers Ljubljana
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow border border-gray-100"
            >
              {/* Icon placeholder */}
              <div className="w-12 h-12 bg-[#004b94] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#004b94] text-sm font-semibold">{benefit.icon}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

