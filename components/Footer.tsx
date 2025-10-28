export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Global Shapers Ljubljana
            </h3>
            <p className="text-gray-600 mb-2">
              Slovenska cesta 56,<br />
              1000 Ljubljana, Slovenija
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Strani
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#programi" className="text-gray-600 hover:text-[#004b94] transition">
                  Programi
                </a>
              </li>
              <li>
                <a href="#academy" className="text-gray-600 hover:text-[#004b94] transition">
                  Academy
                </a>
              </li>
              <li>
                <a href="#poletna-sola" className="text-gray-600 hover:text-[#004b94] transition">
                  Poletna šola
                </a>
              </li>
              <li>
                <a href="#o-nas" className="text-gray-600 hover:text-[#004b94] transition">
                  O nas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Kontakt
            </h4>
            <p className="text-gray-600 mb-2">
              Za sodelovanje nam piši na
            </p>
            <a
              href="mailto:info@gscljubljana.org"
              className="text-[#004b94] hover:text-[#003a73] transition"
            >
              info@gscljubljana.org
            </a>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Socialna omrežja
            </h4>
            <a
              href="https://www.instagram.com/globalshapersljubljana/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-[#004b94] transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-label="Instagram"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Global Shapers Ljubljana. Vse pravice pridržane.</p>
        </div>
      </div>
    </footer>
  );
}
