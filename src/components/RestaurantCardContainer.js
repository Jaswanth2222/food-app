import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const RestaurantCardContainer = () => {
    const topRatedRestaurants = (restaurants) => {
        const topRated = restaurants?.filter((restaurant) => restaurant?.info?.avgRatingString > 4);
        return topRated;
    } 

    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        getRestaurants();
    }, [])

    const getRestaurants = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5401394&lng=80.6111829&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsondata = await data.json();
        console.log(jsondata);
        setRestaurants(jsondata?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    console.log(restaurants)
    return (restaurants?.length === 0) ? <Shimmer /> : (
        <>
            <button className="border-2 border-slate-500 bg-slate-200 p-2 m-3" onClick={() => {
                const topRatedItems = restaurants.filter(
                    (restaurant) => restaurant?.info?.avgRatingString > 4)
                setRestaurants(topRatedItems);
            
            }}>Top Rated Restaurants</button>
            <div className="flex flex-wrap mt-3">
            {
                restaurants?.map((restaurant) => {
                return <RestaurantCard {...restaurant?.info} key = {restaurant?.info?.id} />
                })
            }
            </div> 
        </>    
    )
}

export default RestaurantCardContainer;