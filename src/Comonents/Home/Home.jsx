import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'

const Home = () => {
  // const [list, setlist] = useState([]);
  // useEffect(() => {
  //   axios.get('https://fakestoreapi.com/products/categories').then((res)=>{
  //     console.log(res);
  //     setlist(res.data)
  //   })
    
  // }, []);

  return (
    <div>
        
        <Banner />
    </div>
  )
}

export default Home