export type DataType = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};

export default function getData() {
  var data = require("./data.json");
  return new Promise<DataType[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}
