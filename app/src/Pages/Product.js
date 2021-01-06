import React, { useEffect, useReducer, Fragment } from "react";
import { Search } from "../../server/controllers/products";
import { useParams } from "react-router-dom";
/* Personal components */
import Loading from "../Components/Loading";
import Breadcrumb from "../Components/Breadcrumb";
import Head from "../Components/Head";

/* View */
import ProductView from "../Views/Product";
import { productReducer, initialState } from "../../reducers/product";
import { FETCH_SUCCESS, FETCH_ERROR } from "../../reducers/actions/common";
const Product = () => {
  const { id } = useParams();
  const [{ product, loading }, dispatch] = useReducer(
    productReducer,
    initialState
  );
  const getProduct = async (id) => {
    try {
      const search = new Search();
      const data = await search.product(id);
      dispatch({ type: FETCH_SUCCESS, payload: data });
      //setProduct(data);
    } catch (e) {
      console.error(e);
      dispatch({ type: FETCH_ERROR, payload: {} });
    }
  };
  useEffect(() => {
    getProduct(id);
  }, []);

  const RenderProduct = () => {
    return (
      <Fragment>
        <Head title={product.title} description={product.description} />
        <Breadcrumb categories={product.categories} />
        <ProductView product={product} />
      </Fragment>
    );
  };

  return (
    <Fragment>
      {!!product && !loading ? <RenderProduct /> : <Loading />}
    </Fragment>
  );
};

export default Product;
