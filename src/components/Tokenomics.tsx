import styles from "./Tokenomics.module.css";
import {  useRef } from "react";
import image1 from '../images/Tokenomics/1.png'
import image2 from '../images/Tokenomics/2.png'
import image3 from '../images/Tokenomics/3.png'
import image4 from '../images/Tokenomics/4.png'
import icon from '../images/Tokenomics/icon.png'
import banner from '../images/banner.gif'

const Tokenomics=()=>{

    //const images=useRef([image1,image2,image3,image4]).current;
    const data=useRef([
        {title:"0%",subTitle:"Buy/Sell Tax",image:image1},
        {title:"1bn",subTitle:"Token Supply",image:image2},
        {title:"0%",subTitle:"Token Distribution",image:image3},
        {title:"LP Locked",subTitle:"Contract Renounced",image:image4}
    ]).current
    //const [bannerHeight,setBannerHeight]=useState(0)

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.body}>
                    <img className={styles.banner} src={banner}/>
                    <p className={styles.title}>Tokenomics</p>
                    <div className={styles.imageswrapper}>
                        <div className={styles.imagewrapper}>
                            <div className={styles.text_wrapper}>
                                <p className={styles.image_title}>{data[0].title}</p>
                                <p className={styles.image_subtitle}>{data[0].subTitle}</p>
                            </div>
                            <img className={styles.image} src={data[0].image}/>
                        </div>
                        <div className={styles.imagewrapper}>
                            <div className={styles.text_wrapper}>
                                <p className={styles.image_title}>{data[1].title}</p>
                                <p className={styles.image_subtitle}>{data[1].subTitle}</p>
                            </div>
                            <img className={styles.image} src={data[1].image}/>
                        </div>
                        <div className={styles.imagewrapper}>
                            <div className={styles.text_wrapper}>
                                <img className={styles.TD_icon} src={icon}/>
                                <p className={styles.image_subtitle}>{data[2].subTitle}</p>
                            </div>
                            <img className={styles.image} src={data[2].image}/>
                        </div>
                        <div className={styles.imagewrapper}>
                            <div className={styles.text_wrapper}>
                                <p className={styles.image_subtitle}>{data[3].title}</p>
                                <p className={styles.image_subtitle}>{data[3].subTitle}</p>
                            </div>
                            <img className={styles.image} src={data[3].image}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tokenomics