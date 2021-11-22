import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <Link href="/">
        <a><h1>Harrys Blog</h1></a>
      </Link>
      <div>
        <Link href="/Blog">
          <a>Blog</a>
        </Link>
        <Link href="/About">
          <a>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        nav a {
          margin-right: 1rem;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}
