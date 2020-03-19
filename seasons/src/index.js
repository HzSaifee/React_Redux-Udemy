import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude }),
        err => this.setState({ errorMessage: err.message })
        );
    }
    
    constructor(props){
        super(props);
    }

    renderContent() {
        if(!this.state.lat && !this.state.errorMessage){
            return <Spinner message="Please accept location request"/>;
        }
        else if(this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />;
        }
        else if(this.state.errorMessage){
            return <div> Error: {this.state.errorMessage} </div>;
        }
    }

    render () { 
        return <div className="border red">{this.renderContent()}</div>;

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