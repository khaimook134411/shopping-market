import React from "react";
import style from "./ProductBox.module.css";

interface ProductBoxProp {
  picture: string;
  description: string;
  price: number;
  onClick: () => void;
}
function ProductBox(props: ProductBoxProp) {
  return (
    <>
      <div className={style.container}>
        <div className={style.picture}>
          <img alt="" src={props.picture} />
        </div>
        <div className={style.detail}>
          <div>{props.description}</div>
          <div className={style.price}>{props.price}</div>
        </div>
        <div className={style.basket} onClick={props.onClick}>
          basket
        </div>
      </div>
    </>
  );
}

export default ProductBox;
