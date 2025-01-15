export interface SeatType {
  id: string;
  name: string;
  isReserved: boolean;
}

export interface SeatStyledProps {
  isReserved?: boolean;
  isChosen?: boolean;
}
