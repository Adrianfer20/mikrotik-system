import React from 'react';

function About() {
  return (
    <>
      <section className="w-full flex flex-col flex-grow justify-center items-center py-20 px-8">
          <h2 className="text-2xl font-semibold text-blue-950/70 text-center uppercase tracking-wide mb-2">Sobre Nosotros</h2>
          <h1 className="text-5xl font-extrabold text-blue-950 text-center mb-5">A|R System</h1>
          <p className="text-lg text-blue-950/90 text-center max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam expedita exercitationem dolores necessitatibus beatae alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita exercitationem dolores necessitatibus beatae alias?
          </p>
          <ul className="flex space-x-4 my-4">
    <li>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-600 hover:text-blue-800">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35C.594 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.326 24h11.495v-9.294H9.807v-3.631h2.014V8.301c0-2.006 1.232-3.107 3.03-3.107.86 0 1.604.064 1.819.092v2.11h-1.247c-1.011 0-1.208.481-1.208 1.186v1.554h2.415l-.315 3.631h-2.1V24h4.124C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0z"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-blue-400 hover:text-blue-600">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.83.656-2.825.775 1.014-.608 1.794-1.57 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.921 2.202-4.921 4.917 0 .39.043.765.127 1.124C7.688 8.087 4.066 6.13 1.64 3.161c-.427.73-.666 1.577-.666 2.476 0 1.71.87 3.214 2.191 4.097-.807-.026-1.566-.247-2.228-.616v.061c0 2.386 1.698 4.377 3.946 4.827-.414.111-.849.171-1.296.171-.317 0-.625-.031-.927-.088.631 1.957 2.449 3.38 4.604 3.422-1.688 1.322-3.808 2.109-6.115 2.109-.397 0-.789-.023-1.176-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.054 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636.961-.695 1.796-1.562 2.457-2.549z"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-pink-500 hover:text-pink-700">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.206.056 1.845.245 2.277.415.507.198.873.437 1.256.82.384.384.623.749.82 1.256.17.432.359 1.071.415 2.277.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.056 1.206-.245 1.845-.415 2.277-.198.507-.437.873-.82 1.256-.384.384-.749.623-1.256.82-.432.17-1.071.359-2.277.415-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.206-.056-1.845-.245-2.277-.415-.507-.198-.873-.437-1.256-.82-.384-.384-.623-.749-.82-1.256-.17-.432-.359-1.071-.415-2.277-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.056-1.206.245-1.845.415-2.277.198-.507.437-.873.82-1.256.384-.384.749-.623 1.256-.82.432-.17 1.071-.359 2.277-.415 1.265-.058 1.645-.07 4.849-.07M12 0c-3.259 0-3.667.013-4.947.072-1.274.058-2.148.25-2.892.537-.797.306-1.474.756-2.142 1.423-.667.667-1.117 1.344-1.423 2.142-.287.744-.479 1.618-.537 2.892C2.013 8.333 2 8.741 2 12c0 3.259.013 3.667.072 4.947.058 1.274.25 2.148.537 2.892.306.797.756 1.474 1.423 2.142.667.667 1.344 1.117 2.142 1.423.744.287 1.618.479 2.892.537 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.274-.058 2.148-.25 2.892-.537.797-.306 1.474-.756 2.142-1.423.667-.667 1.117-1.344 1.423-2.142.287-.744.479-1.618.537-2.892.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.058-1.274-.25-2.148-.537-2.892-.306-.797-.756-1.474-1.423-2.142-.667-.667-1.344-1.117-2.142-1.423-.744-.287-1.618-.479-2.892-.537C15.667.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
        </svg>
      </a>
    </li>
  </ul>
      </section>

    </>
  )

}

export default About;
