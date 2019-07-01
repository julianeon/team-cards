import React, { Component } from 'react';
import './App.css';
import { Card, Box, Avatar, Text, Link, Button } from 'gestalt';
import 'gestalt/dist/gestalt.css';

class CardTeam extends Component {
  constructor(props) {
    super(props);
      this.state = {
	  hovered: false
      };
      this.handleMouseEnter = this._handleMouseEnter.bind(this);
      this.handleMouseLeave = this._handleMouseLeave.bind(this);
      this.onClick = this.onClick.bind(this);      

  }
  _handleMouseEnter() {
    this.setState(() => ({ hovered: true }));
  }
  _handleMouseLeave() {
    this.setState(() => ({ hovered: false }));
  }

  onClick = (e) => {
    this.props.onClicked(this.props.text)
  }
    
    render() {

    return (
      <Box maxWidth={236} padding={2} column={12}>
        <Card
          image={
            <Avatar
              name={this.props.name}
              src={this.props.source}
            />
          }
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <Text align="center" bold size="xl">
              <Box paddingX={3} paddingY={2}>
            {this.props.name}
              </Box>
          </Text>
          <Button
        accessibilityLabel={this.props.name}
        color="red"
	text="Bio"
	onClick={this.onClick}
	
          />
        </Card>
      </Box>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
	  bio: "Our VC-backed team is destined to bring about the end of days, according to experts."
      };
    this.onUpdate = this.onUpdate.bind(this);      
  }

  onUpdate = (data) => {
      this.setState({
	  bio: data
      })
  };

  render() {
  return (
	  <div className="App">
	  <div><h1>Meet the Team!</h1></div>
	  <p>{this.state.bio}</p>
	  <Box 
      alignItems="center"
      justifyContent="center"
      direction="row"
      display="flex"
      
      marginStart={-1}
      marginEnd={-1}
	  >    
	  <CardTeam onClicked={this.onUpdate} text="Death, in the end, claims everyone." name="Death" source="death.png" />
	  <CardTeam onClicked={this.onUpdate} text="Famine afflicts our world to this day." name="Famine" source="famine.png" />
	  <CardTeam onClicked={this.onUpdate} text="War is hell." name="War" source="war.png" />
	  <CardTeam onClicked={this.onUpdate} text="Pestilence has caused the collapse of nations and civilizations." name="Pestilence" source="conquest.png" />
	  </Box>

    </div>
  );
  }
}

export default App;
