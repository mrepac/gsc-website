'use client';

interface MemberModalProps {
  onClose: () => void;
}

export default function MemberModal({ onClose }: MemberModalProps) {
  const benefits = [
    {
      icon: '📈',
      title: 'Razvoj vodstvenih sposobnosti',
      description: 'Skozi različne programe boste razvili ključne vodstvene kompetence za uspešno kariero in vodenje projektov z družbenim vplivom.',
    },
    {
      icon: '🤝',
      title: 'Močna mreža kontaktov',
      description: 'Dostop do mreže ambicioznih mladih voditeljev in priznanih mentorjev iz različnih področij v Sloveniji in po svetu.',
    },
    {
      icon: '💡',
      title: 'Realizacija idej',
      description: 'Podporno okolje, kjer vaše ideje postanejo konkretni projekti s pomočjo mentorstva, znanja in dostopa do virov.',
    },
    {
      icon: '🌐',
      title: 'Globalna perspektiva',
      description: 'Del globalne mreže World Economic Forum s povezavami v več kot 150 mestih po vsem svetu.',
    },
    {
      icon: '🏆',
      title: 'Vpliv na družbo',
      description: 'Priložnost za ustvarjanje pozitivnih sprememb v lokalnem okolju in reševanje izzivov, ki so pomembni za vas.',
    },
    {
      icon: '📚',
      title: 'Osebna in strokovna rast',
      description: 'Kontinuirano učenje in razvoj skozi praktične izkušnje, delavnice in mentorstvo izkušenih strokovnjakov.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Pridruži se</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ključne prednosti sodelovanja z Global Shapers Ljubljana
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#004b94] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-[#004b94] text-xl font-semibold">{benefit.icon}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="mailto:info@gscljubljana.org"
              className="block w-full px-8 py-3 bg-[#004b94] text-white rounded-lg font-semibold hover:bg-[#003a73] transition-colors text-center"
            >
              Postani član
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

