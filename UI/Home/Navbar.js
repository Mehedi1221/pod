import logo from '../public/logo.png';
import Image from 'next/image'
import Head from 'next/head'




const Navbar = () => {
  return (
    <>

      <Head>
        <title>Pod</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      </Head>


      <nav className="navbar navbar-expand-lg  container header">
        {/* <div className=""> */}
        <div className='logo'>
          <Image
            width={179}
            height={48}
            src={logo}
          />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav nav_item">

            <a className="nav-link" href="#">Product Catalog</a>
            <a className="nav-link" href="#">Price</a>
            <a className="nav-link" href="#">How it Works</a>
            <a className="nav-link" href="#">Help Desk</a>
            <a className="nav-link" href="#">Blog</a>


            <div className='buttons'>
              {/* <a className="nav-link" href="#">login</a> */}
              <button className='login-btn'>Login</button>
              <button className='signup-btn'>Signup</button>

            </div>
          </div>

        </div>

        {/* </div> */}
      </nav>
    </>
  )
}

export default Navbar