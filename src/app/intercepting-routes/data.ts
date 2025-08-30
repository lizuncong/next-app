import { StaticImageData } from 'next/image';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpeg';
export interface PhotoItemProp {
  name: string;
  id: string;
  img: StaticImageData;
  price: number;
}
export const imgData: PhotoItemProp[] = [
  {
    name: '张三',
    id: '1',
    img: img1,
    price: 4,
  },
  {
    name: '李四',
    id: '2',
    img: img2,
    price: 19,
  },
  {
    name: '王五',
    id: '3',
    img: img3,
    price: 35,
  },
];
