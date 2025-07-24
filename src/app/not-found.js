import Link from "next/link";
import "./style/not-found.css";

export default function NotFound() {
  return (
    <main className="error-main">
      <div className="error-title">
        <figure>
          <img src="/error/Text.png" alt="" />
        </figure>
        <figure>
          <img src="/error/Error-Logo.png" alt="" />
        </figure>
      </div>
      <nav className="error-nav">
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Hit us up</Link>
      </nav>
    </main>
  )
}