import Link from "next/link";
import React, { Component } from "react";
import { Grid, Message, Icon } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column width={12}>
          <Message color={"grey"}>
            <div className="flex flex-row justify-center items-center gap-10 pb-5">
            <Link href="/privacypolicy"> <div className="bg-slate-400 p-2 rounded shadow">Privacy Policy</div></Link>
            <Link  href="/termofuse"> <div className="bg-slate-400 p-2 rounded shadow">Terms of use</div></Link>
            <Link  href="/youtubetomp3"> <div  className="bg-slate-400 p-2 rounded shadow">youtube to mp3</div></Link>
            </div>
            <b>Download Free Youtube Videos on YT1S</b>

          </Message>
        </Grid.Column>
      </Grid.Row>
    );
  }
}
