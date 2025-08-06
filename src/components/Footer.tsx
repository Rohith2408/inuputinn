import {useEffect, useRef, useState, type FunctionComponent } from "react";
import styles from "./Footer.module.css";
// import telegram_icon from '../images/Section1/telegram.png'
// import twitter_icon from '../images/Section1/twitter.png'
// import dex_icon from '../images/Section1/dex.png'
// import dextools_icon from '../images/Section1/dextools.png'
import copy_icon from '../images/Section1/copy.png'
import { getAllWebsites } from "../firebase";


export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {

  // const [socialIcons,setSocialIcons]=useState([
  //   { src: twitter_icon, link: "" },
  //   { src:dex_icon, link: "" },
  //   { src:telegram_icon, link: "" },
  // ]);
  const [ca,setCa]=useState("TBA")
  const buyLink=useRef("").current

  // const onHomeButtonClick = useCallback(() => {
  //   document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' });
  // }, []);

  useEffect(()=>{
    getAllWebsites().then((doc:any)=>{
      let currentWebsite=doc.find((website:any)=>website.data.name=="inuputin")
      if(currentWebsite)
      {
        // setSocialIcons([
        //   { src: twitter_icon, link: currentWebsite?.data?.sociallinks?.x },
        //   { src: dex_icon, link: currentWebsite?.data?.sociallinks?.dexscreener},
        //   { src:dextools_icon, link: currentWebsite?.data?.sociallinks?.telegram},
        // ]);
        setCa(currentWebsite.data.ca);
      }
    })
  },[])

  return (
    <section className={[styles.mainwrapper, className].join(" ")} id="footer" data-scroll-to="footer">
      <div className={[styles.subwrapper, className].join(" ")}>
        <div className={[styles.line, className].join(" ")}></div>
        <div className={[styles.body, className].join(" ")}>
          <div className={[styles.description2wrapper, className].join(" ")}>
            <div className={[styles.buymarv, className].join(" ")}><a href={buyLink} target="_blank">Buy $inuPUTIN</a></div>
            <div className={[styles.contractaddwrapper, className].join(" ")}>
              <p className={[styles.contractadd, className].join(" ")}>CA: {ca}</p>
              <button onClick={()=>{alert("Contract Address Copied");navigator.clipboard.writeText(ca)}} className={[styles.copyiconwrapper, className].join(" ")}>
                <img style={{height:"auto",width:"100%"}} src={copy_icon}></img>
              </button>
            </div>
          </div>
          <div className={[styles.description3wrapper, className].join(" ")}>
          </div>
        </div>
      </div>
    </section>     
  );
};

export default Footer;


