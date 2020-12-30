import React, { useEffect, useState, useReducer } from "react";
import PropTypes from "prop-types";

/* Controller */
import { search } from "../../server/controllers/products";

/* Bootstrap */
import { Row, Col } from "react-bootstrap";

/* Currency Helper */
import { formatAsCurrency } from "../../server/utils/helpers";

/* Routing */
import { Link } from "react-router-dom";

/* Personal components */
import Breadcrumb from "../Components/Breadcrumb";
import Message from "../Components/Message";

/* Loading */
import Loading from "../Components/Loading";

/* Reducer products  */
import { productsReducer, initialState } from "../../reducers/products";
import { FETCH_SUCCESS, FETCH_ERROR } from "../../reducers/actions/products";
const Products = ({ searchItem }) => {
  const [{ products, error, loading }, dispatch] = useReducer(
    productsReducer,
    initialState
  );
  const [categories, setCategories] = useState([]);
  const fetchData = async () => {
    try {
      const { items, categories } = await search(searchItem);
      setCategories(categories);
      dispatch({ type: FETCH_SUCCESS, payload: items });
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
                      <Link to={`/product/${id}`}>
                        <picture>
                          {/* Formatos */}
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
                        to={`/product/${id}`}
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
      {/* Se muestra si hay productos y loading = false */}
      {loading ? <Loading /> : null}
      {!!products.length ? (
        <RenderProducts />
      ) : (
        <Message message={"Buscar productos ..."} />
      )}
      {error ? <h3>Ocurrió un error, intente de nuevo</h3> : null}
    </React.Fragment>
  );
};

Products.propTypes = {
  searchItem: PropTypes.string,
};
export default Products;
