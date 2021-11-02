import { ITabData, ITabDataItem } from './Tabs.interfaces';

export const Constant = {};

const POPULAR = {
  title: 'Popular',
  data: [
    {
      title: 'Passion Fruit Green Tea',
      price: '$ 1.80',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25366.jpg?width=200',
    },
    {
      title: 'Oolong Milk Tea',
      price: '$ 1.80',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25369.jpg?width=200',
    },
    {
      title: 'Golden Bubble Milk Tea',
      price: '$ 1.90',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25378.jpg?width=200',
    },

    {
      title: 'Brown Sugar Milk Tea',
      price: '$ 1.90',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25375.jpg?width=200',
    },
    {
      title: 'Grass Jelly Milk Tea',
      price: '$ 2.20',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25381.jpg?width=200',
    },
    {
      title: 'Milk Tea',
      price: '$ 1.80',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25367.jpg?width=200',
    },
  ],
};

const COMBO_TOPPING = {
  title: 'Combo Topping',
  data: [
    {
      title: 'Golden jumbo Milk Tea',
      price: '$ 2.20',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/1172037.jpg?width=200',
    },
    {
      title: 'Golden Taro Milk Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/1172033.jpg?width=200',
    },
    {
      title: 'Golden Konjac Milk Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/1212745.jpg?width=200',
    },
  ],
};

const TOP_10_BEVERAGES = {
  title: 'Top 10 Beverages',
  data: [
    {
      title: 'Passion Fruit Green Tea',
      price: '$ 1.80',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25388.jpg?width=200',
    },
    {
      title: 'Oolong Milk Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25369.jpg?width=200',
    },
    {
      title: 'Golden Bubble Milk Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25378.jpg?width=200',
    },
    {
      title: 'Brown Sugar Milk Tea',
      price: '$ 1.90',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25375.jpg?width=200',
    },
    {
      title: 'Black Tea Machiato',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25384.jpg?width=200',
    },
    {
      title: 'Green Tea Macchiato',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25385.jpg?width=200',
    },
    {
      title: 'Jumbo Milk Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/786406.jpg?width=200',
    },
    {
      title: 'Mango Green Tea Macchiato',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25388.jpg?width=200',
    },
    {
      title: 'Taro Q Milk Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871469.jpg?width=200',
    },
    {
      title: 'Konjac Jelly Milk Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25379.jpg?width=200',
    },
  ],
};

const NEW_BEVERAGES = {
  title: 'New Beverages',
  data: [
    {
      title: 'Taro Q Green Tea',
      price: '$ 2.20',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871360.jpg?width=200',
    },
    {
      title: 'Taro Q Black Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871360.jpg?width=200',
    },
    {
      title: 'Taro Q Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871360.jpg?width=200',
    },
    {
      title: 'Taro Q Green Milk Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871360.jpg?width=200',
    },
    {
      title: 'Taro Q Oolong Milk Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871360.jpg?width=200',
    },
  ],
};

const FLAVORED_TEA = {
  title: 'Flavored Tea',
  data: [
    {
      title: 'Jasmine Green Tea',
      price: '$ 2.20',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25358.jpg?width=200',
    },
    {
      title: 'Assam Black Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25359.jpg?width=200',
    },
    {
      title: 'Golden Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25360.jpg?width=200',
    },
    {
      title: 'Honey Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25363.jpg?width=200',
    },
    {
      title: 'Peach Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25364.jpg?width=200',
    },
    {
      title: 'Mango Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25365.jpg?width=200',
    },
    {
      title: 'Honey Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871185.jpg?width=200',
    },
  ],
};

const CHEWY_TEA = {
  title: 'Chewy Tea',
  data: [
    {
      title: 'Bubble Black Tea',
      price: '$ 2.20',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25376.jpg?width=200',
    },
    {
      title: 'Bubble Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25377.jpg?width=200',
    },
    {
      title: 'Bubble Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871322.jpg?width=200',
    },
    {
      title: 'Grass Jelly Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871193.jpg?width=200',
    },
    {
      title: 'Grass Jelly Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871193.jpg?width=200',
    },
    {
      title: 'Bubble Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871193.jpg?width=200',
    },
    {
      title: 'Jumbo Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871196.jpg?width=200',
    },
    {
      title: 'Jumbo Black Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871227.jpg?width=200',
    },
    {
      title: 'Jumbo Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871336.jpg?width=200',
    },
    {
      title: 'Aloe Vera Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871204.jpg?width=200',
    },
    {
      title: 'Konjac Jelly Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871218.jpg?width=200',
    },
    {
      title: 'Coconut Jelly Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871218.jpg?width=200',
    },
    {
      title: 'Aloe Vera Black Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871239.jpg?width=200',
    },
    {
      title: 'Konjac Jelly Black Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871239.jpg?width=200',
    },
    {
      title: 'Coconut jelly Black Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871239.jpg?width=200',
    },
    {
      title: 'Aloe Vera Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871344.jpg?width=200',
    },
    {
      title: 'Konjac jelly Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871344.jpg?width=200',
    },
    {
      title: 'Coconut Jelly Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871344.jpg?width=200',
    },
    {
      title: 'Grass jelly Milk Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25381.jpg?width=200',
    },
  ],
};

const CHEWY_MILK_TEA = {
  title: 'Chewy Tea',
  data: [
    {
      title: 'Bubble Black Tea',
      price: '$ 2.20',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25376.jpg?width=200',
    },
    {
      title: 'Bubble Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25377.jpg?width=200',
    },
    {
      title: 'Bubble Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871322.jpg?width=200',
    },
    {
      title: 'Grass Jelly Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871193.jpg?width=200',
    },
    {
      title: 'Grass Jelly Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871193.jpg?width=200',
    },
    {
      title: 'Bubble Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871193.jpg?width=200',
    },
    {
      title: 'Jumbo Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871196.jpg?width=200',
    },
    {
      title: 'Jumbo Black Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871227.jpg?width=200',
    },
    {
      title: 'Jumbo Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871336.jpg?width=200',
    },
    {
      title: 'Aloe Vera Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871204.jpg?width=200',
    },
    {
      title: 'Konjac Jelly Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871218.jpg?width=200',
    },
    {
      title: 'Coconut Jelly Green Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871218.jpg?width=200',
    },
    {
      title: 'Aloe Vera Black Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871239.jpg?width=200',
    },
    {
      title: 'Konjac Jelly Black Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871239.jpg?width=200',
    },
    {
      title: 'Coconut jelly Black Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871239.jpg?width=200',
    },
    {
      title: 'Aloe Vera Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871344.jpg?width=200',
    },
    {
      title: 'Konjac jelly Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871344.jpg?width=200',
    },
    {
      title: 'Coconut Jelly Oolong Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/871344.jpg?width=200',
    },
    {
      title: 'Grass jelly Milk Tea',
      price: '$ 2.30',
      productURL:
        'https://images.deliveryhero.io/image/fd-kh/Products/25381.jpg?width=200',
    },
  ],
};

export const TAB_DATA: ITabData = [
  POPULAR,
  COMBO_TOPPING,
  TOP_10_BEVERAGES,
  NEW_BEVERAGES,
  FLAVORED_TEA,
  CHEWY_TEA,
  CHEWY_MILK_TEA,
];

export const TAB_MENU: Array<ITabDataItem['title']> = TAB_DATA.map(
  (t) => t.title,
);
