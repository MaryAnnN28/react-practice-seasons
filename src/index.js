import React from 'react';
import ReactDOM from 'react-dom';

  // to get a response, we have to pass into 2 seperate function callbacks 
  // first argument is a function callback that gets called anytime that this function or 
  // position successfully gets the user's location (success callback), and the
  // 2nd function is the failure callback, which is called when the getCurrentPosition function
  // is unable to to determine the user's physical location. 
 


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' }; 
    
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude }); 
      }, 
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }



  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>; 
    }
    return <div>Loading!</div>; 
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))