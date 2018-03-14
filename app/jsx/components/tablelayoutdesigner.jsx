import React from 'react'
import '../../ui/styles/styles.css'
import LayoutImageDisplayer from './layoutimagedisplayer.jsx'

export default class TableLayoutDesigner extends React.Component{
    constructor(props){
        super(props)
        this.login = this.login.bind(this)        
    }    

    login(){

    }


    render(){        
        return (
            <div className="layout-image-container">
                <LayoutImageDisplayer />
            </div>
        )
    }

}
