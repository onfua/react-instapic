import React,{Component} from 'react';
import 'primeflex/primeflex.css';
import { TieredMenu } from 'primereact/tieredmenu';
import './style/accueil.css';
import { Sidebar } from 'primereact/sidebar';
import Publication from './publication';
import Profil from './profil';
import Notification from './amis';
import 'semantic-ui-css/semantic.min.css';
import { FileUpload } from 'primereact/fileupload';;

const chooseOptions = {label: 'Choisir', icon: 'pi pi-fw pi-plus'};
const uploadOptions = {label: 'Publier', icon: 'pi pi-upload', className: 'p-button-success'};
const cancelOptions = {label: 'Annuler', icon: 'pi pi-times', className: 'p-button-danger'};
class Accueil extends Component {
    constructor(props){
        super(props);
        this.state={
            menu:'publication',
            visible1:false,
            visible2:false,
            items : [
                {
                   label:'Ajouter publication',
                   icon:'pi pi-fw pi-plus',
                   items:[
                      {
                         label:'Image',
                         icon:'pi pi-fw pi-images',
                         command:()=>{
                             this.setVisible1(true);
                         }
                      }
                   ]
                },
                {
                    label:'Publications',
                    icon:'pi pi-fw pi-tablet',
                    command:()=>{
                        this.setState({menu:'publication'});
                    }
                },
                {
                    label:'Profil',
                    icon:'pi pi-fw pi-user',
                    command:()=>{
                        this.setState({menu:'profil'});
                    }
                },
                {
                    label:'Notifications',
                    icon:'pi pi-fw pi-th-large',
                    command:()=>{
                        this.setState({menu:'amis'});
                    }
                },
                {
                   separator:true
                },
                {
                   label:'Deconnexion',
                   icon:'pi pi-fw pi-power-off'
                }
            ]
        };
    }
    render(){
        return (<div className='mx-auto'>
            <div className="p-d-flex p-ai-start">
                <div className="p-mr-2 gris">
                    <TieredMenu model={this.state.items}  className='styleTirM gris'  style={{height:'92.7vh'}}/>
                </div>
                <Sidebar visible={this.state.visible1} position="right" fullScreen onHide={() => this.setVisible1(false)}>
                    <h2 className='bleu'>Ajout d'image</h2>
                    <FileUpload accept="image/*" name="demo[]" url="./upload" chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} style={{padding:'5px'}} />

                </Sidebar>
                <div style={{height: '100%'}}>{this.affiche()}</div>
            </div>
        </div>)
    }
    setVisible1(e){
        this.setState({visible1:e});
    }
    setVisible2(e){
        this.setState({visible2:e});
    }
    affiche(){
        if (this.state.menu==='publication'){
            return(<Publication />);
        }else if (this.state.menu==='profil'){
            return(<Profil />);
        }else if (this.state.menu==='amis'){
            return(<Notification />);
        }
    }
}

export default Accueil;