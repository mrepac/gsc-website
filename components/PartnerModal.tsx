'use client';

import Image from 'next/image';

interface PartnerModalProps {
  onClose: () => void;
}

export default function PartnerModal({ onClose }: PartnerModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Za podjetja</h2>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ste pripravljeni podpreti mlade soustvarjalce prihodnosti?
            </h3>
            
            <p className="text-lg text-gray-700 mb-6">
              Vabimo vas, da kot partner Global Shapers Ljubljana sooblikujete prihodnost mladih 
              talentov in hkrati krepite prepoznavnost svoje blagovne znamke. S sponzorstvom naših 
              programov ne podpirate le razvoja veščin, ki jih mladi potrebujejo za uspeh, temveč 
              tudi gradite most do nove generacije inovativnih mislecev in potencialnih sodelavcev.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Vaše podjetje lahko prispeva k družbeni odgovornosti, medtem ko pridobiva dostop do 
              svežih idej, navdušenih mladih talentov in mednarodne mreže Global Shapers. Skupaj 
              lahko ustvarimo pobude po meri, ki podpirajo vaše poslovne cilje in hkrati pozitivno 
              vplivajo na našo skupnost.
            </p>

            {/* Partner Gallery */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Naši partnerji</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition">
                  <Image
                    src="https://gscljubljana.org/assets/images/gallery01/486d1e88.png?v=8d89fc03"
                    alt="Partner 1"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition">
                  <Image
                    src="https://gscljubljana.org/assets/images/gallery01/cd3ef466.png?v=8d89fc03"
                    alt="Partner 2"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition">
                  <Image
                    src="https://gscljubljana.org/assets/images/gallery01/0bd940c0.png?v=8d89fc03"
                    alt="Partner 3"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition">
                  <Image
                    src="https://gscljubljana.org/assets/images/gallery01/33b4f878.png?v=8d89fc03"
                    alt="Partner 4"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition">
                  <Image
                    src="https://www.tp-lj.si/images/logos/tp-logo.png"
                    alt="TP Ljubljana"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <a
              href="mailto:info@gscljubljana.org"
              className="block w-full px-8 py-3 bg-[#004b94] text-white rounded-lg font-semibold hover:bg-[#003a73] transition-colors text-center"
            >
              Postanite partner
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

