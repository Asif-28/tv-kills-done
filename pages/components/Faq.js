import AOS from 'aos';
import "aos/dist/aos.css";
import { use, useEffect } from "react"
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
export default function Faq() {

    const bg1 = {
        backgrounColor: "rgb(27, 27, 49)"
    }

    const bg2 = {
        backgroundColor: "rgb(7, 7, 27)"
    }
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    }, []);
    return (
        // <>   <div class="py-20" id="faq">
        //     <h1
        //         class="text-center text-4xl font-newton aos-init"
        //         data-aos="zoom-in-up"
        //     >
        //         FAQ
        //     </h1>
        //     <div class="mt-20 aos-init" data-aos="fade-right">
        //         <div
        //             class="my-10 cursor-pointer"
        //             style={bg1}
        //         >
        //             <div
        //                 class="flex justify-between items-center px-8 sm:px-12 py-8"
        //                 style={bg2}
        //             >
        //                 <h4 class="text-xl sm:text-2xl font-newton tracking-widest">
        //                     DOES THE TVKILLS HAVE DISCORD?
        //                 </h4>
        //                 <button class="pointer-cursor z-40" type="button">
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width="26"
        //                         height="26"
        //                         fill="currentColor"
        //                         class="bi bi-chevron-down"
        //                         viewBox="0 0 16 16"
        //                     >
        //                         <path
        //                             fill-rule="evenodd"
        //                             d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        //                         ></path>
        //                     </svg>
        //                 </button>
        //             </div>
        //         </div>
        //         <div
        //             class="my-10 cursor-pointer"
        //             style={bg1}
        //         >
        //             <div
        //                 class="flex justify-between items-center px-8 sm:px-12 py-8"
        //                 style={bg2}
        //             >
        //                 <h4 class="text-xl sm:text-2xl font-newton tracking-widest">
        //                     WHAT ARE THE BENEFITS OF HOLDING THE CULTPASS?
        //                 </h4>
        //                 <button class="pointer-cursor z-40" type="button">
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width="26"
        //                         height="26"
        //                         fill="currentColor"
        //                         class="bi bi-chevron-down"
        //                         viewBox="0 0 16 16"
        //                     >
        //                         <path
        //                             fill-rule="evenodd"
        //                             d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        //                         ></path>
        //                     </svg>
        //                 </button>
        //             </div>
        //         </div>
        //         <div
        //             class="my-10 cursor-pointer"
        //             style={bg1}
        //         >
        //             <div
        //                 class="flex justify-between items-center px-8 sm:px-12 py-8"
        //                 style={bg2}
        //             >
        //                 <h4 class="text-xl sm:text-2xl font-newton tracking-widest">
        //                     TOTAL COUNTS OF TV KILLS
        //                 </h4>
        //                 <button class="pointer-cursor z-40" type="button">
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width="26"
        //                         height="26"
        //                         fill="currentColor"
        //                         class="bi bi-chevron-down"
        //                         viewBox="0 0 16 16"
        //                     >
        //                         <path
        //                             fill-rule="evenodd"
        //                             d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        //                         ></path>
        //                     </svg>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div></>   
        <Fragment >
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </Fragment >

    )
}



