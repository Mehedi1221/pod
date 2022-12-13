import style from '../../styles/homeCss/Footer.module.css';
import Head from 'next/head';

const Fotter = () => {
    return (
        <>
            <Head>
                <title>Pod</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Elsie:wght@400;900&display=swap');
                </style>
            </Head>



            <div className="container">
                <div className={style.headingContainer}>
                    <p className={style.heading}>Grow your brand with a simplified eCommerce process</p>
                    <button className={style.btn}>Join Today</button>
                </div>


                <div className={style.ListContainer}>
                    <div>
                        <ul>
                            <li className={style.listHeading}>Get Started</li>
                            <li>Sign Up</li>
                            <li>Login</li>
                            <li>FAQ</li>
                            <li>Affiliate Program</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className={style.listHeading}>Information</li>
                            <li>Shipping info</li>
                            <li>Return Policy</li>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className={style.listHeading}>Company</li>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className={style.listHeading}>Integratioins</li>
                            <li>Shopify </li>
                            <li>Etsy</li>
                            <li>Woocommerce </li>
                            <li>Order desk </li>
                        </ul>
                    </div>

                </div>


                <div>
                    <footer className={style.BottomFooter}>© 2022 ViralPrint. All rights reserved.</footer>
                </div>
            </div>
        </>
    )
}

export default Fotter