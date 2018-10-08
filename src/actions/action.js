import {
  CAROUSEL_ITEMS_RECEIVED,
  REQUEST_CAROUSEL_ITEMS,
  CAROUSEL_ITEMS_FAILED
} from "./action-types";
import axios from "axios";
import { imageSourceURL } from "../config/carousel.config";

export const requestCarouselData = () => ({ type: REQUEST_CAROUSEL_ITEMS });

export const receivedCarouselData = carouselData => ({
  type: CAROUSEL_ITEMS_RECEIVED,
  payload: carouselData
});

export const carouselDataLoadFailed = () => ({
  type: CAROUSEL_ITEMS_FAILED
});

export const fetchCarouselData = () => {
  return dispatch => {
    dispatch(requestCarouselData());
    return axios.get(imageSourceURL).then(
      response => {
        let carouselItems = response.data.hits.slice(0, 8);
        dispatch(receivedCarouselData(carouselItems));
      },
      err => {
        dispatch(carouselDataLoadFailed());
      }
    );
  };
};
