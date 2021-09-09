import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductTuCart } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface ICatalogItemProps {
  product: IProduct;
}
const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductTuCart(product));
  }, [dispatch, product]);
  return (
    <article>
      <strong>{product.title}</strong>
      {'  -  '}
      <span>{product.price}</span>
      {'   '}
      <button type="button" onClick={handleAddProductToCart}>
        Compar
      </button>
    </article>
  );
};

export default CatalogItem;
