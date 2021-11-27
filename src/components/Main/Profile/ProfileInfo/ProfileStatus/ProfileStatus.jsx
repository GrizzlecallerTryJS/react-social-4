import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    profileStatus: this.props.profileStatus,
  };

  setEditMode = (mode) => {
    this.setState({
      editMode: mode,
    });
    if (!mode) {
      this.props.setUserStatus(this.props.userId, this.state.profileStatus);
    }
  };

  onChangeAction = (e) => {
    this.setState({
      profileStatus: e.currentTarget.value,
    });
  };

  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot: SS
  ) {
    if (prevProps.profileStatus !== this.props.profileStatus) {
      this.setState({
        profileStatus: this.props.profileStatus,
      });
    }
  }

  render() {
    if (this.state.editMode) {
      return (
        <span>
          <input
            value={this.state.profileStatus}
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
