import { TRenderProps } from '@typings/commonPropTypes';

import styles from './Content.module.css';

function Content({ children }: TRenderProps): JSX.Element {
  return <main className={styles.content}>{children}</main>;
}

export default Content;
