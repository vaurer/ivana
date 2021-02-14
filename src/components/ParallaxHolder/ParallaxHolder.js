import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs";
import styles from "./ParallaxHolder.module.css";
import FooterHolder from "../Footer/FooterHolder";


export default class ParallaxHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount=()=> {
    if(this.props.goto3===true){ this.parallax.scrollTo(3)}
  }

  componentDidUpdate(prevProps) {
    if (this.props.goto3 === true) {
      this.parallax.scrollTo(3)
    }
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
                  onClick={(event) =>  window.location.href='/'}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'all'}}>
                  <img src={this.props.src3} alt={'1'} style={{ width: 'auto' , height: '60%', opacity: 0.7 }} />
                </ParallaxLayer>

                <ParallaxLayer
                  offset={2}
                  speed={0.1}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={this.props.src2} alt={'1'} style={{ width: 'auto' , height: '60%', opacity: 0.7  }}/>
                </ParallaxLayer>
                
                <ParallaxLayer className="Footer"
                  offset={3}
                  speed={-0}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <FooterHolder />
                </ParallaxLayer>

                <ParallaxLayer
                  offset={1}
                  speed={0.1}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'all'}} onClick={event =>  window.location.href='/media'}>
                  <div className={styles.container} > <p className={styles.centered} >Galerie</p></div>
                </ParallaxLayer>

                <ParallaxLayer
                  offset={2}
                  speed={0.1}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'all'}} onClick={event =>  window.location.href='/products'}>
                  <div className={styles.container}> <p className={styles.centered}>Produkte</p></div>
                </ParallaxLayer>
                
                <ParallaxLayer
                  offset={0}
                  speed={0.1}
                  onClick={() => this.parallax.scrollTo(1)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={this.props.src} alt={this.props.alt} style={{ width: 'auto' , height: '100%', paddingTop: '80px', opacity: 0.7  }}/>
                </ParallaxLayer>

              </Parallax>
            </div>
        );
    }
}