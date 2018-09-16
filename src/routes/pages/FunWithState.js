import React from 'react';

export default class FunWithState extends React.Component {
    constructor(props){
        super();
        this.state = {
            text:'Hey there!',
            buttonText: 'Fetch a random photo',
            picture: 'random',
            image: '' 
        }
        this.fetchFromApi = this.fetchFromApi.bind(this);
    }
    componentDidMount(){
        
    }

    fetchFromApi(){
        let picture = this.state.picture
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${picture}&client_id=00a28d7b6c2032ae4347d8bc8a09235544ecb884ce68c152b51fde3a1c5a9273`)
        .then(response => (response.json()))
        .then(data => {
            this.setState({
                image:data.results[1].urls.regular,
                buttonText: 'Heres your random image!'
            })
        })
    }
    render(){
        console.log(this.state)
        return(
        <div>
            <div>{this.state.text}</div>
            <button className="btn btn-primary" onClick={this.fetchFromApi}>{this.state.buttonText}</button>
            <br/>
            <img src={this.state.image}/>
        </div>
        )
    }
}