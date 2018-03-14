import React from 'react'
import Path from 'path'
import '../../ui/styles/styles.css'
import RoundTable from '../../resources/images/roundtable.png'

export default class LayoutImageDisplayer extends React.Component{
    constructor(props){
        super(props)
        this.login = this.login.bind(this)        
    }    

    login(){

    }


    render(){        
        return (
            <div className="layout-image-container-item">
                <img src={RoundTable} />
            </div>
        )
    }

}
