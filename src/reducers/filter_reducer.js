import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

import { getMaxPrice } from "../utils/helpers";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = getMaxPrice(action.payload);

      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };

    case SET_GRIDVIEW:
      return { ...state, grid_view: true };

    case SET_LISTVIEW:
      return { ...state, grid_view: false };

    case UPDATE_SORT:
      return { ...state, sort: action.payload };

    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let sortedList = [...filtered_products];
      switch (state.sort) {
        case "price-lowest":
          sortedList = sortedList.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price)
          );
          return {
            ...state,
            filtered_products: sortedList,
          };

        case "price-highest":
          sortedList = sortedList.sort(
            (a, b) => parseFloat(b.price) - parseFloat(a.price)
          );
          return {
            ...state,
            filtered_products: sortedList,
          };

        case "name-a":
          sortedList = sortedList.sort((a, b) => a.name.localeCompare(b.name));
          return {
            ...state,
            filtered_products: sortedList,
          };

        case "name-z":
          sortedList = sortedList.sort((a, b) => b.name.localeCompare(a.name));
          return {
            ...state,
            filtered_products: sortedList,
          };

        default:
          sortedList = sortedList.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price)
          );
      }
    case FILTER_PRODUCTS:
      const { all_products } = state;
      let tempProducts = [...all_products];
      const { text, category, company, color, price, shipping } = state.filters;
      console.log(state);
      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        });
      }

      if (category !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }
      if (company !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.company === company
        );
      }

      if (color !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }


        if (shipping) {
          tempProducts = tempProducts.filter(
            (product) => product.shipping === true
          );
        }
      

      tempProducts = tempProducts.filter((product) => product.price <= price);


      return { ...state, filtered_products: tempProducts };

    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
