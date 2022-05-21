import { Header, Layout } from "@ghu/components";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Layout />
    </div>
  );
};

export default App;

// https://api.github.com/users
// https://api.github.com/users/USERNAME/repos
