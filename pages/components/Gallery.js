import React, { StyleSheet, useState } from 'react'
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import { use, useEffect } from "react"
const Gallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    }, []);


    const [card, setCard] = useState(null);
    const onCardChange = (event) => {
        console.log("Card", event);
    }

    return (
        <>  <h1
            class="text-center text-4xl font-newton aos-init"
            data-aos="zoom-in-up"
        >
            GALLERY
        </h1>
            <div className="">
                <StackedCarousel
                    autoRotate={false}
                    onCardChange={onCardChange}
                    containerClassName={"container"}
                    cardClassName="card"
                    leftButton={<button>{"<"}</button>}
                    rightButton={<button>{">"}</button>}
                >
                    <div className='mx-auto w-[10vw]' key={'child1'}>
                        <img src='./1.PNG'></img>
                    </div>
                    <div className='mx-auto w-[10vw]' key={'child2'}>
                        <img src='./2.PNG'></img>
                    </div>
                    <div className='mx-auto w-[10vw]' key={'child3'}>
                        <img src='./3.PNG'></img>
                    </div>
                    <div className='mx-auto w-[10vw]' key={'child4'}>
                        <img src='./4.PNG'></img>
                    </div>
                    <div className='mx-auto w-[10vw]' key={'child5'}>
                        <img src='./5.PNG'></img>
                    </div>
                    <div className='mx-auto w-[10vw]' key={'child6'}>
                        <img src='./10.jpg'></img>
                    </div>
                    <div className='mx-auto w-[10vw]' key={'child7'}>
                        <img src='./11.jpg'></img>
                    </div>
                </StackedCarousel>
            </div></>

       
    )
}
export default Gallery