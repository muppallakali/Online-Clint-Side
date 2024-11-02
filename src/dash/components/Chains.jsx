import React,{useState,useEffect} from 'react'
import {API_URL} from "./api"
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import { LineWave } from 'react-loader-spinner'

export default function Chains() {
    let [vendordata,setvendordata]=useState([])
    let [scroll,setScroll]=useState(0)
    const[loading,setloading]=useState(true)
    let vendorFirmHandler=async()=>{
        try{
            const res=await fetch(`${API_URL}/vendor/all-vendors`)
            let data=await res.json()
            setvendordata(data)
            setloading(false)
            // console.log("this is api data",data)
        }
        catch(error){
            alert("failed to fetch data")
            console.log("failed to fetch data")
            setloading(true)
        }
    }
    useEffect(()=>{
        vendorFirmHandler()
    },[])
    const handleScroll=(direction)=>{
        const gallery=document.getElementById("chaingallery")
        const scrollAmount=300
        if(direction==="left"){
            gallery.scrollTo({
                left:gallery.scrollLeft-scrollAmount,
                behavior:"smooth"
            })
        }
        else if(direction==="right"){
            gallery.scrollTo({
                left:gallery.scrollLeft+scrollAmount,
                behavior:"smooth"
            })
        }
    }
  return (
    <>
    <div className="loadersec">
    {loading && <><div className='loader'>Loading.....</div>
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
        /></>}
    </div>
    
    <div className="btnsection">
    <h3>Top restaurents in Columbus</h3>
    <div>
    <button onClick={()=>handleScroll("left")}><FaArrowLeft /></button>
    <button onClick={()=>handleScroll("right")}><FaArrowRight /></button>
    </div>      
    </div>
    <section className="chainsection" id='chaingallery' onScroll={(e)=>setScroll(e.target.scrollLeft)}>
        {vendordata.vendors && vendordata.vendors.map((vendor)=>{
        return(
            <div className="vendorbox" key={vendor._id}>
            {vendor.firm.map((item)=>{
                return(
                    <div key={item._id}>
                    <div className="">                        
                    </div>
                    <div className="firmImage">
                        <img src={`${API_URL}/uploads/${item.image}`} alt="" />
                    </div>
                    
                    </div>
                )
            })}
        </div>
        )
        })}
    </section>
    </>
  )
}
