export interface ITabProps {
  label: string;
  index: number;
  onSwap: (x: number, y: number) => void;
}

export type PanGestureContext = {
  translateX: number;
  translateY: number;
};
