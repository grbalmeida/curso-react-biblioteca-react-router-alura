import { useLocation, useParams } from 'react-router-dom';
import styles from './Prato.module.scss';

export default function Prato() {

  console.log(useLocation());

  return (
    <div>Prato</div>
  );
}