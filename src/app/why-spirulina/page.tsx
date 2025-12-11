import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function WhySpirulinaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-dark text-center">
            Nature's Most Powerful Superfood — Now in Every Bite
          </h1>

          <div className="prose max-w-none space-y-8">
            <p className="text-lg text-gray-700">
              Spirulina is a microscopic blue-green algae known as Earth's first food. It's packed with:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-3 text-primary">60% Complete Protein</h3>
                <p className="text-gray-700">More protein than any plant or meat source</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-3 text-primary">Rich in Nutrients</h3>
                <p className="text-gray-700">Iron, Vitamin B12, Calcium, Magnesium</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-3 text-primary">Powerful Antioxidants</h3>
                <p className="text-gray-700">Phycocyanin & Chlorophyll</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-3 text-primary">Scientifically Validated</h3>
                <p className="text-gray-700">Recognized by NASA and WHO</p>
              </div>
            </div>

            <div className="card bg-primary text-white my-8">
              <h2 className="text-2xl font-bold mb-6">Health Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <span>💚</span>
                  <span>Boosts Immunity</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>💪</span>
                  <span>Increases Strength & Energy</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>🧠</span>
                  <span>Improves Focus</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>💅</span>
                  <span>Promotes Skin & Hair Health</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>❤️</span>
                  <span>Supports Heart & Blood Health</span>
                </div>
              </div>
            </div>

            <div className="card my-8">
              <h2 className="text-2xl font-bold mb-6 text-dark">Nutrition Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Food</th>
                      <th className="text-right py-3 px-4">Protein per 100g</th>
                      <th className="text-right py-3 px-4">Iron (mg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-primary text-white">
                      <td className="py-3 px-4 font-bold">Spirulina</td>
                      <td className="py-3 px-4 text-right">60g</td>
                      <td className="py-3 px-4 text-right">28</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Eggs</td>
                      <td className="py-3 px-4 text-right">13g</td>
                      <td className="py-3 px-4 text-right">1.8</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Spinach</td>
                      <td className="py-3 px-4 text-right">3g</td>
                      <td className="py-3 px-4 text-right">2.7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/shop" className="btn-primary text-lg px-8 py-4">
                Shop Spirulina Products
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

