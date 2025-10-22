export interface MacModel {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  images: string[];
  colors: { name: string; code: string; available: boolean }[];
  storage: string[];
  specs: {
    processor: string;
    memory: string;
    display: string;
    graphics: string;
    weight?: string;
  };
  shortSpecs?: string; // Краткое описание для карточки (например: "Чип M3 • 8 ГБ • 256 ГБ")
  description: string;
  features: string[];
  year?: number;
}

export const macs: MacModel[] = [
  {
    id: 'macbook-air-m3-15',
    name: 'MacBook Air 15" M3',
    price: '135 990 ₽',
    priceValue: 135990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Темная ночь', code: '#1D1D1F', available: true },
      { name: 'Серебристый', code: '#E8E8E8', available: true },
      { name: 'Сияющая звезда', code: '#F5F5DC', available: true },
      { name: 'Космический серый', code: '#6B6B6B', available: true },
    ],
    storage: ['256GB', '512GB', '1TB', '2TB'],
    specs: {
      processor: 'Чип Apple M3 (8-ядерный CPU)',
      memory: '8GB, 16GB или 24GB унифицированной памяти',
      display: '15.3" Liquid Retina (2880x1864)',
      graphics: 'GPU с 10 ядрами',
      weight: '1.51 кг',
    },
    shortSpecs: 'Чип M3 • 8 ГБ • 256 ГБ',
    description: 'MacBook Air 15". Невероятно тонкий. Феноменально мощный.',
    features: [
      'Чип Apple M3 нового поколения',
      'До 18 часов автономной работы',
      'Большой 15.3" дисплей Liquid Retina',
      'Бесшумная работа без вентилятора',
      'MagSafe для зарядки',
      '1080p FaceTime HD камера',
    ],
    year: 2024,
  },
  {
    id: 'macbook-air-m3-13',
    name: 'MacBook Air 13" M3',
    price: '115 990 ₽',
    priceValue: 115990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Темная ночь', code: '#1D1D1F', available: true },
      { name: 'Серебристый', code: '#E8E8E8', available: true },
      { name: 'Сияющая звезда', code: '#F5F5DC', available: true },
      { name: 'Космический серый', code: '#6B6B6B', available: true },
    ],
    storage: ['256GB', '512GB', '1TB', '2TB'],
    specs: {
      processor: 'Чип Apple M3 (8-ядерный CPU)',
      memory: '8GB, 16GB или 24GB унифицированной памяти',
      display: '13.6" Liquid Retina (2560x1664)',
      graphics: 'GPU с 8 или 10 ядрами',
      weight: '1.24 кг',
    },
    shortSpecs: 'Чип M3 • 8 ГБ • 256 ГБ',
    description: 'MacBook Air 13". Идеальное сочетание мощности и портативности.',
    features: [
      'Сверхпортативный корпус',
      'Чип Apple M3',
      'До 18 часов автономной работы',
      'Яркий 13.6" дисплей',
      'Бесшумная работа',
      'MagSafe зарядка',
    ],
    year: 2024,
  },
  {
    id: 'macbook-pro-14-m3-pro',
    name: 'MacBook Pro 14" M3 Pro',
    price: '209 990 ₽',
    priceValue: 209990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Космический черный', code: '#2C2C2E', available: true },
      { name: 'Серебристый', code: '#E8E8E8', available: true },
    ],
    storage: ['512GB', '1TB', '2TB', '4TB'],
    specs: {
      processor: 'Чип Apple M3 Pro (11 или 12-ядерный CPU)',
      memory: '18GB или 36GB унифицированной памяти',
      display: '14.2" Liquid Retina XDR (3024x1964)',
      graphics: 'GPU с 14 или 18 ядрами',
      weight: '1.55 кг',
    },
    shortSpecs: 'Чип M3 Pro • 18 ГБ • 512 ГБ',
    description: 'MacBook Pro 14". Для профессионалов. Неукротимая мощь.',
    features: [
      'Революционный чип M3 Pro',
      'Потрясающий XDR дисплей',
      'До 18 часов автономной работы',
      'Порты: 3x Thunderbolt 4, HDMI, SD-карта',
      'Улучшенная система охлаждения',
      'Студийное качество звука',
    ],
    year: 2023,
  },
  {
    id: 'macbook-pro-14-m3-max',
    name: 'MacBook Pro 14" M3 Max',
    price: '329 990 ₽',
    priceValue: 329990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Космический черный', code: '#2C2C2E', available: true },
      { name: 'Серебристый', code: '#E8E8E8', available: true },
    ],
    storage: ['1TB', '2TB', '4TB', '8TB'],
    specs: {
      processor: 'Чип Apple M3 Max (14 или 16-ядерный CPU)',
      memory: '36GB, 48GB, 64GB или 128GB унифицированной памяти',
      display: '14.2" Liquid Retina XDR (3024x1964)',
      graphics: 'GPU с 30 или 40 ядрами',
      weight: '1.62 кг',
    },
    shortSpecs: 'Чип M3 Max • 36 ГБ • 1 ТБ',
    description: 'MacBook Pro 14" M3 Max. Максимальная производительность.',
    features: [
      'Флагманский чип M3 Max',
      'До 128GB унифицированной памяти',
      'Экстремальная графическая производительность',
      'Идеален для 3D-рендеринга и видеомонтажа',
      'До 22 часов автономной работы',
      'Поддержка до 2 внешних дисплеев 6K',
    ],
    year: 2023,
  },
  {
    id: 'macbook-pro-16-m3-pro',
    name: 'MacBook Pro 16" M3 Pro',
    price: '269 990 ₽',
    priceValue: 269990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Космический черный', code: '#2C2C2E', available: true },
      { name: 'Серебристый', code: '#E8E8E8', available: true },
    ],
    storage: ['512GB', '1TB', '2TB', '4TB', '8TB'],
    specs: {
      processor: 'Чип Apple M3 Pro (12-ядерный CPU)',
      memory: '18GB или 36GB унифицированной памяти',
      display: '16.2" Liquid Retina XDR (3456x2234)',
      graphics: 'GPU с 18 ядрами',
      weight: '2.14 кг',
    },
    shortSpecs: 'Чип M3 Pro • 18 ГБ • 512 ГБ',
    description: 'MacBook Pro 16". Огромный экран. Огромные возможности.',
    features: [
      'Массивный 16.2" XDR дисплей',
      'Чип M3 Pro',
      'До 22 часов автономной работы',
      'Идеален для работы с большими проектами',
      '6-динамиковая звуковая система',
      'Студийное качество микрофонов',
    ],
    year: 2023,
  },
  {
    id: 'macbook-pro-16-m3-max',
    name: 'MacBook Pro 16" M3 Max',
    price: '389 990 ₽',
    priceValue: 389990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Космический черный', code: '#2C2C2E', available: true },
      { name: 'Серебристый', code: '#E8E8E8', available: true },
    ],
    storage: ['1TB', '2TB', '4TB', '8TB'],
    specs: {
      processor: 'Чип Apple M3 Max (14 или 16-ядерный CPU)',
      memory: '36GB, 48GB, 64GB или 128GB унифицированной памяти',
      display: '16.2" Liquid Retina XDR (3456x2234)',
      graphics: 'GPU с 30 или 40 ядрами',
      weight: '2.16 кг',
    },
    shortSpecs: 'Чип M3 Max • 36 ГБ • 1 ТБ',
    description: 'MacBook Pro 16" M3 Max. Абсолютная вершина мощности.',
    features: [
      'Самый мощный MacBook',
      'Чип M3 Max с 40-ядерным GPU',
      'До 128GB памяти',
      'Идеален для профессионального видео 8K',
      'До 22 часов работы',
      'Поддержка до 4 внешних дисплеев',
    ],
    year: 2023,
  },
  {
    id: 'imac-24-m3',
    name: 'iMac 24" M3',
    price: '149 990 ₽',
    priceValue: 149990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Зеленый', code: '#6FC276', available: true },
      { name: 'Желтый', code: '#F5D547', available: true },
      { name: 'Оранжевый', code: '#F78E3A', available: true },
      { name: 'Розовый', code: '#F497B8', available: true },
      { name: 'Фиолетовый', code: '#C289D8', available: true },
      { name: 'Синий', code: '#6AB8F0', available: true },
      { name: 'Серебристый', code: '#E8E8E8', available: true },
    ],
    storage: ['256GB', '512GB', '1TB', '2TB'],
    specs: {
      processor: 'Чип Apple M3 (8-ядерный CPU)',
      memory: '8GB, 16GB или 24GB унифицированной памяти',
      display: '24" 4.5K Retina (4480x2520)',
      graphics: 'GPU с 8 или 10 ядрами',
    },
    shortSpecs: 'Чип M3 • 8 ГБ • 256 ГБ',
    description: 'iMac 24". Яркие цвета. Яркие идеи.',
    features: [
      'Потрясающий 4.5K Retina дисплей',
      'Чип M3',
      '7 ярких цветов',
      'Ультратонкий дизайн 11.5 мм',
      '1080p FaceTime HD камера',
      'Студийное качество звука',
      'Touch ID на клавиатуре',
    ],
    year: 2023,
  },
  {
    id: 'mac-mini-m2',
    name: 'Mac mini M2',
    price: '67 990 ₽',
    priceValue: 67990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Серебристый', code: '#E8E8E8', available: true },
    ],
    storage: ['256GB', '512GB', '1TB', '2TB'],
    specs: {
      processor: 'Чип Apple M2 (8-ядерный CPU)',
      memory: '8GB, 16GB или 24GB унифицированной памяти',
      display: 'Поддержка до двух дисплеев 6K',
      graphics: 'GPU с 10 ядрами',
    },
    shortSpecs: 'Чип M2 • 8 ГБ • 256 ГБ',
    description: 'Mac mini. Компактный. Мощный. Доступный.',
    features: [
      'Невероятно компактный корпус',
      'Чип Apple M2',
      'Доступная цена',
      'Поддержка двух дисплеев 6K',
      '2x Thunderbolt 4, 2x USB-A, HDMI',
      'Gigabit Ethernet (опционально 10Gb)',
    ],
    year: 2023,
  },
  {
    id: 'mac-mini-m2-pro',
    name: 'Mac mini M2 Pro',
    price: '149 990 ₽',
    priceValue: 149990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Серебристый', code: '#E8E8E8', available: true },
    ],
    storage: ['512GB', '1TB', '2TB', '4TB', '8TB'],
    specs: {
      processor: 'Чип Apple M2 Pro (10 или 12-ядерный CPU)',
      memory: '16GB или 32GB унифицированной памяти',
      display: 'Поддержка до трех дисплеев 6K',
      graphics: 'GPU с 16 или 19 ядрами',
    },
    shortSpecs: 'Чип M2 Pro • 16 ГБ • 512 ГБ',
    description: 'Mac mini M2 Pro. Профессиональная мощь в компактном корпусе.',
    features: [
      'Чип M2 Pro',
      'До 32GB памяти',
      'Поддержка трех дисплеев 6K',
      '4x Thunderbolt 4',
      '10Gb Ethernet',
      'Идеален для рабочих станций',
    ],
    year: 2023,
  },
  {
    id: 'mac-studio-m2-max',
    name: 'Mac Studio M2 Max',
    price: '239 990 ₽',
    priceValue: 239990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Серебристый', code: '#E8E8E8', available: true },
    ],
    storage: ['512GB', '1TB', '2TB', '4TB', '8TB'],
    specs: {
      processor: 'Чип Apple M2 Max (12-ядерный CPU)',
      memory: '32GB, 64GB или 96GB унифицированной памяти',
      display: 'Поддержка до 5 дисплеев (4x 6K + 1x 4K)',
      graphics: 'GPU с 30 или 38 ядрами',
    },
    shortSpecs: 'Чип M2 Max • 32 ГБ • 512 ГБ',
    description: 'Mac Studio. Студийное качество производительности.',
    features: [
      'Чип M2 Max',
      'До 96GB унифицированной памяти',
      'Поддержка до 5 дисплеев',
      '6x Thunderbolt 4',
      '10Gb Ethernet',
      'Профессиональная рабочая станция',
    ],
    year: 2023,
  },
  {
    id: 'mac-studio-m2-ultra',
    name: 'Mac Studio M2 Ultra',
    price: '469 990 ₽',
    priceValue: 469990,
    images: [
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
      'https://optim.tildacdn.one/stor3661-6262-4331-a633-616433663139/-/format/webp/80630799.webp',
    ],
    colors: [
      { name: 'Серебристый', code: '#E8E8E8', available: true },
    ],
    storage: ['1TB', '2TB', '4TB', '8TB'],
    specs: {
      processor: 'Чип Apple M2 Ultra (24-ядерный CPU)',
      memory: '64GB, 128GB или 192GB унифицированной памяти',
      display: 'Поддержка до 6 дисплеев Pro Display XDR',
      graphics: 'GPU с 60 или 76 ядрами',
    },
    shortSpecs: 'Чип M2 Ultra • 64 ГБ • 1 ТБ',
    description: 'Mac Studio M2 Ultra. Беспрецедентная мощность.',
    features: [
      'Революционный чип M2 Ultra',
      'До 192GB памяти',
      'GPU с 76 ядрами',
      'Поддержка до 6 дисплеев 6K',
      'Самый мощный Mac',
      'Для самых требовательных задач',
    ],
    year: 2023,
  },
];

export const getMacById = (id: string): MacModel | undefined => {
  return macs.find((mac) => mac.id === id);
};

export const getAllMacs = (): MacModel[] => {
  return macs;
};
