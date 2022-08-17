export type DataType = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};

export default function getData() {
  return new Promise<DataType[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "apple",
          imgUrl:
            "https://www.pngall.com/wp-content/uploads/11/Apple-PNG-File.png",
          price: 33,
        },
        {
          id: 2,
          name: "orange",
          imgUrl:
            "https://cdn.pixabay.com/photo/2016/02/23/17/42/orange-1218158_1280.png",
          price: 20,
        },
        {
          id: 3,
          name: "banana",
          imgUrl: "https://www.pngmart.com/files/1/Banana-Bunch-PNG.png",
          price: 10,
        },
        {
          id: 4,
          name: "strawberry",
          imgUrl:
            "https://i.pinimg.com/originals/28/3e/53/283e53880ea4fd483c4968d89b143866.png",
          price: 100,
        },
        {
          id: 5,
          name: "watermelon",
          imgUrl:
            "https://www.pngall.com/wp-content/uploads/2016/04/Watermelon-Free-Download-PNG.png",
          price: 80,
        },
        {
          id: 6,
          name: "cherry",
          imgUrl:
            "https://www.pngplay.com/wp-content/uploads/6/Aesthetic-Cherry-Transparent-PNG.png",
          price: 80,
        },
        {
          id: 7,
          name: "kiwi",
          imgUrl:
            "https://www.pngall.com/wp-content/uploads/2016/04/Kiwi-PNG-File.png",
          price: 80,
        },
        {
          id: 8,
          name: "grape",
          imgUrl:
            "https://www.padasopus.com/wp-content/uploads/2017/07/Grape-PNG.png",
          price: 80,
        },
        {
          id: 9,
          name: "pineapple",
          imgUrl:
            "https://i.pinimg.com/originals/30/a3/f8/30a3f885fa5b26244d1f8819a94869b5.png",
          price: 80,
        },
        {
          id: 10,
          name: "blueberry",
          imgUrl:
            "https://i.pinimg.com/originals/91/25/b2/9125b2471bb9514dd03f878f05ece4f4.png",
          price: 80,
        },
      ]);
    }, 1000);
  });
}
