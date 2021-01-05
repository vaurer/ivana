import React, { Component } from 'react';
class GoogleMaps extends Component {
    state = {}
    render() {
        return (
            <div >
                <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.206072889158!2d9.587647615589969!3d47.466413579175544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b10eece3fb75d%3A0x20dffe1b57a4a36b!2sHauptstrasse%2018%2C%209424%20Rheineck%2C%20Schweiz!5e0!3m2!1sde!2sat!4v1609792998046!5m2!1sde!2sat" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
        );
    }
}
export default GoogleMaps;