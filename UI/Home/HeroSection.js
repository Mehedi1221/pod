import Head from 'next/head';
import Image from 'next/image';
import HeroImage from '../../public/image/happy-summer.png';
import Tick from '../../public/image/Vector.png'




const Hero = () => {
    return (
        <>
            <Head>
                <title>Pod</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

            </Head>

            <div className="main-section container">
                <div className='hero'>
                    <div>
                        <p className='hero-text-1'>Bring Your <br /> Idea to Life</p>

                    </div>

                    <div>
                        <p className='hero-text-2'>Design and sell high margin custom products <br /> online with unlimited profit potential.</p>

                    </div>

                    <div className='list-container'>
                        <div>
                            <div className='list-items'>
                                <div className='list-icon'>
                                    <Image
                                        src={Tick}
                                        className="tick-img "
                                        height={15}
                                        width={15}

                                    />
                                </div>
                                <p>100% Free to Use</p >
                            </div>

                            <div className='list-items'>
                                <div className='list-icon'>
                                    <Image
                                        src={Tick}
                                        className="tick-img "
                                        height={15}
                                        width={15}

                                    />
                                </div>
                                <p>No Order Minimums</p >
                            </div>
                        </div>

                        <div>
                            <div className='list-items'>
                                <div className='list-icon'>
                                    <Image
                                        src={Tick}
                                        className="tick-img "
                                        height={15}
                                        width={15}

                                    />
                                </div>
                                <p>Custom Branding</p >
                            </div>

                            <div className='list-items'>
                                <div className='list-icon'>
                                    <Image
                                        src={Tick}
                                        className="tick-img "
                                        height={15}
                                        width={15}

                                    />
                                </div>
                                <p>Fully Autumated</p >
                            </div>
                        </div>

                    </div>

                    <div className='button-container'>
                        <button className='start-selling'>Start Selling</button>
                        <button className='order-yours'>Order Yours</button>
                    </div>
                </div>

                <div className='hero_img'>
                    <Image
                        className='image'
                        src={HeroImage}
                        height={490.01}
                        width={530}
                    />
                </div>

            </div>
        </>
    )
}

export default Hero