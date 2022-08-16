import React from "react";
import { useSelector } from "react-redux";
import ProductBox from "../../components/product-box/ProductBox";
import { addItem, delItem, resetItem } from "../../store/basketStore";
import { rootType } from "../../store/rootReducer";
import { store } from "../../store/store";

import style from "./Home.module.css";
// import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Home() {
  // let { lang } = useParams();
  const { t, i18n } = useTranslation();
  // i18n.changeLanguage(lang);
  const data = [
    {
      name: t("apple"),
      imgUrl: "https://www.pngall.com/wp-content/uploads/11/Apple-PNG-File.png",
      price: 33,
    },
    {
      name: t("orange"),
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/02/23/17/42/orange-1218158_1280.png",
      price: 20,
    },
    {
      name: t("banana"),
      imgUrl: "https://www.pngmart.com/files/1/Banana-Bunch-PNG.png",
      price: 10,
    },
    {
      name: t("strawberry"),
      imgUrl:
        "https://i.pinimg.com/originals/28/3e/53/283e53880ea4fd483c4968d89b143866.png",
      price: 100,
    },
    {
      name: t("watermelon"),
      imgUrl:
        "https://www.pngall.com/wp-content/uploads/2016/04/Watermelon-Free-Download-PNG.png",
      price: 80,
    },
    {
      name: t("cherry"),
      imgUrl:
        "https://www.pngplay.com/wp-content/uploads/6/Aesthetic-Cherry-Transparent-PNG.png",
      price: 80,
    },
    {
      name: t("kiwi"),
      imgUrl:
        "https://www.pngall.com/wp-content/uploads/2016/04/Kiwi-PNG-File.png",
      price: 80,
    },
    {
      name: t("grape"),
      imgUrl:
        "https://www.padasopus.com/wp-content/uploads/2017/07/Grape-PNG.png",
      price: 80,
    },
    {
      name: t("pineapple"),
      imgUrl:
        "https://i.pinimg.com/originals/30/a3/f8/30a3f885fa5b26244d1f8819a94869b5.png",
      price: 80,
    },
    {
      name: t("blueberry"),
      imgUrl:
        "https://i.pinimg.com/originals/91/25/b2/9125b2471bb9514dd03f878f05ece4f4.png",
      price: 80,
    },
  ];
  const _action = (name1: string, price: number) =>
    store.dispatch(addItem({ name: name1, price: price }));

  const mapData = data.map((element, index) => {
    return (
      <div className={style.box}>
        <ProductBox
          imgUrl={element.imgUrl}
          name={element.name}
          price={element.price}
          key={index}
          index={index}
          action={_action}
        />
      </div>
    );
  });
  const state = useSelector((state: rootType) => {
    return state.basket;
  });

  return (
    <div>
      <div className={style.header}>
        <div className={style.boxImg}>
          <img
            src="https://img.cppng.com/download/2020-06/58726-juice-apple-cartoon-png-free-photo.png"
            alt=""
          />
          {t("Fruits Market")}
        </div>
        <div className={style.translation}>
          <div>EN</div>|<div>TH</div>
        </div>
        {/* <Translation>{(t) => <>{t("Fruits Market")}</>}</Translation> */}
      </div>

      <div className={style.container}>
        <div className={style.containerProduct}>
          <div className={style.mapData}>{mapData}</div>
        </div>
        <div className={style.containerBasket}>
          <div className={style.basketList}>{t("Basket List")}</div>

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
                  <div className={style.text}>
                    {val.price} {t("baht")}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={style.resetConianer}>
            <div>{t("Reset")}</div>
            <div
              className={style.circle}
              onClick={() => {
                store.dispatch(resetItem());
              }}
            ></div>
          </div>

          <div className={style.total}>
            <div>{t("Total")}</div>
            <div>{state.items.reduce((pre, next) => pre + next.price, 0)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
