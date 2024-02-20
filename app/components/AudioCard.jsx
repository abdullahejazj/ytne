import React, { useState } from "react";
import {
  Grid,
  Image,
  Icon,
  Dimmer,
  Card,
  Header,
  Button,
  Label,
  Progress,
  Modal,
  Dropdown,
} from "semantic-ui-react";
import HDSvg from "../../public/hd.svg";
import { formatNumber, formatFileSize, formatMimeType } from "../utils";

const AudioCard = ({
  videoInfo,
  active,
  downloadingPercentage,
  onDownload,
  onMp3,
}) => {
  const [dimmerActive, setDimmerActive] = useState(false);
  const [descriptionModal, setDescriptionModal] = useState(false);

  // Filter audio formats
  const audioFormats = videoInfo?.formats?.filter(
    (item) => item.mimeType && item.mimeType.includes("audio")
  );

  console.log(" videoInfo?.formats",videoInfo?.formats)
  return active ? (
    <Grid verticalAlign="middle" stackable style={{ placeContent: "center" }}>
      <Grid.Column width={8}>
        <Card fluid>
          <Dimmer.Dimmable
            blurring={dimmerActive}
            onMouseEnter={() => setDimmerActive(true)}
            onMouseLeave={() => setDimmerActive(false)}
          >
            <Image
              alt={"video-thumbnail"}
              src={videoInfo.thumbnail}
              size="huge"
            />
            <Dimmer.Inner
              active={dimmerActive ? true : undefined}
              as="a"
              href={"https://www.youtube.com/watch?v=" + videoInfo.videoId}
              target="_blank"
            >
              <Icon name="youtube" color="red" size="huge" />
            </Dimmer.Inner>
          </Dimmer.Dimmable>
          <Card.Content>
            <Card.Header>{videoInfo.title}</Card.Header>
            <Card.Meta style={{ paddingTop: "0.5em" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "fit-content",
                }}
              >
                <a target="_blank" href={videoInfo.author.user_url}>
                  <Image
                    avatar
                    size="large"
                    src={
                      videoInfo.author.thumbnails.length
                        ? videoInfo.author.thumbnails.slice(-1)[0].url
                        : "/not_found.jpg"
                    }
                  />
                </a>
                <div>
                  <Header size="tiny">
                    <Header.Content
                      as="a"
                      target="_blank"
                      href={videoInfo.author.user_url}
                    >
                      {videoInfo.author.name}{" "}
                      {videoInfo.author.verified ? (
                        <Icon name="check circle" />
                      ) : null}
                    </Header.Content>
                    <Header.Subheader
                      content={
                        formatNumber(videoInfo.author.subscriber_count) +
                        " subscribers"
                      }
                    />
                  </Header>
                </div>
              </div>
            </Card.Meta>
          </Card.Content>
          <Card.Description>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingBottom: "1em",
              }}
            >
            
              <div className="flex  justify-center bg-slate-500 p-2 text-xl text-white">
                <Dropdown text="Audio Formats">
                  <Dropdown.Menu>
                    {audioFormats.map((item, index) => (
                      <Dropdown.Item key={index}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span>{item.qualityLabel}</span>
                          <span style={{ marginLeft: "10px" }}>
                         {item?.audioCodec}   { formatFileSize(item.contentLength)}
                          </span>
                          <Button
                            icon
                            basic
                            color="black"
                            disabled={downloadingPercentage !== null}
                            onClick={() =>
                              onDownload(
                                item.itag,
                                formatMimeType(item.mimeType),
                                item.qualityLabel || "Audio",
                                item.contentLength
                              )
                            }
                            loading={Boolean(item.isDownloading)}
                            style={{ marginLeft: "10px" }}
                          >
                            <Icon name="download" />
                          </Button>
                        </div>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            {downloadingPercentage !== null && (
              <Progress
                percent={downloadingPercentage}
                progress
                color="green"
                style={{ margin: "1.5em" }}
                size="medium"
                success={downloadingPercentage === 100}
              >
                {downloadingPercentage === 100 ? "Completed" : "Downloading..."}
              </Progress>
            )}
          </Card.Description>
          <Card.Content extra>
            <Grid columns={"equal"} textAlign="center" verticalAlign="middle">
              <Grid.Column>
                <b>
                  <Icon name="clock" /> {videoInfo.length}
                </b>
              </Grid.Column>
              <Grid.Column>
                <Modal
                  trigger={
                    <Label
                      data-tooltip="Description"
                      as="a"
                      icon={<Icon name="file text" fitted />}
                      basic
                    />
                  }
                  open={descriptionModal}
                  onClose={() => setDescriptionModal(false)}
                  onOpen={() => setDescriptionModal(true)}
                >
                  <Header>Description</Header>
                  <Modal.Content style={{ whiteSpace: "pre-line" }}>
                    {videoInfo.shortDescription}
                    <br />
                    <br />
                    {videoInfo.keywords && videoInfo.keywords.length ? (
                      <Label.Group>
                        {videoInfo.keywords.map((keyword, index) => (
                          <Label key={index}>
                            <Icon name="hashtag" /> {keyword}
                          </Label>
                        ))}
                      </Label.Group>
                    ) : null}
                  </Modal.Content>
                  <Modal.Actions>
                    <Button
                      onClick={() => setDescriptionModal(false)}
                      icon
                      labelPosition="right"
                    >
                      <Icon name="remove" /> Close
                    </Button>
                  </Modal.Actions>
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <b>
                  <Icon name="eye" /> {videoInfo.viewCount}
                </b>
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  ) : null;
};

export default AudioCard;
