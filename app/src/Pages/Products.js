import React, { useEffect, useReducer, Fragment } from "react";

import PropTypes from "prop-types";
/* Controller */
import { Search } from "../../server/controllers/products";

/* Bootstrap */
import { Row, Col } from "react-bootstrap";

/* Currency Helper */
import { formatAsCurrency } from "../../server/utils/helpers";

/* Routing */
import { Link } from "react-router-dom";

/* Personal components */
import Breadcrumb from "../Components/Breadcrumb";
import Message from "../Components/Message";
import Head from "../Components/Head";

/* View */
import ProductsView from "./../Views/Products";
/* Reducer products  */
import { productsReducer, initialState } from "../../reducers/products";
import {
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCHING,
} from "../../reducers/actions/common";
const Products = React.memo(({ searchItem }) => {
  const [{ products, error, categories, loading }, dispatch] = useReducer(
    productsReducer,
    initialState
  );
  const fetchData = async () => {
    try {
      dispatch({ type: FETCHING });
      const search = new Search();
      const { items, categories } = await search.products(searchItem);
      dispatch({ type: FETCH_SUCCESS, payload: { items, categories } });
    } catch (e) {
      dispatch({ type: FETCH_ERROR });
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchItem]);

  const title = searchItem ? searchItem : "Buscando productos";
  const RenderProducts = () => {
    return (
      <Fragment>
        <Head title={title} description={"Encontrá todo lo que buscas"} />
        <Breadcrumb categories={categories} />
        <section>
          {products.map((props) => (
            <ProductsView key={props.id} {...props} />
          ))}
        </section>
      </Fragment>
    );
  };

  return (
    <Fragment>
      {!!products.length && !loading ? <RenderProducts /> : null}
      {error ? (
        <Message message={"Ocurrió un error, intente de nuevo"} />
      ) : null}
    </Fragment>
  );
});

Products.propTypes = {
  searchItem: PropTypes.string,
};
export default Products;
