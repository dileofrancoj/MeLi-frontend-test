const sendProducts = (_products) =>
  _products.map(
    ({
      id,
      title,
      currency_id: currency,
      price,
      thumbnail: picture,
      condition,
      shipping,
      address,
    }) => {
      return {
        id,
        title,
        price: {
          currency,
          amount: price,
          decimals: 2,
        },
        picture,
        condition,
        free_shipping: shipping.free_shipping,
        address: address.state_name,
      };
    }
  );

const sendProduct = ({ product: _product, description, categories }) => {
  return {
    id: _product.id,
    title: _product.title,
    price: {
      currency: _product.currency_id,
      amount: _product.price,
      decimals: 2,
    },
    picture: _product.pictures[0].secure_url,
    condition: _product.condition,
    free_shipping: _product.shipping.free_shipping,
    sold_quantity: _product.sold_quantity,
    description,
    categories,
  };
};

module.exports = { sendProducts, sendProduct };
