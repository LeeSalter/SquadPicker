import React from 'react';
import Player from './Player';
import {Droppable} from 'react-beautiful-dnd';
import initialData from './InitialData';

class SquadList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {goalkeepers:initialData.squad.goalkeepers,
                        selectedGoalkeeper:[],
                        defenders:initialData.squad.defenders,
                        selectedDefenders:[],
                        midfielders:initialData.squad.midfielders,
                        selectedMidfielders:[],
                        forwards:initialData.squad.forwards,
                        selectedForwards:[],
                        formation:initialData.formation
        };  
            
    } 

    render(){
        return (
            <div className='squad-list'>
                <h1>Available Squad</h1>
                <div className="row">                
                    <div className="column">
                        <h2>Goalkeepers</h2>  
                        <Droppable id="goalkeepers-list" droppableId="goalkeepers-list">
                            {(provided) => (
                                <ul className="player-list" {...provided.droppableProps} ref={provided.innerRef}>
                                    {this.state.goalkeepers.map(({id, name, position}, index) => {
                                        return (
                                                <Player key={id}  id={id} index={index} playerName={name} position={position}/>
                                        );
                                    })}
                                    {provided.placeholder}
                                </ul>
                            )}                            
                        </Droppable>                                           
                    </div>
                    <div className="column">
                        <h2>Defenders</h2>
                        <Droppable id="defenders-list" droppableId="defenders-list">
                            {(provided) => (
                                <ul className="player-list" {...provided.droppableProps} ref={provided.innerRef}>
                                    {this.state.defenders.map(({id, name, position}, index) => {
                                        return (
                                                    <Player key={id}  id={id} index={index} playerName={name} position={position}/>
                                        );
                                    })}
                                    {provided.placeholder}
                                </ul>
                            )}                            
                        </Droppable>  
                    </div>
                    <div className="column">
                        <h2>Midfielders</h2>
                        <Droppable id="midfielders-list" droppableId="midfielders-list">
                            {(provided) => (
                                <ul className="player-list" {...provided.droppableProps} ref={provided.innerRef}>
                                    {this.state.midfielders.map(({id, name, position}, index) => {
                                        return (
                                                    <Player key={id}  id={id} index={index} playerName={name} position={position}/>
                                        );
                                    })}
                                    {provided.placeholder}
                                </ul>
                            )}                            
                        </Droppable>  
                    </div>
                    <div className="column">
                        <h2>Forwards</h2>
                        <Droppable id="forwards-list" droppableId="forwards-list">
                            {(provided) => (
                                <ul className="player-list" {...provided.droppableProps} ref={provided.innerRef}>
                                    {this.state.forwards.map(({id, name, position}, index) => {
                                        return (
                                                    <Player key={id} id={id} index={index} playerName={name} position={position}/>
                                        );
                                    })}
                                    {provided.placeholder}
                                </ul>
                            )}                            
                        </Droppable>  
                    </div>
                </div>
            </div>
        )
    }
}

export default SquadList;