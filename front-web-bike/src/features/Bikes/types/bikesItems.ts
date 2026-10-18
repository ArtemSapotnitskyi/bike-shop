export interface BikeModel {
  id: string;
  name: string;
  category: "Sport" | "Cruiser" | "Electric" | "Adventure";
  price: number;
  image: string;
  specs: {
    transmission: "Automat" | "Manual";
    fuel: "Electric" | "Gasoline";
    cooling: "Air" | "Liquid";
  };
}

export interface RentalCardProps {
  bike: BikeModel;
}

export const CATEGORIES = [
  "All Models",
  "Sport",
  "Cruiser",
  "Electric",
  "Adventure",
];
