import { rules, categories, getRuleBySlug } from "@/data/rules";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return rules.map((r) => ({ slug: r.slug }));
}

export default async function RulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rule = getRuleBySlug(slug);
  if (!rule) notFound();

  const cat = categories[rule.category];

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <Link
          href="/rules"
          className="text-sm text-gray-400 hover:text-blue-600 transition-colors mb-4 inline-block"
        >
          ← Retour aux règles
        </Link>
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-3xl font-black text-gray-900 leading-tight">{rule.title}</h1>
          {rule.points !== undefined && (
            <span className="shrink-0 text-lg font-black bg-blue-600 text-white rounded-xl px-4 py-2">
              +{rule.points} pts
            </span>
          )}
        </div>
        <span className={`mt-3 inline-flex items-center gap-1 text-sm font-medium border rounded-full px-3 py-1 ${cat.color}`}>
          {cat.icon} {cat.label}
        </span>
      </div>

      {/* Résumé */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
        <p className="text-blue-900 font-medium text-lg">{rule.summary}</p>
      </div>

      {/* Détail */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
        <h2 className="font-bold text-gray-900 text-lg">Détail de la règle</h2>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">{rule.detail}</div>
      </div>

      {/* Tags */}
      {rule.tags && rule.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {rule.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Navigation entre règles */}
      <div className="flex gap-3 pt-4 border-t border-gray-100">
        {rules.map((r, i) => r.slug === slug && (
          <>
            {i > 0 && (
              <Link
                key="prev"
                href={`/rules/${rules[i - 1].slug}`}
                className="flex-1 text-sm bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-400 transition-colors text-center"
              >
                ← {rules[i - 1].title}
              </Link>
            )}
            {i < rules.length - 1 && (
              <Link
                key="next"
                href={`/rules/${rules[i + 1].slug}`}
                className="flex-1 text-sm bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-400 transition-colors text-center"
              >
                {rules[i + 1].title} →
              </Link>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
