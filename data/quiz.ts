export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Combien de points vaut un takedown réussi ?",
    options: ["1 point", "2 points", "3 points", "4 points"],
    correct: 1,
    explanation: "Un takedown vaut 2 points, comme un sweep. La position doit être maintenue 3 secondes.",
    category: "Points",
  },
  {
    id: 2,
    question: "Combien de points vaut le passage de garde ?",
    options: ["2 points", "3 points", "4 points", "5 points"],
    correct: 1,
    explanation: "Le passage de garde vaut 3 points. C'est la seule action à 3 points dans le système IBJJF.",
    category: "Points",
  },
  {
    id: 3,
    question: "Combien de temps faut-il maintenir une position pour que les points soient accordés ?",
    options: ["1 seconde", "2 secondes", "3 secondes", "5 secondes"],
    correct: 2,
    explanation: "Toutes les positions (mount, back control, sweep, etc.) doivent être maintenues 3 secondes pour que les points soient comptabilisés.",
    category: "Points",
  },
  {
    id: 4,
    question: "Quelle position vaut 4 points ?",
    options: ["Sweep", "Genou sur le ventre", "Mount", "Passage de garde"],
    correct: 2,
    explanation: "Le mount et la prise de dos valent chacun 4 points. Le sweep et le genou sur le ventre valent 2 points, le passage de garde 3 points.",
    category: "Points",
  },
  {
    id: 5,
    question: "Qu'est-ce que le 'reaping' ?",
    options: [
      "Une technique de balayage des jambes",
      "Passer la jambe derrière le genou en forçant latéralement",
      "Un étranglement arrière",
      "Un contrôle de hanche",
    ],
    correct: 1,
    explanation: "Le reaping consiste à placer sa jambe derrière le genou de l'adversaire en appliquant une pression latérale dangereuse pour les ligaments. C'est interdit dans presque toutes les divisions IBJJF.",
    category: "Pénalités",
  },
  {
    id: 6,
    question: "En cas d'égalité de score et d'avantages, comment est désigné le vainqueur ?",
    options: [
      "Prolongation de 5 minutes",
      "Match nul",
      "Décision de l'arbitre et des juges",
      "Pile ou face",
    ],
    correct: 2,
    explanation: "En IBJJF, si le score et les avantages sont égaux, les juges et l'arbitre désignent un vainqueur par décision basée sur l'activité offensive. Il n'y a pas de prolongation standard.",
    category: "Général",
  },
  {
    id: 7,
    question: "Quelle ceinture peut utiliser le kneebar en compétition Gi ?",
    options: ["Bleue", "Violette", "Marron", "Noire"],
    correct: 3,
    explanation: "Le kneebar est autorisé à partir de la ceinture marron/noire selon les règles IBJJF. Les ceintures inférieures sont limitées au straight foot lock.",
    category: "Soumissions",
  },
  {
    id: 8,
    question: "Combien de points valent le genou sur le ventre ?",
    options: ["1 point", "2 points", "3 points", "4 points"],
    correct: 1,
    explanation: "Le genou sur le ventre (knee on belly) vaut 2 points. Le genou doit être clairement posé sur l'abdomen et maintenu 3 secondes.",
    category: "Points",
  },
  {
    id: 9,
    question: "Quelles couleurs de Gi sont autorisées en compétition IBJJF ?",
    options: [
      "Blanc uniquement",
      "Blanc, bleu et noir",
      "Toutes les couleurs unies",
      "Blanc, bleu, noir et gris",
    ],
    correct: 1,
    explanation: "L'IBJJF n'accepte que trois couleurs : blanc, bleu royal et noir. Le haut et le bas du Gi doivent être de la même couleur.",
    category: "Général",
  },
  {
    id: 10,
    question: "Qu'est-ce qu'un avantage ?",
    options: [
      "Un demi-point accordé pour une action offensive",
      "Un point bonus pour le premier à marquer",
      "Un bonus accordé en cas de victoire par soumission",
      "Une pénalité pour l'adversaire passif",
    ],
    correct: 0,
    explanation: "Un avantage est un demi-point (non-entier) accordé pour une tentative offensive sérieuse qui ne finalise pas : quasi-sweep, quasi-passage, tentative de soumission. Il sert à départager en cas d'égalité de points.",
    category: "Avantages",
  },
  {
    id: 11,
    question: "Un sweep depuis la demi-garde est-il valable ?",
    options: [
      "Non, il faut partir de la garde complète",
      "Oui, si le sweep est clairement initié depuis le bas",
      "Oui, mais il ne vaut qu'1 point",
      "Non, cela compte comme un takedown",
    ],
    correct: 1,
    explanation: "Un sweep depuis la demi-garde est valable (2 points) si le mouvement de renversement est clairement initié depuis la position inférieure.",
    category: "Points",
  },
  {
    id: 12,
    question: "Que risque un compétiteur qui utilise une technique illégale blessant l'adversaire ?",
    options: [
      "Une pénalité",
      "Deux avantages accordés à l'adversaire",
      "La disqualification immédiate",
      "Un avertissement",
    ],
    correct: 2,
    explanation: "L'utilisation d'une technique illégale qui blesse l'adversaire entraîne la disqualification immédiate. Si la technique est tentée sans blessure, une pénalité peut être accordée à la discrétion de l'arbitre.",
    category: "Pénalités",
  },
];
