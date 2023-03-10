import { Button, Card, Row, Typography, Col, Image } from 'antd';
import { Link } from 'react-router-dom';
import dataformat from 'dataformat'
import { API } from '../../config';
import { addItem } from '../../helpers/cart';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

const { Title, Paragraph } = Typography;

function ProductItem({ product, imgStyle, showView = true, showCart = true }) {

  const {name, description, price, sold, category, createdAt, _id} = product

  const dispatch = useDispatch()

  const addToCart = () => {
    addItem(product, () => {
      dispatch(push('/cart'))
    })
  }

  const showButtons = () => {
    const buttons = []
    if (showView) {
      buttons.push(
        <Button type='link'>
          <Link to={`/product/${_id}`}>查看详情</Link>
        </Button>
      )
    }
    if (showButtons) {
      buttons.push(
        <Button type='link'>
          <Link onClick={addToCart}>加入购物车</Link>
        </Button>
      )
    }
    return buttons
  }

  return (
    <Card
      cover={<Image style={imgStyle} alt="example" src={`${API}/product/photo/${_id} `} />}
      actions={showButtons()}
    >
      <Title level={5}>{name}</Title>
      <Paragraph ellipsis={{rows: 2}}>{description}</Paragraph>
      <Row>
        <Col span='12'>价格：{price}</Col>
        <Col span='12'>销量：{sold}</Col>
      </Row>
      <Row>
        <Col span='12'>所属分类：{category.name}</Col>
        <Col span='12'>上架时间：{dataformat(createdAt, 'yyy-mm-dd')}</Col>
      </Row>
    </Card>
  );
}

export default ProductItem;