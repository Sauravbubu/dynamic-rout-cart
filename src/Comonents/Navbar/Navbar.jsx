import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import { Cartcontxt } from "../../context/cartcontex";

import "./Navbar.css";

const navbar = () => {
  const [list, setlist] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      // console.log(res);
      setlist(res.data);
    });
  }, []);
  console.log(list);
  const { count } = useContext(Cartcontxt);
  return (
    <>
      <div className="Nav-bar">
        <NavLink className="NavLink" to="/">
          Home
        </NavLink>

        {list.map(
          (el, i) => (
            <NavLink key={i} className="NavLink" to={`/${el}`}>
              {" "}
              {el}
            </NavLink>
          )
          /* <NavLink to={`/mens/${data.id}`   }></NavLink> */
        )}
        <button style={{  padding: "1rem" ,color:"black"}} >
          cart:{count}
        </button>
      </div>
    </>
  );
};

export default navbar;
