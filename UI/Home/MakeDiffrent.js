import Image from 'next/image';
import style from '../../styles/homeCss/makediffrent.module.css';
import img1 from '../../public/image/mdimg1.png';
import img2 from '../../public/image/mdimg2.png';
import img3 from '../../public/image/mdimg3.png';
import img4 from '../../public/image/mdimg4.png';
import img5 from '../../public/image/mdimg5.png';
import img6 from '../../public/image/mdimg6.png';
import img7 from '../../public/image/mdimg7.png';
import img8 from '../../public/image/mdimg8.png';


const MakeDiffrent = () => {
    return (
        <>
            <div className={`container ${style.mainContainer}`}>
                <div>
                    <p className={style.title}>What Makes Us Different?</p>
                    <p className={style.description}>Even if you have no design knowledge, you can create unique print on
                        demand products using our built-in Design Maker!</p>
                </div>

                <div className={style.listContainer}>
                    <div className={style.listItems}>
                        <div className={style.items}>
                            <Image
                                className={style.img1}
                                src={img1}
                            />

                            <div className={style.OurEfficieny}>
                                <p className={style.heading}>Over 150 products</p>
                                <p className={style.descrpt}>Personalize jewelry, ornaments, watches,
                                    wallets, mugs, wall art and more</p>
                            </div>
                        </div>

                        <div className={style.items}>
                            <Image
                                className={style.img1}
                                src={img2}
                            />

                            <div className={style.OurEfficieny}>
                                <p className={style.heading}>Easy mockup generator</p>
                                <p className={style.descrpt}>Create and list products with our easy
                                    to use free mockup generator.</p>
                            </div>
                        </div>
                        <div className={style.items}>
                            <Image
                                className={style.img1}
                                src={img3}
                            />

                            <div className={style.OurEfficieny}>
                                <p className={style.heading}>Integrations</p>
                                <p className={style.descrpt}>Integrate with major e-commerce
                                    platforms and start selling in minutes.</p>
                            </div>
                        </div>
                        <div className={style.items}>
                            <Image
                                className={style.img1}
                                src={img4}
                            />

                            <div className={style.OurEfficieny}>
                                <p className={style.heading}>Worldwide shipping</p>
                                <p className={style.descrpt}>We ship ANYWHERE in the world while
                                    offering the lowest and most
                                    competitive pricing on our shipping rates.</p>
                            </div>
                        </div>
                    </div>


                    <div className={style.listItems}>
                        <div className={style.items}>
                            <Image
                                className={style.img1}
                                src={img5}
                            />

                            <div className={style.OurEfficieny}>
                                <p className={style.heading}>Unique on-demand products</p>
                                <p className={style.descrpt}>Untapped yet highly profitable. The most
                                    unique pod products on the market</p>
                            </div>
                        </div>

                        <div className={style.items}>
                            <Image
                                className={style.img1}
                                src={img6}
                            />

                            <div className={style.OurEfficieny}>
                                <p className={style.heading}>No order minimums</p>
                                <p className={style.descrpt}>Print-on-demand can help you save money and
                                    time. The products you sell are created only when
                                    your customer places an order</p>
                            </div>
                        </div>
                        <div className={style.items}>
                            <Image
                                className={style.img1}
                                src={img7}
                            />

                            <div className={style.OurEfficieny}>
                                <p className={style.heading}>Free to use</p>
                                <p className={style.descrpt}>Only pay for fulfillment & shipping when orders
                                    come in.</p>
                            </div>
                        </div>
                        <div className={style.items}>
                            <Image
                                className={style.img1}
                                src={img8}
                            />

                            <div className={style.OurEfficieny}>
                                <p className={style.heading}>24/7 email support</p>
                                <p className={style.descrpt}>Always on standby. We care about all what
                                    0 you need.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MakeDiffrent