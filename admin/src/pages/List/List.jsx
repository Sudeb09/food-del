import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import {toast} from 'react-toastify'

const List = ({url}) => {

    // state variables
    const [food, setFoods] = useState([])

    // fetching all food details from database
    const fetchFood = async () =>{
        const response = await axios.get(`${url}/api/food/list`)
        // console.log(response.data)
        if (response.data.success){
            setFoods(response.data.data)
        }
        else{
            toast.error("Internal Server Error")
        }
    }

    // removing food from database
    const removeFood = async (foodId) =>{
        // console.log(foodId)
        const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
        await fetchFood();
        if (response.data.success){
            toast.success(response.data.message)
        }
        else{
            toast.error("Internal Server Error")
        }
    }

    // fetching food details when the page reloads
    useEffect(()=>{
        fetchFood();
    },[])
  return (
    <div className='list add flex-col'>
        <p>All Foods List</p>
        <div className="list-table">
            <div className="list-table-format title">
                <b>Image</b>
                <b>Name</b>
                <b>Category</b>
                <b>Price</b>
                <b>Action</b>
            </div>
            {/* displaying all food details */}
            {food.map((item, index)=>{
                return(
                    <div key={index} className='list-table-format'>
                        <img src={`${url}/images/`+item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>₹{item.price}</p>
                        <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default List