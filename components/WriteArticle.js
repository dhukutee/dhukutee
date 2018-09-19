import React, { PureComponent } from "react";
import { customReplace } from "../helpers/customReplace";
import ArticleFull from "./ArticleFull";
import { addABlog, uploadFile, getDownloadUrl } from "../helpers/firebase";
import Router from "next/router";

export default class WriteArticle extends PureComponent {
  state = {
    url: "",
    title: "",
    message: "",
    raw_message: "",
    icon_url: null,
    icon_reference: null,
    image_url: null,
    image_reference: null
  };

  pushBlog = () => {
    if (this.state.title == "" || this.state.title == null) {
      alert("Title is empty");
    } else if (this.state.message == "" || this.state.message == null) {
      alert("Content is empty");
    } else if (this.state.url == "" || this.state.url == null) {
      alert("URL is empty");
    } else {
      addABlog({
        url: this.state.url,
        title: this.state.title,
        message: this.state.raw_message,
        icon_reference: this.state.icon_reference,
        image_reference: this.state.image_reference
      })
        .then(() => {
          Router.push(`/blogs/${this.state.url}`);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  uploadFeaturedImage = file => {
    uploadFile(file)
      .then(async res => {
        this.setState({
          image_reference: res,
          image_url: await getDownloadUrl(res)
        });
      })
      .catch(err => {
        this.setState({
          image_reference: null,
          image_url: null
        });
      });
  };

  uploadArticleIcon = file => {
    uploadFile(file)
      .then(async res => {
        this.setState({
          icon_reference: res,
          icon_url: await getDownloadUrl(res)
        });
      })
      .catch(err => {
        this.setState({
          icon_reference: null,
          icon_url: null
        });
      });
  };

  render() {
    return (
      <div style={{ flexDirection: "row", display: "flex" }}>
        <div style={{ flex: 1, padding: 10 }}>
          <div>
            <h1>Editor</h1>
            <hr />
            URL:
            <br />
            https://dhukutee.com/blogs/
            <input
              type="text"
              id="url"
              onChange={event => {
                this.setState({
                  url: event.target.value
                });
              }}
            />
            <br />
            <br />
            Title:
            <br />
            <input
              type="text"
              id="title"
              onChange={event => {
                this.setState({
                  title: event.target.value
                });
              }}
            />
            <br />
            <br />
            Article Icon:
            <br />
            {this.state.icon_url == null ? (
              <input
                type="file"
                id="icon"
                onChange={event =>
                  this.uploadArticleIcon(event.target.files[0])
                }
              />
            ) : (
              <img
                src={this.state.icon_url}
                height={60}
                onClick={() => {
                  this.setState({
                    icon_url: null,
                    icon_reference: null
                  });
                }}
              />
            )}
            <br />
            <br />
            Featured Image:
            <br />
            {this.state.image_url == null ? (
              <input
                type="file"
                id="image"
                onChange={event =>
                  this.uploadFeaturedImage(event.target.files[0])
                }
              />
            ) : (
              <button
                onClick={() => {
                  this.setState({
                    image_url: null,
                    image_reference: null
                  });
                }}
              >
                Remove Attachment
              </button>
            )}
            <br />
            <br />
            <br />
            Details:
            <br />
            <textarea
              id="detail"
              onChange={async event => {
                this.setState({
                  raw_message: event.target.value,
                  message: await customReplace(event.target.value)
                });
              }}
              style={{
                width: "100%",
                height: "300px"
              }}
            />
            <br />
            <br />
            <input type="submit" value="Post" onClick={() => this.pushBlog()} />
          </div>
        </div>
        <div style={{ flex: 1, padding: 10 }}>
          <h1>Live Preview</h1>
          <hr />
          {/* live preivew of the article */}
          <ArticleFull blog={this.state} style={{ flex: 1 }} />
        </div>
      </div>
    );
  }
}
