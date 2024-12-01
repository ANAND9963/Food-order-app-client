import { Divider, FormControl, Grid, RadioGroup, Typography ,FormControlLabel, Radio} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";



const catagories=["all","pizza" , "biryani","burger","chicken","rice"]

const foodTypes =[
    {label:"All", value:"all"},
    {label:"vegetarian only" , value:"vegetrian"},
    {label:"Non-vegetarian only" , value:"non_vegetrian"},
    {label:"Seasonal " , value:"Seasonal"}
]

const menu = [1,1,1,1,1,1,1,1]

const RestaurantDetails = () => {

    const [foodType , setFoodType] = useState("all");
    const [foodCategory , setFoodCategory] = useState("all");

    const handleFilter=(e)=>{
        console.log(e.target.value, e.target.name)
    }
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">Home/india/Rusted Spoon</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </Grid>
          </Grid>
        </div>

        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Rusted Spoon</h1>
          <p className="text-gray-500 flex items-center gap-3">
            <span className="text-gray-500 mt-1">
              Rusted Spoon Restaurant serves slow-cooked, farm-to-table dishes
              in a cozy, rustic setting. Enjoy fresh, locally-sourced meals
              perfect for any occasion..Where flavor meets tradition, and every
              dish tells a story.
            </span>
          </p>
          <p className="text-gray-500 flex items-center gap-3 pt-3">
            <LocationOnIcon />
            <span>Perry, UT</span>
          </p>
          <p className="text-gray-500 flex items-center gap-3 pt-3">
            <CalendarTodayIcon />
            <span>Mon-Sun : 9:00 AM - 10:00 PM (today)</span>
          </p>
        </div>
      </section>

      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter ">
          <div className="box space-y-5 lg:sticky top-28 p-5 shadow-md">
            <div>
              <Typography
                variant="h5"
                sx={{ paddingBottom: "1rem" }}
              >Food Type</Typography>
              <FormControl className="py-10 space-y-5 " component={"fieldset"}>
                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                    {foodTypes.map((item ,idx)=> <FormControlLabel  key={idx} value={item.value} control={<Radio />} label={item.label} />)}

                </RadioGroup>
              </FormControl>
            </div>
            <Divider/>
            <div>
            <Typography
                variant="h5"
                sx={{ paddingBottom: "1rem" }}
              >Food Category</Typography>
              <FormControl className="py-10 space-y-5 " component={"fieldset"}>
                <RadioGroup name="food_catagories" value={foodCategory} onChange={handleFilter} >
                    {catagories.map((item,idx)=> <FormControlLabel key={idx} value={item} control={<Radio />} label={item} />)}

                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">

            {menu.map((item,idx) => <MenuCard key={idx}/>)}
       
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
