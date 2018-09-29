import React, { PureComponent } from "react";
import renderHTML from "react-render-html";
import { getDownloadUrl } from "../helpers/firebase";

export default class ArticleFull extends PureComponent {
  state = {
    image_url: ""
  };

  async getImageUrl(image_ref) {
    console.log("fetching new one");
    this.setState({
      image_url: await getDownloadUrl(image_ref)
    });
  }

  componentWillReceiveProps(new_props) {
    console.log(this.props.blog.image_reference);
    console.log(new_props.blog.image_reference);
    if (this.props.blog.image_reference != new_props.blog.image_reference) {
      this.getImageUrl(new_props.blog.image_reference);
    }
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          margin: "20px"
        }}
      >
        <h1>{this.props.blog.title}</h1>
        <br />
        <img
          src={this.state.image_url}
          style={styles.featuredImage}
          width="50%"
        />
        <p>{renderHTML(this.props.blog.message)}</p>
      </div>
    );
  }
}

const styles = {
  featuredImage: {
    widht: "100%"
  }
};
