import React, { Component } from 'react';

import { getTree } from '../helpers/firebase';

class DataTree extends Component {
  
  state = {tree: null}

  async componentDidMount() {
    let tree = await getTree();
    this.setState({tree: tree})
  }

  renderTree(tree) {
    return (
      <ul>
        {Object.keys(tree).map(i => {
          return (
            <ul style={{marginLeft: '10px'}}>
              {i}:
              {typeof(tree[i]) === 'object' ? this.renderTree(tree[i]) : <span style={{marginLeft: '10px'}}>{tree[i]}</span>}
            </ul>
          )
        })}
      </ul>
    )
  }
  
  render() {
    return (
      <div>
        <h1>Data Schema for Database</h1>
        <pre>
          <code className="json" ref="code">
            {this.state.tree?  JSON.stringify(this.state.tree, null, 2):"Loading......"}
          </code>
        </pre>
      </div>
    )
  }
}

export default DataTree;