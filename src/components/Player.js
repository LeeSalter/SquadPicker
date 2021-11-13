import React from 'react';
import playerLogo from '../assets/squad-player.png';
import {Draggable} from 'react-beautiful-dnd';

class Player extends React.Component{
    render(){        
        return(            
            <Draggable key={this.props.id} draggableId= {this.props.id} index={this.props.index}>
                {(provided) => (
            <li className="player" data-player-position={this.props.position} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <span>
                    <img className='player-logo' src={playerLogo} alt="squad player icon"/>
                    <p className='player-name'>{this.props.playerName}</p>
                    <p>{this.props.position}</p>
                </span>
            </li>
                )}
            </Draggable>
        );
    }
}

export default Player;