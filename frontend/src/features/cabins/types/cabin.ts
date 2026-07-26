export type Cabin = {
  id: number;
  name: string;
  price: number;
  status: "available" | "reserve" | "maintenance";
  processor?: string;
  graphic_card?: string;
  ram?: string;
  image?: string;
};
