import React from "react";
// import { useSelector } from "react-redux";
import DataList from "../../components/data-list/DataList";
import ProductBox from "../../components/product-box/ProductBox";
import { increase } from "../../store/basketStore";
// import { rootType } from "../../store/rootReducer";
import { store } from "../../store/store";
import style from "./Home.module.css";
function Home() {
  // const state = useSelector((state: rootType) => {
  //   return state.countItem;
  // });
  const data = [
    {
      description: "apple",
      imgUrl: "https://www.pngall.com/wp-content/uploads/11/Apple-PNG-File.png",
      price: 33,
    },
    {
      description: "orange",
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/02/23/17/42/orange-1218158_1280.png",
      price: 20,
    },
    {
      description: "banana",
      imgUrl: "https://www.pngmart.com/files/1/Banana-Bunch-PNG.png",
      price: 10,
    },
    {
      description: "strawberry",
      imgUrl:
        "https://i.pinimg.com/originals/28/3e/53/283e53880ea4fd483c4968d89b143866.png",
      price: 10,
    },
  ];

  const img = data.map((element, index) => {
    return <ProductBox {...element} key={index} />;
  });
  return (
    <div>
      <h1>Fruits Market</h1>
      <div className={style.container}>
        <div className={style.containerProduct}>
          All products
          {img}
        </div>
        <div className={style.containerBasket}>
          Basket List
          <DataList />
        </div>
      </div>
    </div>
  );
}

export default Home;
