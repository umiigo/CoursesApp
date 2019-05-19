import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name
  };
}
function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name: name
      })
  };
}

class Avatar extends React.Component {
  state = {
    photo: "https://cl.ly/80cc7e34f2b2/download/images.jpg"
  };

  componentDidMount() {
    fetch("https://uinames.com/api/?ext")
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ photo: resp.photo });
        this.props.updateName(resp.name);
      });
  }
  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);
const Image = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;
