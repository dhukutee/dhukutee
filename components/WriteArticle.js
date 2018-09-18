import React, { PureComponent } from 'react';
import { customReplace } from '../helpers/customReplace';
import ArticleFull from './ArticleFull';
import { addABlog } from '../helpers/firebase';

export default class WriteArticle extends PureComponent {
  state = {
    url: '',
    title: '',
    message: '',
  };

  pushBlog = () => {
    if (this.state.title == '' || this.state.title == null) {
      alert('Title is empty');
    } else if (this.state.message == '' || this.state.message == null) {
      alert('Content is empty');
    } else if (this.state.url == '' || this.state.url == null) {
      alert('URL is empty');
    } else {
      addABlog(this.state);
    }
  };

  render() {
    return (
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        <div style={{ flex: 1 }}>
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
                  url: event.target.value,
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
                  title: event.target.value,
                });
              }}
            />
            <br />
            <br />
            Details:
            <br />
            <textarea
              id="detail"
              onChange={async event => {
                this.setState({
                  message: await customReplace(event.target.value),
                });
              }}
              style={{
                width: '100%',
                height: '300px',
              }}
            />
            <br />
            <br />
            Featured Image:
            <br />
            <input type="file" id="image" />
            <br />
            <br />
            <input type="submit" value="Post" onClick={() => this.pushBlog()} />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h1>Live Preview</h1>
          <hr />
          {/* live preivew of the article */}
          <ArticleFull blog={this.state} style={{ flex: 1 }} />
        </div>
      </div>
    );
  }
}
