import React, {Component} from 'react';
import '../public/styles/videobg.css';

  class VideoBG extends Component {

    render() {
      return (
        <div className="homepage-hero-module">
            <div className="video-container">
                <div className="filter"></div>
                <video autoPlay loop className="fillWidth">
                    <source src="../public/imgvids/MP4/BnW.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    <source src="../public/imgvids/WEBM/BnW.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
                <div className="poster hidden">
                    <img src="../public/imgvids/Snapshots/Bnw.jpg" alt=""/>
                </div>
            </div>
        </div>
      )
    }
  }

  export default VideoBG;
