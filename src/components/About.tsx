import styles from "./About.module.css";
import styles2 from "./Section1.module.css";
import image from '../images/About/image.png'
import { useEffect, useRef, useState } from "react";
import '../../src/defaults.css'
import '../../src/resources.css'
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'
import { getAllWebsites } from "../firebase";
import dextools_icon from '../images/Section1/dextools.png'
import copy_icon from '../images/Section1/copy.png'

const About=()=>{

    const elementRef = useRef<HTMLDivElement>(null);
    //const height=useRef(0);
    const [dim,setDim]=useState<any>(undefined)
    const scale=useRef(-150);
    const [socialIcons,setSocialIcons]=useState([
        { src: twitter_icon, link: "" },
        { src:dex_icon, link: "" },
        { src:telegram_icon, link: "" },
      ]);
    const [ca,setCa]=useState("TBA")

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            if (elementRef.current) {
                window.removeEventListener("scroll", handleScroll);
            }
        };

      }, []);

    const handleScroll=()=>{
        if (elementRef.current) {
            // Get the bounding client rectangle
            setDim(elementRef.current.getBoundingClientRect());
        }
        console.log("scroll event",window.scrollY)
    }

    if(dim && dim.y<400 && dim.y>0){
        console.log("case 1")
        scale.current=((dim.y)/400)*150
    }
    else if(dim && dim.y>400){
        console.log("case 2")
        scale.current=150
    }
    else if(dim && dim.y<0 && dim.y>-dim.height){
        console.log("case 3")
        scale.current=0
    }
    else if(dim && dim.y<-dim.height){
        console.log("case 4")
        scale.current=150
    }
    
    useEffect(()=>{
        getAllWebsites().then((doc:any)=>{
          let currentWebsite=doc.find((website:any)=>website.data.name=="inuputin")
          console.log("Current Website",currentWebsite);
          if(currentWebsite)
          {
            setSocialIcons([
              { src: twitter_icon, link: currentWebsite?.data?.sociallinks?.x },
              { src: dex_icon, link: currentWebsite?.data?.sociallinks?.dexscreener},
              { src:dextools_icon, link: currentWebsite?.data?.sociallinks?.dextools},
              { src:telegram_icon, link: currentWebsite?.data?.sociallinks?.telegram},
            ]);
            setCa(currentWebsite.data.ca);
          }
        })
      },[])

    return(
        <section ref={elementRef} className={styles.mainwrapper} id="section2" data-scroll-to="section2" style={{overflow:'hidden'}}>
            <div className={styles.subwrapper+" padding-wrapper"} style={{position:'relative'}}>
                {/* <img className={styles.banner} src={banner}/> */}
                <div className={styles.image_wrapper}><img src={image} className={styles.image}/></div>
                <div className={styles.body_wrapper} style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                        <p className={styles.title}>$INUPUTIN</p>
                        <p className={styles.title2} style={{color:"white"}}>The Tsar Of MemeCoins</p>
                        <p className={styles.text} style={{color:"white"}}>
                            InuPutin isn’t just another memecoin — it’s a regime. Born from the unholy fusion of Shiba Inu chaos and iron-fisted control, InuPutin rules the blockchain with an iron paw. Decentralization? That’s cute. This is authoritarian tokenomics at its finest — no mercy, no democracy, just pure, meme-fueled domination. Bow, bark, or be banished. The era of InuPutin has begun.
                        </p>
                        <div className={styles2.socialWrapper+" gap"}>
                        {
                            socialIcons.map((icon) => (
                                <a key={icon.src} href={icon.link} target="_blank" rel="noopener noreferrer" >
                                    <img
                                        className={styles2.socialicons}
                                        loading="lazy"
                                        alt=""
                                        src={icon.src}
                                    />
                                </a>
                            ))}
                        </div>
                        <div className={styles2.cawrapper}>
                            <p className={styles2.caHeading}>CA</p>
                            <p className={styles2.ca} >{ca}</p>
                            <button className={styles2.copyWrapper} onClick={()=>{alert("CA has been copied");navigator.clipboard.writeText(ca)}}><img className={styles.copyIcon} src={copy_icon}></img></button>
                        </div>
                </div>
                <img className={styles.bomb1}/>
                <img className={styles.blast}/>
                <div className="flexbox-column gap flexbox-center padding-wrapper" style={{position:'absolute',top:"5%",right:"5%",backgroundColor:"rgba(0,0,0,0.7)"}}>
                    <span className={styles.text} style={{color:"white"}}>Version 1.1</span>
                    <span className={styles.text} style={{color:"white"}}>Update coming soon!</span>
                </div>
            </div>
        </section>
    )
}

{/* <section ref={elementRef} className={styles.mainwrapper} id="section2" data-scroll-to="section2">
<div className={styles.subwrapper+" padding-wrapper"} style={{position:'relative'}}>
    <img className={styles.banner} src={banner}/>
    <div className={styles.image_wrapper}><img src={image} className={styles.image}/></div>
    <div className={styles.body_wrapper} style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
        <p className={styles.title} style={{color:"white"}}>The Tsar Of MemeCoins</p>
        <p className={styles.text} style={{color:"white"}}>
        InuPutin isn’t just another memecoin — it’s a regime. Born from the unholy fusion of Shiba Inu chaos and iron-fisted control, InuPutin rules the blockchain with an iron paw. Decentralization? That’s cute. This is authoritarian tokenomics at its finest — no mercy, no democracy, just pure, meme-fueled domination. Bow, bark, or be banished. The era of InuPutin has begun.
        </p>
    </div>
    <img className={styles.bomb1}/>
    <img className={styles.blast}/>
</div>
</section> */}

export default About