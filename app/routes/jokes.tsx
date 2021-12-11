import type { LinksFunction } from "remix";
import { Link, Outlet } from "remix";
import styles from "../styles/jokes.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
export default function Jokes() {
  return (
    <div>
      <h1>J🤪KES</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
