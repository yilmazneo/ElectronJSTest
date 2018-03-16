import React from 'react'
import '../../ui/styles/styles.css'
import LayoutImageDisplayer from './layoutimagedisplayer.jsx'

export default class TableLayoutDesigner extends React.Component{
    constructor(props){
        super(props) 
        this.drag = this.drag.bind(this);  
        this.allowDrop = this.allowDrop.bind(this);  
        this.drop = this.drop.bind(this);
    }    

    allowDrop(ev) {
        ev.preventDefault();
    }
    
    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    
    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        let img = new Image();
        img.src = data;
        ev.target.appendChild(img);        
    }

    render(){       
        let items = []
        for(let i=0;i<this.props.tileCount;i++){
            items.push(<div key={i} class="layout-grid-tile" onDrop={this.drop} onDragOver={this.allowDrop}></div>)
        }
        return (
            <div className="layout-designer">
                <LayoutImageDisplayer drag={this.drag} 
                images={[
                    "../../app/resources/images/roundtable.jpg",
                    "../../app/resources/images/rtable-large.jpg",
                    "../../app/resources/images/rtable-small.png"
                ]} />
                <div id="layout-grid" >
                    {
                       items
                    }
                </div>
            </div>
        )
    }

}
