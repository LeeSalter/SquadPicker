import React from 'react';
import {Droppable} from 'react-beautiful-dnd';

class DroppableSlot extends React.Component{
    render(){
        return(            
                <Droppable droppableId='pitch-slot'>
                    {(provided) => (
                        <ul className='pitch-position' {...provided.droppableProps} ref={provided.innerRef}>
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>          
        );
    }
}

export default DroppableSlot;