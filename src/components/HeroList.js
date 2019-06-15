import React, { Component } from 'react'
import Hero from './Hero'

export default class HeroList extends Component {
    render() {
        return this.props.heroes.map((hero) => (
            <Hero key={hero.id} hero={hero}/>
        ));
    }
}
