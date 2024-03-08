import _4DaysCappadociaReviews from "./PrivateTours/Reviews/4-days-cappadocia.json";
import _4DaysIstanbulReviews from "./PrivateTours/Reviews/4-days-istanbul.json";
import _7DaysCappadociaIstanbulReviews from "./PrivateTours/Reviews/7-days-cappadocia-istanbul.json";
import _11DddaysTurkeyReviews from "./PrivateTours/Reviews/11-days-turkey.json";

import _4DaysCappadociaContent from "./PrivateTours/Content/4-days-cappadocia.json";
import _4DaysIstanbulContent from "./PrivateTours/Content/4-days-istanbul.json";
import _7DaysCappadociaIstanbulContent from "./PrivateTours/Content/7-days-cappadocia-istanbul.json";
import _11DddaysTurkeyContent from "./PrivateTours/Content/11-days-turkey.json";

import _4DaysCappadociaPrice from "./PrivateTours/Price/4-days-cappadocia.json";
import _4DaysIstanbulPrice from "./PrivateTours/Price/4-days-istanbul.json";
import _7DaysCappadociaIstanbulPrice from "./PrivateTours/Price/7-days-cappadocia-istanbul.json";
import _11DddaysTurkeyPrice from "./PrivateTours/Price/11-days-turkey.json";
import _getTours from "./PrivateTours/Tours/Tours.json";
import _getDataGlobalCarousel from "./GlobalCarousel/data.json";

import _getDataNavbar from "./Navbar/data.json";
import _getDataActivityGuide from "./ActivityGuide/data.json";

export async function getDataReviews(tours) {
  switch (tours) {
    case "4-days-cappadocia":
      return _4DaysCappadociaReviews;
    case "4-days-istanbul":
      return _4DaysIstanbulReviews;
    case "7-days-cappadocia-istanbul":
      return _7DaysCappadociaIstanbulReviews;
    case "11-days-turkey":
      return _11DddaysTurkeyReviews;
  }
}
export async function getDataContent(tours) {
  switch (tours) {
    case "4-days-cappadocia":
      return _4DaysCappadociaContent;
    case "4-days-istanbul":
      return _4DaysIstanbulContent;
    case "7-days-cappadocia-istanbul":
      return _7DaysCappadociaIstanbulContent;
    case "11-days-turkey":
      return _11DddaysTurkeyContent;
  }
}
export async function getDataTours() {
  return _getTours;
}

export async function getDataGlobalCarousel() {
  return _getDataGlobalCarousel;
}

export async function getDataPrice(tours) {
  switch (tours) {
    case "4-days-cappadocia":
      return _4DaysCappadociaPrice;
    case "4-days-istanbul":
      return _4DaysIstanbulPrice;
    case "7-days-cappadocia-istanbul":
      return _7DaysCappadociaIstanbulPrice;
    case "11-days-turkey":
      return _11DddaysTurkeyPrice;
  }
}
export async function getDataNavbar() {
  return _getDataNavbar;
}
export async function getDataActivityGuide() {
  return _getDataActivityGuide;
}
