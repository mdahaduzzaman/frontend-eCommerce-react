import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


const SellerSignup = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
        <Form.Item
            name="Name"
            label="Shop Name"
            rules={[
            {
                type: 'text',
                message: 'The input is not valid shop name!',
            },
            {
                required: true,
                message: 'Please Enter your Shop name',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="Address"
            label="Shop Address"
            rules={[
            {
                type: 'text',
                message: 'The input is not valid address!',
            },
            {
                required: true,
                message: 'Please Enter your Shop Address',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="Address"
            label="Shop Address"
            rules={[
            {
                type: 'image',
                message: 'The input is not valid address!',
            },
            {
                required: true,
                message: 'Please Enter your Shop Address',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Upload {...props} className='ms-20'>
            <Button icon={<UploadOutlined />}>Upload Shop Image</Button>
        </Upload>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SellerSignup;