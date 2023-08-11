import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const RestaurantCardContainer = () => {

    const topRatedRestaurants = (restaurants) => {
        const topRated = restaurants?.filter((restaurant) => restaurant?.info?.avgRatingString > 4);
        return topRated;
    } 

    const searchRestaurants = (restaurants, searchText) => {
        const search = restaurants?.filter((restaurant) =>
            restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
        );

        return search;
    }

    const [restaurants, setRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        getRestaurants();
    }, [])

    const getRestaurants = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5401394&lng=80.6111829&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsondata = await data.json();
        console.log(jsondata);
        setRestaurants(jsondata?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurants(jsondata?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    console.log(restaurants)
    return (restaurants?.length === 0) ? <Shimmer /> : (
        <>
            <button className="border-2 border-slate-500 bg-slate-200 p-2 m-3" onClick={() => {
                // const topRatedItems = restaurants.filter((restaurant) => restaurant?.info?.avgRatingString > 4)
                const rated = topRatedRestaurants(restaurants);
                setFilterRestaurants(rated);
            
            }}>Top Rated Restaurants</button>

            <input className="border-2 bg-slate-100 border-slate-500 rounded-md border-solid text-lg" type="text " value={searchText} onChange={(e) => setSearchText(e.target.value) }/>

            <button className="ms-2 px-2 border-2 bg-slate-100 border-slate-500 rounded-md" onClick={() => {
                const res = searchRestaurants(restaurants, searchText)
                setFilterRestaurants(res);
            }}>Search</button>

            <div className="flex flex-wrap mt-3">
            {
                (filterRestaurants?.length === 0) ? <h1>No Restaurant Found</h1> : filterRestaurants?.map((restaurant) => {
                return <RestaurantCard {...restaurant?.info} key = {restaurant?.info?.id} />
                })
            }
            </div> 
        </>    
    )
}

export default RestaurantCardContainer;