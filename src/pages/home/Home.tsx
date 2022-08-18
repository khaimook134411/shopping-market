import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductBox from "../../components/product-box/ProductBox";
import { addItem, delItem, resetItem } from "../../store/basketStore";
import { rootType } from "../../store/rootReducer";
import { store } from "../../store/store";
import style from "./Home.module.css";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import getData, { DataType } from "./getData";
import Loading from "../../components/loading/Loading";

function Home() {
  let { lang } = useParams();
  const { t, i18n } = useTranslation();

  const handleChangeLang = (lang: string) => {
    window.location.href = "/" + lang;
  };

  const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(window.location.pathname);
  const page = window.location.pathname;
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    getData().then((_data) => {
      setData(_data);
      setLoading(false);
    });
    lang === "th" ? i18n.changeLanguage("th") : i18n.changeLanguage("en");
  }, [lang, i18n]);

  // const _action = (name1: string, price: number) =>
  //   store.dispatch(addItem({ name: name1, price: price }));

  const mapData = data.map((element, index) => {
    return (
      <div className={style.box}>
        <ProductBox
          id={element.id}
          imgUrl={element.imgUrl}
          name={element.name}
          price={element.price}
          key={index}
          index={index}
          action={(id: number, name: string, price: number) =>
            store.dispatch(addItem({ id: id, name: name, price: price }))
          }
        />
      </div>
    );
  });
  const state = useSelector((state: rootType) => {
    return state.basket;
  });

  return (
    <div>
      {loading && <Loading />}
      <div className={style.header}>
        <div className={style.boxImg}>
          <img
            src="https://img.cppng.com/download/2020-06/58726-juice-apple-cartoon-png-free-photo.png"
            alt=""
          />
          {t("Fruits Market")}
        </div>
        <div className={style.translation}>
          <div
            className={page === "/en" ? style.langActive : style.lang}
            onClick={() => handleChangeLang("en")}
          >
            EN
          </div>
          |
          <div
            className={page === "/th" ? style.langActive : style.lang}
            onClick={() => handleChangeLang("th")}
          >
            TH
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.containerProduct}>
          <div className={style.mapData}>{mapData}</div>
        </div>
        <div className={style.containerBasket}>
          <div className={style.basketList}>{t("Basket List")}</div>

          <div className={style.containerDataList}>
            {state.items.map((val, index) => {
              return (
                <div className={style.dataList}>
                  <div className={style.text}>{t(val.name)}</div>
                  <button
                    onClick={() =>
                      store.dispatch(
                        delItem({
                          id: val.id,
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
                          id: val.id,
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
