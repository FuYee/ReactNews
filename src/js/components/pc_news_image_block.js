import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
import {Card} from 'antd';

export default class PCNewsImageBlock extends React.Component {
  constructor () {
    super();
    this.state = {
      news: '' // 是否有新闻数据
    }
  };
  componentWillMount(){
    var fechParam = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, fechParam)
    .then(response=>response.json()).then(json=>this.setState({news: json}))
  };
  render () {
    const {news} = this.state;
    const styeH3 = {
      width: this.props.imageWidth,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    };
    const styleImage = {
      display: "block",
			width: this.props.imageWidth,
			height: "90px"
    }
    const newList = news.length
    ? news.map((newsItem, index)=>(
      <div key={index} class="imageblock">
        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
          <div class="custom-image">
            <img style={styleImage} src={newsItem.thumbnail_pic_s}/>
          </div>
          <div class="custom-card">
						<h3 style={styeH3}>{newsItem.title}</h3>
						<p>{newsItem.author_name}</p>
					</div>
        </Link>
      </div>
    ))
    : '没有加载到任何新闻';
    return (
      <div class="marginT" >
        <Card title={this.props.cartTitle} bordered={true} style={{width: this.props.width}}>
          {newList}
        </Card>
      </div>
    )
  }
}
