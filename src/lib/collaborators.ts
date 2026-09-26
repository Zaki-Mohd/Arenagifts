export interface Collaborator {
  slug: string;
  name: string;
  nickname: string;
  instagram: string;
  instagramUrl: string;
  email: string;
  joinedDate: string;
  city?: string;
  stats: {
    trackedComments: number;
    ordersPlaced: number;
    totalRevenue: number;
    profitSharePercent: number; // 60%
    earnedProfit: number;
    pendingPayout: number;
  };
}

export const collaborators: Collaborator[] = [
  {
    slug: "bhavyasree",
    name: "Palavalasa Bhavya Sree",
    nickname: "Bhavya Sree",
    instagram: "@bhavyasreeee_3101",
    instagramUrl: "https://www.instagram.com/bhavyasreeee_3101",
    email: "bhavyasreepalavalasa@gmail.com",
    joinedDate: "September 2026",
    city: "Visakhapatnam, Andhra Pradesh",
    stats: {
      trackedComments: 0,
      ordersPlaced: 0,
      totalRevenue: 0,
      profitSharePercent: 60,
      earnedProfit: 0,
      pendingPayout: 0,
    },
  },
  {
    slug: "kratikaa",
    name: "Kratikaa Rajput",
    nickname: "Kratikaa",
    instagram: "@Khaatuuu",
    instagramUrl: "https://www.instagram.com/Khaatuuu",
    email: "ks2592178@gmail.com",
    joinedDate: "September 2026",
    stats: {
      trackedComments: 0,
      ordersPlaced: 0,
      totalRevenue: 0,
      profitSharePercent: 60,
      earnedProfit: 0,
      pendingPayout: 0,
    },
  },
  {
    slug: "tamanna",
    name: "Tamanna Sabnur Mondal",
    nickname: "Tamanna",
    instagram: "@tamannasabnurmondal207",
    instagramUrl: "https://www.instagram.com/tamannasabnurmondal207",
    email: "tamannasabnurmondal207@gmail.com",
    joinedDate: "September 2026",
    city: "Berhampur, West Bengal",
    stats: {
      trackedComments: 0,
      ordersPlaced: 0,
      totalRevenue: 0,
      profitSharePercent: 60,
      earnedProfit: 0,
      pendingPayout: 0,
    },
  },
  {
    slug: "sumana",
    name: "Sumana Patra",
    nickname: "Sumana",
    instagram: "@_sumana_1005",
    instagramUrl: "https://www.instagram.com/_sumana_1005",
    email: "sumanapatra486@gmail.com",
    joinedDate: "September 2026",
    city: "Suri, West Bengal",
    stats: {
      trackedComments: 0,
      ordersPlaced: 0,
      totalRevenue: 0,
      profitSharePercent: 60,
      earnedProfit: 0,
      pendingPayout: 0,
    },
  },
  {
    slug: "aazba",
    name: "Aazba Parveen",
    nickname: "Aazba",
    instagram: "@The_cozy_tales_",
    instagramUrl: "https://www.instagram.com/The_cozy_tales_",
    email: "110aazu@gmail.com",
    joinedDate: "September 2026",
    stats: {
      trackedComments: 0,
      ordersPlaced: 0,
      totalRevenue: 0,
      profitSharePercent: 60,
      earnedProfit: 0,
      pendingPayout: 0,
    },
  },
  {
    slug: "anamika",
    name: "Anamika Roy",
    nickname: "Anamika",
    instagram: "@anamikaaunfiltered",
    instagramUrl: "https://www.instagram.com/anamikaaunfiltered",
    email: "anamikaroy0806@gmail.com",
    joinedDate: "September 2026",
    city: "Patna, Bihar",
    stats: {
      trackedComments: 0,
      ordersPlaced: 0,
      totalRevenue: 0,
      profitSharePercent: 60,
      earnedProfit: 0,
      pendingPayout: 0,
    },
  },
  {
    slug: "megha",
    name: "Megha Sharma",
    nickname: "Megha",
    instagram: "@meghas_polaroid.05",
    instagramUrl: "https://www.instagram.com/meghas_polaroid.05",
    email: "meghasharma282003@gmail.com",
    joinedDate: "September 2026",
    stats: {
      trackedComments: 0,
      ordersPlaced: 0,
      totalRevenue: 0,
      profitSharePercent: 60,
      earnedProfit: 0,
      pendingPayout: 0,
    },
  },
  {
    slug: "rakhi",
    name: "Rakhi",
    nickname: "Rakhi",
    instagram: "@mrsgarg97",
    instagramUrl: "https://www.instagram.com/mrsgarg97",
    email: "krrakhi110086@gmail.com",
    joinedDate: "September 2026",
    stats: {
      trackedComments: 0,
      ordersPlaced: 0,
      totalRevenue: 0,
      profitSharePercent: 60,
      earnedProfit: 0,
      pendingPayout: 0,
    },
  },
];

export function getCollaboratorBySlug(slug: string): Collaborator | undefined {
  const normalized = slug.toLowerCase().trim();
  return collaborators.find(
    (c) =>
      c.slug.toLowerCase() === normalized ||
      c.nickname.toLowerCase().replace(/\s+/g, "") === normalized ||
      c.name.toLowerCase().replace(/\s+/g, "") === normalized
  );
}
