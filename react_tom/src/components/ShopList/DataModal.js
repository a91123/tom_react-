import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
function DataModal(props) {
  const { modalShow, setModalShow, setwantDel, delData, v, myData } = props
  return (
    <>
      <Modal
        {...props}
        size="lg"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">警告</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>請問是否要下架該商品</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setModalShow(false)
            }}
          >
            Close
          </Button>
          <Button
            onClick={() => {
              console.log(v)
              setModalShow(false)
            }}
          >
            確認
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default DataModal
