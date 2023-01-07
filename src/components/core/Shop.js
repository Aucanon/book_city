import { Button, Col, Row, Space, Empty } from "antd"
import { useEffect, useState } from "react"
import FilterByCategory from "./FilterByCategory"
import FilterByPrice from "./FilterByPrice"
import Layout from "./Layout"
import { useDispatch, useSelector } from "react-redux"
import { filter_products } from "../../store/actions/filter"
import ProductItem from './ProductItem'

function Shop () {

  const [ filters, setFilters ] = useState({category: [], price: []})

  const dispatch = useDispatch()

  const [skip, setSkip] = useState(0)

  const {data, size} = useSelector(state => state.filter)

  useEffect(() => {
    setSkip(0)
  }, [filters])

  useEffect(() => {
    dispatch(filter_products({filters, skip}))
  }, [filters, skip])

  const loadMore = () => {
    setSkip(skip + 4)
  }

  return (
    <Layout title='拉钩严选商城' subTitle='随意挑选'>
      <Row>
        <Col span='4'>
          <Space size='middle' direction="vertical">
            <FilterByCategory handleFilters={filter => setFilters({...filters, category: filter})}/>
            <FilterByPrice handleFilters={filter => setFilters({...filters, price: filter})}/>
          </Space>
        </Col>
        <Col span='20'>
          <Space size='large' direction="vertical">
            <Row gutter={[16, 16]}>
            {
              data.map(product => 
              <Col span='6'>
                <ProductItem product={product}/>
              </Col>)
            }
            </Row>
            <Row>
            {
              size >= 4 ? <Button onClick={loadMore}>加载更多</Button> : <Empty/>
            }
            </Row>
          </Space>
        </Col>
      </Row>
    </Layout>
  )
}

export default Shop
