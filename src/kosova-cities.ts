type City = {
  name: string;
  neighbors: { [key: string]: number }; // Neighboring cities and their distances
};

export const kosovoCities: City[] = [
  {
    name: "Prishtina",
    neighbors: {
      Peja: 80,
      Ferizaj: 30,
      Gjakova: 90,
      Mitrovica: 50,
      Prizren: 120,
      Gjilan: 70,
    },
  },
  {
    name: "Peja",
    neighbors: {
      Prishtina: 80,
      Ferizaj: 120,
      Gjakova: 40,
      Mitrovica: 100,
      Prizren: 90,
      Gjilan: 150,
    },
  },
  {
    name: "Ferizaj",
    neighbors: {
      Prishtina: 30,
      Peja: 120,
      Gjakova: 60,
      Mitrovica: 70,
      Prizren: 110,
      Gjilan: 80,
    },
  },
  {
    name: "Gjakova",
    neighbors: {
      Prishtina: 90,
      Peja: 40,
      Ferizaj: 60,
      Mitrovica: 110,
      Prizren: 50,
      Gjilan: 120,
    },
  },
  {
    name: "Mitrovica",
    neighbors: {
      Prishtina: 50,
      Peja: 100,
      Ferizaj: 70,
      Gjakova: 110,
      Prizren: 80,
      Gjilan: 130,
    },
  },
  {
    name: "Prizren",
    neighbors: {
      Prishtina: 120,
      Peja: 90,
      Ferizaj: 110,
      Gjakova: 50,
      Mitrovica: 80,
      Gjilan: 100,
    },
  },
  {
    name: "Gjilan",
    neighbors: {
      Prishtina: 70,
      Peja: 150,
      Ferizaj: 80,
      Gjakova: 120,
      Mitrovica: 130,
      Prizren: 100,
    },
  },
  // Add more cities as needed
];
