import sass from "./ProductList.module.scss";

import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SkeletonSchema } from "../SkeletonSchema/SkeletonSchema";

import { AppDispatch } from "../../types";
import { getProductList } from "../../redux/operations";
import { useProductList } from "../../hooks";
import { Product } from "../Product/Product";
import { Container } from "../Container/Container";

export const ProductList: FC = () => {

  const dispatch: AppDispatch = useDispatch();

  const { productList } = useProductList();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <>
      {
        productList.list.length === 0
          ? <SkeletonSchema />
          : (
            <section>
              <Container>
                <ul className={sass.productList}>
                  {
                    productList.list.map(product => (
                      <li
                        className={sass.product}
                        key={product.id}
                      >
                        <Product product={product} />
                      </li>
                    ))
                  }
                </ul>
              </Container>
            </section>
          )
      }
    </>
  )
}
