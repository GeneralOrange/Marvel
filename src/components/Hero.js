import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.hero.name}</h3>
            </div>
        )
    }
}
