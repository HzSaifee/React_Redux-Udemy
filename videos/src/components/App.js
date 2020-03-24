import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyDE5WEMohKWGlWUsoUd9j_EPtQGiGme2k0';

class App extends React.Component {
    state = {videos: []};

    onTermSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        });

        this.setState({ videos: response.data.items});
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                {this.state.videos.length}
            </div>
        );
    }
}

export default App;