import React, { Component } from 'react'
import HeroStatsList from './HeroStatsList'

export default class Hero extends Component {
    render() {
        return (
            <div className="col-md-3">
            	<div className="hero">
	            	<img className="hero__image" src={this.props.hero.image.url} alt={this.props.hero.name} />
	                <h3 className="hero__name">{this.props.hero.name}</h3>

	                <table className="hero__stats">
	                	<HeroStatsList stats={this.props.hero.powerstats}/>
	                </table>
	            </div>
            </div>
        )
    }
}
