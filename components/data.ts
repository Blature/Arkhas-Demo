export interface CarData {
  id: string;
  name: string;
  type: "Economic" | "Sedan" | "SUV" | "Luxury";
  price: number; // OMR per day
  image: string;
  images: string[];
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
    images: ["/assets/cars/nisan sunny/photo_15_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_16_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_19_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_1_2026-04-14_11-47-32.jpg","/assets/cars/nisan sunny/photo_20_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_21_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_22_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_23_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_24_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_25_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_26_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_27_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_28_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_29_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_2_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_30_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_31_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_32_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_33_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_34_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_35_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_36_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_38_2026-04-14_11-48-32.jpg","/assets/cars/nisan sunny/photo_5_2026-04-14_11-47-32.jpg"],
    description: "Renowned for its incredible reliability and class-leading cabin space. The Nissan Sunny is the ultimate practical choice for both business and leisure.",
    features: ["Automatic", "5 Seats", "AC", "Economic"]
  },
  {
    id: "hyundai-elantra",
    name: "Hyundai Elantra",
    type: "Sedan",
    price: 8,
    image: "/assets/cars/elentra/photo_39_2026-04-14_11-48-32.jpg",
    images: ["/assets/cars/elentra/photo_39_2026-04-14_11-48-32.jpg","/assets/cars/elentra/photo_57_2026-04-14_11-48-32.jpg","/assets/cars/elentra/photo_58_2026-04-14_11-48-32.jpg","/assets/cars/elentra/photo_59_2026-04-14_11-48-32.jpg","/assets/cars/elentra/photo_60_2026-04-14_11-48-32.jpg","/assets/cars/elentra/photo_65_2026-04-14_11-48-32.jpg","/assets/cars/elentra/photo_6_2026-04-14_11-47-32.jpg","/assets/cars/elentra/photo_73_2026-04-14_11-48-32.jpg","/assets/cars/elentra/photo_74_2026-04-14_11-48-32.jpg","/assets/cars/elentra/photo_75_2026-04-14_11-48-32.jpg","/assets/cars/elentra/photo_76_2026-04-14_11-48-32.jpg","/assets/cars/elentra/photo_77_2026-04-14_11-48-32.jpg"],
    description: "A reliable and stylish sedan, perfect for daily commuting and long trips, featuring comfortable seating, modern tech, and excellent fuel efficiency.",
    features: ["Automatic", "5 Seats", "Bluetooth", "Cruise Control"]
  },
  {
    id: "kia-rio",
    name: "Kia Rio (2019/2020)",
    type: "Economic",
    price: 8,
    image: "/assets/cars/kia rio/photo_17_2026-04-14_11-48-32.jpg",
    images: ["/assets/cars/kia rio/photo_17_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_18_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_2_2026-04-14_11-47-32.jpg","/assets/cars/kia rio/photo_3_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_42_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_43_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_44_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_45_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_4_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_50_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_51_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_52_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_53_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_54_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_55_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_56_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_63_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_64_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_66_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_78_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_79_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_80_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_81_2026-04-14_11-48-32.jpg","/assets/cars/kia rio/photo_82_2026-04-14_11-48-32.jpg"],
    description: "An economical and compact car ideal for city driving. It offers great mileage, a comfortable ride, and effortless handling in tight urban spaces.",
    features: ["Automatic", "5 Seats", "Compact", "USB Port"]
  },
  {
    id: "mg5",
    name: "MG 5",
    type: "Sedan",
    price: 9,
    image: "/assets/cars/mg5/photo_11_2026-04-14_11-48-32.jpg",
    images: ["/assets/cars/mg5/photo_11_2026-04-14_11-48-32.jpg","/assets/cars/mg5/photo_12_2026-04-14_11-48-32.jpg","/assets/cars/mg5/photo_40_2026-04-14_11-48-32.jpg","/assets/cars/mg5/photo_41_2026-04-14_11-48-32.jpg"],
    description: "A well-equipped and spacious sedan delivering excellent value. The MG 5 boasts a sleek design, leather-style seating, and advanced multimedia capabilities.",
    features: ["Automatic", "Leather Seats", "Cruise Control", "Rear Camera"]
  },
  {
    id: "peugeot-2008",
    name: "Peugeot 2008",
    type: "SUV",
    price: 9,
    image: "/assets/cars/pezo 2008/photo_1_2026-04-14_11-48-32.jpg",
    images: ["/assets/cars/pezo 2008/photo_1_2026-04-14_11-48-32.jpg","/assets/cars/pezo 2008/photo_37_2026-04-14_11-48-32.jpg"],
    description: "A beautifully crafted compact SUV with a striking European design. The Peugeot 2008 combines an elevated driving position with a high-tech modern cockpit.",
    features: ["Automatic", "Compact SUV", "Apple CarPlay", "Sporty Design"]
  },
  {
    id: "hyundai-tucson",
    name: "Hyundai Tucson",
    type: "SUV",
    price: 12,
    image: "/assets/cars/tosan/photo_10_2026-04-14_11-48-32.jpg",
    images: ["/assets/cars/tosan/photo_10_2026-04-14_11-48-32.jpg","/assets/cars/tosan/photo_13_2026-04-14_11-48-32.jpg","/assets/cars/tosan/photo_14_2026-04-14_11-48-32.jpg","/assets/cars/tosan/photo_4_2026-04-14_11-47-32.jpg","/assets/cars/tosan/photo_67_2026-04-14_11-48-32.jpg","/assets/cars/tosan/photo_68_2026-04-14_11-48-32.jpg","/assets/cars/tosan/photo_69_2026-04-14_11-48-32.jpg","/assets/cars/tosan/photo_70_2026-04-14_11-48-32.jpg","/assets/cars/tosan/photo_71_2026-04-14_11-48-32.jpg","/assets/cars/tosan/photo_72_2026-04-14_11-48-32.jpg","/assets/cars/tosan/photo_7_2026-04-14_11-48-32.jpg","/assets/cars/tosan/photo_8_2026-04-14_11-48-32.jpg","/assets/cars/tosan/photo_9_2026-04-14_11-48-32.jpg"],
    description: "A robust and spacious SUV designed for versatility and comfort. The Tucson provides a smooth ride, ample cargo space, and a suite of smart features for families.",
    features: ["Automatic", "Spacious", "Rear Camera", "Family SUV"]
  },
  {
    id: "kia-k5",
    name: "Kia K5",
    type: "Luxury",
    price: 14,
    image: "/assets/cars/kia k5/photo_3_2026-04-14_11-47-32.jpg",
    images: ["/assets/cars/kia k5/photo_3_2026-04-14_11-47-32.jpg","/assets/cars/kia k5/photo_46_2026-04-14_11-48-32.jpg","/assets/cars/kia k5/photo_47_2026-04-14_11-48-32.jpg","/assets/cars/kia k5/photo_48_2026-04-14_11-48-32.jpg","/assets/cars/kia k5/photo_5_2026-04-14_11-48-32.jpg","/assets/cars/kia k5/photo_61_2026-04-14_11-48-32.jpg","/assets/cars/kia k5/photo_62_2026-04-14_11-48-32.jpg","/assets/cars/kia k5/photo_6_2026-04-14_11-48-32.jpg"],
    description: "A sporty and bold mid-size luxury sedan. The Kia K5 offers a premium interior, advanced safety features, and a dynamic driving experience.",
    features: ["Automatic", "Premium Audio", "Sunroof", "Luxury Interior"]
  }
];
