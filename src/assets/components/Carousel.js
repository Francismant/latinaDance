import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

import "./Carousel.scss"

function Carousel({ data }) {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }

    return (
        <div className='carousel'>
            <BsArrowLeftCircleFill className='arrow arrowLeft' onClick={prevSlide} />
            {data.map((item, idx) => {
                return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slideHidden"} />
            })}
            <BsArrowRightCircleFill className='arrow arrowRight' onClick={nextSlide} />
            <span className='indicators'>
                {data.map((_, idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicatorInactive"}></button>
                })}
            </span>
        </div>
    )
}

export default Carousel




// import React, { useState, useEffect } from 'react';
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
// import "./Carousel.scss";

// function Carousel({ data }) {
//     const [slide, setSlide] = useState(0);

//     // Interval de temps entre les diapositives (en millisecondes)
//     const interval = 3000; // Par exemple, change de diapositive toutes les 3 secondes

//     useEffect(() => {
//         // Fonction pour passer à la prochaine diapositive
//         const nextSlide = () => {
//             setSlide(slide === data.length - 1 ? 0 : slide + 1);
//         };

//         // Utilisez setTimeout pour déclencher la prochaine diapositive après un certain délai
//         const autoplayTimer = setTimeout(nextSlide, interval);

//         // Nettoyez le timer lorsque le composant est démonté ou que slide change
//         return () => {
//             clearTimeout(autoplayTimer);
//         };
//     }, [slide, data]);

//     const prevSlide = () => {
//         setSlide(slide === 0 ? data.length - 1 : slide - 1);
//     };

//     // Réinitialisez le timer lorsque l'utilisateur clique sur une diapositive
//     const handleIndicatorClick = (idx) => {
//         setSlide(idx);
//     };

//     return (
//         <div className='carousel'>
//             <BsArrowLeftCircleFill className='arrow arrowLeft' onClick={prevSlide} />
//             {data.map((item, idx) => {
//                 return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slideHidden"} />
//             })}
//             <BsArrowRightCircleFill className='arrow arrowRight' onClick={nextSlide} />
//             <span className='indicators'>
//                 {data.map((_, idx) => {
//                     return (
//                         <button
//                             key={idx}
//                             onClick={() => handleIndicatorClick(idx)}
//                             className={slide === idx ? "indicator" : "indicator indicatorInactive"}
//                         ></button>
//                     );
//                 })}
//             </span>
//         </div>
//     );
// }

// export default Carousel;
