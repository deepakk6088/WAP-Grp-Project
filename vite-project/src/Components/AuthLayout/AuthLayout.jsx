import styles from "./AuthLayout.module.css";

export default function AuthLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}>{children}</div>
    </div>
  );
}
