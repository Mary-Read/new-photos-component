import React from 'react';
import ReactDOM from'react-dom';
import $ from 'jquery';
import Gallery from './components/Gallery.jsx'
// import './App.css';

class Image extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        isLoaded: false,
        url1: "",
        url2: "",
        url3: "",
        selectedImage: ""
      }

    this.handleClick = this.handleClick.bind(this);
    this.imageUrls = [];

    this.url = window.location.pathname.slice(-1);
    console.log(this.url);
    if (typeof(this.url) !== 'number') {
      console.log('hi')
      this.url = 'http://localhost:9000/photos/p/' + 0;
      console.log(this.url);
    } else {
      this.url = 'http://localhost:9000/photos/p/' + this.url
    }
    $.ajax({
      type: 'GET',
      url: 'http://localhost:9000/photos/p/1',
      success: (response) => {
        this.imageUrls = response;
        this.setState((state, props) => ({
          isLoaded: true,
          url1: response[0],
          url2: response[1],
          url3: response[2],
          selectedImage: response[0]
        }));
      }
    })
  }

  // componentDidMount() {
  //   let url = window.location.pathname.slice(-1);
  //   console.log(url);
  //   if (typeof(url) !== 'number') {
  //     console.log('hi')
  //     url = 'http://localhost:9000/photos/p/' + 0;
  //     console.log(url);
  //   } else {
  //     url = 'http://localhost:9000/photos/p/' + url
  //   }
  //   $.ajax({
  //     type: 'GET',
  //     url: 'http://localhost:9000/photos/p/1',
  //     success: (response) => {
  //       this.imageUrls = response;
  //       this.setState((state, props) => ({
  //         isLoaded: true,
  //         url1: response[0],
  //         url2: response[1],
  //         url3: response[2],
  //         selectedImage: response[0]
  //       }));
  //     }
  //   })
  // }

  // componentDidUpdate(prevProps) {
  //   $.ajax({
  //     method: 'GET',
  //     url: url,
  //     success: (response) => {
  //       this.imageUrls = response;
  //       this.setState((state, props) => ({
  //         isLoaded: true,
  //         url1: response[0],
  //         url2: response[1],
  //         url3: response[2],
  //         selectedImage: response[0]
  //       }));
  //     }
  //   })
  //   console.log(prevProps);
  // }

  handleClick(e) {
    console.log(e.target.src);
    console.log('clicked')
    let url = e.target.src;

    this.setState((state, props) => ({
      selectedImage: url
    }));
    console.log(this.state);
  }


  render ()  {
    const style = {
      display: 'flex'
    }
    const selectedImageStyle = {
      height: '400px',
      width: '400px'
    }
    return(
      <div style={style}>
          {this.state.isLoaded && (
          <Gallery imageUrls={this.imageUrls} onClick={this.handleClick}/>)}
          {this.state.isLoaded && <img style={selectedImageStyle} src={this.state.selectedImage} onClick={this.handleClick}/>}
      </div>
    )
  }
}

ReactDOM.render(<Image />, document.getElementById('app'));