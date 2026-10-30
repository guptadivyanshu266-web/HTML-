import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

const Gallery = (props) => {
  const [userdata, setuserdata] = useState([]);
  const [index, setindex] = useState(1);

  const getdata = async () => {
    console.log("data aa gaya");

    const response = await axios.get(
      `
      https://picsum.photos/v2/list?page=${index}&limit=100
      `,
    );

    setuserdata(response.data);

    console.log(response.data);
  };
  useEffect(
    function () {
      getdata();
    },
    [index],
  );

  let printuserData = (
    <h3
      className="
          text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold"
    >
      Loading...
    </h3>
  );

  if (userdata.length > 0) {
    printuserData = userdata.map(function (elem, idx) {
      return (
          <Card elem={elem} key={idx}/>
      );
    });
  }

  return (
    <div
      className="
        min-h-screen
        overflow-auto
        bg-black
        p-5
        text-white
      "
    >
      <h1 className="fixed text-3xl text-white/50">Page{index}</h1>
      <div className="flex items-center justify-center gap-4 mt-6 m-6">
        <button
          style={{opacity:index==1 ? 0.5 : 1}}
          onClick={() => {
            // console.log('Prev button clicked');
            if (index > 1) {
              setindex(index - 1);
              setuserdata([]);
            }
          }}
          className="
      rounded-lg
      bg-pink-500
      px-6 py-3
      font-semibold
      text-white
      shadow-md
      transition-all
      duration-200
      hover:bg-pink-600
      hover:shadow-lg
      active:scale-95
      cursor-pointer
    "
        >
          ← Prev
        </button>

        <button
          onClick={() => {
            // console.log('Next button clicked');
            setuserdata([]);
            setindex(index + 1);
          }}
          className="
      rounded-lg
      bg-pink-500
      px-6 py-3
      font-semibold
      text-white
      shadow-md
      transition-all
      duration-200
      hover:bg-pink-600
      hover:shadow-lg
      active:scale-95
      cursor-pointer
    "
        >
          Next →
        </button>
      </div>
      {/* <button
        onClick={getdata}
        className="
          mb-6
          rounded-xl
          bg-green-400
          px-6
          py-3
          font-bold
          text-black
          shadow-lg
          transition
          duration-200
          hover:bg-green-500
          active:scale-95
        "
      >
        Get Data
      </button> */}

      <div
        className="
          flex
          flex-wrap
          gap-5 
          justify-center
        "
      >
        {printuserData}
      </div>
    </div>
  );
};

export default Gallery;
