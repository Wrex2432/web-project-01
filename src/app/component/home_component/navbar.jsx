export default function NavBar() {
    return (
        <nav id="nav" className="">
            <figure className="nav__logo">
                <img src="/LogoWhite.png" alt="" />
            </figure>
            <ul className="nav__links">
                <li><button><img src="/Home.png" alt="" /></button></li>
                <li><button><img src="/Person.png" alt="" /></button></li>
                <li><button><img src="/Phone.png" alt="" /></button></li>
            </ul>
        </nav>
    )
}