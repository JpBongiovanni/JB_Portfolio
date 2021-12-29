import React, { Component } from 'react';
import './gaming_news.css'


class DataTable extends Component {
    render(){
        return (
            <tr>
                {/* <td>
                    {this.props.obj.publication}
                </td> */}
                <td>
                    <a href={this.props.obj.publication} target="_blank" rel="noopener noreferrer">{this.props.obj.source}</a>
                </td>
                <td>
                    {this.props.obj.text}
                </td>
                <td>
                    <a href={this.props.obj.url} target="_blank" rel="noopener noreferrer">{this.props.obj.url}</a>
                </td>
            </tr>
        )
    }
}

export default DataTable;