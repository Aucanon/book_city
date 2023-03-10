import { Button, Image, Input } from "antd";
import { useState } from "react";
import { API } from '../../config'
import { deleteItem, updateItem } from "../../helpers/cart";

function CartItem({product, setCart}) {

  const [count, setCount] = useState(product.count)

  const handleChange = (event) => {
    const count = parseInt(event.target.value)
    setCount(count)
    setCart(updateItem(product._id, count))
  }

  return (
    <tr className="ant-table-row">
      <td className="ant-table-cell">
        <Image width={120} src={`${API}/product/photo/${product._id}`}/>
      </td>
      <td className="ant-table-cell">{product.name}</td>
      <td className="ant-table-cell">{product.price}</td>
      <td className="ant-table-cell">{product.category.name}</td>
      <td className="ant-table-cell">
        <Input type="number" onChange={handleChange} value={count}/>
      </td>
      <td className="ant-table-cell">
        <Button danger type="primary" onClick={() => setCart(deleteItem(product._id))}>删除</Button>
      </td>
    </tr>
  );
}

export default CartItem;