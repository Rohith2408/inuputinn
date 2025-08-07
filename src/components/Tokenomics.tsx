import "./Tokenomics.css";
// import {  useRef } from "react";
// import image1 from '../images/Tokenomics/1.png'
// import image2 from '../images/Tokenomics/2.png'
// import image3 from '../images/Tokenomics/3.png'
// import image4 from '../images/Tokenomics/4.png'
//import icon from '../images/Tokenomics/icon.png'
import banner from '../images/banner.png'
import suitcase_1 from '../images/Tokenomics/suitcase.png'
import suitcase_2 from '../images/Tokenomics/suitcase2.png'
import suitcase_3 from '../images/Tokenomics/suitcase3.png'
import useScreen from "../useScreen";
// import bg from '../images/Tokenomics/bg.png'

const Tokenomics=()=>{

    // const data=useRef([
    //     {title:"0%",subTitle:"Buy/Sell Tax",image:image1},
    //     {title:"1bn",subTitle:"Token Supply",image:image2},
    //     {title:"0%",subTitle:"Token Distribution",image:image3},
    //     {title:"LP Locked",subTitle:"Contract Renounced",image:image4}
    // ]).current
    const screen=useScreen();

    return(
        <section className="tkn-mainwrapper flexbox-column padding-wrapper">
            <div className="flexbox-column fullwidth">
                <span className={"tkn-title"}>Tokenomics</span>
                <div className="flexbox-column fullwidth" style={{padding:(screen=="laptop"||screen=="pc")?"100px":"20px"}}>
                    <img src={banner} className="fullwidth img-fit" style={{border:"10px solid black",borderRadius:100}}/>
                    <div className={`flexbox-${(screen=="laptop"||screen=="pc")?"row":"column"} fullwidth`} style={{alignItems:"flex-start"}}>
                        <div className="flexbox-row" style={{flex:1}}><img className="fullwidth img-fit" src={suitcase_1}/></div>
                        <div className="flexbox-row" style={{flex:1}}><img className="fullwidth img-fit" src={suitcase_2}/></div>
                        <div className="flexbox-row" style={{flex:1}}><img className="fullwidth img-fit" src={suitcase_3}/></div>
                    </div>
                </div>
            </div>
        </section>

    )
}

        // <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
        //     <div className={styles.subwrapper}>
        //         <div className={styles.body}>
        //             <img className={styles.banner} src={banner}/>
        //             <p className={styles.title}>Tokenomics</p>
        //             <div className={styles.imageswrapper}>
        //                 <div className={styles.imagewrapper}>
        //                     <div className={styles.text_wrapper}>
        //                         <p className={styles.image_title}>{data[0].title}</p>
        //                         <p className={styles.image_subtitle}>{data[0].subTitle}</p>
        //                     </div>
        //                     <img className={styles.image} src={data[0].image}/>
        //                 </div>
        //                 <div className={styles.imagewrapper}>
        //                     <div className={styles.text_wrapper}>
        //                         <p className={styles.image_title}>{data[1].title}</p>
        //                         <p className={styles.image_subtitle}>{data[1].subTitle}</p>
        //                     </div>
        //                     <img className={styles.image} src={data[1].image}/>
        //                 </div>
        //                 <div className={styles.imagewrapper}>
        //                     <div className={styles.text_wrapper}>
        //                         <img className={styles.TD_icon} src={icon}/>
        //                         <p className={styles.image_subtitle}>{data[2].subTitle}</p>
        //                     </div>
        //                     <img className={styles.image} src={data[2].image}/>
        //                 </div>
        //                 <div className={styles.imagewrapper}>
        //                     <div className={styles.text_wrapper}>
        //                         <p className={styles.image_subtitle}>{data[3].title}</p>
        //                         <p className={styles.image_subtitle}>{data[3].subTitle}</p>
        //                     </div>
        //                     <img className={styles.image} src={data[3].image}/>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

export default Tokenomics