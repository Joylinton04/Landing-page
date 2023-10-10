import Logo from "../../assets/Logo.webp"

const Navbar = () => {
  return (
    <nav>
        <div className='nav'>
            <div><img src={Logo} alt="logo" /></div>
            <div className='sign'>
                <span>Sign in</span>
                <span>Sign up</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;