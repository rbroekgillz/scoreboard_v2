import React, {Component} from "react";
import Player from "./Player";
import AddPlayer from "./AddPlayer";

import './Scoreboard.css';

export default class Scoreboard extends Component {
    state = {
        players: [
            {id: 1, name: "Kelley", score: 11},
            {id: 2, name: "David", score: 14},
            {id: 3, name: "Rein", score: 4}
        ]
    };

    addPlayer = name => {
        const player = {
            id: Math.round(Math.random() * 100000),
            name,
            score: 0
        };

        this.setState({
            players: this.state.players.concat(player)
        });
    }

    incrementScoreOfPlayer = id => {
        const updatedPlayers = this.state.players.map(player => player.id === id ? {
            ...player,
            score: player.score + 1
        } : player);

        this.setState({players: updatedPlayers});
    }

    renderPlayer = player => <Player name={player.name} score={player.score} id={player.id} key={player.id}
                                     incrementScore={this.incrementScoreOfPlayer}/>

    render() {
        const sortedPlayers = [...this.state.players].sort((a, b) => b.score - a.score);

        return (
            <div className="scoreboard">
                <h1>Scoreboard</h1>
                <ul>
                    {sortedPlayers.map(this.renderPlayer)}
                </ul>
                <AddPlayer addPlayer={this.addPlayer}/>
            </div>
        );
    }
}