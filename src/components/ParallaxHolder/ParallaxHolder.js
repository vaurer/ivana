import React, { Component } from "react";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs';
 import styles from './ParallaxHolder.module.css';

export default class ParallaxHolder extends Component {
  // showAll=()=>{
  //   console.log(this.props.src)
  //   console.log(this.props.maintitle)
  //   console.log(this.props.src1)
  //   console.log(this.props.maintitle1)
  //   console.log(this.props.src2)
  //   console.log(this.props.maintitle2)
  // }
    render(){
        // const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
        // const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
        // const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
        // const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
        // const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
        // const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span> 
        //  const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>
        return(
            <div>
                <Parallax ref={(ref) => (this.parallax = ref)} pages={3} style={{ backgroundColor: '#a69c8f' }}>
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#8d8578' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#afa596' }} />

        {/* <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} /> */}

        {/* <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} alt={'1'} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} alt={'1'} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} alt={'1'} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} alt={'1'} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} alt={'1'} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} alt={'1'} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} alt={'1'} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} alt={'1'} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} alt={'1'} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} alt={'1'} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} alt={'1'} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} alt={'1'} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={url('earth')} alt={'1'} style={{ width: '60%' }} />
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', false)
          }}
        /> */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={this.props.src} alt={'1'} style={{ width: 'auto', opacity: 1 }}/>
          <div className={styles.container}> <p className={styles.centered}>{this.props.maintitle}</p></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={this.props.src2} alt={'1'} style={{ width: 'auto', opacity: 1 }}/>
          <div className={styles.container}> <p className={styles.centered}>{this.props.maintitle3}</p></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          onClick={() => this.parallax.scrollTo(0)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={this.props.src3} alt={'1'} style={{ width: 'auto', opacity: 1 }}/>
          <div className={styles.container}> <p className={styles.centered}>{this.props.maintitle3}</p></div>
        </ParallaxLayer>
      </Parallax>
            </div>
        );
    }
}