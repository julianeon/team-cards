import React, { Component } from 'react';
import './App.css';
import { Card, Box, Avatar, Text, Link, Button } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import styled from 'styled-components'

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
    this.props.onClicked(this.props.index)
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
	text={this.props.yousay}
	onClick={this.onClick}
	
          />
        </Card>
      </Box>
    );
  }
}

const ChatRow = (props) => {
  var r=[]
  var cstyle = {
      color: "white",
  }
    if (props.sayings.length<=props.index) {
	r.push(<Box color='darkGray' paddingX={1} shape='pill' margin={5} alignItems='center' 
justifyContent='center'><p style={cstyle}>This person has left the chat.</p></Box>)
    }
    else {
	r.push(<Box color="blue" paddingX={10} shape="pill" margin={5} alignItems="center" justifyContent="center"><p style={cstyle}>{props.sayings[props.index]}</p></Box>)
    }
    return <div>{r}</div>
}

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
	  bio: "Come speak your mind!",
	  index: 0
      };
    this.onUpdate = this.onUpdate.bind(this);      
  }

  onUpdate = (data) => {
      this.setState({
	  index: this.state.index+1
      })
  };

    render() {
	const youwords=["hi there","hows it going", "whats ur hobby?", "no way","wait, don't leave!","please stay","come back!","hello?","lets do it again!"]
	var youtext = youwords.map(item=> item.toUpperCase());
	const head1=["sitting alone at a party rn","hey hey heyyyy!","pretty good","i come on here to chat","its true","i could use a drink right about now","will the last person to leave please turn out the lights"]
	const head2=["wheres the party","aloha","follow me on insta","this is boring","i'm out...",]
	const head3=["not playing anymore. it's all cheaters","sup bro","can't complain... unless you're talking about the game","i play on twitch for cash","gotta go, got games to play",]
	const head4=["controversial opinion: pepsi > coke","<tips hat> greetings","it goes, my friend; it goes","i act in movies","before you ask: i'm not telling which ones", "my parting words of wisdom: never quit, never surrender"]
	if (this.state.index >= youtext.length) { this.setState({ index: 0 }) } 
	return (
	  <div className="App">
	  <div><h1>Party Chat</h1></div>
		<ChatRow sayings={head1} index={this.state.index}/>
		<ChatRow sayings={head2} index={this.state.index}/>
		<ChatRow sayings={head3} index={this.state.index}/>
		<ChatRow sayings={head4} index={this.state.index}/>				
	  <Box 
	    alignItems="center"
	    justifyContent="center"
	    direction="row"
	    display="flex"
      
	    marginStart={-1}
	    marginEnd={-1}
		>
		<CardTeam yousay={youtext[this.state.index]} onClicked={this.onUpdate} name="" source="lol.gif" />
	</Box>

    </div>
  );
  }
}

export default App;
