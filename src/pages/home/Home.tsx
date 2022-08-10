import React from "react";
import DataList from "../../components/data-list/DataList";
import ProductBox from "../../components/product-box/ProductBox";
import { addItem } from "../../store/basketStore";
import { store } from "../../store/store";

import style from "./Home.module.css";
function Home() {
  const data = [
    {
      name: "apple",
      imgUrl: "https://www.pngall.com/wp-content/uploads/11/Apple-PNG-File.png",
      price: 33,
    },
    {
      name: "orange",
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/02/23/17/42/orange-1218158_1280.png",
      price: 20,
    },
    {
      name: "banana",
      imgUrl: "https://www.pngmart.com/files/1/Banana-Bunch-PNG.png",
      price: 10,
    },
    {
      name: "strawberry",
      imgUrl:
        "https://i.pinimg.com/originals/28/3e/53/283e53880ea4fd483c4968d89b143866.png",
      price: 100,
    },
    {
      name: "watermelon",
      imgUrl:
        "https://www.pngall.com/wp-content/uploads/2016/04/Watermelon-Free-Download-PNG.png",
      price: 80,
    },
    {
      name: "cherry",
      imgUrl:
        "https://www.pngplay.com/wp-content/uploads/6/Aesthetic-Cherry-Transparent-PNG.png",
      price: 80,
    },
    {
      name: "kiwi",
      imgUrl:
        "https://www.pngall.com/wp-content/uploads/2016/04/Kiwi-PNG-File.png",
      price: 80,
    },
    {
      name: "grape",
      imgUrl:
        "https://www.padasopus.com/wp-content/uploads/2017/07/Grape-PNG.png",
      price: 80,
    },
    {
      name: "pineapple",
      imgUrl:
        "https://i.pinimg.com/originals/30/a3/f8/30a3f885fa5b26244d1f8819a94869b5.png",
      price: 80,
    },
    {
      name: "blueberry",
      imgUrl:
        "https://i.pinimg.com/originals/91/25/b2/9125b2471bb9514dd03f878f05ece4f4.png",
      price: 80,
    },
  ];

  const mapData = data.map((element, index) => {
    return (
      <div className={style.box}>
        <ProductBox
          imgUrl={element.imgUrl}
          name={element.name}
          price={element.price}
          key={index}
          action={(name) => store.dispatch(addItem({ name: name }))}
        />
      </div>
    );
  });
  return (
    <div>
      <h3>
        <img
          src="https://img.cppng.com/download/2020-06/58726-juice-apple-cartoon-png-free-photo.png"
          alt=""
        />
        Fruits Market
      </h3>
      <div className={style.container}>
        <div className={style.containerProduct}>
          All products
          <div className={style.image}>{mapData}</div>
        </div>
        <div className={style.containerBasket}>
          Basket List
          <DataList description={data[4].name} price={data[4].price} />
        </div>
      </div>
    </div>
  );
}

export default Home;
