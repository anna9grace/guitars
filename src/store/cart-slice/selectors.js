import { NameSpace } from '../../const';

export const getInCartCount = (state) => state[NameSpace.CART].goodsInCartCount;
export const getGuitarsInCart = (state) => state[NameSpace.CART].guitarsInCart;
