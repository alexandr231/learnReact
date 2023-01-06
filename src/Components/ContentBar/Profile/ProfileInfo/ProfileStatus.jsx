import React, { Component } from 'react'

export default class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    updateChangedStatus = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onChange = {this.updateChangedStatus} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>
                    </div>
                }
            </div>
        )
    }
}
