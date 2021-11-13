import playerThumb from '../assets/squad-player.png';

const initialData = {
    formations:{
        '4-4-2': {Name:'4-4-2', Goalkeepers:1, Defenders:4, Midfielders:4, Forwards:2},
        '5-3-2': {Name: '5-3-2', Goalkeepers:1, Defenders:5, Midfielders:3, Forwards:2},
        '5-4-1': {Name: '5-4-1', Goalkeepers:1, Defenders:5, Midfielders:4, Forwards:1}
    },
    squad:{
        goalkeepers:[
            {id:'1', name:'Dino Zoff', position:"GK", thumb:playerThumb},
            {id:'2', name:'Gordon Banks', position:"GK", thumb:playerThumb},
            {id:'3', name:'Manuel Neueur', position:"GK", thumb:playerThumb}
        ],
        defenders: [
            {id:'4', name:'Bobby Moore', position:"DEF", thumb:playerThumb},
            {id:'5', name:'Franz Beckenbauer',position:"DEF", thumb:playerThumb},
            {id:'6', name:'Paolo Maldini',position:"DEF", thumb:playerThumb},
            {id:'7', name:'Franco Baresi', position:"DEF",thumb:playerThumb},
            {id:'8', name:'Roberto Carlos',position:"DEF", thumb:playerThumb},
            {id:'9', name:'Cafu',position:"DEF", thumb:playerThumb},
            {id:'10', name:'Phillip Lahm',position:"DEF", thumb:playerThumb},
        ],
        midfielders: [
            {id:'11', name:'Diego Maradona',position:"MID", thumb:playerThumb},
            {id:'12', name:'Trevor Brooking',position:"MID", thumb:playerThumb},
            {id:'13', name:'Cristiano Ronaldo',position:"MID", thumb:playerThumb},
            {id:'14', name:'Johanne Cruyff',position:"MID", thumb:playerThumb},
            {id:'15', name:'Lionel Messi',position:"MID", thumb:playerThumb},
            {id:'16', name:'Xavi',position:"MID", thumb:playerThumb},
            {id:'17', name:'Danny Shittu',position:"MID", thumb:playerThumb},
        ],
        forwards: [
            {id:'18', name:'Alan Shearer',position:"FWD", thumb:playerThumb},
            {id:'19', name:'Gerd Muller',position:"FWD", thumb:playerThumb},
            {id:'20', name:'Gary Lineker',position:"FWD", thumb:playerThumb},
            {id:'21', name:'Robin van Persie',position:"FWD", thumb:playerThumb},
            {id:'22', name:'Paolo di Canio',position:"FWD", thumb:playerThumb},
            {id:'23', name:'Iain Dowie',position:"FWD", thumb:playerThumb},
        ]
    },
    team:{
        formation: '4-4-2',
        goalkeeper: [],
        defenders: [],
        midfielders:[],
        forwards:[]
    }
}

export default initialData;