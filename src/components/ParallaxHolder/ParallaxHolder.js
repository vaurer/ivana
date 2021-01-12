import React, { Component } from "react";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs';
 import styles from './ParallaxHolder.module.css';
 import FooterHolder from '../Footer/FooterHolder'
import MainPhoto from "../MainPhoto/MainPhoto";
// import Navbar from "../Navbar/Navbar";

export default class ParallaxHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    render(){
        return(
            <div>
                <Parallax ref={(ref) => (this.parallax = ref)} pages={4} style={{ backgroundColor: '#a69c8f'}}>
                  <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#8d8578'}} />
                  <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#afa596'}} />
          
                <ParallaxLayer
                  offset={1}
                  speed={0.1}
                  onClick={this.props.galeryToggleHandler}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'all'}}>
                  <img src={this.props.src3} alt={'1'} style={{ width: 'auto' , height: '60%', opacity: 0.7 }} />
                </ParallaxLayer>

                <ParallaxLayer
                  offset={2}
                  speed={0.1}
                  onClick={this.props.videosToggleHandler}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={this.props.src2} alt={'1'} style={{ width: 'auto' , height: '60%', opacity: 0.7  }}/>
                </ParallaxLayer>

                {/* <ParallaxLayer 
                  offset={-1}
                  speed={-1}>
                  <Navbar mainSiteToggleHandler={this.mainSiteToggleHandler} />
                </ParallaxLayer> */}
                
                <ParallaxLayer
                  offset={3}
                  speed={-0}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <FooterHolder formToggleHandler={this.props.formToggleHandler} mapToggleHandler={this.props.mapToggleHandler} />
                </ParallaxLayer>

                <ParallaxLayer
                  offset={1}
                  speed={0.1}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'all'}}>
                  <div className={styles.container} onClick={this.props.galeryToggleHandler}> <p className={styles.centered} >GALERY</p></div>
                </ParallaxLayer>

                <ParallaxLayer
                  offset={2}
                  speed={0.1}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'all'}}>
                  <div className={styles.container}> <p className={styles.centered}>PRODUKTE</p></div>
                </ParallaxLayer>

                <ParallaxLayer
                  offset={0}
                  speed={0.1}
                  style={{zIndex:'4000'}}>
                  <MainPhoto
                  show={this.props.show}
                  alt={this.props.alt}
                  src={this.props.src}
                  maintitle={this.props.maintitle}
                  maintext={this.props.maintext}></MainPhoto>
                </ParallaxLayer>

              </Parallax>
            </div>
        );
    }
}