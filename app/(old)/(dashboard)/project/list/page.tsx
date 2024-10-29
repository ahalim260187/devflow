import Link from "next/link";

import styles from "./projects.module.css";

const ProjectList = () => {
  return (
    <main>
      <h1>ProjectList</h1>
      <ul className={styles.ul}>
        <Link href="/project/ecommerce">
          <li>Ecommerce</li>
        </Link>
        <Link href="/project/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link href="/project/sekolah">
          <li>Website Sekolah</li>
        </Link>
      </ul>
    </main>
  );
};

export default ProjectList;
