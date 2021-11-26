import React from "react";

class ProfileStatus extends React.Component {
  textAreaRef = React.createRef();
  state = {
    editMode: false,
    status: this.props.profileStatus,
  };

  setEditMode = (mode) => {
    this.setState({
      editMode: mode,
    });
  };

  onChangeAction = () => {
    this.setState({
      status: "bla111",
    });
  };

  render() {
    if (this.state.editMode) {
      return (
        <span>
          <input
            textAreaRef={this.textAreaRef}
            value={this.props.profileStatus}
            onChange={this.onChangeAction}
            onBlur={() => {
              this.setEditMode(false);
              this.props.setUserStatus(this.props.userId, this.state.status);
            }}
          />
        </span>
      );
    } else {
      return (
        <div>
          <div>
            <span onDoubleClick={() => this.setEditMode(true)}>
              {this.props.profileStatus}
            </span>
          </div>
        </div>
      );
    }
  }
}

export default ProfileStatus;
