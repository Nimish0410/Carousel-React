import {
  REQUEST_CAROUSEL_ITEMS,
  CAROUSEL_ITEMS_RECEIVED,
  CAROUSEL_ITEMS_FAILED
} from "../actions/action-types";

const initialState = {
  isFetching: false,
  isError: false,
  carouselData: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CAROUSEL_ITEMS:
      let isFetching = true;
      return {
        ...state,
        isFetching
      };

    case CAROUSEL_ITEMS_RECEIVED:
      isFetching = false;
      let carouselData = action.payload;
      return {
        ...state,
        isFetching,
        carouselData
      };
    case CAROUSEL_ITEMS_FAILED:
      let isError = true;
      return {
        ...state,
        isError
      };

    default:
      return state;
  }
};
export default rootReducer;
