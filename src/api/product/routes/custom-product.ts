module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "POST",
      path: "/products/addrandom/",
      handler: "product.addrandom",
    },
    {
      // Path defined with an URL parameter
      method: "POST",
      path: "/products/deleteAll/",
      handler: "product.deleteAll",
    },
  ],
};
