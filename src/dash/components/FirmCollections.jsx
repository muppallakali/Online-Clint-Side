import React,{useState,useEffect} from 'react'
import { API_URL } from './api'
import { Link } from 'react-router-dom'


export default function FirmCollections() {
    const[firmdata,setfirmdata]=useState([])
    const [selected,setSelected]=useState("All")
    function handlefilter(e){
        setSelected(e)
    }
    async function datahandler(){
        try{
            const res=await fetch(`${API_URL}/vendor/all-vendors`)
            let newfirmdata=await res.json()
            console.log("this is api data",newfirmdata)
            setfirmdata(newfirmdata.vendors)
            
        }
        catch(error){
            alert("Firm Data Not Fetched")
            console.log("Fetching Firm data error: ",error)
        }
    }
    useEffect(()=>{datahandler()
    },[])
    
   
  return (
    <>
    <h3>Restaurent with online food deliivery in Columbus</h3>
    <div className="filterbtn">
        <button onClick={()=>{handlefilter("All")}}>All</button>
        <button onClick={()=>{handlefilter("South-Indian")}}>South-Indian</button>
        <button onClick={()=>{handlefilter("north-indian")}}>North_Indian</button>
        <button onClick={()=>{handlefilter("chainese")}}>Chainese</button>
    </div>
    <section className="firmsection">
        {firmdata.map((x)=>{
            return x.firm.map((item)=>{
                if (selected === "All" || (item.region && item.region.includes(selected.toLowerCase()))){
                    
                        return(
                            <Link to={`/products/${item._id}/${item.firmName}`} key={item._id} className='Link'>
                                <div className='firmgroupbox'>
                            <div className="firmimg">
                                <img src={`${API_URL}/uploads/${item.image}`}  /> 
                            </div>
                            <div className="firmoffer">
                                {item.offer}
                                </div>
                            <div className="firmdetails">
                                <ul>
                                    <li key={item._id} ><strong>{item.firmName}</strong></li>
                                    <div className="farea">
                                    {item.region.join(", ")}<br/>
                                    {item.area}
                                    </div>                                
                                </ul>
                                
                            </div>
                            </div>
                            </Link>
                        )
                    
                }
            })
            return null
        })}
    </section>
    </>
  )
}
