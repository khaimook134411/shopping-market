import React from "react";
import style from "./ProductBox.module.css";
import { useTranslation } from "react-i18next";

interface ProductBoxProp {
  imgUrl: string;
  name: string;
  price: number;
  index: number;
  action: (name: string, price: number) => void;
}
function ProductBox(props: ProductBoxProp) {
  const { name, price } = props;
  const { t, i18n } = useTranslation();
  // const quantity = 1;
  // const name = props.name;
  // const price = props.price;

  return (
    <>
      <div className={style.container}>
        <div className={style.picture}>
          <img alt="" src={props.imgUrl} />
        </div>
        <div className={style.detail}>
          <div>{props.name}</div>
          <div className={style.price}>{props.price}</div>
        </div>
      </div>
      <div
        className={style.addButton}
        onClick={() => {
          props.action(name, price);
        }}
      >
        {t("Add to basket")} +
      </div>
    </>
  );
}

export default ProductBox;
