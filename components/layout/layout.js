import styles from "./layout.module.css";
import cn from "classnames";
const Layout = ({ className, ...props }) => {
  return <div className={cn(styles.container, className)} />;
};

export default Layout;
