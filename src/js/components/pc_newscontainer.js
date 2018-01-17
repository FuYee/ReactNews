import React from 'react';
import {Row, Col, Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;

import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_product';

export default class PCNewsContainer extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span="2"></Col>
          <Col span="20" class="container">
            <div className="clearfix">
              {/*轮播*/}
              <div class="leftContainer">
                <div class="carousel">
                  <Carousel autoplay effect="fade">
                    <div><img src="./src/images/carousel_1.jpg"></img></div>
                    <div><img src="./src/images/carousel_2.jpg"></img></div>
                    <div><img src="./src/images/carousel_3.jpg"></img></div>
                    <div><img src="./src/images/carousel_4.jpg"></img></div>
                  </Carousel>
                </div>
              </div>
              {/*block模块*/}
              <Tabs class="tabs_news">
                <TabPane tab="头条新闻" key="1">
                  <PCNewsBlock type="top" count={22} width="100%" bordered="false"/>
                </TabPane>
                <TabPane tab="国际" key="2">
                  <PCNewsBlock type="guoji" count={20} width="100%" bordered="false"/>
                </TabPane>
              </Tabs>
              <Tabs class="tabs_product">
                <TabPane tab="ReactNews 产品" key="1">
                  <PCProduct/>
                </TabPane>
              </Tabs>
            </div>
            <div>
              <PCNewsImageBlock type="guonei" width="100%" count={8} imageWidth="132px" cartTitle="国内新闻"/>
              <PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"/>
            </div>
          </Col>
          <Col span="2"></Col>
        </Row>
      </div>
    )
  }
}
