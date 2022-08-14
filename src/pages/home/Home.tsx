import React from "react";
import { useSelector } from "react-redux";
import ProductBox from "../../components/product-box/ProductBox";
import { addItem, delItem } from "../../store/basketStore";
import { rootType } from "../../store/rootReducer";
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
          index={index}
          action={(name, price) =>
            store.dispatch(addItem({ name: name, price: price }))
          }
        />
      </div>
    );
  });
  const state = useSelector((state: rootType) => {
    return state.basket;
  });
  // console.log(store.getState().basket.items[1].countItem);

  return (
    <div>
      <div className={style.header}>
        <img
          src="https://img.cppng.com/download/2020-06/58726-juice-apple-cartoon-png-free-photo.png"
          alt=""
        />
        Fruits Market
      </div>

      <div className={style.container}>
        <div className={style.containerProduct}>
          {/* All products */}
          <div className={style.mapData}>{mapData}</div>
        </div>
        <div className={style.containerBasket}>
          <div className={style.basketList}> Basket List</div>

          <div>
            {state.items.map((val, index) => {
              return (
                <div className={style.dataList}>
                  <div className={style.text}>{val.name}</div>
                  <button
                    onClick={() =>
                      store.dispatch(
                        delItem({
                          name: val.name,
                          price: val.price / val.countItem,
                        })
                      )
                    }
                  >
                    -
                  </button>
                  <div className={style.count}>
                    {state.items[index].countItem}
                  </div>
                  <button
                    onClick={() =>
                      store.dispatch(
                        addItem({
                          name: val.name,
                          price: val.price / val.countItem,
                        })
                      )
                    }
                  >
                    {" "}
                    +
                  </button>{" "}
                  <div className={style.text}>{val.price} baht</div>
                </div>
              );
            })}
          </div>

          <div className={style.total}>
            <div>total</div>
            <div>{state.items.reduce((pre, next) => pre + next.price, 0)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
