import React from 'react';
import {Row, Col, Card} from 'antd';

export default class MobileUerCommentList extends React.Component {
	constructor (){
		super();
		this.state = {
      usercomments: '' // 用户评论列表的数据
		}
	};
	componentDidMount () {
		var myFetchOptions = {
			method: 'GET'
		};
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
      .then(response=>response.json())
      .then(json=>{
        this.setState({usercomments:json});
      });
	};
  render() {
  	const {usercomments} = this.state;
		const usercommentsList = usercomments.length ?
      usercomments.map((comment,index)=>(
				<Card key={index} title={`于 ${comment.datetime} 评论了文章 ${comment.uniquekey}`} extra={<a target="_blank" href={`/#/details/${comment.uniquekey}`}>查看</a>}>
					<p>{comment.Comments}</p>
				</Card>
      ))
      :
      '您还没有发表过任何评论。';
    return (
			<div>
				<Row>
					<Col span={24}>
						{usercommentsList}
					</Col>
				</Row>
			</div>
    );
  };
}
