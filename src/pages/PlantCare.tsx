import { Droplets, Sun, Sprout, Leaf } from 'lucide-react';

export default function PlantCare() {
  return (
    <div className="min-h-screen bg-stone-50 pb-12">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-green-900 text-white overflow-hidden mb-12">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://i0.wp.com/mrplantgeek.com/wp-content/uploads/2023/05/houseplants-that-like-shade.jpg?fit=1000%2C500&ssl=1" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6">Plant Care Guide</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Everything you need to know to keep your green friends happy and healthy.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-12">
          {/* Watering Guide */}
          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-2xl text-blue-500">
                <Droplets className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-serif font-medium text-stone-900">Watering Guide</h2>
            </div>
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-600 mb-6">Overwatering is the #1 killer of houseplants. When in doubt, wait it out!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                  <h3 className="font-medium text-stone-900 mb-2">The Finger Test</h3>
                  <p className="text-sm text-stone-600">Stick your finger about 2 inches into the soil. If it feels dry, it's time to water. If it's still moist, wait a few more days.</p>
                </div>
                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                  <h3 className="font-medium text-stone-900 mb-2">Bottom Watering</h3>
                  <p className="text-sm text-stone-600">Place your pot (with drainage holes) in a bowl of water for 20-30 minutes. The plant will drink exactly what it needs.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sunlight Guide */}
          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-amber-50 p-3 rounded-2xl text-amber-500">
                <Sun className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-serif font-medium text-stone-900">Sunlight Guide</h2>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 items-start border-b border-stone-100 pb-6">
                <div className="w-32 shrink-0 font-medium text-stone-900">Bright Direct</div>
                <p className="text-stone-600 text-sm">Right in front of a south or west-facing window. The sun's rays hit the plant directly. Best for cacti and succulents.</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-start border-b border-stone-100 pb-6">
                <div className="w-32 shrink-0 font-medium text-stone-900">Bright Indirect</div>
                <p className="text-stone-600 text-sm">Near a sunny window, but out of direct rays. Or filtered through a sheer curtain. Most tropical plants love this.</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-32 shrink-0 font-medium text-stone-900">Low Light</div>
                <p className="text-stone-600 text-sm">North-facing windows or a few feet away from other windows. Best for Snake Plants and ZZ Plants.</p>
              </div>
            </div>
          </section>

          {/* Beginner Tips */}
          <section className="bg-emerald-800 rounded-3xl p-8 md:p-10 text-white shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-emerald-700 p-3 rounded-2xl text-emerald-300">
                <Sprout className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-serif font-medium">Beginner Tips</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Leaf className="h-6 w-6 text-emerald-400 shrink-0" />
                <span className="text-emerald-50"><strong>Start Easy:</strong> Begin with low-maintenance plants like Snake Plants, ZZ Plants, or Pothos before moving on to fussier varieties.</span>
              </li>
              <li className="flex gap-3">
                <Leaf className="h-6 w-6 text-emerald-400 shrink-0" />
                <span className="text-emerald-50"><strong>Drainage is Key:</strong> Always use pots with drainage holes to prevent root rot. If you love a pot without holes, use it as a decorative cover (cachepot).</span>
              </li>
              <li className="flex gap-3">
                <Leaf className="h-6 w-6 text-emerald-400 shrink-0" />
                <span className="text-emerald-50"><strong>Dust the Leaves:</strong> Wipe leaves gently with a damp cloth every few weeks so they can photosynthesize efficiently.</span>
              </li>
            </ul>
          </section>

          {/* Fertilizer Schedule */}
          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-serif font-medium text-stone-900 mb-6">Fertilizer Schedule</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-stone-100">
                    <th className="py-4 px-4 font-medium text-stone-900">Season</th>
                    <th className="py-4 px-4 font-medium text-stone-900">Frequency</th>
                    <th className="py-4 px-4 font-medium text-stone-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-stone-600">
                  <tr className="border-b border-stone-100">
                    <td className="py-4 px-4 font-medium text-stone-900">Spring</td>
                    <td className="py-4 px-4">Every 2-4 weeks</td>
                    <td className="py-4 px-4">Start fertilizing as new growth appears. Use half-strength liquid fertilizer.</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-4 px-4 font-medium text-stone-900">Summer</td>
                    <td className="py-4 px-4">Every 2-4 weeks</td>
                    <td className="py-4 px-4">Peak growing season. Continue regular feeding.</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-4 px-4 font-medium text-stone-900">Fall</td>
                    <td className="py-4 px-4">Once a month</td>
                    <td className="py-4 px-4">Taper off fertilizing as days get shorter and growth slows.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-stone-900">Winter</td>
                    <td className="py-4 px-4">None</td>
                    <td className="py-4 px-4">Plants are dormant. Do not fertilize to avoid salt buildup.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
