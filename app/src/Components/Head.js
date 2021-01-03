import React from "react";
import Helmet from "react-helmet";

import PropTypes from "prop-types";
const Head = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Head;
