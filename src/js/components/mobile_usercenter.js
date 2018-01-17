import React from 'react';
import MobileHeader from "./mobile_header";
import MobileFooter from "./mobile_footer";
import MobileUserCollectonList from './mobile_usercollecton_list';
import MobileMatureUpload from './mobile_mature_upload';
import MobileUerCommentList from './mobile_usercomments_list';
import {Row, Col, Tabs} from 'antd';
const TabPane = Tabs.TabPane;

export default class MobileUserCenter extends React.Component {
  render() {
    return (
			<div>
				<MobileHeader/>
				<Row>
					<Col span="24">
						<Tabs>
							<TabPane tab="我的收藏列表" key="1">
								<MobileUserCollectonList/>
							</TabPane>
							<TabPane tab="我的评论列表" key="2">
								<MobileUerCommentList/>
							</TabPane>
							<TabPane tab="头像设置" key="3">
								<MobileMatureUpload/>
							</TabPane>
						</Tabs>
					</Col>
				</Row>
				<MobileFooter/>
			</div>
    );
  };
}
