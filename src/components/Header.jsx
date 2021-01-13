import React from "react";
import "./Header.css";
import Carousel from "react-elastic-carousel";
import Slider from "react-animated-slider";
import "./slideranimation.css";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import { Button } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    videoId:"2g811Eo7K8U",
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    videoId:"2g811Eo7K8U",
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
    videoId:"2g811Eo7K8U"
  },
];

function Header() {
  return (
    <div className="header">
      <Slider className="slider-wrapper" autoplay={0} duration={5000} >
      {/* <ArrowBackIosIcon className="previous" />
      <ArrowForwardIosIcon className="next" /> */}
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
           
            <div className="inner">
              
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
               {/* <YouTube videoId={item.videoId} opts={opts} >{item.videoId}</YouTube>  */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
          }     
export default Header;
