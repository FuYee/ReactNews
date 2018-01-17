import React from 'react';
import PCHeader from "./pc_header";
import PCFooter from "./pc_footer";
import PCMatureUpload from './pc_mature_upload';
import PCUserCollectonList from './pc_usercollecton_list';
import PCUerCommentList from './pc_usercomments_list';
import {Row, Col, Tabs} from 'antd';
const TabPane = Tabs.TabPane;

export default class PCUserCenter extends React.Component {
  render() {
    return (
			<div>
				<PCHeader/>
				<Row>
					<Col span="2"></Col>
					<Col span="20">
						<Tabs>
							<TabPane tab="我的收藏列表" key="1">
								<PCUserCollectonList/>
							</TabPane>
							<TabPane tab="我的评论列表" key="2">
								<PCUerCommentList/>
							</TabPane>
							<TabPane tab="头像设置" key="3">
								<PCMatureUpload/>
							</TabPane>
						</Tabs>
					</Col>
					<Col span="2"></Col>
				</Row>
				<PCFooter/>
			</div>
    );
  };
}
