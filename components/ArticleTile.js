import React, { PureComponent } from 'react'
import { getDownloadUrl } from '../helpers/firebase'

export default class ArticleTile extends PureComponent {
  state = {
    icon_url: ''
  }

  componentDidMount () {
    this.getIconUrl(this.props.blog.icon_reference)
  }

  async getIconUrl (icon_ref) {
    this.setState({
      icon_url: await getDownloadUrl(icon_ref)
    })
  }

  render () {
    const blog = this.props.blog
    return (
      <li
        onClick={() => {
          window.location.href = `/blogs/${blog.url}`
        }}
      >
        <img src={this.state.icon_url} height='60' />
        <span>{blog.title}</span>
      </li>
    )
  }
}
