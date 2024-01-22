import { Course, Entry, Guitar, Product } from '@models/index';

export interface ContextValues {
  cart: Product[];
  guitars: Guitar[];
  courses: Course[];
  entries: Entry[];
  addProduct: (product: Product) => void;
  updateQuantity: (props: { quantity: number; productId: number }) => void;
  deleteProduct: (id: number) => void;
}
