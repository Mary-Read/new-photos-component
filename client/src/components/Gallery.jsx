import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url1: 'https://maryread-photos.s3.us-east-2.amazonaws.com/item10/item10.1.webp',
      url2: 'https://maryread-photos.s3.us-east-2.amazonaws.com/item10/item10.2.webp',
      url3: 'https://maryread-photos.s3.us-east-2.amazonaws.com/item10/item10.3.webp'
    }
  }

  render() {
    return (<div>
      <img src={this.state.url1}/>
      <img src={this.state.url2}/>
      <img src={this.state.url3}/>
    </div>)
  }
}

export default Gallery;