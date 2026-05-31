import Link from "next/link";
import { Rule, categories } from "@/data/rules";

export default function RuleCard({ rule }: { rule: Rule }) {
  const cat = categories[rule.category];
  return (
    <Link
      href={`/rules/${rule.slug}`}
      className="block border border-gray-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all bg-white group"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {rule.title}
        </span>
        {rule.points !== undefined && (
          <span className="shrink-0 text-xs font-bold bg-blue-600 text-white rounded-full px-2 py-0.5">
            +{rule.points} pts
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500 mb-3">{rule.summary}</p>
      <span
        className={`inline-flex items-center gap-1 text-xs font-medium border rounded-full px-2 py-0.5 ${cat.color}`}
      >
        {cat.icon} {cat.label}
      </span>
    </Link>
  );
}
