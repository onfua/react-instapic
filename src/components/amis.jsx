import React,{Component} from 'react';
import { Feed } from 'semantic-ui-react';
import image from '../images/perso-2.jpg';



class Notification extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    render(){
        return(
            <div style={{marginTop:'10px'}}>
                <Feed>
                    <Feed.Event image={image} date={'Il y a 2 minutes'} summary={'Vous avez publié un photo'} />
                    <Feed.Event image={image} date={'Il y a 10 minutes'} summary={'Vous avez publié un photo'} />
                    <Feed.Event image={image} date={'Il y a 20 minutes'} summary={'Vous avez publié un photo'} />
                    <Feed.Event image={image} date={'Il y a 30 minutes'} summary={'Vous avez publié un photo'} />
                    <Feed.Event image={image} date={'Il y a 40 minutes'} summary={'Vous avez publié un photo'} />
                    <Feed.Event image={image} date={'Il y a 50 minutes'} summary={'Vous avez publié un photo'} />
                </Feed>
            </div>
        )
    }
}

export default Notification;