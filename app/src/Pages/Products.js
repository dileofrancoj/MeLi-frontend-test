import React, { useEffect, useReducer, Fragment } from "react";

import PropTypes from "prop-types";
import Helmet from "react-helmet";
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
          {products.map(
            ({ id, title, price, free_shipping, address, picture }) => (
              <Row
                key={id}
                className="justify-content-center bg-white pb-16 pt-16 pl-32 first-row"
              >
                <Col md={9}>
                  <Row>
                    <Col md={3} className="thumbnail">
                      <Link to={`/items/${id}`}>
                        <picture>
                          <img
                            className="pointer rounded thumbnail"
                            src={picture}
                            alt={title}
                          />
                        </picture>
                      </Link>
                    </Col>
                    <Col md={9}>
                      <h4 className="f-24">
                        $ {formatAsCurrency(price.amount)}{" "}
                        {free_shipping ? (
                          <img
                            src="https://images-prod-meli.s3-sa-east-1.amazonaws.com/ic_shipping.png"
                            alt="free shipping"
                          />
                        ) : null}
                      </h4>

                      <Link
                        className="mt-32"
                        to={`/items/${id}`}
                        style={{
                          color: "black",
                          textDecoration: "inherit",
                        }}
                      >
                        <p className="pointer f-18 ">{title}</p>
                      </Link>
                    </Col>
                  </Row>
                </Col>
                <Col md={3} className="pt-16 pl-16">
                  <p className="f-12"> {address}</p>
                </Col>
              </Row>
            )
          )}
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
