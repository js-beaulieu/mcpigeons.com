import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./Navbar.module.css";
import { nav } from "../content";

const Navbar = ({ className }) => {
  return (
    <nav className={[className, styles.navbar].join(" ")}>
      <div className={styles.container}>
        <ul className={styles.navbarList}>
          {nav.links.map((link) => (
            <li className={styles.navbarListItem} key={link.anchor}>
              <AnchorLink className={styles.navbarLink} href={link.anchor}>{link.label}</AnchorLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
