import { Course, Entry, Guitar, Product } from '@models/index';

export interface ContextValues {
  cart: Product[];
  guitars: Guitar[];
  courses: Course[];
  entries: Entry[];
  addProduct: (product: Product) => void;
  updateQuantity: (product: Product) => void;
  deleteProduct: (id: number) => void;
}
