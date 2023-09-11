// import cours1 from "../images/cparticulier1.jpg"
// import cours2 from "../images/cparticulier2.jpg"
// import cours3 from "../images/cparticulier3.jpg"
// import cours4 from "../images/cparticulier4.jpg"
// import cours5 from "../images/cparticulier5.jpg"
import styles from "./CarouselParticulier.module.scss"

function CarouselParticulier({dataCarousel}) {
    return (
        <div className={styles.container}>
            {dataCarousel.map((image,index) => (
            <div key={index} className={styles.box}>
                <img src={image.src} alt={image.alt} />
            </div>
                ))}
        </div>
    )
}

export default CarouselParticulier

// import React from 'react';
// import styles from './CarouselParticulier.module.scss';
// import imagesData from './data.json';

// function CarouselParticulier() {
//   return (
//     <div className={styles.container}>
//       {imagesData.map((imageInfo) => 
//         <div key={imageInfo.id} className={styles.box}>
//           <img src={imageInfo.imagePath} alt="alt" />
//         </div>
//       )}
//     </div>
//   );
// }

// export default CarouselParticulier;
