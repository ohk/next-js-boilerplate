import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.container}>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="p-3 h-12 w-12 order-2 md:order-3"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Change Theme
      </button>
    </div>
  );
}
