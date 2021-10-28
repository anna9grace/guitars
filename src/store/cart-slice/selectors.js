import { NameSpace } from '../../const';

export const getInCartCount = (state) => state[NameSpace.CART].goodsInCartCount;
