export interface CarData {
  id: string;
  name: string;
  type: "Economic" | "Sedan" | "SUV" | "Luxury";
  price: number; // OMR per day
  image: string;
  description: string;
  features: string[];
}

export const CARS: CarData[] = [
  {
    id: "nissan-sunny",
    name: "Nissan Sunny",
    type: "Economic",
    price: 7,
    image: "/assets/cars/nisan sunny/photo_15_2026-04-14_11-48-32.jpg",
    description: "Renowned for its incredible reliability and class-leading cabin space. The Nissan Sunny is the ultimate practical choice for both business and leisure.",
    features: ["Automatic", "5 Seats", "AC", "Economic"]
  },
  {
    id: "hyundai-elantra",
    name: "Hyundai Elantra",
    type: "Sedan",
    price: 8,
    image: "/assets/cars/elentra/photo_39_2026-04-14_11-48-32.jpg",
    description: "A reliable and stylish sedan, perfect for daily commuting and long trips, featuring comfortable seating, modern tech, and excellent fuel efficiency.",
    features: ["Automatic", "5 Seats", "Bluetooth", "Cruise Control"]
  },
  {
    id: "kia-rio",
    name: "Kia Rio (2019/2020)",
    type: "Economic",
    price: 8,
    image: "/assets/cars/kia rio/photo_17_2026-04-14_11-48-32.jpg",
    description: "An economical and compact car ideal for city driving. It offers great mileage, a comfortable ride, and effortless handling in tight urban spaces.",
    features: ["Automatic", "5 Seats", "Compact", "USB Port"]
  },
  {
    id: "mg5",
    name: "MG 5",
    type: "Sedan",
    price: 9,
    image: "/assets/cars/mg5/photo_11_2026-04-14_11-48-32.jpg",
    description: "A well-equipped and spacious sedan delivering excellent value. The MG 5 boasts a sleek design, leather-style seating, and advanced multimedia capabilities.",
    features: ["Automatic", "Leather Seats", "Cruise Control", "Rear Camera"]
  },
  {
    id: "peugeot-2008",
    name: "Peugeot 2008",
    type: "SUV",
    price: 9,
    image: "/assets/cars/pezo 2008/photo_1_2026-04-14_11-48-32.jpg",
    description: "A beautifully crafted compact SUV with a striking European design. The Peugeot 2008 combines an elevated driving position with a high-tech modern cockpit.",
    features: ["Automatic", "Compact SUV", "Apple CarPlay", "Sporty Design"]
  },
  {
    id: "hyundai-tucson",
    name: "Hyundai Tucson",
    type: "SUV",
    price: 12,
    image: "/assets/cars/tosan/photo_10_2026-04-14_11-48-32.jpg",
    description: "A robust and spacious SUV designed for versatility and comfort. The Tucson provides a smooth ride, ample cargo space, and a suite of smart features for families.",
    features: ["Automatic", "Spacious", "Rear Camera", "Family SUV"]
  },
  {
    id: "kia-k5",
    name: "Kia K5",
    type: "Luxury",
    price: 14,
    image: "/assets/cars/kia k5/photo_3_2026-04-14_11-47-32.jpg",
    description: "A sporty and bold mid-size luxury sedan. The Kia K5 offers a premium interior, advanced safety features, and a dynamic driving experience.",
    features: ["Automatic", "Premium Audio", "Sunroof", "Luxury Interior"]
  }
];
