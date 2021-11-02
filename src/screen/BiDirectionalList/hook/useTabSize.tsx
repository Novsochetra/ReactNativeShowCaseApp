import { useState } from 'react';

export type ITabSize = { width: number; height: number };

export const useTabSize = () => {
  const [sizes, setSizes] = useState([]);

  console.log('TAB SIZES: ', sizes);
  return [
    sizes,
    (index: number, value: any) => {
      setSizes((prev) => {
        return [...prev.slice(0, index), value, ...prev.slice(index + 1)];
      });
    },
  ];
};
