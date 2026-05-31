export type Category =
  | "points"
  | "advantages"
  | "penalties"
  | "submissions"
  | "general";

export interface Rule {
  slug: string;
  title: string;
  category: Category;
  summary: string;
  detail: string;
  points?: number;
  tags?: string[];
}

export const categories: Record<Category, { label: string; color: string; icon: string }> = {
  points: { label: "Points", color: "bg-blue-100 text-blue-800 border-blue-200", icon: "🏆" },
  advantages: { label: "Avantages", color: "bg-green-100 text-green-800 border-green-200", icon: "✅" },
  penalties: { label: "Pénalités", color: "bg-red-100 text-red-800 border-red-200", icon: "⚠️" },
  submissions: { label: "Soumissions", color: "bg-purple-100 text-purple-800 border-purple-200", icon: "🤜" },
  general: { label: "Général", color: "bg-gray-100 text-gray-800 border-gray-200", icon: "📋" },
};

export const rules: Rule[] = [
  // POINTS
  {
    slug: "takedown",
    title: "Takedown (Projection)",
    category: "points",
    points: 2,
    summary: "Amener l'adversaire au sol depuis une position debout.",
    detail:
      "Le compétiteur doit projeter l'adversaire au sol et terminer en position de contrôle (garde, demi-garde ou plus dominante). Le mouvement doit être initié debout. Si les deux tombent en même temps, la projection n'est accordée que si l'un contrôle clairement l'autre à l'arrivée. Les points sont accordés 3 secondes après la stabilisation.",
    tags: ["debout", "projection", "2pts"],
  },
  {
    slug: "sweep",
    title: "Sweep (Renversement)",
    category: "points",
    points: 2,
    summary: "Renverser l'adversaire depuis la garde pour passer dessus.",
    detail:
      "Le compétiteur en position inférieure (garde) renverse l'adversaire pour se retrouver au-dessus. Le sweep est comptabilisé lorsque la personne du dessous se retrouve au-dessus et stabilise la position pendant 3 secondes. Partir de la demi-garde est aussi valable si le sweep est clairement initié depuis le bas.",
    tags: ["garde", "renversement", "2pts"],
  },
  {
    slug: "guard-pass",
    title: "Passage de garde",
    category: "points",
    points: 3,
    summary: "Dépasser les jambes de l'adversaire et stabiliser une position latérale.",
    detail:
      "Le compétiteur doit passer au-delà des jambes de l'adversaire et stabiliser la position en side control, north-south ou mount pendant 3 secondes. Le compétiteur ne doit pas être dans la demi-garde. Une tentative de sweepou de retour en garde avant la stabilisation annule les points.",
    tags: ["garde", "passage", "3pts"],
  },
  {
    slug: "knee-on-belly",
    title: "Genou sur le ventre",
    category: "points",
    points: 2,
    summary: "Poser le genou sur l'abdomen de l'adversaire couché.",
    detail:
      "Le genou doit être clairement posé sur l'abdomen (pas la cuisse, pas la poitrine). L'adversaire doit être à plat sur le dos ou sur le côté. La position doit être maintenue 3 secondes. Si l'adversaire se lève, les points ne sont pas accordés. On peut marquer à nouveau si l'on quitte puis revient à la position.",
    tags: ["contrôle", "genou", "2pts"],
  },
  {
    slug: "mount",
    title: "Mount (Montée)",
    category: "points",
    points: 4,
    summary: "S'asseoir sur le torse de l'adversaire couché sur le dos.",
    detail:
      "Le compétiteur doit être assis sur le torse de l'adversaire, genoux au sol de chaque côté. Les pieds ne doivent pas être dans la demi-garde. Le mount doit être maintenu 3 secondes. Le 'technical mount' (pied sous l'aisselle, genou au sol de l'autre côté) compte également. Si l'adversaire se retourne, les 4 points sont accordés si la position était déjà établie.",
    tags: ["mount", "contrôle", "4pts"],
  },
  {
    slug: "back-control",
    title: "Prise de dos",
    category: "points",
    points: 4,
    summary: "Prendre le dos avec les deux crochets (hooks) en place.",
    detail:
      "Le compétiteur doit être dans le dos de l'adversaire avec les deux pieds insérés comme crochets (hooks) à l'intérieur des cuisses. La position doit être maintenue 3 secondes. Si un seul crochet est présent, la position ne vaut que 2 points (back control partiel). Le back control debout sans crochets vaut 4 points si l'adversaire est soulevé.",
    tags: ["dos", "crochets", "4pts"],
  },

  // ADVANTAGES
  {
    slug: "advantage-near-submission",
    title: "Avantage — Tentative de soumission",
    category: "advantages",
    summary: "Tentative sérieuse de soumission sans finalisation.",
    detail:
      "Une tentative de soumission qui met clairement l'adversaire en danger — il doit taper ou être en danger visible — mais qui n'aboutit pas donne un avantage. Une clé de bras à moitié posée ou un étranglement peu profond ne compte pas. L'arbitre juge si la tentative était 'sérieuse'.",
    tags: ["avantage", "soumission"],
  },
  {
    slug: "advantage-near-pass",
    title: "Avantage — Quasi-passage de garde",
    category: "advantages",
    summary: "Passage de garde presque réussi sans stabilisation.",
    detail:
      "Si le compétiteur dépasse les jambes de l'adversaire mais que ce dernier reprend la garde avant les 3 secondes de stabilisation, un avantage peut être accordé. L'arbitre évalue si la tentative de passage était significative et que l'adversaire a dû lutter pour récupérer.",
    tags: ["avantage", "passage"],
  },
  {
    slug: "advantage-near-sweep",
    title: "Avantage — Quasi-sweep",
    category: "advantages",
    summary: "Renversement partiel sans finalisation.",
    detail:
      "Un sweep qui amène l'adversaire sur le côté (90°) sans aller jusqu'au-dessus peut valoir un avantage. Le compétiteur doit avoir clairement tenté le renversement. Si l'adversaire revient en position sans effort, aucun avantage n'est accordé.",
    tags: ["avantage", "sweep"],
  },

  // PENALTIES
  {
    slug: "penalty-stalling",
    title: "Pénalité — Passivité",
    category: "penalties",
    summary: "Absence d'action offensive pendant une période prolongée.",
    detail:
      "Tout compétiteur qui n'essaie pas activement de marquer des points ou de soumettre l'adversaire pendant une période jugée trop longue par l'arbitre reçoit un avertissement. Après l'avertissement, une pénalité peut être donnée. La passivité peut être sanctionnée en position debout comme au sol. En cas d'égalité, celui qui a le moins de pénalités gagne.",
    tags: ["pénalité", "passivité"],
  },
  {
    slug: "penalty-guard-pull",
    title: "Pénalité — Sortie de tapis",
    category: "penalties",
    summary: "Sortir intentionnellement de la zone de combat.",
    detail:
      "Quitter volontairement le tapis pour éviter une position défavorable est pénalisé. Si la sortie est involontaire (poussé), aucune pénalité. Si les deux compétiteurs sortent ensemble, l'arbitre les remet au centre dans leur position. Les pénalités s'accumulent et la troisième peut entraîner la disqualification.",
    tags: ["pénalité", "tapis"],
  },
  {
    slug: "penalty-illegal-technique",
    title: "Pénalité — Technique illégale",
    category: "penalties",
    summary: "Utilisation d'une technique interdite selon la division.",
    detail:
      "L'utilisation d'une technique interdite (ex : heel hook en compétition adulte ceinture bleue/violette, lock cervical, compression du genou) entraîne une disqualification immédiate si elle blesse l'adversaire, ou une pénalité sévère si elle est tentée sans blessure. L'arbitre et les juges décident conjointement.",
    tags: ["pénalité", "disqualification", "technique"],
  },
  {
    slug: "penalty-reaping",
    title: "Pénalité — Fauchage du genou (Reaping)",
    category: "penalties",
    summary: "Position où la jambe passe derrière le genou de l'adversaire en forçant latéralement.",
    detail:
      "Le 'reaping' se produit lorsqu'un compétiteur place sa jambe derrière le genou de l'adversaire tout en appliquant une pression latérale sur ce genou. Cela crée un risque de rupture ligamentaire. Interdit dans toutes les divisions Gi et la plupart des divisions No-Gi sauf en compétition avancée adulte. Punissable de disqualification immédiate si délibéré.",
    tags: ["pénalité", "genou", "reaping"],
  },

  // SUBMISSIONS
  {
    slug: "sub-choke",
    title: "Étranglements",
    category: "submissions",
    summary: "Soumissions agissant sur la trachée ou les carotides.",
    detail:
      "Les étranglements (chokes) sont autorisés dans toutes les divisions adultes. Ils peuvent être de type 'sanguin' (pression sur les carotides, ex : RNC, triangle) ou 'respiratoire' (pression sur la trachée, ex : guillotine). En compétition enfants, certains étranglements sont restreints selon l'âge. Le compétiteur soumis tape deux fois ou verbalement abandonne.",
    tags: ["soumission", "étranglement"],
  },
  {
    slug: "sub-armlock",
    title: "Clés de bras",
    category: "submissions",
    summary: "Soumissions agissant sur l'articulation du coude.",
    detail:
      "Les clés de bras (arm locks) comme l'americana, le kimura et l'omoplata sont autorisées dans toutes les divisions adultes. L'armbar (juji gatame) est interdit en dessous de 16 ans selon les règles IBJJF. La pression doit être appliquée progressivement pour laisser le temps au compétiteur de taper.",
    tags: ["soumission", "bras", "coude"],
  },
  {
    slug: "sub-leg-locks",
    title: "Clés de jambes",
    category: "submissions",
    summary: "Soumissions agissant sur les articulations des jambes.",
    detail:
      "Les clés de jambes sont réglementées selon la ceinture :\n• **Blanche/Bleue** : straight foot lock uniquement (en No-Gi). Kneebar et heel hook interdits.\n• **Violette** : straight foot lock autorisé en Gi et No-Gi. Kneebar interdit.\n• **Marron/Noire** : kneebar autorisé. Heel hook (outside) autorisé uniquement en No-Gi adulte ceinture noire.\n\nLe 'inside heel hook' est globalement interdit dans les compétitions IBJJF standard.",
    tags: ["soumission", "jambe", "heel hook"],
  },

  // GENERAL
  {
    slug: "uniform",
    title: "Tenue réglementaire (Gi)",
    category: "general",
    summary: "Règles sur le kimono porté en compétition.",
    detail:
      "Le Gi doit être propre, sans odeur, et conforme aux mesures IBJJF :\n• La veste doit descendre jusqu'aux cuisses et les manches doivent laisser au moins 5 cm de l'intérieur du poignet visible.\n• Le pantalon doit descendre jusqu'à 5 cm au-dessus de la malléole.\n• Les couleurs autorisées : blanc, bleu royal, noir. Le haut et le bas doivent être de la même couleur.\n• La ceinture doit correspondre au grade officiel.",
    tags: ["tenue", "kimono", "gi"],
  },
  {
    slug: "scoring-tie",
    title: "Égalité et départage",
    category: "general",
    summary: "Comment est désigné le vainqueur en cas d'égalité.",
    detail:
      "En cas d'égalité à la fin du temps réglementaire :\n1. Le compétiteur avec le moins de pénalités gagne.\n2. Si toujours égalité : le compétiteur avec le plus d'avantages gagne.\n3. Si toujours égalité : les juges et l'arbitre désignent un vainqueur par décision (referee decision) basée sur l'activité offensive et le danger créé.\n\nIl n'y a pas de prolongation en IBJJF standard (contrairement à l'ADCC).",
    tags: ["score", "égalité", "décision"],
  },
];

export function getRulesByCategory(cat: Category): Rule[] {
  return rules.filter((r) => r.category === cat);
}

export function getRuleBySlug(slug: string): Rule | undefined {
  return rules.find((r) => r.slug === slug);
}
