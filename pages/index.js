import Head from "next/head";
import Header from "../components/Header";
import Content from "../components/Content";
import styles from "../styles/Home.module.css";
import { meta } from "../content";

const Home = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>{ meta.title }</title>
          <link rel="icon" href={meta.favicon} />
        </Head>
        <Header className={styles.header} />
        <Content className={styles.main} />
        <footer className={styles.footer}></footer>
      </div>
    );
};

export default Home;
