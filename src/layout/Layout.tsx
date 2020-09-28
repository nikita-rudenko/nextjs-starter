import { TRenderProps } from '@typings/commonPropTypes';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import styles from './Layout.module.css';

function Layout({ children }: TRenderProps): JSX.Element {
  return <div className={styles.layout}>{children}</div>;
}

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
