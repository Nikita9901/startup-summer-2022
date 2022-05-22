import { Header, Layout } from "@ghu/components";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.bg}></div>
      <Header />
      <Layout />
    </div>
  );
};

export default App;
