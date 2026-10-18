import { BikeModel } from "../types/bikesItems";

export const bikesSeed: BikeModel[] = [
  {
    id: "apex",
    name: "Montblanc Apex",
    category: "Sport",
    price: 350,
    image: "/Lineup/apex.png",
    specs: {
      transmission: "Manual",
      fuel: "Gasoline",
      cooling: "Liquid",
    },
  },
  {
    id: "neon",
    name: "Montblanc Neon Racer",
    category: "Electric",
    price: 450,
    image: "/Lineup/neon.png",
    specs: {
      transmission: "Automat",
      fuel: "Electric",
      cooling: "Liquid",
    },
  },
  {
    id: "terra",
    name: "Montblanc Terra GT",
    category: "Adventure",
    price: 280,
    image: "/Lineup/terra.png",
    specs: {
      transmission: "Manual",
      fuel: "Gasoline",
      cooling: "Liquid",
    },
  },
  {
    id: "void",
    name: "Montblanc Void Concept",
    category: "Electric",
    price: 600,
    image: "/Lineup/void.png",
    specs: {
      transmission: "Automat",
      fuel: "Electric",
      cooling: "Air",
    },
  },
];
