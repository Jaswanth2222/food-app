import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
const RestaurantCardContainer = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        getRestaurants();
    }, [])

    const getRestaurants = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5401394&lng=80.6111829&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsondata = await data.json();
        console.log(jsondata);
        setRestaurants(jsondata);
    }

    const restaurantDeatils = restaurants?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(restaurantDeatils)
    return (
        <div className="flex flex-wrap mt-3">
            {
                restaurantDeatils?.map((restaurantDetail) => {
                return <RestaurantCard {...restaurantDetail?.info} key = {...restaurantDetail?.info?.id} />
                })
            }
        </div> 
    )
}

export default RestaurantCardContainer;