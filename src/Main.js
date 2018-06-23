import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import SlideShow from './Component/SlideShow'

class Main extends Component {
    render() {
        const images = [
            <Image src='https://www.w3schools.com/howto/img_nature_wide.jpg' size='massive' />,
            <Image src='https://www.w3schools.com/howto/img_snow_wide.jpg' size='massive' />,
            <Image src='https://www.w3schools.com/howto/img_mountains_wide.jpg' size='massive' />
        ];

        return (
            <div>
                {this.props.children}
                <SlideShow>
                    {images}
                </SlideShow>
            </div>
        );
    }
}

export default Main;