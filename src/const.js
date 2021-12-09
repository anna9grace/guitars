export const MAX_PRODUCTS_SHOWN = 9;

export const NameSpace = {
  DATA: 'dataSlice',
  CART: 'cartSlice',
  FILTERS: 'filtersSlice',
};

export const NavLinks = {
  CATALOG: 'Каталог',
  WHERE_BUY: 'Где купить?',
  ABOUT: 'О компании',
  SERVICE: 'Сервис-центры',
};

export const FiltersGroups = {
  PRICE: 'price',
  GUITAR_TYPE: 'type',
  STRING_COUNT: 'strings',
};

export const FiltersOptions = {
  [FiltersGroups.PRICE]: {
    MIN: 'min',
    MAX: 'max',
  },
  [FiltersGroups.GUITAR_TYPE]: {
    ACOUSTIC: 'acoustic',
    ELECTRIC: 'electric',
    UKULELE: 'ukulele',
  },
  [FiltersGroups.STRING_COUNT]: {
    FOUR: '4',
    SIX: '6',
    SEVEN: '7',
    TWELVE: '12',
  },
};

export const SortSettings = {
  type: {
    PRICE: 'price',
    POPULARITY: 'reviews',
  },
  direction: {
    UP: 'up',
    DOWN: 'down',
  },
};
