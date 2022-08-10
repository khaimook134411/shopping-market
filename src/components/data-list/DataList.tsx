import React from "react";
import { useSelector } from "react-redux";
import { decrease, increase } from "../../store/basketStore";
import { rootType } from "../../store/rootReducer";
import { store } from "../../store/store";
import style from "./DataList.module.css";

interface DataListProp {
  description: string;
  price: number;
}

function DataList(props: DataListProp) {
  const state = useSelector((state: rootType) => {
    return state.countItem.items;
  });
  // const data = store.getState().countItem.items;
  // const [item, setItem] = useState(data);

  return (
    <div className={style.container}>
      <div>
        {/* <button
          onClick={() => {
            store.dispatch(decrease());
          }}
        >
          -
        </button>{" "} */}
        <div className={style.item}>
          {state.map((value, index) => {
            return <div>{value}</div>;
          })}
        </div>{" "}
        {/* <button 
          onClick={() => {
            store.dispatch(increase());
          }}
        >
          +
        </button> */}
        <div></div>
      </div>
    </div>
  );
}

export default DataList;
