import React from "react";
import { useSelector } from "react-redux";
import { decrease, increase } from "../../store/basketStore";
import { rootType } from "../../store/rootReducer";
import { store } from "../../store/store";

// interface checkedListProps {
//   checkedList: {
//     id: string;
//     name: string;
//     description: string;
//     checked: boolean;
//   };
// }
function DataList() {
  const state = useSelector((state: rootType) => {
    return state.countItem;
  });
  return (
    <div>
      {/* <span>{props.checkedList.name}</span> */}
      <span>apple</span>
      <button
        onClick={() => {
          store.dispatch(decrease());
        }}
      >
        -
      </button>
      {state.countItem}
      <button
        onClick={() => {
          store.dispatch(increase());
        }}
      >
        +
      </button>
    </div>
  );
}

export default DataList;
