import { ProductData } from 'models';

export type ProductModalProps = {
  product: ProductData;
  handleClose: () => void;
  isOpen: boolean;
};
