import React, { Component } from "react";
import { Grid, Message, Icon } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column width={12}>
          <Message color={"grey"}>
            <b>Download Free Youtube Videos on YT1S</b>
          </Message>
        </Grid.Column>
      </Grid.Row>
    );
  }
}
