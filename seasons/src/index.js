import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {lat: null, errorMessage: null};

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    render () { 
        if(!this.state.lat && !this.state.errorMessage){
            return <div> Loading! </div>;
        }
        else if(this.state.lat){
            return <div> Latitude: {this.state.lat} </div>
        }
        else if(this.state.errorMessage){
            return <div> Error: {this.state.errorMessage} </div>
        }
        
        // return (
        // <div>
        //     Latitude: {this.state.lat}<br/>
        //     Error: {this.state.errorMessage}
        // </div>
        // );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//       );
//     return <div>Latitude: </div>;
// }