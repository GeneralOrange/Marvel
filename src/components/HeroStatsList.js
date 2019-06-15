import React, { Component } from 'react'

export default class HeroStatsList extends Component {
    render() {
        return Object.keys(this.props.stats).map((index, value) => (
        	<tr key={index}>
        		<th>{index}</th><td>{value}</td>
        	</tr>
        ))
    }
}
