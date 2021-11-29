import React, { Component } from 'react';

class DataTable extends Component {
    render(){
        return (
            <tr>
                {/* <td>
                    {this.props.obj.publication}
                </td> */}
                <td>
                    {this.props.obj.source}
                </td>
                <td>
                    {this.props.obj.text}
                </td>
                <td>
                    {this.props.obj.url}
                </td>
            </tr>
        )
    }
}

export default DataTable;