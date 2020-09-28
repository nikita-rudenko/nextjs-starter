import { TRenderProps } from '@typings/commonPropTypes';

import styles from './Title.module.css';

function Title({ children }: TRenderProps): JSX.Element {
  return (
    <h1 className={styles.title}>
      <span>{children}</span>
    </h1>
  );
}

export default Title;
