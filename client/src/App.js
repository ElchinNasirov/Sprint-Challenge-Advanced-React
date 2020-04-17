import React from 'react';
import './App.css';
import axios from "axios";
import PlayerCard from "./components/PlayerCard"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ players: res.data })
      })
      .catch(err => {
        console.log("Error: ", err)
      })
  }

  render() {
    return (
      <div>
        {this.state.players.map(player => {
          return (
            <PlayerCard
              key={player.id}
              {...player}
            />
          )
        })}
      </div>
    );
  }
}
export default App;
