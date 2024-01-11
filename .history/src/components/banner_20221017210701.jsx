import React, { useEffect, useState } from "react";
import "../css/banner.css";
// class Banner extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       slides: [
//         { image: "https://bephoaphat.com/uploads/stores/5/2022/06/cu.jpg" },
//         {
//           image:
//             "https://images.unsplash.com/photo-1665916712273-d5d74843683b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//         },
//         {
//           image:
//             "https://images.unsplash.com/photo-1664111629972-685387366637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8aG1lbnZRaFVteE18fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//         },
//         {
//           image:
//             "https://images.unsplash.com/photo-1663464775968-d305e6465ee5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//         },
//       ],
//       currentSlide: 0,
//     };
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.nextSlide();
//     }, 2000);
//   }

//   nextSlide = () => {
//     this.setState({
//       currentSlide:
//         this.state.currentSlide === this.state.slides.length - 1
//           ? 0
//           : this.state.currentSlide++,
//     });
//   };

//   render() {
//     let { slides } = this.state;
//     return (
//       <div className="banner">
//         {slides &&
//           slides.length > 0 &&
//           slides.map(function (slide, index) {
//             const goToSlide = {
//               transform: `translateX(${
//                 100 * (index - this.state.currentSlide)
//               }%)`,
//             };
//             const mySlide = {
//               transform: `translateX(${100 * index}%)`,
//             };
//             return (
//               <div
//                 key={index}
//                 style={index === this.state.currentSlide ? mySlide : goToSlide}
//                 className={"banner-slider"}
//               >
//                 <img
//                   className="banner-image"
//                   src={slide.image}
//                   alt="Bếp Hoà Phát"
//                 />
//               </div>
//             );
//           })}
//       </div>
//     );
//   }
// }

const Banner = () => {
  const slides = [
    { image: "https://bephoaphat.com/uploads/stores/5/2022/06/cu.jpg" },
    {
      image:
        "https://images.unsplash.com/photo-1665916712273-d5d74843683b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1664111629972-685387366637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8aG1lbnZRaFVteE18fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1663464775968-d305e6465ee5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(1);
  const [autoPlay, setAutoPlay] = useState(null);
  const [maxSlide, setMaxSlide] = useState(slides.length);

  useEffect(() => {});

  const runSlide = () => {
    setInterval(() => {
      nextSlide();
    }, 4000);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === maxSlide - 1;
    setCurrentSlide(isLastSlide ? 0 : currentSlide + 1);
  };
  runSlide();
  return (
    <div className="banner">
      {slides &&
        maxSlide > 0 &&
        slides.map(function (slide, index) {
          const goToSlide = {
            transform: `translateX(${100 * (index - currentSlide)}%)`,
          };
          const mySlide = {
            transform: `translateX(${100 * index}%)`,
          };
          return (
            <div
              key={index}
              style={index === currentSlide ? mySlide : goToSlide}
              className={"banner-slider"}
            >
              <img
                className="banner-image"
                src={slide.image}
                alt="Bếp Hoà Phát"
              />
            </div>
          );
        })}
    </div>
  );
};

export default Banner;
