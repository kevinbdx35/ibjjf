export const timeLimits = [
  { belt: "Blanche", color: "bg-gray-100", adult: "5 min", master1: "5 min", master2: "5 min", juvenile: "4 min" },
  { belt: "Bleue", color: "bg-blue-100", adult: "6 min", master1: "5 min", master2: "5 min", juvenile: "5 min" },
  { belt: "Violette", color: "bg-purple-100", adult: "7 min", master1: "6 min", master2: "6 min", juvenile: "6 min" },
  { belt: "Marron", color: "bg-amber-100", adult: "8 min", master1: "7 min", master2: "7 min", juvenile: "—" },
  { belt: "Noire", color: "bg-gray-800 text-white", adult: "10 min", master1: "8 min", master2: "8 min", juvenile: "—" },
];

export const submissionsByBelt = [
  {
    belt: "Blanche",
    color: "bg-gray-100",
    allowed: ["Étranglements", "Clés de bras (americana, kimura, omoplata)", "Straight foot lock (No-Gi uniquement)"],
    forbidden: ["Armbar (< 16 ans)", "Heel hook", "Kneebar", "Reaping", "Cervical locks", "Compression musculaire"],
  },
  {
    belt: "Bleue",
    color: "bg-blue-100",
    allowed: ["Étranglements", "Clés de bras", "Armbar", "Straight foot lock (No-Gi)"],
    forbidden: ["Heel hook", "Kneebar", "Reaping", "Cervical locks", "Compression musculaire"],
  },
  {
    belt: "Violette",
    color: "bg-purple-100",
    allowed: ["Étranglements", "Clés de bras", "Armbar", "Straight foot lock (Gi et No-Gi)"],
    forbidden: ["Heel hook", "Kneebar", "Reaping", "Cervical locks", "Compression musculaire"],
  },
  {
    belt: "Marron",
    color: "bg-amber-100",
    allowed: ["Étranglements", "Clés de bras", "Armbar", "Straight foot lock", "Kneebar (No-Gi)"],
    forbidden: ["Inside heel hook", "Reaping", "Cervical locks", "Compression musculaire"],
  },
  {
    belt: "Noire",
    color: "bg-gray-800 text-white",
    allowed: ["Étranglements", "Clés de bras", "Armbar", "Straight foot lock", "Kneebar", "Outside heel hook (No-Gi adulte)"],
    forbidden: ["Inside heel hook (compétitions standard)", "Cervical locks", "Compression musculaire"],
  },
];

export const pointsSummary = [
  { action: "Takedown", points: 2, description: "Projection depuis la position debout, stabilisée 3s" },
  { action: "Sweep", points: 2, description: "Renversement depuis la garde ou demi-garde, stabilisé 3s" },
  { action: "Genou sur le ventre", points: 2, description: "Genou sur l'abdomen, stabilisé 3s" },
  { action: "Passage de garde", points: 3, description: "Dépasser les jambes, stabilisé 3s en side control / north-south" },
  { action: "Mount", points: 4, description: "Assis sur le torse, genoux au sol, stabilisé 3s" },
  { action: "Prise de dos", points: 4, description: "Dos avec deux crochets (hooks), stabilisé 3s" },
];

export const weightCategories = {
  male: [
    { category: "Rooster", limit: "57,5 kg" },
    { category: "Light Feather", limit: "64 kg" },
    { category: "Feather", limit: "70 kg" },
    { category: "Light", limit: "76 kg" },
    { category: "Middle", limit: "82,3 kg" },
    { category: "Medium Heavy", limit: "88,3 kg" },
    { category: "Heavy", limit: "94,3 kg" },
    { category: "Super Heavy", limit: "100,5 kg" },
    { category: "Ultra Heavy", limit: "+ 100,5 kg" },
  ],
  female: [
    { category: "Rooster", limit: "48,5 kg" },
    { category: "Light Feather", limit: "53,5 kg" },
    { category: "Feather", limit: "58,5 kg" },
    { category: "Light", limit: "64 kg" },
    { category: "Middle", limit: "69 kg" },
    { category: "Medium Heavy", limit: "74 kg" },
    { category: "Heavy", limit: "79,3 kg" },
    { category: "Super Heavy", limit: "+ 79,3 kg" },
  ],
};
