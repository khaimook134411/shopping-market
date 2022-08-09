import React from "react";
// import { useSelector } from "react-redux";
import DataList from "../../components/data-list/DataList";
import ProductBox from "../../components/product-box/ProductBox";
import ProductButton from "../../components/product-button/ProductButton";
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
      price: 100,
    },
    {
      description: "watermelon",
      imgUrl:
        "https://www.pngall.com/wp-content/uploads/2016/04/Watermelon-Free-Download-PNG.png",
      price: 80,
    },
    {
      description: "cherry",
      imgUrl:
        "https://www.pngplay.com/wp-content/uploads/6/Aesthetic-Cherry-Transparent-PNG.png",
      price: 80,
    },
    {
      description: "kiwi",
      imgUrl:
        "https://www.pngall.com/wp-content/uploads/2016/04/Kiwi-PNG-File.png",
      price: 80,
    },
    {
      description: "grape",
      imgUrl:
        "https://www.padasopus.com/wp-content/uploads/2017/07/Grape-PNG.png",
      price: 80,
    },
    {
      description: "pineapple",
      imgUrl:
        "https://i.pinimg.com/originals/30/a3/f8/30a3f885fa5b26244d1f8819a94869b5.png",
      price: 80,
    },
    {
      description: "blueberry",
      imgUrl:
        "https://i.pinimg.com/originals/91/25/b2/9125b2471bb9514dd03f878f05ece4f4.png",
      price: 80,
    },
  ];

  const img = data.map((element, index) => {
    return (
      <div>
        <ProductBox {...element} key={index} />
        <ProductButton />
      </div>
    );
  });
  return (
    <div>
      <h1>Fruits Market</h1>
      <div className={style.container}>
        <div className={style.containerProduct}>
          All products
          <div className={style.image}>{img}</div>
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
