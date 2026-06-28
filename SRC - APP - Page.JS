export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <section className="max-w-4xl mx-auto px-6 py-10">
        <header className="bg-gray-900 text-white rounded-lg px-8 py-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">Kaden McLachlan</h1>
          <p className="text-sm text-gray-300">
            Tampa, FL | kadenmclachlan5@gmail.com | LinkedIn: Kaden McLachlan
          </p>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Business Analytics and Information Systems student at the University
            of South Florida with interests in finance, data analysis, wealth
            management, and client service. Experienced in leadership,
            communication, legal office support, and professional teamwork.
          </p>
        </header>
        <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-gray-200 pb-2 mb-4">
            Education
          </h2>
          <h3 className="font-semibold text-lg">University of South Florida</h3>
          <p className="text-gray-600">
            Bachelor of Science in Business Analytics and Information Systems
          </p>
          <p className="text-gray-600">
            Minors: Risk Management and Insurance, Communications
          </p>
          <p className="text-gray-600">Tampa, FL</p>
        </section>
        <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-gray-200 pb-2 mb-4">
            Work Experience
          </h2>
          <div className="mb-5">
            <h3 className="font-semibold text-lg">Legal Assistant</h3>
            <p className="text-gray-600">Levy & Levy</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Assisted with legal office organization and client-related tasks.</li>
              <li>Supported attorneys and staff with administrative responsibilities.</li>
              <li>Developed professional communication and attention to detail.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Service & Operations Associate
            </h3>
            <p className="text-gray-600">Fisher Investments</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Supported client service and operations-related processes.</li>
              <li>Helped maintain internal resources, data, and client information.</li>
              <li>Gained exposure to wealth management operations and teamwork.</li>
            </ul>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-gray-200 pb-2 mb-4">
            Leadership
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Elected University of South Florida Student Government Senator.</li>
            <li>Dean’s Student Leadership Society member.</li>
            <li>Fraternity and Sorority Life Ambassador.</li>
            <li>Honor Board Member at Large for Delta Gamma chapter.</li>
          </ul>
        </section>
        <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-gray-200 pb-2 mb-4">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Data Analysis
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Microsoft Excel
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Communication
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Client Service
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Leadership
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Problem Solving
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Teamwork
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Research
            </span>
          </div>
        </section>
        <footer className="text-center text-sm text-gray-500 mt-8">
          <p>Built with Next.js and Tailwind CSS</p>
        </footer>
      </section>
    </main>
  );
}
