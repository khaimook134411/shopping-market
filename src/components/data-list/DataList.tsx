import React from "react";
import { useSelector } from "react-redux";
import { decrease, increase } from "../../store/basketStore";
import { rootType } from "../../store/rootReducer";
import { store } from "../../store/store";
import style from "./DataList.module.css";

function DataList() {
  const state = useSelector((state: rootType) => {
    return state.basket.items;
  });
  console.log(state);

  return (
    <div className={style.container}>
      <div>
        eie
        {/* <button
          onClick={() => {
            store.dispatch(decrease());
          }}
        >
          -
        </button>{" "} */}
        {/* <div className={style.item}>
          {state.map((value, index) => {
            return <div>{{ name: value.name, price: value.price }}</div>;
          })}
        </div>{" "} */}
        {/* <button 
          onClick={() => {
            store.dispatch(increase());
          }}
        >
          +
        </button> */}
      </div>
    </div>
  );
}

export default DataList;
