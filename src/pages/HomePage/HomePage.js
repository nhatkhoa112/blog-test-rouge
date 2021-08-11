import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { articleActions } from '../../redux/actions'
import { Container, Row, Col } from 'react-bootstrap'
import { PaginationBar } from '../../components/PaginationBar/PaginationBar'

export const HomePage = () => {
  const [pageNum, setPageNum] = useState(1)
  let totalPage = 5
  const dispatch = useDispatch()
  const { blogs } = useSelector(state => state.article)
  console.log(blogs)
  useEffect(() => {
    dispatch(articleActions.getArticles(1, '', '', 10))
  }, [dispatch])
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ul className="list-unstyled">
              {blogs &&
                blogs?.map(b => {
                  return (
                    <li key={b.id} className="media">
                      <img src={b.image} className="mr-3" alt="" />
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">{b.title}</h5>
                        {b.content}
                      </div>
                    </li>
                  )
                })}
            </ul>
          </Col>
        </Row>
      </Container>
      <PaginationBar pageNum={pageNum} setPageNum={setPageNum} totalPage={totalPage} />
    </div>
  )
}
