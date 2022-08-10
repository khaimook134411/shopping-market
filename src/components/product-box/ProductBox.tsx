import React from "react";
import style from "./ProductBox.module.css";

interface ProductBoxProp {
  imgUrl: string;
  name: string;
  price: number;
  action: (item: string) => void;
}
function ProductBox(props: ProductBoxProp) {
  const item = props.name;
  // const AddItem: (item: string) => void = (item: string) =>
  //   store.dispatch(addItem({ name: item }));

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
          props.action(item);
        }}
      >
        Add to basket +
      </div>
    </>
  );
}

export default ProductBox;
