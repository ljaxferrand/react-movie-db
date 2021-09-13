import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";


export class videoModal extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }


    render() {
        return (
            <div className="modalContainer">
                <div className="videoModal">
                    <ModalVideo
                      channel="youtube"
                      autoplay="1"
                      isOpen={this.state.isOpen}
                      videoId={this.props.trailerKey}
                      onClose={() => this.setState({isOpen: false })}
                    />
                    <button onClick={this.openModal} className="modalBtn">View Trailer</button>
                </div>
            </div>
        );
    }
}

export default videoModal;




