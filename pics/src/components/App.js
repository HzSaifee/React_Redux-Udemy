import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos',{
            params: {query: term},
        });
        
        this.setState({images: response.data.results});
        
        // .then(response => {
        //     console.log(response.data.results);
        // });
    }

    render() {
        return(
        <div className="ui container" style={{marginTop: '21px'}}> 
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images} />
        </div>
        );
    }
}

// const App = () => {
//     return <div className="ui container" style={{marginTop: '21px'}}> <SearchBar /> </div>;
// };

export default App;