import QuizClient from "@/components/QuizClient";

export default function QuizPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-gray-900 mb-1">Quiz</h1>
        <p className="text-gray-500">Testez vos connaissances des règles IBJJF.</p>
      </div>
      <QuizClient />
    </div>
  );
}
