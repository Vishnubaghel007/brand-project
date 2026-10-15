export default function Navigation() {
    return(
        <>
     <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo"></img>
      </div>
      <ul>
        <li a href="#">Menu</li>
        <li a  href="#">Location</li>
        <li a href="#">About</li>
        <li a href="#">Contact</li>
      </ul>
      <button>login</button>
     </nav>
     </>
    )
}