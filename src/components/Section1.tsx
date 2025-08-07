import styles from "./Section1.module.css";
import { useEffect,  useState } from "react";
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'
import dextools_icon from '../images/Section1/dextools.png'
import copy_icon from '../images/Section1/copy.png'
import { getAllWebsites } from "../firebase";


const Section1=()=>{

    const [socialIcons,setSocialIcons]=useState([
        { src: twitter_icon, link: "" },
        { src:dex_icon, link: "" },
        { src:telegram_icon, link: "" },
      ]);
      const [ca,setCa]=useState("TBA")
    const [currentbg]=useState(0)

    useEffect(()=>{

    },[currentbg])

    useEffect(()=>{
        getAllWebsites().then((doc:any)=>{
          let currentWebsite=doc.find((website:any)=>website.data.name=="inuputin")
          console.log("Current Website",currentWebsite);
          if(currentWebsite)
          {
            setSocialIcons([
              { src: twitter_icon, link: currentWebsite?.data?.sociallinks?.x },
              { src: dex_icon, link: currentWebsite?.data?.sociallinks?.dexscreener},
              { src:dextools_icon, link: currentWebsite?.data?.sociallinks?.telegram},
            ]);
            setCa(currentWebsite.data.ca);
          }
        })
      },[])

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.body}>
                    {/* <img className={styles.banner} src={banner}/> */}
                    <p className={styles.title}>$INUPUTIN</p>
                    <div className={styles.socialWrapper}>
                    {
                        socialIcons.map((icon) => (
                            <a key={icon.src} href={icon.link} target="_blank" rel="noopener noreferrer" >
                                <img
                                    className={styles.socialicons}
                                    loading="lazy"
                                    alt=""
                                    src={icon.src}
                                />
                            </a>
                        ))}
                    </div>
                    <div className={styles.cawrapper}>
                        <p className={styles.caHeading}>CA</p>
                        <p className={styles.ca} >{ca}</p>
                        <button className={styles.copyWrapper} onClick={()=>{alert("CA has been copied");navigator.clipboard.writeText(ca)}}><img className={styles.copyIcon} src={copy_icon}></img></button>
                    </div>
                </div>
                <img className={styles.penguin}/>
                <img className={styles.bomb1}/>
                <img className={styles.bomb2}/>
                <img className={styles.bomb3}/>
                <img className={styles.bomb4}/>
                {/* <img src={whitehouse_image} className={styles.whitehouse}/> */}
            </div>
        </section>
    )
}

export default Section1