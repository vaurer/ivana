import React, { Component } from 'react';
import { config } from 'react-spring/renderprops';
import Grid from './Grid';
import { Slug, Fade } from './Primitives';
import styles from './Cell.module.css'
import 'antd/dist/antd.css';
import {CloseOutlined} from '@ant-design/icons';
import Constants from "../../helper/Constants";

class Cell extends Component {

    render() {
      // const { toggle, name, description, css, active } = this.props
      const { toggle, description, css, active } = this.props
      return (
        <div
          className={styles.cell}
          style={{ backgroundImage: css, cursor: !active ? 'pointer' : 'auto' }}
          onClick={!active ? toggle : undefined}>
          <Fade show={active} delay={active ? 500 : 0}>
            <div className={styles.details}>
              <Slug delay={600}>
                {/* <div className="circle" style={{ background: css }} /> */}
                <div className={styles.close}>
                  <CloseOutlined
                    type="close"
                    style={{ cursor: 'pointer' }}
                    onClick={toggle}
                  />
                </div>
                <img src={this.props.fullphoto} alt={this.props.alt}></img>
                <p>{description}</p>
              </Slug>
            </div>
          </Fade>
          <Fade
            show={!active}
            from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
            leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
            delay={active ? 0 : 400}>
            <div className={styles.default}>
              <div style={{ zIndex: 1 }}><img src={this.props.src} alt={this.props.alt}></img></div>
            </div>
          </Fade>
        </div>
      )
    }
  }
  
  export default class CellTwo extends Component {
    state = { data:[] }
    componentDidMount() {
      let tempdata = [];
      fetch(Constants.photos)
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded1: true,
              items: result.data,
            });
            this.state.items.forEach((element) => {
              if (element.isactive === true) {
                let line = {
                  id: element.id,
                  alt: element.name,
                  name: element.name,
                  src: element.photo.data.thumbnails[3].url,
                  description: element.name,
                  fullphoto: element.photo.data.full_url,
                  css: 'linear-gradient(-20deg, #ffffff 0%, #afa596 100%, #afa596 100%)',
                  height: 340,
                  element: element,
                };
                tempdata.push(line);
              }
            });
            this.setState({
              isLoaded1: true,
              data: tempdata,
            });
          },
          (error) => {
            this.setState({
              isLoaded1: true,
              error,
            });
          }
        );
    };

    render() {
      return (
        <Grid
          className={styles.grid}
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={this.state.data}
          // Key accessor, instructs grid on how to fet individual keys from the data set
          keys={d => d.name}
          // Can be a fixed value or an individual data accessor
          heights={d => d.height}
          // Number of columns
          columns={2}
          // Space between elements
          margin={30}
          // Removes the possibility to scroll away from a maximized element
          lockScroll={false}
          // Delay when active elements (blown up) are minimized again
          closeDelay={500}
          // Regular react-spring configs
          config={config.slow}>
          {(data, active, toggle) => (
            <Cell {...data} active={active} toggle={toggle} />
          )}
        </Grid>
      )
    }
  }