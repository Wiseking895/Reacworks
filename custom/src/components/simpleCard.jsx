import React, { Component } from 'react';
import Title from './Title';
import Description from './description';
import Image from './image';
import bg3 from '../assets/bg3.jpg';

class SimpleCard extends Component {
  render() {
    return (
      <div className="card">
        <Image url={bg3} />
        <Title text="Simple React Card" />
        <Description text="This is a simple React card made using class and function components." />
      </div>
    );
  }
}

export default SimpleCard;
