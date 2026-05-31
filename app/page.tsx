import Link from "next/link";
import { rules, categories, Category } from "@/data/rules";
import { pointsSummary } from "@/data/tables";

const catOrder: Category[] = ["points", "advantages", "penalties", "submissions", "general"];

export default function Home() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="text-center space-y-4 py-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-200">
          Guide officiel IBJJF
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
          Maîtrisez les règles<br />
          <span className="text-blue-600">du BJJ</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Points, avantages, pénalités, soumissions autorisées par ceinture — tout en un seul endroit, clair et interactif.
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <Link
            href="/rules"
            className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Voir les règles
          </Link>
          <Link
            href="/quiz"
            className="bg-white text-gray-800 font-semibold px-6 py-2.5 rounded-xl border border-gray-200 hover:border-blue-400 transition-colors"
          >
            Faire le quiz
          </Link>
        </div>
      </section>

      {/* Points rapide */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Barème des points</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {pointsSummary.map((p) => (
            <div key={p.action} className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-4">
              <span className="text-2xl font-black text-blue-600 w-10 shrink-0">+{p.points}</span>
              <div>
                <p className="font-semibold text-gray-900">{p.action}</p>
                <p className="text-sm text-gray-500">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Catégories */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Parcourir par catégorie</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {catOrder.map((cat) => {
            const meta = categories[cat];
            const count = rules.filter((r) => r.category === cat).length;
            return (
              <Link
                key={cat}
                href={`/rules?cat=${cat}`}
                className="flex items-center gap-3 border rounded-xl p-4 hover:shadow-md transition-all bg-white hover:border-blue-400 group"
              >
                <span className="text-2xl">{meta.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {meta.label}
                  </p>
                  <p className="text-sm text-gray-400">{count} règle{count > 1 ? "s" : ""}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
