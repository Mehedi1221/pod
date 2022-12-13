import Image from "next/image";
import Show1 from '../../public/image/catalog/show1.png';
import style from '../../styles/productCatagory/Hero.module.css';
import img1 from '../../public/image/catalog/mens-clothing.png';
import img2 from '../../public/image/catalog/clothing2.png';
import img3 from '../../public/image/catalog/clothing3.png';
import img4 from '../../public/image/catalog/clothing4.png';
import img5 from '../../public/image/catalog/clothing5.png';
import img6 from '../../public/image/catalog/clothing6.png';



const data = [
    {
        img: img1,
        catagoryName: "Men’s Clothing"
    },
    {
        img: img2,
        catagoryName: "Women’s Clothing"
    },
    {
        img: img3,
        catagoryName: "Kid’s Clothing & Acc."
    },
    {
        img: img4,
        catagoryName: "Loungewear"
    },
    {
        img: img5,
        catagoryName: "Home & Living"
    },
    {
        img: img6,
        catagoryName: "Accessories"
    },

]


const ProductCatalog = () => {
    return (
        <>
            <div className={`container ${style.heroMain}`}>
                <div className={style.heroContainer}>
                    <div className={style.hero}>
                        <div className={style.heroInfo}>
                            <p className={style.title}>100+ Print on Demand Products</p>
                            <div className={style.descriptionContainer}>
                                <p className={style.description}>Design and sell high margin custom products
                                    online with unlimited profit potential.</p>
                            </div>
                        </div>

                        <div>

                            <Image
                                className={style.image}
                                src={Show1}
                                height={393}
                                width={385}
                            />

                        </div>
                    </div>
                </div>

                <div className={style.catagoryListContainer}>

                    {
                        data.map((info) => {
                            return (
                                <>
                                    <div className={style.Card}>
                                        <Image
                                            src={info.img}
                                            width={234}
                                            height={246}
                                        />
                                        <p className={style.CatagoryName}>{info.catagoryName}</p>
                                    </div>
                                </>
                            )

                        })
                    }

                </div>
            </div>
        </>
    )
}

export default ProductCatalog