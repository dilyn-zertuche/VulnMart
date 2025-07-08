import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
      <header className="bg-blue-950 shadow-lg py-6 px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" /></svg>
          <span className="text-3xl font-extrabold tracking-tight text-cyan-300 drop-shadow">VulnMart</span>
        </div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-cyan-400 font-semibold">Home</a>
          <a href="#" className="hover:text-cyan-400 font-semibold">Shop</a>
          <a href="#" className="hover:text-cyan-400 font-semibold">Cart</a>
          <a href="#" className="hover:text-cyan-400 font-semibold">Login</a>
        </nav>
      </header>
      <main className="max-w-5xl mx-auto py-16 px-4">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-cyan-300 drop-shadow">Welcome to VulnMart</h1>
          <p className="text-lg text-gray-200 mb-6">The Tech Marketplace with a Twist: Buy, Break, and Learn!</p>
          <p className="text-md text-cyan-200">Practice your pentesting skills on this intentionally vulnerable eCommerce platform.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-cyan-200 mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center border border-cyan-800 hover:scale-105 transition-transform">
              <img src="https://cdn-icons-png.flaticon.com/512/2721/2721296.png" alt="Vulnerable Widget" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Vulnerable Widget</h3>
              <p className="text-gray-300 mb-2">A widget with more holes than Swiss cheese. Perfect for XSS and IDOR fun!</p>
              <span className="text-cyan-400 font-bold text-lg mb-2">$19.99</span>
              <button className="mt-auto bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
            </div>
            <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center border border-cyan-800 hover:scale-105 transition-transform">
              <img src="https://cdn-icons-png.flaticon.com/512/2721/2721304.png" alt="Insecure Gadget" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Insecure Gadget</h3>
              <p className="text-gray-300 mb-2">This gadget leaks more than a sieve. Try your hand at SQLi and CSRF!</p>
              <span className="text-cyan-400 font-bold text-lg mb-2">$29.99</span>
              <button className="mt-auto bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
            </div>
            <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center border border-cyan-800 hover:scale-105 transition-transform">
              <img src="https://cdn-icons-png.flaticon.com/512/2721/2721302.png" alt="Exploitable Gizmo" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Exploitable Gizmo</h3>
              <p className="text-gray-300 mb-2">A gizmo designed for RCE and logic flaws. Hack away!</p>
              <span className="text-cyan-400 font-bold text-lg mb-2">$49.99</span>
              <button className="mt-auto bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-blue-950 text-center py-4 text-cyan-200 mt-16 shadow-inner">
        &copy; {new Date().getFullYear()} VulnMart. For educational use only.
      </footer>
    </div>
  );
}

export default Home;