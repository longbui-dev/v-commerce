import React, { useState } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { Button, message, Popconfirm, Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import './index.scss'
import { useSelector } from 'react-redux'
import { selectProductsInCart } from '../../store/slices/amountProductsInCart'

interface CartType {
  Key: React.Key
  title: string
  price: number
  amount: number
}

function PageCart() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [removeItemsInCarts, setRemoveItemsInCarts] = useState()

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }
  const hasSelected = selectedRowKeys.length > 0

  const productsInCart = useSelector(selectProductsInCart)

  const uniqueIds: CartType[] = []
  productsInCart.forEach((e: any) => {
    if (uniqueIds.indexOf(e.id) === -1) {
      uniqueIds.push(e.id)
    }
  })

  const carts = uniqueIds.map((uq) => {
    const products = productsInCart.filter((e: any) => e.id === uq)
    return {
      ...products[0],
      amount: products.length,
      key: products[0].id,
    }
  })

  const selectedCarts = carts.filter((c) => {
    return selectedRowKeys.find((k) => c.id === k)
  })
  const totalPriceSelected = selectedCarts.reduce(
    (a, c) => a + c.price * c.amount,
    0,
  )

  const deleteProduct = (e: any) => {
    console.log('delete not yet')
    const removeItems = carts.filter((item) => e.id !== item.id)
    console.log(removeItems, 'removeItems')
    console.log('delete success')
    message.info('Clicked on Yes.')
  }

  const columnsCart: ColumnsType<CartType> = [
    {
      title: 'Product',
      dataIndex: 'title',
      key: 'productName',
      sortDirections: ['descend', 'ascend'],
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: '12%',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      width: '10%',
      key: 'amount',
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: 'Pay',
      width: '20%',
      key: 'totalPrice',
      render: (row: any) => row.price * row.amount,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'x',
      render: (row, record) => (
        <Space size="middle" className="cursor-pointer">
          <Popconfirm
            title="Sure to delete?"
            okText="Yes"
            cancelText="No"
            className="popconfirm"
            onConfirm={() => deleteProduct(record)}
          >
            <DeleteOutlined />
          </Popconfirm>
        </Space>
      ),
      width: '10%',
    },
  ]

  return (
    <div id="pageCart">
      <div className="block m-auto container py-8 pageCart">
        <div className="py-6">
          {hasSelected ? `Selected ${selectedRowKeys.length} products` : ''}
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columnsCart}
          dataSource={carts}
          scroll={{ x: 1000, y: 600 }}
          summary={() => (
            <Table.Summary fixed>
              <Table.Summary.Row className="font-bold">
                <Table.Summary.Cell colSpan={4} index={0}>
                  Total Pay
                </Table.Summary.Cell>
                <Table.Summary.Cell colSpan={2} index={1}>
                  {hasSelected ? totalPriceSelected : '0'}
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
        <div className="py-14">
          <textarea
            placeholder="Note..."
            className="secondColorBg p-5 w-full h-52"
          />
          <div className="flex justify-center">
            <Button
              type="primary"
              size="large"
              className="my-8 text-base font-medium mainColorBg hover:bg-transparent buttonAdd"
            >
              Thanh Toán
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageCart
