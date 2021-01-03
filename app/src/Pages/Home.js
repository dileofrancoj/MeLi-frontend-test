import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Message from "./../Components/Message";
const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Mercado Libre Argentina</title>
        <meta name="description" content="Encontrá lo que buscas" />
      </Helmet>
      <Message message={"Buscar productos ..."} />
    </Fragment>
  );
};

export default Home;
