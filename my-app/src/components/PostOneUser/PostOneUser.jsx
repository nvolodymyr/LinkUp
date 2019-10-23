/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteElement } from '../../store/users/actions';
import '../PostOneUser/PostOneUser.style.scss';
import TodoListComents from '../TodoListComents/TodoListComents'
class PostOneUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.likes,
            likeOrDislike: true,
            comments:[],
            text:'',
            imageStatus: 'loading...',
        }
        this.handleLike = this.handleLike.bind(this);
        this.handleDislake = this.handleDislake.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleImageLoaded=this.handleImageLoaded.bind(this);
        this.handleImageErrored=this.handleImageErrored.bind(this);
        }
handleChange(e){
    this.setState({text:e.target.value});
}
handleSubmit(e){
e.preventDefault();
if(!this.state.text.length){
    return;
    }
    const newItem={
        text:this.state.text,
        id:Date.now(),
    };
    this.setState(state=>({
        comments:state.comments.concat(newItem),
        text:'',
    }))
}
handleImageLoaded(){
        this.setState({imageStatus:''})
    }
    handleImageErrored(){
        this.setState({imageStatus:'faild to dowload image'});
        return (
            <div>
            
            bla bla</div>
        )
    }
    handleLike() {
        this.setState((prevState, props) => ({
            likes: prevState.likes + 1,
            likeOrDislike: !prevState.likeOrDislike,
        }));

    }
    handleDislake() {
        this.setState((prevState, props) => ({
            likes: prevState.likes - 1,
            likeOrDislike: !prevState.likeOrDislike,
        }));

    };
 handleRemove(){
this.props.deleteElement(this.props.id);
console.log(this.props.id) }

    render() {
        const {          
            imageUrl,
         userName,
            avatar } = this.props
        return (
            <div className="main-post-one-user" >
                <div className="main-avatar">
                    <div className="avatar" >
                        <img src={avatar} title="fotoUser" alt={"avatar"} />
                    </div>
                    <div className="user-name">{userName}</div>
                  <div><i className="crossElement fa fa-times-circle  fa-4x " title="destroy" onClick={this.handleRemove}></i></div>  
                                           </div>
                <div className="main-image">
                    <img className="image"
                        alt=''
                        src={imageUrl}
                        onLoad={this.handleImageLoaded}
                        onError={this.handleImageErrored}
                    />
                    {this.state.imageStatus}
                    
                </div>
              
                <div className="main-likes">
                    {this.state.likeOrDislike ? (
                        <div className="heart" onClick={this.handleLike}>
                          <i className="fa fa-heart"></i>                                  
                    </div>
                    ) : (<div className="heart" onClick={this.handleDislake} >
                   <i className="fa fa-heart red" style={{color:'red'}}></i> 
                                
                    </div>
                        )
                    }
                    <div className="likes-count">{this.state.likes}</div>
                    <div> &nbsp;вподобань</div>
                    <div className="main-send">
                    <i className="fa fa-paper-plane"></i>
                    </div>
                </div>
                <div>
             
<TodoListComents  name={userName} items={this.state.comments}/>
                <form className='todo-list-coments-form' onSubmit={this.handleSubmit}>
                <input type='emoji' className='new-todo' 
                onChange={this.handleChange}
                value={this.state.text} placeholder='Додайте коментар...'/>
                <button>
               +
                </button></form>
                </div>

            </div>


        )
    }

}
const mapDispatchToProps=(dispatch)=>{
    return {
        deleteElement: bindActionCreators (deleteElement,dispatch),
    }

};

export default connect(null,mapDispatchToProps ) (PostOneUser) ;