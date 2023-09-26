export interface restaurantFetchType extends restaurantListType {
  data: restaurantListType[];
}
export type restaurantListType = {
  id: string;
  title: string | null;
  header: {
    headerStyling: {
      padding: {
        left: number;
        top: number;
        bottom: number;
      };
    };
  } | null;
  restaurantCount: number | null;
  lists: listsType | null;
  facetList: facetListType[] | null;
  sortConfigs: sortConfigsType[] | null;
  brands: brandsType[] | null;
  cuisines: cuisinesType[] | null;
  cities: brandsType[] | null;
};
export type listsType = {
  '@type': string;
  info: restaurantInfoType[] | null;
  restaurants: restaurantType[] | null;
};
export type restaurantInfoType = {
  id: string;
  imageId: string;
  action: {
    link: string;
    text: string;
    type: string;
  };
  entityType: string;
  accessibility: { altText: string; altTextCta: string };
  entityId: string;
  frequencyCapping: any;
};

export type restaurantType = {
  info: restaurantCardType;
  cta: {
    link: string;
    type: string;
  };
};
export type restaurantCardType = {
  id: string;
  name: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  cuisines: string[];
  avgRating: number;
  feeDetails: {
    restaurantId: string;
    fees: {
      name: string;
      fee: number;
    }[];
    totalFee: number;
  };
  parentId: string;
  avgRatingString: string;
  totalRatingsString: string;
  sla: { deliveryTime: number; lastMileTravel: number; serviceability: string; slaString: string; lastMileTravelString: string; iconType: string };
  availability: { nextCloseTime: string; opened: boolean };
  badges: {
    textExtendedBadges: {
      iconId: string;
      shortDescription: string;
      fontColor: string;
    }[];
  };
  isOpen: boolean;
  aggregatedDiscountInfoV1: {
    header: string;
    subHeader: string;
  } | null;
  aggregatedDiscountInfoV2: {
    header: string;
    subHeader: string;
  } | null;
  aggregatedDiscountInfoV3: {
    header: string;
    subHeader: string;
  } | null;
  type: string;
  badgesV2: {};
  orderabilityCommunication: {};
  differentiatedUi: {};
  reviewsSummary: {};
  displayType: string;
  restaurantOfferPresentationInfo: {};
};
export type facetListType = {
  label: string;
  id: string;
  selection: string;
  facetInfo: {
    label: string;
    id: string;
    analytics: {};
    openFilter: boolean;
  };
  viewType: string;
  subLabel: string;
};
export type sortConfigsType = { key: string; title: string; selected: boolean; defaultSelection: boolean };
export type brandsType = {
  text: string;
  link: string;
};
export interface cuisinesType extends brandsType {
  id: string;
}
