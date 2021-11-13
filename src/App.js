
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import Pitch from './components/Pitch';
import SquadList from './components/SquadList';
import TeamList from './components/TeamList';
import initialData from './components/InitialData';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.selectedPlayers=[];
    this.teamList = React.createRef();
    this.squadList= React.createRef();
  }
  
  handleOnDragEnd = (result) => {

    console.log(result);

    var selectedPlayers = this.teamList.current.getPlayers();
      if(selectedPlayers.length===11){
        return;
      }    

    switch(String(result.source.droppableId)){
      case "goalkeepers-list":
        var selectedKeeper=initialData.squad.goalkeepers[result.source.index];
        this.teamList.current.addPlayer(selectedKeeper);
        var goalkeepers = document.querySelectorAll('[data-player-position="GK"');
        this.disableSquadList(goalkeepers)
      break;
      case "defenders-list":
        var selectedDefender=initialData.squad.defenders[result.source.index];
        this.teamList.current.addPlayer(selectedDefender);
        var defenders = document.querySelectorAll('[data-player-position="DEF"');
        this.disableSquadList(defenders)
      break;
      case "midfielders-list":
        var selectedMidfielder=initialData.squad.midfielders[result.source.index];
        this.teamList.current.addPlayer(selectedMidfielder);
        var midfielders = document.querySelectorAll('[data-player-position="MID"');
        this.disableSquadList(midfielders)
      break;
      case "forwards-list":
        var selectedForward=initialData.squad.forwards[result.source.index];
        this.teamList.current.addPlayer(selectedForward);
        var forwards = document.querySelectorAll('[data-player-position="FWD"');
        this.disableSquadList(forwards)
      break;
      case "selected-player-list":
        var playerIndex = result.source.index;
        this.teamList.current.removePlayer(playerIndex);
        break;
      default:
        return;
    }
}

disableSquadList = (elements) => {
  for(const element of elements){
      element.classList.add("disabled");
  }
}

  render(){
    return (
      <div className="App">
        <h1 className="title">World's Best XI</h1>   
        <DragDropContext onDragEnd={this.handleOnDragEnd}>
          <TeamList ref={this.teamList} selectedPlayers={this.selectedPlayers} /> 
          <Pitch />
          <SquadList ref={this.squadList}/>
          </DragDropContext>
      </div>
    );
  }
}

export default App;
