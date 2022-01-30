export const formatPrice = (number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};

export const getMaxPrice = (data) => {
  let maxPrice = 0;

  data.forEach((item) => {
    if (item.price > maxPrice) {
      maxPrice = item.price;
    }
  });

return maxPrice
};
