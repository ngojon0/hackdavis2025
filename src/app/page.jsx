import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
      <div className={styles.container}>
        <h1>Welcome to Nami Yolo</h1>
        <Link href="/CreateProfile">
          <button>Create Profile</button>
        </Link>
        <Link href="/CreateLogin">
          <button>Login</button>
        </Link>

      </div>
  );
}
