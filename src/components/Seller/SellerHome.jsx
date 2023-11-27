import React, { useState } from 'react'
import {
    Button,
    Form,
    Input,
    Select,
  } from 'antd';

import CheckOutProgress from '../../components/CheckOutProgress.jsx'

function SellerHome() {

  return (
    <div className='flex px-10 bg-[--white-color] pt-16'>
        <div className='text-[--primary-color] w-[50%] '>
            <h1 className='text-7xl font-bold leading-[5rem] '>Bangladesh's #1 <br/> Marketplace</h1>
            <p className='mt-5 text-lg'>Create a eCommerce seller account in 5 minutes and reach millions of customers today!</p>
        </div>
        <div className='w-[50%] bg-[--white-color] p-5 rounded-2xl border-2 border-[--primary-color]'>
            <CheckOutProgress />
            <div className='text-center text-[--primary-color]'>
                <h3 className='text-4xl'>Create a shop</h3>

                <Form className='mx-auto'
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    layout="horizontal"
                    style={{
                        maxWidth: 600,
                    }}
                    >
                    <Form.Item label="Shop Name"
                        name="shopname"
                        rules={[
                          {
                            required: true,
                            message: 'Please Enter a Shop Name!',
                          },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Select Region"
                        name="region"
                        rules={[
                          {
                            required: true,
                            message: 'Please Select a Region!',
                          },
                        ]}

                    >
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Select City"
                        name="city"
                        rules={[
                          {
                            required: true,
                            message: 'Please Select a City!',
                          },
                        ]}
                    >
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Select Area">
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Detail Address">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default SellerHome