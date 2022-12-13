import Head from "next/head";
import Image from "next/image";
import Styles from '../../styles/homeCss/FavProduct.module.css';
import StylesNew from '../../styles/homeCss/newProduct.module.css'

import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../../public/image/demo-img1.png'
import img2 from '../../public/image/demo-img2.png'
import img3 from '../../public/image/demo-img3.png'
import img4 from '../../public/image/demo-img3.png'


const data = [
    {
        id: 1,
        img: img1,
        name: "Material Name",
        code: 'Product Name - Code',
        price: '$32'
    },
    {
        id: 2,
        img: img2,
        name: "Material Name",
        code: 'Product Name - Code',
        price: '$32'
    },
    {
        id: 3,
        img: img3,
        name: "Material Name",
        code: 'Product Name - Code',
        price: '$32'
    },
    {
        id: 4,
        img: img4,
        name: "Material Name",
        code: 'Product Name - Code',
        price: '$32'
    },
    {
        id: 5,
        img: img4,
        name: "Material Name",
        code: 'Product Name - Code',
        price: '$32'
    },
    {
        id: 6,
        img: img4,
        name: "Material Name",
        code: 'Product Name - Code',
        price: '$32'
    },
]

const NewProducts = () => {

    const settings = {
        // dots: true,
        infinite: true,
        // slidesToShow: 4,
        // slidesToScroll: 1,
        // autoplay: true,
        // speed: 5000,
        autoplaySpeed: 3000,
        // cssEase: "linear"
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,



        responsive: [
            {
                breakpoint: 1390,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]
    };
    return (
        <>

            <Head>
                <title>Pod</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

            </Head>


            <div className={`container ${Styles.mainConatainer}`}>
                <div>
                    <p className={Styles.title}>New Arrival</p>
                    <p className={Styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>

                <div>

                    <Slider {...settings}>
                        {
                            data.map((info) => {
                                return (
                                    <>
                                        <div className={Styles.Card} key={info.id}>
                                            <p className={StylesNew.New}>New</p>
                                            <Image
                                                alt="This is Prodict image"
                                                src={info.img}
                                                width={260.78}
                                                height={168.3}
                                            />

                                            <p className={Styles.Name}>{info.name}</p>
                                            <p className={Styles.Code}>{info.Code}</p>

                                            <hr className={Styles.hr} />
                                            <p className={Styles.Price}>{info.price}</p>

                                            <div className={Styles.ColorContainer}>

                                                <div className={Styles.size + " " + Styles.color1}></div>
                                                <div className={Styles.size + " " + Styles.color2}></div>
                                                <div className={Styles.size + " " + Styles.color3}></div>
                                                <div className={Styles.size + " " + Styles.color4}></div>
                                                <div className={Styles.size + " " + Styles.color5}></div>
                                                <div className={Styles.size + " " + Styles.color6}></div>
                                                <div className={Styles.size + " " + Styles.color7}></div>
                                                <div className={Styles.size + " " + Styles.color8}></div>
                                                <div className={Styles.size + " " + Styles.color9}></div>

                                            </div>

                                        </div>
                                    </>
                                )
                            })
                        }

                    </Slider>
                </div>

                <div className={Styles.BtnContainer}>
                    <button className={Styles.Btn}>See More</button>

                </div>
            </div>
        </>
    )
}

export default NewProducts