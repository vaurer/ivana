const baseURL = "https://cms.ivanahairart.ch";

module.exports = {
  restMainPicture: baseURL + "/ivanahairart/items/mainpicture?fields=*.*.*",
  aboutURL : baseURL + "/ivanahairart/items/aboutus?fields=*.*.*",
  photos: baseURL + "/ivanahairart/items/photos?fields=*.*.*",
  products: baseURL + "/ivanahairart/items/products?fields=*.*.*",
  category: baseURL + "/ivanahairart/items/service_category?fields=*.*",
  services: baseURL + "/ivanahairart/items/services?fields=*.*",
};
