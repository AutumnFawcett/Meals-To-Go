import React from "react";

import { CompactRestaurantInfo } from "../../../components/restaurant/compactrestaurnatinfo.component"


export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant}
  />
);