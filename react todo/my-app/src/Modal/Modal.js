import React from "react";
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <React.Fragment>
                <button className="btn-open" onClick={() => this.setState({isOpen: true})}>Open Modal </button>

                {this.state.isOpen && (<div className="modal">
                    <div className="modal-body">

                        <h1>
                            Modal title
                        </h1>

                        <p>Awesome!</p>
                        <button className="btn-close" onClick={() => this.setState({isOpen: false})}>Close Modal </button>
                    </div>


                </div>)}
            </React.Fragment>
        )
    }
}