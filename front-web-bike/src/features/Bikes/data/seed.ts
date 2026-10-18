import { BikeModel } from "../types/bikesItems";

export const bikesSeed: BikeModel[] = [
  {
    id: "apex",
    name: "Montblanc Apex",
    category: "Sport",
    price: 350,
    image: "/Introduction/CardLineup/terra.svg",
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
    image: "/Introduction/CardLineup/terra.svg",
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
    image: "/Introduction/CardLineup/terra.svg",
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
    image: "/Introduction/CardLineup/terra.svg",
    specs: {
      transmission: "Automat",
      fuel: "Electric",
      cooling: "Air",
    },
  },
];

export const EQUIPMENT_LIST = [
  "ABS System",
  "Traction Control",
  "Air Suspension",
  "Cruise Control",
  "Quickshifter",
  "AI Dashboard",
];
