import Image from 'next/image';
import style from '../../styles/homeCss/Intigration.module.css';
import img from '../../public/image/printing-hero-section-img-3-1.png'

const Integration = () => {
    return (
        <>
            <div className={style.maindiv}>
                <div className={`container ${style.mainContainer}`}>
                    <div>
                        <Image
                            className={style.image}
                            src={img}
                            width={426}
                            height={396}
                        />
                    </div>

                    <div>
                        <p className={style.title}>Easy To Use
                            <br />Integrations</p>

                        <p className={style.description}>Streamline your selling and fulfillment
                            <br /> with our integrations and spend less
                            <br />time managing and more time making art.</p>

                        <button className={style.btn}>Order For Yourself</button>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Integration