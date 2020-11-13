import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../util/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  console.log(colorList)
  useEffect(()=> {
    axiosWithAuth()
      .get('/api/colors')
        .then((res)=>{
          // console.log(res.data)
          setColorList(res.data)
        })
        .catch((error)=> {
          console.log('error')
        })
  })

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
