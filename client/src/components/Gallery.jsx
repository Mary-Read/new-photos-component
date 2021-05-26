import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url1: this.props.imageUrls[0],
      url2: this.props.imageUrls[1],
      url3: this.props.imageUrls[2]
    }
  }



  render() {
    const imgStyle = {
      height: '125px',
      width: '125px'
    }
    const style = {
      display: 'flex',
      flexDirection: 'column'
    }
    console.log(this.props.imageUrls)
    return (<div style={style}>
      <img style={imgStyle} src={this.state.url1} onClick={this.props.onClick}/>
      <img style={imgStyle} src={this.state.url2} onClick={this.props.onClick}/>
      <img style={imgStyle} src={this.state.url3} onClick={this.props.onClick}/>
    </div>)
  }
}

export default Gallery;