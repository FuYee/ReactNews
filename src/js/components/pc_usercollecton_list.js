import React from 'react';
import {Row, Col, Card} from 'antd';

export default class PCUserCollectonList extends React.Component {
	constructor (){
		super();
		this.state = {
      usercollection: '' // 收藏列表的数据
		}
	};
	componentDidMount () {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
			.then(response => response.json())
			.then(json => {
				this.setState({usercollection:json});
			})
	};
  render() {
  	const {usercollection} = this.state;
		const usercollectionList = usercollection.length ?
      usercollection.map((uc, index) => (
				<Card key={index} title={uc.uniquekey} extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>查看</a>}>
					<p>{uc.Title}</p>
				</Card>
			))
			: '您还没有收藏任何的新闻，快去收藏一些新闻吧。'
    return (
			<div className="comment">
				<Row>
					<Col span={24}>
						{usercollectionList}
					</Col>
				</Row>
			</div>
    );
  };
}
