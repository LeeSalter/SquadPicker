import React from 'react';
import {Droppable, Draggable} from 'react-beautiful-dnd';
class TeamList extends React.Component{

    constructor(props){
        super(props);

        this.state = {selectedPlayers: this.props.selectedPlayers,
                        selectedGoalkeepers: 0,
                        selectedDefenders: 0,
                        selectedMidfielders: 0,
                        selectedForwards: 0};
    }

    addPlayer = (player) => {
        console.log(player);
        this.setState(prevState => ({
            selectedPlayers: [...prevState.selectedPlayers, player].sort(function(a,b){return a.id - b.id})
        }))
        
        switch(player.position){
            case "GK":
                console.log("incrementing goalkeepers");
                this.setState(prevState => ({selectedGoalkeepers: prevState.selectedGoalkeepers + 1}));
                break;
            case "DEF":
                console.log("incrementing defenders")
                this.setState(prevState => ({selectedDefenders: prevState.selectedDefenders + 1}));
                break;
            case "MID":
                console.log("incrementing midfielders")
                this.setState(prevState => ({selectedMidfielders: prevState.selectedMidfielders + 1}));
                break;
            case "FWD":
                console.log("incrementing forwards")
                this.setState(prevState => ({selectedForwards: prevState.selectedForwards + 1}));
                break;
            default:
                break;
        }
    }

    removePlayer = (index)=>{
        var players = this.state.selectedPlayers;
        var playerToRemove=players[index];
        switch(playerToRemove.position){
            case "GK":
                this.setState(prevState => ({selectedGoalkeeprs: prevState.selectedGoalkeeprs--}));
                var goalkeepers = document.querySelectorAll('[data-player-position="GK"');
                this.enableSquadList(goalkeepers);
                break;
            case "DEF":
                this.setState(prevState => ({selectedDefenders: prevState.selectedDefenders++}));
                var defenders = document.querySelectorAll('[data-player-position="DEF"');
                this.enableSquadList(defenders);
                break;
            case "MID":
                this.setState(prevState => ({selectedMidfielders: prevState.selectedMidfielders++}));
                var midfielders = document.querySelectorAll('[data-player-position="MID"');
                this.enableSquadList(midfielders);
                break;
            case "FWD":
                this.setState(prevState => ({selectedForwards: prevState.selectedForwards++}));
                var forwards = document.querySelectorAll('[data-player-position="FWD"');
                this.enableSquadList(forwards);
                break;
            default:
                return;
        }

        console.log(index);
        if(this.state.selectedPlayers.length===1){
            console.log("removing all of them")
            this.setState(()=>({selectedPlayers:[]}));
        }
        else{
        this.setState(prevState => ({
            selectedPlayers: [...prevState.selectedPlayers.filter(function(p){return p.name !== playerToRemove.name})]
        }))

        console.log(this.state.selectedPlayers);
        }
    }

    getPlayers = () => {
        return this.state.selectedPlayers;
    }

    enableSquadList = (elements) => {
        for(const element of elements){
            element.classList.remove("disabled");
        }
    }

    render(){
        return(
            <div id="selected-players">
                <h2>Selected Players</h2>
                <p>Drag players from the squad list to here</p>
                {/* Selected Players */}
                <Droppable id="selected-player-list" droppableId="selected-player-list">
                            {(provided) => (
                                <ul id="selected-players" className="player-list" {...provided.droppableProps} ref={provided.innerRef}>
                                    {this.state.selectedPlayers.map(({id,name,position}, index) => {
                                        return (
                                            <Draggable key={id} draggableId= {id} index={index} player={name}>
                                            {(provided) => (
                                                <li className='selected-player' key={this.props.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <span>{position}</span><span>&nbsp;{name}</span>
                                                </li>
                                            )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </ul>
                            )}                            
                </Droppable>                 
            </div>
        )}
};
    
export default TeamList;