export interface IPhoneModel {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  images: string[];
  colors: { name: string; code: string; available: boolean }[];
  storage: string[];
  specs: {
    display: string;
    chip: string;
    camera: string;
    battery: string;
    weight: string;
  };
  description: string;
  features: string[];
}

export const iphones: IPhoneModel[] = [
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    price: '95 990 ₽',
    priceValue: 95990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Титановый черный', code: '#2C2C2E', available: true },
      { name: 'Титановый белый', code: '#F5F5F7', available: true },
      { name: 'Титановый серый', code: '#8E8E93', available: true },
      { name: 'Титановый синий', code: '#1D1D1F', available: true },
    ],
    storage: ['128GB', '256GB', '512GB', '1TB'],
    specs: {
      display: '6.3" Super Retina XDR OLED',
      chip: 'A18 Pro',
      camera: 'Тройная 48MP + 48MP + 12MP',
      battery: 'До 29 часов воспроизведения видео',
      weight: '199 г',
    },
    description: 'iPhone 17 Pro. Титановый дизайн. Камера Pro. A18 Pro.',
    features: [
      'Титановый корпус премиум класса',
      'Революционная система камер Pro',
      'Самый мощный чип A18 Pro',
      'Увеличенное время работы от батареи',
    ],
  },
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    price: '115 990 ₽',
    priceValue: 115990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Титановый черный', code: '#2C2C2E', available: true },
      { name: 'Титановый белый', code: '#F5F5F7', available: true },
      { name: 'Титановый серый', code: '#8E8E93', available: true },
      { name: 'Титановый синий', code: '#1D1D1F', available: true },
    ],
    storage: ['256GB', '512GB', '1TB'],
    specs: {
      display: '6.9" Super Retina XDR OLED',
      chip: 'A18 Pro',
      camera: 'Тройная 48MP + 48MP + 12MP',
      battery: 'До 33 часов воспроизведения видео',
      weight: '227 г',
    },
    description: 'iPhone 17 Pro Max. Самый большой дисплей. Максимальная мощность.',
    features: [
      'Огромный 6.9" дисплей Pro',
      'Максимальное время работы батареи',
      'Продвинутая система камер',
      'Титановый дизайн премиум класса',
    ],
  },
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    price: '79 990 ₽',
    priceValue: 79990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Розовый', code: '#FAE1DD', available: true },
      { name: 'Желтый', code: '#F9E784', available: true },
      { name: 'Зеленый', code: '#D4E7C5', available: true },
      { name: 'Синий', code: '#A7C5EB', available: true },
      { name: 'Черный', code: '#1D1D1F', available: true },
    ],
    storage: ['128GB', '256GB', '512GB'],
    specs: {
      display: '6.3" Super Retina XDR OLED',
      chip: 'A18',
      camera: 'Двойная 48MP + 12MP',
      battery: 'До 26 часов воспроизведения видео',
      weight: '170 г',
    },
    description: 'iPhone 17. Новый дизайн. Яркие цвета. A18.',
    features: [
      'Стильный алюминиевый корпус',
      'Яркие, насыщенные цвета',
      'Мощный чип A18',
      'Передовая двойная камера',
    ],
  },
  {
    id: 'iphone-17-air',
    name: 'iPhone 17 Air',
    price: '89 990 ₽',
    priceValue: 89990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Серебристый', code: '#E8E8E8', available: true },
      { name: 'Розовое золото', code: '#F4C2C2', available: true },
      { name: 'Голубой', code: '#B8D4E8', available: true },
    ],
    storage: ['256GB', '512GB'],
    specs: {
      display: '6.6" Super Retina XDR OLED',
      chip: 'A18',
      camera: 'Двойная 48MP + 12MP',
      battery: 'До 27 часов воспроизведения видео',
      weight: '160 г',
    },
    description: 'iPhone 17 Air. Невероятно тонкий. Невероятно легкий.',
    features: [
      'Самый тонкий iPhone',
      'Элегантный премиум дизайн',
      'Большой 6.6" дисплей',
      'Легче, чем когда-либо',
    ],
  },
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    price: '109 990 ₽',
    priceValue: 109990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Титановый черный', code: '#2C2C2E', available: true },
      { name: 'Титановый натуральный', code: '#D9D9D9', available: true },
      { name: 'Титановый белый', code: '#F5F5F7', available: true },
      { name: 'Титановый синий', code: '#5B6B7A', available: true },
    ],
    storage: ['256GB', '512GB', '1TB'],
    specs: {
      display: '6.9" Super Retina XDR',
      chip: 'A17 Pro',
      camera: 'Тройная 48MP',
      battery: 'До 29 часов воспроизведения видео',
      weight: '221 г',
    },
    description: 'iPhone 16 Pro Max. Титановый. Прочный. Легкий.',
    features: [
      'Самый большой дисплей iPhone',
      'Титановый корпус',
      'Профессиональная камера Pro',
      'Кнопка Camera Control',
    ],
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    price: '94 990 ₽',
    priceValue: 94990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Титановый черный', code: '#2C2C2E', available: true },
      { name: 'Титановый натуральный', code: '#D9D9D9', available: true },
      { name: 'Титановый белый', code: '#F5F5F7', available: true },
      { name: 'Титановый синий', code: '#5B6B7A', available: true },
    ],
    storage: ['128GB', '256GB', '512GB', '1TB'],
    specs: {
      display: '6.3" Super Retina XDR',
      chip: 'A17 Pro',
      camera: 'Тройная 48MP',
      battery: 'До 27 часов воспроизведения видео',
      weight: '199 г',
    },
    description: 'iPhone 16 Pro. Титановый дизайн. Чип A17 Pro.',
    features: [
      'Титановый корпус премиум класса',
      'Продвинутая система камер Pro',
      'Кнопка Camera Control',
      'Чип A17 Pro',
    ],
  },
  {
    id: 'iphone-16-plus',
    name: 'iPhone 16 Plus',
    price: '84 990 ₽',
    priceValue: 84990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Черный', code: '#1D1D1F', available: true },
      { name: 'Белый', code: '#F5F5F7', available: true },
      { name: 'Розовый', code: '#FAE1DD', available: true },
      { name: 'Синий', code: '#A7C5EB', available: true },
      { name: 'Зеленый', code: '#D4E7C5', available: true },
    ],
    storage: ['128GB', '256GB', '512GB'],
    specs: {
      display: '6.7" Super Retina XDR',
      chip: 'A17',
      camera: 'Двойная 48MP',
      battery: 'До 26 часов воспроизведения видео',
      weight: '199 г',
    },
    description: 'iPhone 16 Plus. Большой дисплей. Большие возможности.',
    features: [
      'Большой 6.7" дисплей',
      'Мощный чип A17',
      'Увеличенная батарея',
      'Кнопка Action',
    ],
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    price: '74 990 ₽',
    priceValue: 74990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Черный', code: '#1D1D1F', available: true },
      { name: 'Белый', code: '#F5F5F7', available: true },
      { name: 'Розовый', code: '#FAE1DD', available: true },
      { name: 'Синий', code: '#A7C5EB', available: true },
      { name: 'Зеленый', code: '#D4E7C5', available: true },
    ],
    storage: ['128GB', '256GB', '512GB'],
    specs: {
      display: '6.1" Super Retina XDR',
      chip: 'A17',
      camera: 'Двойная 48MP',
      battery: 'До 22 часа воспроизведения видео',
      weight: '170 г',
    },
    description: 'iPhone 16. Новая эра iPhone.',
    features: [
      'Яркие цвета',
      'Мощный A17',
      'Продвинутая камера',
      'Кнопка Action',
    ],
  },
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    price: '99 990 ₽',
    priceValue: 99990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Титановый черный', code: '#2C2C2E', available: true },
      { name: 'Титановый натуральный', code: '#D9D9D9', available: true },
      { name: 'Титановый белый', code: '#F5F5F7', available: true },
      { name: 'Титановый синий', code: '#5B6B7A', available: true },
    ],
    storage: ['256GB', '512GB', '1TB'],
    specs: {
      display: '6.7" Super Retina XDR',
      chip: 'A16 Bionic',
      camera: 'Тройная 48MP',
      battery: 'До 29 часов воспроизведения видео',
      weight: '221 г',
    },
    description: 'iPhone 15 Pro Max. Титановый. Так про.',
    features: [
      'Титановый корпус',
      'Кнопка Action',
      'Профессиональная камера',
      'USB-C разъем',
    ],
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    price: '64 990 ₽',
    priceValue: 64990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Розовый', code: '#FAE1DD', available: true },
      { name: 'Желтый', code: '#F9E784', available: true },
      { name: 'Зеленый', code: '#D4E7C5', available: true },
      { name: 'Синий', code: '#A7C5EB', available: true },
      { name: 'Черный', code: '#1D1D1F', available: true },
    ],
    storage: ['128GB', '256GB', '512GB'],
    specs: {
      display: '6.1" Super Retina XDR',
      chip: 'A15 Bionic',
      camera: 'Двойная 48MP',
      battery: 'До 20 часов воспроизведения видео',
      weight: '171 г',
    },
    description: 'iPhone 15. Новый. Свежий. Ваш.',
    features: [
      'Камера 48MP',
      'Dynamic Island',
      'USB-C',
      'Яркие цвета',
    ],
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    price: '59 990 ₽',
    priceValue: 59990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Фиолетовый', code: '#C9B8E4', available: true },
      { name: 'Синий', code: '#A7C5EB', available: true },
      { name: 'Черный', code: '#1D1D1F', available: true },
      { name: 'Белый', code: '#F5F5F7', available: true },
      { name: 'Красный', code: '#D70015', available: true },
    ],
    storage: ['128GB', '256GB', '512GB'],
    specs: {
      display: '6.1" Super Retina XDR',
      chip: 'A15 Bionic',
      camera: 'Двойная 12MP',
      battery: 'До 20 часов воспроизведения видео',
      weight: '172 г',
    },
    description: 'iPhone 14. Большой и потрясающий.',
    features: [
      'Продвинутая камера',
      'Автофокус фронтальной камеры',
      'Режим Action',
      'Обнаружение аварий',
    ],
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    price: '54 990 ₽',
    priceValue: 54990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Розовый', code: '#FAE1DD', available: true },
      { name: 'Синий', code: '#A7C5EB', available: true },
      { name: 'Черный', code: '#1D1D1F', available: true },
      { name: 'Белый', code: '#F5F5F7', available: true },
      { name: 'Красный', code: '#D70015', available: true },
    ],
    storage: ['128GB', '256GB', '512GB'],
    specs: {
      display: '6.1" Super Retina XDR',
      chip: 'A15 Bionic',
      camera: 'Двойная 12MP',
      battery: 'До 19 часов воспроизведения видео',
      weight: '174 г',
    },
    description: 'iPhone 13. Самый продвинутый.',
    features: [
      'Кинематографический режим',
      'Увеличенная батарея',
      'Двойная камера',
      'Яркий дисплей',
    ],
  },
  {
    id: 'iphone-11',
    name: 'iPhone 11',
    price: '44 990 ₽',
    priceValue: 44990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Черный', code: '#1D1D1F', available: true },
      { name: 'Белый', code: '#F5F5F7', available: true },
      { name: 'Зеленый', code: '#D4E7C5', available: true },
      { name: 'Желтый', code: '#F9E784', available: true },
      { name: 'Фиолетовый', code: '#C9B8E4', available: true },
      { name: 'Красный', code: '#D70015', available: true },
    ],
    storage: ['64GB', '128GB', '256GB'],
    specs: {
      display: '6.1" Liquid Retina HD',
      chip: 'A13 Bionic',
      camera: 'Двойная 12MP',
      battery: 'До 17 часов воспроизведения видео',
      weight: '194 г',
    },
    description: 'iPhone 11. Просто правильное количество всего.',
    features: [
      'Двойная камера',
      'Ночной режим',
      'Чип A13 Bionic',
      'Весь день на одном заряде',
    ],
  },
];

export const getIPhoneById = (id: string): IPhoneModel | undefined => {
  return iphones.find((iphone) => iphone.id === id);
};

export const getAllIPhones = (): IPhoneModel[] => {
  return iphones;
};
