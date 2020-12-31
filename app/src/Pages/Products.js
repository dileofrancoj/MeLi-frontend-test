import React, { useEffect, useReducer } from "react";

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

/* Loading */
import Loading from "../Components/Loading";

/* Reducer products  */
import { productsReducer, initialState } from "../../reducers/products";
import { FETCH_SUCCESS, FETCH_ERROR } from "../../reducers/actions/common";
const Products = ({ searchItem }) => {
  const [{ products, error, loading, categories }, dispatch] = useReducer(
    productsReducer,
    initialState
  );
  const fetchData = async () => {
    try {
      const search = new Search();
      const { items, categories } = await search.products(searchItem);
      dispatch({ type: FETCH_SUCCESS, payload: { items, categories } });
    } catch (e) {
      dispatch({ type: FETCH_ERROR, payload: items });
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchItem]);

  const RenderProducts = () => {
    return (
      <React.Fragment>
        <Helmet>
          <title>Productos</title>
          <meta name="description" content="Encontra todo lo que buscas" />
        </Helmet>
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
                        to={`/items/${id}`}
                        style={{
                          color: "black",
                          textDecoration: "inherit",
                        }}
                      >
                        <p className="pointer f-18 mt-32">{title}</p>
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
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {loading ? <Loading /> : null}
      {!!products.length ? <RenderProducts /> : null}
      {error ? <h3>Ocurrió un error, intente de nuevo</h3> : null}
    </React.Fragment>
  );
};

Products.propTypes = {
  searchItem: PropTypes.string,
};
export default Products;
