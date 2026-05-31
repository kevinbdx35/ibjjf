import { timeLimits, submissionsByBelt, pointsSummary, weightCategories } from "@/data/tables";

export default function TablesPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-black text-gray-900 mb-1">Tableaux de référence</h1>
        <p className="text-gray-500">Données clés des règles IBJJF en un coup d'œil.</p>
      </div>

      {/* Points */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Barème des points</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Action</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700">Points</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Condition</th>
              </tr>
            </thead>
            <tbody>
              {pointsSummary.map((p, i) => (
                <tr key={p.action} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-4 py-3 font-medium text-gray-900">{p.action}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="font-black text-blue-600 text-base">+{p.points}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{p.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Temps */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Durée des matchs par ceinture</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Ceinture</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700">Adulte</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700">Master 1</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700">Master 2+</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700">Juvenile</th>
              </tr>
            </thead>
            <tbody>
              {timeLimits.map((t) => (
                <tr key={t.belt} className="border-t border-gray-100">
                  <td className="px-4 py-3">
                    <span className={`font-semibold px-2 py-0.5 rounded text-xs ${t.color}`}>{t.belt}</span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-700 font-medium">{t.adult}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{t.master1}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{t.master2}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{t.juvenile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Soumissions */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Soumissions autorisées par ceinture</h2>
        <div className="space-y-4">
          {submissionsByBelt.map((b) => (
            <div key={b.belt} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className={`px-4 py-2 font-bold text-sm ${b.color}`}>{b.belt}</div>
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                <div className="p-4">
                  <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-2">Autorisées</p>
                  <ul className="space-y-1">
                    {b.allowed.map((s) => (
                      <li key={s} className="text-sm text-gray-700 flex items-start gap-1.5">
                        <span className="text-green-500 mt-0.5">✓</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-2">Interdites</p>
                  <ul className="space-y-1">
                    {b.forbidden.map((s) => (
                      <li key={s} className="text-sm text-gray-700 flex items-start gap-1.5">
                        <span className="text-red-400 mt-0.5">✗</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Poids */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Catégories de poids</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {(["male", "female"] as const).map((gender) => (
            <div key={gender} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 font-bold text-sm text-gray-700">
                {gender === "male" ? "Hommes" : "Femmes"}
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {weightCategories[gender].map((w, i) => (
                    <tr key={w.category} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-4 py-2 font-medium text-gray-800">{w.category}</td>
                      <td className="px-4 py-2 text-right text-gray-500">{w.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
