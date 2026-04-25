import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.imageBox}>
          <img
            src="vite-project/src/Photos/profile.png" title="user icons"
            alt="Profile"
          />
        </div>

        <div className={styles.content}>
          <h1>Hello Deepak</h1>

          <h3>About Me</h3>

          <p>
            I am Deepak Kumar, a first-year B.Tech student interested in
            front-end development, creative UI design, and building modern web
            projects.
          </p>

          <div className={styles.buttons}>
            <button className={styles.resume}>Resume</button>
            <button className={styles.projects}>Projects</button>
            <button className={styles.contact}>Contact</button>
          </div>
        </div>
      </section>
    </main>
  );
}