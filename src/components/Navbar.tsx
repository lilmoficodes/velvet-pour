import { useGSAP } from "@gsap/react"
import { navLinks } from "../constants"
import gsap from "gsap"
const Navbar = () => {
  useGSAP(()=>{
    const navTween = gsap.timeline({
      scrollTrigger : {
        trigger : "nav",
        start : "bottom top"
      }
    })
    navTween.fromTo("nav", {backgroundColor : "transparent"}, {backgroundColor  : "#00000050",
       backgroundFilter : "blur(60px)", duration : 1, ease : "power1.inOut"})
  })
  return (
    <nav className="backdrop-blur-[4px]">
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {
            navLinks.map((item)=>{
              return (
                <li key={item.id}>
                  <a href={`${item.id}`}>{item.title}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar