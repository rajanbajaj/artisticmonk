import Image from "next/image";
import Link from "next/link";
import Card from "./components/Card/Card";

export default function Home() {
  return (
    <main>
      <h1>Hello!</h1>
      <Link href="/about">About</Link>
      <Card />
    </main>
  );
}
