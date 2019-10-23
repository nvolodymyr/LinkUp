import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNewElement } from '../../store/users/actions';

import {Link} from 'react-scroll';
class NavBottomMenu extends Component {
    constructor(props) {
        super(props);
        this.handleFile = this.handleFile.bind(this);
        this.elem = this.elem.bind(this);

    }


    elem(event) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = () => resolve(fileReader.result);
            fileReader.readAsDataURL(event.target.files[0]);
        });
    }

    handleFile(event) {
        this.elem(event).then(result => {
            this.props.addNewElement(result);
        });
    }

    render() {


        return (
            <div className="main-navBottom" >
              
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}>
                        <i className="fa fa-home">     </i>
                    </Link>
           
                <div className="addNewPicture" >
                    <form action="#"
                        onSubmit={this.handleSubmit} >
                        <label htmlFor="file-upload" className="custom-file-upload">
                            <i className="fa fa-cloud-upload"></i>
                        </label>
                        <input type="file"
                            id="file-upload"
                            name="file"
                            onChange={this.handleFile} />

                    </form></div>
            </div>
        );

    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addNewElement: bindActionCreators(addNewElement, dispatch),
    }

};

export default connect(null, mapDispatchToProps)(NavBottomMenu);