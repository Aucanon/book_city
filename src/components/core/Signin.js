import Layout from './Layout'
import { Button, Form, Input } from 'antd'
import axios from 'axios';
import { API } from '../../config'
import { useHistory } from 'react-router-dom';

function Signin() {

  const history = useHistory()

  const handleOnfinish = async (value) => {
    const res = await axios.post(`${API}/signin`, value)
    localStorage.setItem('token', JSON.stringify(res.data))
    const url = res.data.user.role === 1 ? '/admin/dashboard' : '/user/dashboard'
    history.push(url)
  }

  return (
    <Layout title='登录' subTitle=''>
      <Form onFinish={handleOnfinish}>
      <Form.Item name='email' label='邮箱'>
          <Input/>
        </Form.Item>
        <Form.Item name='password' label='密码'>
          <Input.Password/>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>登录</Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}

export default Signin;