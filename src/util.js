import { FiltersGroups, SortSettings } from './const';


export const sortGuitars = (guitars, type, direction) => {
  const guitarsToSort = guitars.slice();

  switch (direction) {
    case SortSettings.direction.UP:
      return guitarsToSort.sort((a, b) => a[type] - b[type]);
    case SortSettings.direction.DOWN:
      return guitarsToSort.sort((a, b) => b[type] - a[type]);
    default:
      return guitarsToSort;
  }
};


export const filterGuitars = (guitars, filtersSettings) => {
  const isTypeMatched = (item) => (
    filtersSettings[FiltersGroups.GUITAR_TYPE].length === 0 || filtersSettings[FiltersGroups.GUITAR_TYPE].some((option) => option === item.type)
  );
  const isStringsMatched = (item) => (
    filtersSettings[FiltersGroups.STRING_COUNT].length === 0 || filtersSettings[FiltersGroups.STRING_COUNT].some((option) => +option === item.strings)
  );
  const isPriceMatched = (item) => {
    const moreThan = !filtersSettings[FiltersGroups.PRICE][0] || item.price >= filtersSettings[FiltersGroups.PRICE][0];
    const lessThan = !filtersSettings[FiltersGroups.PRICE][1] || item.price <= filtersSettings[FiltersGroups.PRICE][1];
    return moreThan && lessThan;
  };

  return guitars
    .filter((guitar) => isTypeMatched(guitar))
    .filter((guitar) => isStringsMatched(guitar))
    .filter((guitar) => isPriceMatched(guitar));
};

