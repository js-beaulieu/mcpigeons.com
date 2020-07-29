import styles from "./Header.module.css";
import { header as text } from "../content";


const Header = ({ className }) => {
  return (
    <header className={[className, styles.header].join(' ')}>
      <div className="container">
        <div className="row">
          <h1>{text.title}</h1>
          <h2>{text.description}</h2>
        </div>
        <div className="row">
          <div className="six columns">
            <a
              className="container button button-primary"
              target="_blank"
              href={text.cta.discord.href}
            >
              {text.cta.discord.label}
            </a>
          </div>
          <div className="six columns">
            <a
              className="container button button-primary"
              target="_blank"
              href={text.cta.dynmap.href}
            >
              {text.cta.dynmap.label}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
