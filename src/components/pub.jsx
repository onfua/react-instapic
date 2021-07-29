import React,{Component} from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import { Avatar } from 'primereact/avatar';
import { Divider } from 'primereact/divider';
import sary1 from '../images/image1.jpg';
import sary2 from '../images/image2.jpg';
import { Feed, Icon } from 'semantic-ui-react';

class Pub extends Component{
    render(){
        return (<div>
            <Avatar icon="pi pi-user" size="large" />
                                <h3 style={{display:'inline',marginLeft:'10px'}}>{this.props.name}</h3>
                                <Divider />
                                <p className="description">
                                    Photo panoramique
                                </p>
                                <div className="images">
                                    <img src={sary1} alt="" width='200px'style={{marginRight:'5px'}}/>
                                    <img src={sary2} alt="" width='200px'/>
                                </div>
                                <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />4 Likes
                                </Feed.Like>
                                </Feed.Meta>
                                <Divider />
                                <div className="comment">
                                    <Comment.Group>
                                        <Header as='h3' dividing>
                                        Commentaires
                                        </Header>

                                        <Comment>
                                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                                        <Comment.Content>
                                            <Comment.Author as='a'>Rabe Lala</Comment.Author>
                                            <Comment.Metadata>
                                            <div>Hier à 17:15</div>
                                            </Comment.Metadata>
                                            <Comment.Text>Tsara</Comment.Text>
                                            <Comment.Actions>
                                            <Comment.Action>Repondre</Comment.Action>
                                            </Comment.Actions>
                                        </Comment.Content>
                                        </Comment>

                                        <Comment>
                                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                        <Comment.Content>
                                            <Comment.Author as='a'>Andria Rivo</Comment.Author>
                                            <Comment.Metadata>
                                            <div>Hier à 20:30</div>
                                            </Comment.Metadata>
                                            <Comment.Text>
                                            <p>Aiz touny?</p>
                                            </Comment.Text>
                                            <Comment.Actions>
                                            <Comment.Action>Repondre</Comment.Action>
                                            </Comment.Actions>
                                        </Comment.Content>
                                        <Comment.Group>
                                            <Comment>
                                            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                                            <Comment.Content>
                                                <Comment.Author as='a'>Ranivo Jenny</Comment.Author>
                                                <Comment.Metadata>
                                                <div>A l'instant</div>
                                                </Comment.Metadata>
                                                <Comment.Text>Ts aty amtsik lou e haha</Comment.Text>
                                                <Comment.Actions>
                                                <Comment.Action>Repondrre</Comment.Action>
                                                </Comment.Actions>
                                            </Comment.Content>
                                            </Comment>
                                        </Comment.Group>
                                        </Comment>

                                        <Form reply >
                                        <Form.TextArea />
                                        <Button content='Ajouter reponse' labelPosition='left' icon='edit' primary />
                                        </Form>
                                    </Comment.Group>
                                </div>
        </div>)
    }
}

export default Pub;