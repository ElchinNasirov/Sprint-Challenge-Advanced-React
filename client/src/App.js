import React from 'react';
import './App.css';
import axios from "axios";
import PlayerCard from "./components/PlayerCard"
import Navbar from './components/Navbar';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

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
      <Container>
        <Navbar />
        {this.state.players.map(player => {
          return (
            <PlayerCard
              key={player.id}
              {...player}
            />
          )
        })}
      </Container>
    );
  }
}
export default App;
