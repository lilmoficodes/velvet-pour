import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all"
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useMediaQuery({maxWidth : 767})
  useGSAP(()=>{
  const heroSplitText = new SplitText('.title', {type : 'words, chars'});
  const paraSplitText = new SplitText('.subtitle', {type : 'lines'});
  heroSplitText.chars.forEach((char)=>char.classList.add('text-gradient'))
  gsap.from(heroSplitText.chars, {
    yPercent : 100,
    duration : 1,
    ease : "back.out",
    stagger : 0.06
  })
  gsap.from(paraSplitText.lines,{
   opacity : 0,
   yPercent : 100,
   duration : 1,
   ease : "expo.out",
   stagger : 0.06,
   delay : 1
  })
  const leaftimeLine = gsap.timeline({
    scrollTrigger : {
        trigger : "#hero",
        start : "top top",
        end : "bottom top",
        scrub : true,
    }
  });
  leaftimeLine.to(".right-leaf", {y : 200}, 0);
  leaftimeLine.to(".left-leaf", {y  : -200}, 0);
  const startValue = isMobile ? "top 50%" : "center 60%";
  const endValue = isMobile ? "120 top" : "bottom top"
  // animate the video
  const tl = gsap.timeline({
    scrollTrigger : {
      trigger  : "video",
      pin : true,
      scrub :  true,
      start : startValue,
      end : endValue,
    }
  })
  if(videoRef.current)
   videoRef.current.onloadedmetadata = () =>{
   tl.to(videoRef.current, {
    currentTime : videoRef.current?.duration,
  })
  }
  }, [])
  return (
    <>
    <section className="noisy" id="hero">
      <h1 className="uppercase title">mojito</h1>
      <img src="images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
      <img src="images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />
      <div className="body">
        <div className="content">
          <div className="space-y-2 md:flex flex-col justify-center hidden">
            <p>Cool . Crisp . Classic.</p>
            <p className="subtitle">Sip the Spirit <br />of Summer</p>
          </div>
        </div>
        <div className="view-cocktails">
          <p className="subtitle">
            Every cocktail on our menu is a
            blend of premium ingredients,
            creative flair, and timeless recipes
            — designed to delight your senses.
          </p>
          <a href="#cocktails">View Cocktails</a>
        </div>
      </div>
    </section>
    <div className="video absolute inset-0">
      <video ref={videoRef} src="/videos/input.mp4" muted preload="auto" playsInline/>
    </div>
    </>

  )
}

export default Hero