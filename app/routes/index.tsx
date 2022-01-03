import type { LinksFunction, MetaFunction } from "remix";
import { Link } from "remix";
import styles from "../styles/index.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => {
  return {
    title: "Remix: So great, it's funnys!",
    description: "Remix jokes app. Learn Remix and laugh at the same time!",
  };
};

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
