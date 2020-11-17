import React, { useState, useEffect } from 'react'
import '../table.css'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { MdAddCircle, MdModeEdit, MdDelete } from 'react-icons/md'
import { Button } from 'react-bootstrap'

import DataModal from '../components/ShopList/DataModal'

function ProductData(props) {
  const [modalShow, setModalShow] = useState(false)
  const [delUpdate, setDelUpdate] = useState(false)
  const sid = props.match.params.sid
  const [inputSearch, setInputSearch] = useState('')
  const [myData, setMydata] = useState([])
  const [wantDel, setwantDel] = useState(false)

  const getData = async () => {
    const res = await fetch('http://localhost:3000/product/ProductData', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ inputSearch }),
    })
    const data = await res.json()

    setMydata(data)
  }

  const delData = async (sid) => {
    setDelUpdate(!delUpdate)
    const res = await fetch('http://localhost:3000/product/del/' + sid, {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const data = [...(await res.json())]

    console.log(data)
    // 重渲染
    if (!data.sid) {
      const newProducts = data.filter((v, i) => {
        return v.sid !== sid
      })

      setMydata(newProducts)
    }
  }
  useEffect(() => {
    getData()
  }, [delUpdate])

  const display = (
    <>
      <table class="table table-striped   ">
        <thead>
          <tr class="title">
            <th scope="col" className="text-nowrap">
              流水號
            </th>
            <th scope="col" className="text-nowrap">
              產品名稱
            </th>
            <th scope="col" className="text-nowrap">
              定價
            </th>
            <th scope="col" className="text-nowrap">
              銷售價格
            </th>
            <th scope="col" className="text-nowrap">
              上架日期
            </th>
            <th scope="col" className="text-nowrap">
              產品描述{' '}
            </th>
            <th scope="col" className="text-nowrap">
              評價
            </th>
            <th scope="col" className="text-nowrap">
              追蹤人數
            </th>
            <th scope="col" className="text-nowrap">
              圖片src
            </th>
            <th scope="col" className="text-nowrap">
              銷售數量
            </th>
            <th scope="col" className="text-nowrap">
              分類
            </th>
            <th scope="col" className="text-nowrap ctrl">
              修改操作
            </th>
          </tr>
        </thead>

        <tbody>
          {myData.map((v, i) => {
            return (
              <tr key={v.sid}>
                <td width="15" className="sid">
                  {v.sid}
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
                <td>{v.Specialoffer}</td>
                <td>{moment(v.Addedtime).format('YYYY-MM-DD ')}</td>
                <td>{v.detail}</td>
                <td>{v.star}</td>
                <td>{v.awesome}</td>
                <td>
                  <img
                    style={
                      v.imgurl
                        ? {
                            height: '160px',
                            width: '160px',
                          }
                        : {}
                    }
                    src={v.imgurl}
                    alt=""
                  />
                </td>
                <td>{v.Selling}</td>
                <td>{v.category}</td>
                <td class="bu">
                  <Button
                    variant="primary block"
                    onClick={() => {
                      props.history.push('/ProductEdit/' + v.sid)
                    }}
                  >
                    {' '}
                    <MdModeEdit /> 編輯
                  </Button>{' '}
                  <DataModal
                    modalShow={modalShow}
                    setModalShow={setModalShow}
                    setwantDel={setwantDel}
                    delData={delData}
                    v={v}
                    myData={myData}
                  />
                  <Button
                    variant="danger block"
                    onClick={() => {
                      setModalShow(true)
                      delData(v.sid)
                    }}
                  >
                    <MdDelete /> 刪除
                  </Button>{' '}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
  return (
    <>
      <div className="container">
        <div class="shop_list-search">
          <span
            onClick={() => {
              getData()
            }}
          >
            <img src="http://localhost:3001/PNG/search.png" alt="" />{' '}
          </span>
          <input
            type="text"
            placeholder="Search"
            value={inputSearch}
            onChange={(e) => {
              setInputSearch(e.target.value)
            }}
          />
        </div>
        <div className="row">
          <div className="table">{display}</div>
        </div>
      </div>
    </>
  )
}
export default withRouter(ProductData)
