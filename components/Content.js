import { useState } from "react";
import useAxios from "axios-hooks";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Navbar from "../components/Navbar";
import styles from "./Content.module.css";
import { content } from "../content";

const {
  server: {
    loading: loadingLabel,
    sections: { motd, address, status, online },
  },
  staff,
} = content;

const Content = ({ className }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [{ data: serverState, loading, error }, refetch] = useAxios(
    `https://api.mcsrvstat.us/2/${address.url}`
  );
  const hasData = !loading && !error && serverState;

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <div className={className}>
      <Navbar className={styles.navbar} />
      <section className={styles.section} id="server">
        <h3>{content.server.title}</h3>
        <div className={styles.status}>
          {loading && <div>{loadingLabel}</div>}
          {!loading && error && <div>{status.error}.</div>}
          {!loading && hasData && (
            <dl>
              <div className={styles.statusItem}>
                <dt className={styles.statusLabel}>{motd.title}</dt>
                <dd>
                  {serverState.online ? serverState.motd.clean : server.noData}
                </dd>
              </div>

              <div className={styles.statusItem}>
                <dt className={styles.statusLabel}>{address.title}</dt>
                <dd>{address.url}</dd>
                <CopyToClipboard onCopy={handleCopy} text={address.url}>
                  <button className="button button-primary" style={{marginLeft: 40, marginTop: 5}}>
                    {isCopied ? address.isCopied : address.copy}
                  </button>
                </CopyToClipboard>
              </div>

              <div className={styles.statusItem}>
                <dt className={styles.statusLabel}>{status.title}</dt>
                <dd
                  className={
                    serverState.online ? styles.online : styles.offline
                  }
                >
                  {serverState.online ? status.online : status.offline} (
                  {serverState.online
                    ? `${serverState.players.online}/${serverState.players.max}`
                    : server.noData}
                  )
                </dd>
              </div>

              {serverState.players.online > 0 && (
                <div className={styles.statusItem}>
                  <dt className={styles.statusLabel}>{online.title}</dt>
                  <dd>
                    <ul>
                      {serverState.players.list.map((player) => (
                        <li key={player}>{player}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          )}
        </div>
      </section>
      <hr />
      <section className={styles.section} id="staff">
        <h3>{staff.title}</h3>
        <table className="u-full-width">
          <thead>
            <tr>
              {staff.table.columns.map((column) => (
                <th>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {staff.table.rows.map((row) => (
              <tr>
                {staff.table.columns.map((column) => (
                  <td>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <hr />
      <section className={styles.section} id="vip">
        <h3>VIP</h3>
        <h5>Coming soon...</h5>
      </section>
    </div>
  );
};

export default Content;
