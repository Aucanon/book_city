import { Button, Form, Input, message } from "antd";
import Layout from "../core/Layout";
import axios from "axios";
import { API } from "../../config";
import { isAuth } from "../../helpers/auth";
import { Link } from "react-router-dom";

function AddCategory() {

  const {token, user: {_id}} = isAuth()

  const handleOnfinish = (value) => {
    if (value.name) {
      axios.post(`${API}/category/create/${_id}`, value, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        message.success(`${res.data.name} 添加成功！`)
      })
    }
  }

  return (
    <Layout title='添加分类'>
      <Form onFinish={handleOnfinish}>
        <Form.Item name='name' label='分类名称'>
          <Input/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">添加分类</Button>
        </Form.Item>
      </Form>
      <Button>
        <Link to='/admin/dashboard'>返回 Dashboard</Link>
      </Button>
    </Layout>
  );
}

export default AddCategory;