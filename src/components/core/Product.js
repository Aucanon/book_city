import { Col, Row } from "antd";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_product_by_id } from "../../store/actions/product";
import ProductItem from './ProductItem'

function Product() {

  const { productId } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_product_by_id({productId}))
  }, [])

  const product = useSelector(state => state.product)

  return (
    <Layout title='商品名称' subTitle='商品描述'>
      <Row>
        <Col span='18'>
          {
            Object.keys(product).length > 0 && (
              <ProductItem product={product} showView={false} imgStyle={{width: '50%', margin: '0 auto'}}/>
            )
          }
        </Col>
        <Col span='6'>2</Col>
      </Row>
    </Layout>
  );
}

export default Product;