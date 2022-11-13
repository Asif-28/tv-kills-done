import React from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import { use, useEffect } from "react"
import {
    StackedCarousel,
    ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export const data = [
    {
        cover: "./1.PNG",
        title: "Venom",
    },
    {
        cover: "./2.PNG",
        title: "Steins Gate",
    },
    {
        cover: "./3.PNG",
        title: "One Punch Man",
    },
    {
        cover: "./4.PNG",
        title: "A Silent Voice",
    },
    {
        cover: "./5.PNG",
        title: "Demon Slayer",
    },
    {
        cover: "./3.PNG",
        title: "Attack On Titan",
    },
    {
        cover: "./1.PNG",
        title: "picture 1",
    },
    {
        cover: "./2.PNG",
        title: "picture 2",
    },
    {
        cover: "./3.PNG",
        title: "picture 3",
    },
    {
        cover: "./4.PNG",
        title: "picture 4",
    },
    {
        cover: "./5.PNG",
        title: "picture 5",
    },
    {
        cover: "./1.PNG",
        title: "picture 6",
    },
    {
        cover: "./2.PNG",
        title: "picture 7",
    },
];

// {
//     cover: "./1.PNG",
//     title: "picture",
// },
//     {
//         cover: "./2.PNG",
//         title: "picture",
//     },
//     {
//         cover: "./3.PNG",
//         title: "picture",
//     },
//     {
//         cover: "./4.PNG",
//         title: "picture",
//     },
//     {
//         cover: "./5.PNG",
//         title: "picture",
//     },
//     {
//         cover: "./10.jpg",
//         title: "picture",
//     },
//     {
//         cover: "./11.jpg",
//         title: "picture",
//     },
// ];

export default function Gallery(props) {
    const ref = React.useRef();
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    }, []);
    return (
        <div id="gallery" style={{ width: "100%", position: "relative" }}>
            <h1
                class="mb-12 text-center text-4xl font-newton aos-init text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                data-aos="zoom-in-up"
            >
                GALLERY
            </h1>
            <ResponsiveContainer
                carouselRef={ref}
                render={(parentWidth, carouselRef) => {
                     let currentVisibleSlide = 5;
                    if (parentWidth <= 1440) currentVisibleSlide = 3;
                    if (parentWidth <= 1080) currentVisibleSlide = 1;
                    return (
                        <StackedCarousel
                            ref={carouselRef}
                            slideComponent={Card}
                            slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                            carouselWidth={parentWidth}
                            data={data}
                            currentVisibleSlide={currentVisibleSlide}
                            maxVisibleSlide={5}
                            useGrabCursor
                        />
                    );
                }}
            />
            <>
                <Fab
                    style={{ position: "absolute", top: "50%", left: 60, zIndex: 10 }}
                    size="small"
                    color="primary"
                    onClick={() => {
                        ref.current?.goBack();
                    }}
                >
                    <ArrowBackIcon />
                </Fab>
                <Fab
                    style={{ position: "absolute", top: "50%", right: 60, zIndex: 10 }}
                    size="small"
                    color="primary"
                    onClick={() => {
                        ref.current?.goNext(6);
                    }}
                >
                    <ArrowForwardIcon />
                </Fab>
            </>
        </div>
    );
}
 
export const Card = React.memo(function cardMemo (props) {
    const { data, dataIndex } = props;
    const { cover } = data[dataIndex];
    return (
        <div
            style={{
                width: "100%",
                height: 300,
                userSelect: "none",
            }}
            className="my-slide-component"
        >
            <img
                style={{
                    height: "100%",
                    width: "45%",
                    borderRadius: 0,
                    position:"relative",
                    left:"25%"
                }}
                draggable={true}
                src={cover}
            />
        </div>
    );
});

