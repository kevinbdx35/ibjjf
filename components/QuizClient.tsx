"use client";

import { useState, useCallback } from "react";
import { questions, Question } from "@/data/quiz";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

type Phase = "start" | "playing" | "result";

export default function QuizClient() {
  const [phase, setPhase] = useState<Phase>("start");
  const [pool, setPool] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ question: Question; chosen: number }[]>([]);

  const start = useCallback(() => {
    setPool(shuffle(questions));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setAnswers([]);
    setPhase("playing");
  }, []);

  const current = pool[index];

  function choose(i: number) {
    if (selected !== null) return;
    setSelected(i);
    const correct = i === current.correct;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, { question: current, chosen: i }]);
  }

  function next() {
    if (index + 1 >= pool.length) {
      setPhase("result");
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }

  if (phase === "start") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] gap-6 text-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz IBJJF</h2>
          <p className="text-gray-500">{questions.length} questions sur les règles, les points et les soumissions.</p>
        </div>
        <button
          onClick={start}
          className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors text-lg"
        >
          Commencer
        </button>
      </div>
    );
  }

  if (phase === "result") {
    const pct = Math.round((score / pool.length) * 100);
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Résultat</h2>
          <p className="text-5xl font-black text-blue-600">{pct}%</p>
          <p className="text-gray-500">
            {score} bonne{score > 1 ? "s" : ""} réponse{score > 1 ? "s" : ""} sur {pool.length}
          </p>
        </div>

        <div className="space-y-3">
          {answers.map(({ question: q, chosen }, i) => {
            const ok = chosen === q.correct;
            return (
              <div
                key={i}
                className={`rounded-xl border p-4 ${ok ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
              >
                <p className="font-medium text-gray-900 mb-1">
                  <span className="mr-2">{ok ? "✅" : "❌"}</span>
                  {q.question}
                </p>
                {!ok && (
                  <p className="text-sm text-red-700 mb-1">
                    Ta réponse : <span className="font-medium">{q.options[chosen]}</span>
                  </p>
                )}
                <p className="text-sm text-gray-600 italic">{q.explanation}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button
            onClick={start}
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Recommencer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400 font-medium">
          Question {index + 1} / {pool.length}
        </span>
        <span className="text-sm text-gray-400">
          Score : {score}
        </span>
      </div>

      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <div
          className="bg-blue-600 h-1.5 rounded-full transition-all"
          style={{ width: `${((index) / pool.length) * 100}%` }}
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3 block">
          {current.category}
        </span>
        <p className="text-xl font-semibold text-gray-900 leading-snug">{current.question}</p>
      </div>

      <div className="grid gap-3">
        {current.options.map((opt, i) => {
          let style =
            "border-gray-200 bg-white text-gray-800 hover:border-blue-400 hover:bg-blue-50 cursor-pointer";
          if (selected !== null) {
            if (i === current.correct) style = "border-green-500 bg-green-50 text-green-800";
            else if (i === selected) style = "border-red-400 bg-red-50 text-red-800";
            else style = "border-gray-200 bg-gray-50 text-gray-400";
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              className={`w-full text-left border rounded-xl px-4 py-3 font-medium transition-all ${style}`}
            >
              <span className="mr-2 font-bold text-gray-400">
                {["A", "B", "C", "D"][i]}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p className="text-sm text-gray-600 italic">{current.explanation}</p>
        </div>
      )}

      {selected !== null && (
        <div className="flex justify-end">
          <button
            onClick={next}
            className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
          >
            {index + 1 >= pool.length ? "Voir les résultats" : "Question suivante →"}
          </button>
        </div>
      )}
    </div>
  );
}
