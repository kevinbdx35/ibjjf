"use client";

import { rules, categories, Category } from "@/data/rules";
import RuleCard from "@/components/RuleCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const catOrder: Category[] = ["points", "advantages", "penalties", "submissions", "general"];

function RulesContent() {
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat");
  const active = catOrder.includes(cat as Category) ? (cat as Category) : null;
  const displayed = active ? rules.filter((r) => r.category === active) : rules;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-gray-900 mb-1">Règles IBJJF</h1>
        <p className="text-gray-500">Sélectionnez une catégorie ou parcourez toutes les règles.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          href="/rules"
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
            !active
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-600 border-gray-200 hover:border-blue-400"
          }`}
        >
          Tout ({rules.length})
        </Link>
        {catOrder.map((c) => {
          const meta = categories[c];
          const count = rules.filter((r) => r.category === c).length;
          return (
            <Link
              key={c}
              href={`/rules?cat=${c}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                active === c
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-400"
              }`}
            >
              {meta.icon} {meta.label} ({count})
            </Link>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {displayed.map((rule) => (
          <RuleCard key={rule.slug} rule={rule} />
        ))}
      </div>
    </div>
  );
}

export default function RulesPage() {
  return (
    <Suspense>
      <RulesContent />
    </Suspense>
  );
}
