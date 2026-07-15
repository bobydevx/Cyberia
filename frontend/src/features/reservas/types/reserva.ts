export type Reserva = {
  id: number;
  user_id: number;
  cabin_id: number;
  date: string;
  start_time: string;
  end_time: string;
  price: number;
  status: "reserved" | "cancelled" | "outdated";
};
