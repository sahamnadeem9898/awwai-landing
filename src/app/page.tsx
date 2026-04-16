export default function Home() {
  return (
    <div className="min-h-screen bg-[#16213E]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
              AwwAI
            </h1>
            <p className="mt-8 text-2xl font-semibold text-white sm:text-3xl">
              The Future of Intelligent Solutions
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Transform your business with cutting-edge AI technology. Fast, secure, and intelligent solutions that adapt to your needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <a
                href="#features"
                className="rounded-lg bg-[#E94560] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#d63850] hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="#contact"
                className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#1A1A2E]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#1A1A2E] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white">Why Choose AwwAI?</h2>
            <p className="mt-4 text-xl text-gray-300">
              Powerful features designed for modern businesses
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl bg-[#0F3460] p-8 transition-all hover:scale-105">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#E94560]">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Lightning Fast</h3>
              <p className="mt-4 text-gray-300">
                Process data at incredible speeds with our optimized AI algorithms
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl bg-[#0F3460] p-8 transition-all hover:scale-105">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#E94560]">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Enterprise Security</h3>
              <p className="mt-4 text-gray-300">
                Bank-grade encryption and security protocols to keep your data safe
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl bg-[#0F3460] p-8 transition-all hover:scale-105">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#E94560]">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Smart Analytics</h3>
              <p className="mt-4 text-gray-300">
                Get actionable insights with our advanced analytics dashboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-r from-[#E94560] to-[#d63850] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-6 text-xl text-white">
            Join thousands of businesses already using AwwAI to transform their operations
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="rounded-lg bg-white px-10 py-5 text-lg font-semibold text-[#1A1A2E] shadow-xl transition-all hover:bg-gray-100 hover:shadow-2xl"
            >
              Start Your Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-400">
            © 2026 AwwAI by TVAG Teams. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
