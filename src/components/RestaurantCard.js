import { RESTAURANT_CARD_URL } from "../Utils/constants";
const RestaurantCard = ({
  name,
  cuisines,
  avgRatingString,
  areaName,
  cloudinaryImageId,
  aggregatedDiscountInfoV3,
  header,
  subHeader,
}) => {
  return (
    <div className="w-56 mx-5 relative mt-7">
      <p className=" ms-2 absolute top-28 text-white font-bold text-ellipsis overflow-hidden text-xl">
        {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}
      </p>
      <img
        src={RESTAURANT_CARD_URL + cloudinaryImageId}
        alt=""
        className="w-56 h-36 rounded-md"
      />
      <div className="ms-2">
        <p className="font-bold">{name}</p>
        <p>Rating : {avgRatingString}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
