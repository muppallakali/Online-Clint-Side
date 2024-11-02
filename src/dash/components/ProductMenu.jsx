import React,{useState,useEffect} from 'react'
import {API_URL} from "../components/api"
import { useParams } from 'react-router-dom'
import TopBar from './TopBar'


export default function ProductMenu() {
    let[products,setProducts]=useState([])
    let{firmId,firmName}=useParams()
    console.log( "firmId from params",firmId)
    async function handleProduct(){
        try{            
            let res=await fetch(`${API_URL}/product/${firmId}/products`)
            const newProducts= await res.json()
            setProducts(newProducts.products)
            console.log("fetching products",newProducts)
        }
        catch(error){
            console.log("Products failed to fetch",error)
        }
    }
    useEffect(()=>{
        handleProduct()
    },[])

  return (
   <>
   <TopBar></TopBar>
   <div className="productSection">
   <h3>{firmName}</h3>
        {products.map((x)=>{
            return(
                <div className='productBox'>
                <div className='bind'>                   
                <div ><strong>{x.productName}</strong></div>
                <div >${x.price}</div>
                <div >{x.description}</div>
                </div>
                <div className="productGroup">
                <img src={`${API_URL}/uploads/${x.image}`} alt="" />
                <div className='addbtn'>ADD</div>
                </div>
                
                </div>
            )
        })}        
        
    </div>
   </>
    
  )
}
