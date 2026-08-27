import { useGSAP } from '@gsap/react'
import { cocktailLists, mockTailLists } from '../constants'
import gsap from 'gsap'
const Cocktails = () => {
    useGSAP(()=>{
        const parallexTimeline = gsap.timeline({
            scrollTrigger : {
                trigger : "#cocktails",
                scrub : true,
                start : "top 30%",
                end : "bottom 80%" // when the bottom reaches 80% top of the viewport when user scrolls the bottom will go upside thats why
            }
        });
      parallexTimeline.from("#c-left-leaf", { x : -100, y : 100})
      parallexTimeline.from("#c-right-leaf", {x : 100, y : 100})
    },[])
    return (
        <>
            <section className='noisy' id='cocktails'>
                <img src="images/cocktail-left-leaf.png" alt="left leaf" id='c-left-leaf' />
                <img src="images/cocktail-right-leaf.png" alt="right leaf" id='c-right-leaf' />
                <div className='list'>
                    <div className='popular'>
                        <h2>Most popular cocktails:</h2>
                        <ul>
                            {
                                cocktailLists.map(({ country, name, price, detail }) => (
                                    <li key={name}>
                                        <div className='md:me-28'>
                                            <h3>{name}</h3>
                                            <p>{country} | {detail}</p>
                                        </div>
                                        <span>-{price}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='loved'>
                        <h2>Most popular mocktails:</h2>
                        <ul>
                            {
                                mockTailLists.map(({ country, name, price, detail }) => (
                                    <li key={name}>
                                        <div className='md:me-28'>
                                            <h3>{name}</h3>
                                            <p>{country} | {detail}</p>
                                        </div>
                                        <span>-{price}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cocktails