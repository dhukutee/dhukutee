import React, { PureComponent } from 'react'
import renderHTML from 'react-render-html'
import { getDownloadUrl } from '../helpers/firebase'

export default class ArticleFull extends PureComponent {
  state = {
    image_url: ''
  }

  componentDidMount () {
    this.getImageUrl(this.props.blog.image_reference)
  }

  async getImageUrl (image_ref) {
    this.setState({
      image_url: await getDownloadUrl(image_ref)
    })
  }

  render () {
    return (
      <div
        style={{
          backgroundColor: '#fff',
          margin: '20px'
        }}
      >
        <h1>{this.props.blog.title}</h1>
        <img src={this.state.image_url} style={styles.featuredImage} />
        <p>{renderHTML(this.props.blog.message)}</p>
      </div>
    )
  }
}

const styles = {
  featuredImage: {
    widht: '100%',
  }
}
