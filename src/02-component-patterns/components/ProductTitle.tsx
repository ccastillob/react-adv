
import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
  title?: string;
  className?: string;
  activeTitleClass?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, activeTitleClass, style }: Props) => {

  const { product } = useContext( ProductContext );

  return (
    <span 
      className={ `${ styles.productDescription } ${ className } ${ activeTitleClass }` }
      style={ style }
    >
      { title ? title : product.title }
    </span>
  )
}