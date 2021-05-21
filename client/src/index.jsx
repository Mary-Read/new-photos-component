import React from 'react';
import ReactDOM from'react-dom';
import $ from 'jquery';
import Gallery from './components/Gallery.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {

      }
  }
  render ()  {
    return(
      <div>
        <h1>hello</h1>
        <Gallery />
      </div>
    )
  }
}

ReactDOM.render(<App  />, document.getElementById('app'));