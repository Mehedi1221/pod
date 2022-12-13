import style from '../../styles/homeCss/Review.module.css';
import img1 from '../../public/image/Ellipse 117.png'
import Image from 'next/image';



const data = [
    {
        userImg: img1,
        reviewTitle: 'Highly recommended',
        description: '“Working with Viralprints has been one of the best decisions we’ve made! After trialing many other….',
        name: '  Alejandro Santacreu',
        location: 'Colorado, USA'

    },

    {
        userImg: img1,
        reviewTitle: 'Helpful',
        description: '“We developed a great partnership with ViralPrints and we appreciate their attention to…',
        name: '  Adil Sen',
        location: 'IndiaIndia'

    },

    {
        userImg: img1,
        reviewTitle: 'Reasonable Price',
        description: '“I would highly recommend viralPrints as they were extremely professional and helpful…',
        name: '  Matt Sudowaski',
        location: 'Mutxamel, Spain  '

    },
]

const Review = () => {
    return (
        <>
            <div className={style.main}>
                <div className={`container`}>
                    <div>
                        <p className={style.title}>What People Are Saying</p>
                        <p className={style.description}>3200 People has taken services from our platform. 99% are satisfied</p>
                    </div>

                    <div className={style.reviewList}>

                        {
                            data.map((info) => {
                                return (
                                    <>
                                        <div className={style.card}>
                                            <Image
                                                src={info.userImg}
                                                height={72}
                                                width={72}
                                            />

                                            <div className={style.cardContainer}>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                            </div>

                                            <div className={style.Review}>
                                                <p className={style.reviewTitle}>{info.reviewTitle}</p>
                                                <p className={style.descript}  >{info.description}</p>
                                            </div>

                                            <div className={style.CardFooter}>
                                                <p className={style.Name}>{info.name}</p>
                                                <p className={style.Location}  >{info.location}</p>
                                            </div>




                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default Review