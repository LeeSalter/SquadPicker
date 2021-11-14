import React from 'react';
import initialData from './InitialData';

class FormationPicker extends React.Component{
    constructor(props){
        super(props)

        this.state={
            Formations: initialData.formations,
            SelectedFormation: initialData.formations[0]}
    }

    render(){ 
        let formationsList = this.state.Formations.map((f,i) => {           
                return (
                    <option key={i} value={f.Id}>{f.Name}</option>
            )            
        }, this);
    
        return (
            <div>
                <h2>Select Formation</h2>
                <select onChange={this.handleFormationChanged} defaultValue="0">
                    {formationsList}
                </select>
            </div>
        );
    }

    handleFormationChanged = (e) =>{
        var selectedValue= e.target.value;
        this.setState({SelectedFormation: this.state.Formations[selectedValue]});
    }

    getFormation=()=>{
        console.log("GetFormation:" + this.state.SelectedFormation);
        return this.state.SelectedFormation;
    }

}

export default FormationPicker;