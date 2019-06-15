import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div className="col-md-3">
            	<div className="hero">
	            	<img className="hero__image" src={this.props.hero.image.url} />
	                <h3 className="hero__name">{this.props.hero.name}</h3>
	            </div>
            </div>
        )
    }
}
