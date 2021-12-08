import { sortSettings } from './const';

export const sortGuitars = (guitars, type, direction) => {
  const guitarsToSort = guitars.slice();

  switch (direction) {
    case sortSettings.direction.UP:
      return guitarsToSort.sort((a, b) => a[type] - b[type]);
    case sortSettings.direction.DOWN:
      return guitarsToSort.sort((a, b) => b[type] - a[type]);
    default:
      return guitarsToSort;
  }
};
