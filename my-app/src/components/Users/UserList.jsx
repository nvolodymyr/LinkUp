import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersFetchData } from '../../store/users/actions'
import PostOneUser from '../PostOneUser/PostOneUser';
import Loader from '../Loader/Loader ';
// import Loader from '../Loader';

class UserList extends Component {
 
    
    componentDidMount() {
        this.props.fetchData('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts');
    }
    renderOnePost(onePost) {
        return (
            <PostOneUser key={onePost.id}
                id={onePost.id}
                createdAt={onePost.createdAt}
                imageUrl={onePost.imageUrl}
                likes={onePost.likes}
                userName={onePost.userName}
                avatar={onePost.avatar}
            />
        )
    }
    render() {
       
               const { users,loading } = this.props;
        if (this.props.hasError) {
            return <p>Sorry,but something wrong with loading...</p>
        }
        if (loading) {
            return <Loader />
        }
        return (
            <div >
                <div className="wrap-all-post">{users.map(this.renderOnePost)}</div>
            </div>

        )
    }

}
const mapStateToProps = state => ({
    users: state.userReducer.users,
    loading: state.userReducer.loading,
    hasError: state.userReducer.error
});
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(usersFetchData(url)),

        
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
