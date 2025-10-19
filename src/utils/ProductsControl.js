export const addProduct = (actualProducts, product) => {
  if (actualProducts.length === 0) {
    return [{ ...product, quantity: 1 }];
  }

  const findProduct = actualProducts.some(
    (actualProduct) => actualProduct.id === product.id
  );

  if (findProduct) {
    return actualProducts.map((actualProduct) => {
      if (actualProduct.id === product.id) {
        return { ...actualProduct, quantity: (actualProduct.quantity += 1) };
      } else {
        return actualProduct;
      }
    });
  } else {
    return [...actualProducts, { ...product, quantity: 1 }];
  }
};

export const substractProduct = (actualProducts, product) => {
  const findProduct = actualProducts.some(
    (actualProduct) => actualProduct.id === product.id
  );

  if (findProduct) {
    return actualProducts
      .map((actualProduct) => {
        if (actualProduct.id === product.id) {
          const newQuantity = actualProduct.quantity - 1;

          return newQuantity === 0
            ? undefined
            : { ...actualProduct, quantity: newQuantity };
        } else {
          return actualProduct;
        }
      })
      .filter((filter) => filter !== undefined);
  } else {
    return [...actualProducts];
  }
};
