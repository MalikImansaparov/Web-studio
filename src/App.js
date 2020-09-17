import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }

}


