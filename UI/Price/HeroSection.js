import style from '../../styles/PriceCss/Price.module.css'
import Form from 'react-bootstrap/Form';
import Head from "next/head";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../../public/image/demo-img1.png'
import img2 from '../../public/image/demo-img2.png'
import img3 from '../../public/image/demo-img3.png'
import img4 from '../../public/image/demo-img3.png'
import Pagination from 'react-bootstrap/Pagination';




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
    {
        id: 6,
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
    {
        id: 6,
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
    {
        id: 6,
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
    {
        id: 6,
        img: img4,
        name: "Material Name",
        code: 'Product Name - Code',
        price: '$32'
    },
]




const Hero = () => {


    return (
        <>


            <div className={style.HeroMain}>
                <div className={style.CategoryContainer}>
                    <div className={style.Categories}>

                        <Form.Select className={style.selection} aria-label="Default select example">
                            <option>Mens Clothing</option>
                            <option value="T-Shirt">T-Shirt</option>
                            <option value="2">Hoodies</option>
                            <option value="3">Swetatshirt</option>
                            <option value="3">Jacket</option>
                        </Form.Select>
                        <Form.Select className={style.selection} aria-label="Default select example">
                            <option>Womens Clothing</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select className={style.selection} aria-label="Default select example">
                            <option>Kids Clothing & Acc.</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select className={style.selection} aria-label="Default select example">
                            <option>Home & Living</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>



                    </div >

                    <div className={style.SizeContainer}>
                        <p className={style.SizeTitle}>Size</p>


                        <Form>
                            {['checkbox'].map((type) => (
                                <div className="mb-3">
                                    <Form.Check
                                        type={type}
                                        id="wee"
                                        label="S"
                                    />
                                    <Form.Check
                                        type={type}
                                        id='dfs'
                                        label='M'
                                    />
                                    <Form.Check
                                        type={type}
                                        id='dfs'
                                        label='L'
                                    />
                                    <Form.Check
                                        type={type}
                                        id='dfs'
                                        label='Xl'
                                    />
                                </div>
                            ))}
                        </Form>
                    </div>


                    <div className={style.SizeContainer}>
                        <p className={style.SizeTitle}>Color</p>


                        <Form>
                            {['checkbox'].map((type) => (
                                <div className={`mb-3 ${style.ColorCheckBoxContainer}`}>
                                    <Form.Check
                                        className={style.ColorCheck}
                                        type={type}
                                        id="wee"


                                    />
                                    <Form.Check
                                        type={type}
                                        id='dfs'

                                    />
                                    <Form.Check
                                        type={type}
                                        id='dfs'

                                    />
                                    <Form.Check
                                        type={type}
                                        id='dfs'

                                    />
                                    <Form.Check
                                        type={type}
                                        id='dfs'

                                    />
                                    <Form.Check
                                        type={type}
                                        id='dfs'

                                    />
                                    <Form.Check
                                        type={type}
                                        id='dfs'

                                    />
                                    <Form.Check
                                        type={type}
                                        id='dfs'

                                    />

                                </div>
                            ))}
                        </Form>
                    </div>




                    <button className={style.ApplyFilterBtn}>APPLY FILTER</button>
                </div>


                <div className={style.HeroRight}>
                    <div className={style.ProductListContainer}>
                        {
                            data.map((info) => {
                                return (
                                    <>
                                        <div className={style.Card} key={info.id}>
                                            <p className={style.BestSeller}>BestSelling</p>
                                            <Image
                                                alt="This is Prodict image"
                                                src={info.img}
                                                width={260.78}
                                                height={168.3}
                                            />

                                            <p className={style.Name}>{info.name}</p>
                                            <p className={style.Code}>{info.Code}</p>

                                            <hr className={style.hr} />
                                            <p className={style.Price}>{info.price}</p>

                                            <div className={style.ColorContainer}>

                                                <div className={style.size + " " + style.color1}></div>
                                                <div className={style.size + " " + style.color2}></div>
                                                <div className={style.size + " " + style.color3}></div>
                                                <div className={style.size + " " + style.color4}></div>
                                                <div className={style.size + " " + style.color5}></div>
                                                <div className={style.size + " " + style.color6}></div>
                                                <div className={style.size + " " + style.color7}></div>
                                                <div className={style.size + " " + style.color8}></div>
                                                <div className={style.size + " " + style.color9}></div>

                                            </div>

                                        </div>
                                    </>
                                )
                            })
                        }
                    </div> <b />

                    <div className={style.PaginationContainer}>
                        <p className={style.TotalPage}>Total Pages: 09</p>
                        <Pagination className={style.Pagination}>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item disabled>{14}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero