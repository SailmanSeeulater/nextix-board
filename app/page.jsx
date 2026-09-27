import { greet } from "../lib/greet.js";

export default function Home() {
  return (
    <section className="hero">
      <h1>{greet("world")}</h1>
      <p>
        This page exists so nexTix can take before and after screenshots when an agent
        changes it.
      </p>
      <a className="button button-purple" href="/about">
        Learn more
      </a>
    </section>
  );
}
