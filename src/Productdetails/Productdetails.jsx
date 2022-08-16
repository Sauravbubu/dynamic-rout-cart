import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const Productdetails = () => {
    const {id}=useParams()
    const params=useParams()
    console.log(params)
    let category=params["undefined"]
    console.log(category);
    const [data, setData] = useState([])
    useEffect(() => {
    
      axios.get(`https://fakestoreapi.com/products/${id}`)
            .then (response => {
    console.log(response.data)
     setData([...data,response.data])
                
            }
    )
      }, [])
      console.log(data)
  return (
    <div >

       {data?.map((elem)=>{
           console.log(elem.name)
           return (
           < div key={elem.id} style={{width:"300px",margin:"auto",display:"flex",flexDirection:"column",alignContent:"center",textAlign:"center"}}>
           <img src={elem.image} alt="" style={{width:"50%",height:"50%",textAlign:"center",margin:"auto"}} />
               <h1>{elem.title}</h1>
               <h4>{elem.price}</h4>
               <p>{elem.description}</p>
               <button style={{backgroundColor:"lightblue"}}>Buy Now</button>
               </ div>
           )
       })}


    </div>
        
  )
}

export default Productdetails