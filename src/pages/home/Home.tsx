import React from "react";
import { useSelector } from "react-redux";
import DataList from "../../components/data-list/DataList";
import ProductBox from "../../components/product-box/ProductBox";
import { increase } from "../../store/basketStore";
import { rootType } from "../../store/rootReducer";
import { store } from "../../store/store";
import style from "./Home.module.css";
function Home() {
  const state = useSelector((state: rootType) => {
    return state.countItem;
  });
  return (
    <div>
      <h1>Fruits Market</h1>
      <div className={style.container}>
        <div className={style.containerProduct}>
          All products
          <ProductBox
            description="apple"
            onClick={() => {
              store.dispatch(increase());
            }}
            picture="https://www.pngall.com/wp-content/uploads/11/Apple-PNG-File.png"
            price={33}
          />
        </div>
        <div className={style.containerBasket}>
          add to Basket
          {state.countItem}
          <DataList />
        </div>
      </div>
    </div>
  );
}

export default Home;
