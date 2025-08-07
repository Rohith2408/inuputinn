import styles from "./About.module.css";
import image from '../images/About/image.png'
import { useEffect, useRef, useState } from "react";
import banner from '../images/banner.gif'

const About=()=>{

    const elementRef = useRef<HTMLDivElement>(null);
    //const height=useRef(0);
    const [dim,setDim]=useState<any>(undefined)
    const scale=useRef(-150);

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
    
    console.log(dim)

    return(
        <section ref={elementRef} className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper+" padding-wrapper"}>
                <img className={styles.banner} src={banner}/>
                <div className={styles.image_wrapper}><img src={image} className={styles.image}/></div>
                <div className={styles.body_wrapper} style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                    <p className={styles.title} style={{color:"white"}}>The Tsar Of MemeCoins</p>
                    <p className={styles.text} style={{color:"white"}}>
                    InuPutin isn’t just another memecoin — it’s a regime. Born from the unholy fusion of Shiba Inu chaos and iron-fisted control, InuPutin rules the blockchain with an iron paw. Decentralization? That’s cute. This is authoritarian tokenomics at its finest — no mercy, no democracy, just pure, meme-fueled domination. Bow, bark, or be banished. The era of InuPutin has begun.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About