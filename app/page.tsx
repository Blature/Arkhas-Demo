import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PricingDisclaimer from "@/components/PricingDisclaimer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Hero />
      <PricingDisclaimer />
      <Services />
      
      <section id="contact" className="w-full py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your consultation. Remember, our expert advice starts at just $10.
          </p>
          <a
            href="mailto:info@example.com"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </main>
  );
}
