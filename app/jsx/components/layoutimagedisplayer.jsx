import React from 'react'
import Path from 'path'
import '../../ui/styles/styles.css'
//import RoundTable from '../../resources/images/roundtable.png'

export default class LayoutImageDisplayer extends React.Component{
    constructor(props){
        super(props)     
    }    

    render(){                
        return (
            <div className="layout-image-displayer">
                {
                    this.props.images.map( (file,i) =>                        
                        <img src={file} key={i}
                        draggable={true}
                        onDragStart={this.props.drag} />
                    )
                }                                                
            </div>
        )
    }

}
