import React, { Component } from 'react';
import NavBar from '../NavBar/Nav-Bar';
import Header from '../Header/Header';
import axios from "axios";
import DataTable from "./gaming_news_data"


export default class Table extends Component {

    constructor(props){
        super(props);
        this.state = { newsCollection: [] };
    }
    
    componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://video-game-news.p.rapidapi.com/mario',
            headers: {
                'x-rapidapi-key': '3754e030camsh01d137cc5e8cf50p1b9422jsn56da247353e7',
                'x-rapidapi-host': 'video-game-news.p.rapidapi.com'
            }
        };
        
        axios.request(options)
        .then((response) => {
            this.setState({newsCollection : response.data})
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    DataTable(){
        return this.state.newsCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />
        });
    }

    render() {
        return (
            
            <div className="wrapper-users">
                <Header></Header>
                <NavBar></NavBar>
                <div className="container center">
                    <h1 className="text-white text-center bg-secondary mt-3">Super Mario News</h1>
                </div>
                <br></br>
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <td>Publication</td>
                                <td>Title</td>
                                <td>Source</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.DataTable()}
                        </tbody>
                    </table>
                </div>
                <br></br>
            </div>
        )
    }

}
