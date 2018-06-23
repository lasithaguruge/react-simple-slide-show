import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import ImageSlider from '../PresentationalComponent/ImageSlider'

class SlideShow extends Component {
    render() {
        return (
            <div>
                <ImageSlider image={'https://www.w3schools.com/howto/img_nature_wide.jpg'}/>
            </div>
        );
    }
}

export default SlideShow;