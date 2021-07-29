import React,{Component} from 'react';
import 'primeflex/primeflex.css';
import sary1 from '../images/image1.jpg';
import sary2 from '../images/image2.jpg';
import Pub from './pub';

class Publication extends Component{
    constructor(props){
        super(props);
        this.state={
            images:null
        };
    }
    componentDidMount(){
        this.setState({images:[sary1,sary2]});
    }
    render(){
        return(
            <div>
                <div className="p-grid p-dir-col" >
                    <div className="p-col " >
                        <div className="p-grid p-dir-col pub ">
                            <div className="p-col grisB p-ml-auto" >
                                <Pub name={'Rakoto Jean'}/>
                            </div>
                            <div className="p-col grisB p-ml-auto">
                                <Pub name={'Ramamonjy Safidy'}/>
                            </div>
                            <div className="p-col grisB p-ml-auto">
                                <Pub name={'Rajao Faniry'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Publication;