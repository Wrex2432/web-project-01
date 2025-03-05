import Link from "next/link"



export default function NavBar() {
    return (
        <nav id="nav" className="">
            <figure className="nav__logo">
                <img src="/LogoWhite.png" alt="" />
            </figure>
            <ul className="nav__links">
                <Link href={"/"} className="nav__link-button"><img src="/Home.png" alt="" /></Link>
                <Link href={"/about"} className="nav__link-button"><img src="/Person.png" alt="" /></Link>
                <Link href={"/"} className="nav__link-button"><img src="/Phone.png" alt="" /></Link>
            </ul>
        </nav>
    )
}