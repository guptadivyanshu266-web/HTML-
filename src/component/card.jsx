 import React from "react";

const Card = (props) => {

  return (
    <div
      className="
        w-40
        overflow-hidden
        rounded-xl
        bg-white
        shadow-lg
        transition
        duration-300
        hover:scale-105
        hover:shadow-2xl
      "
    >

      <a
        href={props.elem.url}
        target="_blank"
        rel="noreferrer"
      >

        <img
          className="
            h-28
            w-full
            object-cover
            transition
            duration-300
            hover:scale-110
          "
          src={props.elem.download_url}
          alt={props.elem.author}
        />

        <h1
          className="
            truncate
            px-3
            py-2
            text-center
            font-semibold
            text-blue-900
          "
        >
          {props.elem.author}
        </h1>

      </a>

    </div>
  );
};

export default Card;