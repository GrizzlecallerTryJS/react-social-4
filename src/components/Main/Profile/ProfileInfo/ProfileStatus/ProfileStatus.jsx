import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.profileStatus,
  };

  setEditMode = (mode) => {
    this.setState({
      editMode: mode,
    });
    if (!mode) {
      this.props.setUserStatus(this.props.userId, this.state.status);
    }
  };

  onChangeAction = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    if (this.state.editMode) {
      return (
        <span>
          <input
            value={this.state.status}
            onChange={this.onChangeAction}
            onBlur={() => {
              this.setEditMode(false);
            }}
          />
        </span>
      );
    } else {
      return (
        <div>
          <div>
            <span onDoubleClick={() => this.setEditMode(true)}>
              {this.props.profileStatus || "-------"}
            </span>
          </div>
        </div>
      );
    }
  }
}

export default ProfileStatus;
