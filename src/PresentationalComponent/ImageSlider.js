import React, { Component } from 'react';
import { Grid, Header, Image, Icon } from 'semantic-ui-react'

class ImageSlider extends Component {
    render() {
        return (
            <div>
                <Header as='h4'>Image Slider</Header>
                <Grid textAlign='center'>
                    <Grid.Column width={1} verticalAlign='middle'>
                        <Icon name='caret left' size='huge' />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Image src={this.props.image} size='massive' />
                    </Grid.Column>
                    <Grid.Column width={1} verticalAlign='middle'>
                        <Icon name='caret right' size='huge' />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default ImageSlider;