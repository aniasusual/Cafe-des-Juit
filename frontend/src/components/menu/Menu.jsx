import React, {useEffect, useState} from 'react'
import './menu.scss'
import Card from "../card/Card"

const Menu = () => {

    const [foodCat, setfoodCat] = useState([]);
    const [foodItem, setfoodItem] = useState([]);

    const loadData = async()=>{
        let response = await fetch("http://localhost:4000/api/foodData",{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            }
        });

        response = await response.json();

        setfoodItem(response[0]);
        setfoodCat(response[1]);
        // console.log(response[0], response[1])


    }
    useEffect(()=>{
        loadData();
    },[])


    return (
        <div id="menu">
            <h1>Menu</h1>
            <div className="container">
                {
                    foodCat!==[]?foodCat.map((data)=>{
                        return(
                            <div className='row mb-3'>
                                <div key={data._id} className="fs-3">{data.CategoryName}</div>
                                <hr/>

                                {foodItem !==[]? foodItem.filter((item)=> item.CategoryName === data.CategoryName).map(filterItems=>{
                                    return (
                                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                                            <Card foodName ={filterItems.name} 
                                            options={filterItems.options[0]}
                                            imgSrc = {filterItems.img}
                                            desc = {filterItems.description}
                                             />
                                        </div>
                                    )
                                }):<div>No such data found"</div>}
                            </div>

                        )
                    }):""
                }
                <Card/>
            </div>

        </div>
    )
}

export default Menu
