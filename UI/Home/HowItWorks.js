import Head from "next/head"
import classes from '../../styles/homeCss/HowWork.module.css';
import Image from "next/image";
import img1 from '../../public/image/2.png';
import img2 from '../../public/image/1.png';
import img3 from '../../public/image/3.png';


const HowItWorks = () => {
    return (
        <>
            <Head>
                <title>How it Works</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

            </Head>

            <div className="container">
                <div>
                    <p className={classes.title}>How It Works</p>
                    <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className={classes.MainCardContainer}>

                    <div className={classes.CardContainer}>
                        <div className={classes.Card}>
                            <Image
                                src={img1}
                                height={175}
                                width={176}
                            />
                            <div className={classes.CardConatainerInfo}>
                                <p className={classes.heading}>Connect Your Store</p>
                                <p className={classes.desc}>Easy to connect your online store with our <br />
                                    integration tools.</p>
                            </div>
                        </div>
                        <div className={classes.Card}>
                            <Image
                                src={img2}
                                height={175}
                                width={176}
                            />
                            <div className={classes.CardConatainerInfo}>
                                <p className={classes.heading}>Design and publish</p>
                                <p className={classes.desc}>Create your unique products and add<br />
                                    them to your online store.</p>
                            </div>
                        </div>
                        <div className={classes.Card}>
                            <Image
                                src={img3}
                                height={175}
                                width={176}
                            />
                            <div className={classes.CardConatainerInfo}>
                                <p className={classes.heading}>Design and publish</p>
                                <p className={classes.desc}>Once an order is placed, we print, pack<br />
                                    and ship to your customer under your brand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks