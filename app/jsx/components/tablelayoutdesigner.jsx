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
        return (
            <div className="layout-image-container">
                <LayoutImageDisplayer drag={this.drag} />
                <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop}>
                    <b>HERE</b>
                </div>
            </div>
        )
    }

}
