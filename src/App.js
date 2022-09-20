import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state = {advice: ''};

    componentDidMount() {   // this executes right when the component renders
        this.fetchAdvice();     // calling the function by using 'this.'
        console.log('Component did mount');
    }
    
    fetchAdvice = () => {   // this doesn't need a const because this is a method which means it's a function inside a class which makes it a method.
        axios.get('https://api.adviceslip.com/advice')
            .then((response)=>{
            //    console.log(response);
            //    console.log(response.data);
            //    console.log(response.data.slip);
            //    console.log(response.data.slip.advice);     // this is the level that we need to get the advice and going to use this to destructure.
                // example of destructuring
                const { advice } = response.data.slip; // getting the data from the api and destructuring it to the object advice
                this.setState({ advice })
            })
            .catch ((error)=>{
                console.log(error);
            });

    }

    render() {
        const {advice} = this.state;
        return (
            <div className='app'>  
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        Give Me Advice!
                    </button>
                </div>
            </div>
        );
    }
}

export default App;