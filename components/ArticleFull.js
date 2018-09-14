import React, { PureComponent } from 'react'
import renderHTML from 'react-render-html'

export default class ArticleFull extends PureComponent {
  render () {
    return (
      <div
        style={{
          backgroundColor: '#fff',
          margin: '20px'
        }}
      >
        <h1>{this.props.blog.title}</h1>
        <p>{renderHTML(this.props.blog.message)}</p>
      </div>
    )
  }
}
