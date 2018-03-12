import React from 'react'
import '../../ui/styles/styles.css'

export default class KeyPad extends React.Component{
    constructor(props){
        super(props)
        this.login = this.login.bind(this)        
    }    

    login(){

    }


    render(){        
        return (
            <table class="keypad">
                <tbody>
                    <tr>
                        <th colspan="3">
                            <input type="password" name="pwd" />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <input type="button" value="1" />
                        </th>
                        <th>
                            <input type="button" value="2" />
                        </th>
                        <th>
                            <input type="button" value="3" />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <input type="button" value="4" />
                        </th>
                        <th>
                            <input type="button" value="5" />
                        </th>
                        <th>
                            <input type="button" value="6" />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <input type="button" value="7" />
                        </th>
                        <th>
                            <input type="button" value="8" />
                        </th>
                        <th>
                            <input type="button" value="9" />
                        </th>
                    </tr>      
                    <tr>
                        <th>
                            
                        </th>
                        <th>
                            <input type="button" value="0" />
                        </th>
                        <th>
                            
                        </th>
                    </tr>                                          
                </tbody>
            </table>
        )
    }

}
