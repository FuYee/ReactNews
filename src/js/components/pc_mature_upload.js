import React from 'react';
import {Upload, Icon,Modal} from 'antd';

export default class PCMatureUpload extends React.Component {
	constructor (){
		super();
		this.state = {
			previewImage: '',
			previewVisible:false
		}
	};
  render() {
  	const props = {
  		action: "http://newsapi.gugujiankong.com/handler.ashx",
			headers: {
  			"Access-Control-Allow-Origin": "*"
			},
			listType: "picture-card",
			defaultFileList: [
				{
					uid: -1,
					name: 'xxx.png',
					state: 'done',
					url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
          thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
				}
			],
			onPreview: (file) => {
  			this.setState({previewImage: file.url,previewVisible: true});
			}
		}
    return (
			<div className="clearfix">
				<Upload {...props}>
					<Icon type="plus"/>
						<div className="ant-upload-text">上传照片</div>
				</Upload>
				<Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
					<img alt="预览" src={this.state.previewImage}/>
				</Modal>
			</div>
    );
  };
}
