import React, { useState, useEffect, createContext, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import "./Mens.css";
import { Cartcontxt } from "../../context/cartcontex";
// export const Pid=createContext(id)
const Products = () => {
  const { setCount } = useContext(Cartcontxt);
  const params = useParams();
  // console.log(params)
  let category = params["undefined"];
  // console.log(category);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [id, setId] = useState();
  const [Loading, setLoading] = useState(true);
  const addid = (id) => {};
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        // console.log(response.data)
        setData([...response.data]);
        setLoading(false);
      });
  }, [category,data1]);
  const [text, settext] = useState("");
  const handleSearch = () => {
    console.log(text);
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        const sdata=(response.data);
       const filterdata=sdata.filter((el)=>el.title.toUpperCase() .includes(text.toUpperCase()))
        setData1(filterdata);
      });
  };
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => settext(e.target.value)}
          placeholder="Enter your SEARCH"
        />{" "}
       { data?<div>{
data1?.map((el)=>
<li key={el.id}>{el.title}</li>)

       }</div>:null}
      </div>
        <button onClick={handleSearch}>SEARCH</button>
      <div className="main-div">
        {Loading ? <h1 style={{ textAlign: "center" }}>Loding....</h1> : null}
        {data?.map((data) => {
          return (
            <div
              className="eachdiv"
              key={data.id}
              style={{ textDecoration: "none", padding: "20px" }}
            >
              <NavLink to={`/mens/${data.id}`}>
                <img
                  style={{ width: "70%", height: "50%", borderRadius: "20px" }}
                  src={data.image}
                  alt="loading image"
                />
                <h4>{data.price}$</h4>
                <h4
                  onClick={() => {
                    setId(data.id);
                  }}
                >
                  {data.title}
                </h4>
                <button>product details</button>
              </NavLink>
              <button onClick={() => setCount((count) => count + 1)}>
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
