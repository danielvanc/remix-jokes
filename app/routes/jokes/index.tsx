import type { LoaderFunction } from "remix";
import { useLoaderData, Link } from "remix";
import { db } from "~/utils/db.server";
import type { Joke } from "@prisma/client";

type LoaderData = { randomJoke: Joke };

export const loader: LoaderFunction = async () => {
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  });

  if (!randomJoke) throw new Error("No joke found");

  const data: LoaderData = { randomJoke };
  return data;
};

export default function JokesIndexRoute() {
  const data = useLoaderData();
  return (
    <div>
      <p>Here's a random joke:</p>
      <p>{data.randomJoke.content}</p>
      <Link to={data.randomJoke.id}>"{data.randomJoke.name}" Permalink</Link>
    </div>
  );
}

export function ErrorBoundary() {
  return <div className="error-container">I did a whoopsies.</div>;
}
