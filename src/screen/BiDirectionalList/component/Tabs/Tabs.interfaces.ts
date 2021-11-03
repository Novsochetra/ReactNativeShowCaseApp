export interface ITabsContainerProps {
  data: Array<any>;
  indicatorStyle: any;
  onSetTabSizes: (index: number, tabSize: ITabSize) => void;
  onPressTabItem: (index: number) => void;
}

export interface ITabsPresentationProps {
  data: Array<ITabDataItem['title']>;
  indicatorStyle: any;
  onSetTabSizes: (index: number, tabSize: ITabSize) => void;
  onPressTabItem: (index: number) => void;
}

export interface ITabsPresentationProps {
  data: Array<ITabDataItem['title']>;
  indicatorStyle: any;
  onSetTabSizes: (index: number, tabSizeObj: ITabSize) => void;
  onPressTabItem: (index: number) => void;
}

export type ITabSize = {
  width: number;
  height: number;
};

export interface IProduct {
  title: string;
  price: string;
  productURL: string;
}

export type ITabDataItem = {
  title: string;
  data: Array<IProduct>;
};
export type ITabData = Array<ITabDataItem>;

export type ITabItem = {
  id: number;
  label: string;
};
