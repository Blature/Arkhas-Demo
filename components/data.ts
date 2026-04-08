export interface CarData {
  id: string;
  name: string;
  type: "Economic" | "Sedan" | "SUV" | "Luxury";
  price: number; // OMR per day
  image: string;
  features: string[];
}

export const CARS: CarData[] = [
  {
    id: "nissan-sunny",
    name: "Nissan Sunny",
    type: "Economic",
    price: 7,
    image: "/assets/cars/photo_1_2026-04-08_15-56-29.jpg",
    features: ["Automatic", "5 Seats", "AC"]
  },
  {
    id: "hyundai-elantra",
    name: "Hyundai Elantra",
    type: "Sedan",
    price: 8,
    image: "/assets/cars/photo_2_2026-04-08_15-56-29.jpg",
    features: ["Automatic", "5 Seats", "Bluetooth"]
  },
  {
    id: "kia-rio",
    name: "Kia Rio (2019/2020)",
    type: "Economic",
    price: 8,
    image: "/assets/cars/photo_3_2026-04-08_15-56-29.jpg",
    features: ["Automatic", "5 Seats", "Compact"]
  },
  {
    id: "mg",
    name: "MG",
    type: "Sedan",
    price: 9,
    image: "/assets/cars/photo_4_2026-04-08_15-56-29.jpg",
    features: ["Automatic", "Leather Seats", "Cruise Control"]
  },
  {
    id: "peugeot-2008",
    name: "Peugeot 2008",
    type: "SUV",
    price: 9,
    image: "/assets/cars/photo_5_2026-04-08_15-56-29.jpg",
    features: ["Automatic", "Compact SUV", "Apple CarPlay"]
  },
  {
    id: "hyundai-tucson",
    name: "Hyundai Tucson",
    type: "SUV",
    price: 12,
    image: "/assets/cars/photo_6_2026-04-08_15-56-29.jpg",
    features: ["Automatic", "Spacious", "Rear Camera"]
  },
  {
    id: "kia-k5",
    name: "Kia K5",
    type: "Luxury",
    price: 14,
    image: "/assets/cars/photo_7_2026-04-08_15-56-29.jpg",
    features: ["Automatic", "Premium Audio", "Sunroof"]
  }
];
