import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { articleActions } from '../../redux/actions'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import { PaginationBar } from '../../components/PaginationBar/PaginationBar'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

export const HomePage = ({ pageNum, setPageNum, query }) => {
  const [sortBy, setSortBy] = useState('')
  const [isActive, setIsActive] = useState(0)
  const features = [
    { title: 'Featured', sortBy: '' },
    { title: 'Date, old to new', sortBy: 'createdAt' },
    {
      title: 'Alphabetically, A-Z',
      sortBy: 'title'
    }
  ]
  let totalPage = 5
  const dispatch = useDispatch()
  const { blogs } = useSelector(state => state.article)

  useEffect(() => {
    dispatch(articleActions.getArticles(pageNum, '', sortBy, 10))
  }, [dispatch, sortBy, pageNum])

  return (
    <div className="home-page">
      {/* <section className="react-slice"></section> */}
      <Container>
        <Row>
          <Col className="col-open" md={0} lg={0} sm={12} xs={12} style={{}}>
            <div className="sidebar">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Featured
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {features.map((f, index) => {
                    return (
                      <Dropdown.Item
                        key={index}
                        onClick={() => {
                          setSortBy(f.sortBy)
                          dispatch(articleActions.getArticles(pageNum, '', f.sortBy, 10))
                        }}
                      >
                        {f.title}
                      </Dropdown.Item>
                    )
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-hidden" lg={3} md={3} sm={0} xs={0}>
            <div className="sidebar">
              <ul className="list-group mb-3">
                <li className="list-group-title">Categories</li>
                <button className="list-group-item">Travel</button>
                <button className="list-group-item">Nature</button>
                <button className="list-group-item">Communication</button>
                <button className="list-group-item">Entertainment</button>
                <button className="list-group-item border-bottom">Beauty</button>
              </ul>
              <ul className="list-group mb-3">
                <li className="list-group-title">Features</li>
                {features?.map((f, index) => {
                  return (
                    index > 0 && (
                      <button
                        key={index}
                        className={isActive === index + 1 ? 'list-group-item isActived' : 'list-group-item'}
                        onClick={() => {
                          if (isActive !== index + 1) {
                            setIsActive(index + 1)
                          } else {
                            setIsActive(0)
                          }
                          if (sortBy !== f.sortBy) {
                            setSortBy(f.sortBy)
                            dispatch(articleActions.getArticles(pageNum, '', f.sortBy, 10))
                          } else {
                            setSortBy('')
                            dispatch(articleActions.getArticles(pageNum, '', '', 10))
                          }
                        }}
                      >
                        {f.title}
                      </button>
                    )
                  )
                })}
              </ul>
            </div>
          </Col>
          <Col lg={9} sm={12} xs={12}>
            <ul className="list-unstyled">
              {blogs &&
                blogs?.map(b => {
                  return (
                    <li key={b.id} className="media d-flex mt-3 card-item">
                      <Link to={`/articles/${b.id}`}>
                        <img src={b.image} className="mr-3" style={{ width: 120, height: 120 }} alt="" />
                      </Link>
                      <div className="media-body">
                        <Link to={`/articles/${b.id}`} className="mt-0 mb-1 text-transform">
                          {b.title}
                        </Link>
                        <div className="createAt">
                          <Moment format="MM/DD/YYYY">{b.createdAt}</Moment>
                        </div>
                        {b.content}
                      </div>
                    </li>
                  )
                })}
            </ul>
          </Col>
        </Row>
      </Container>
      {blogs?.length > 0 && query === '' && (
        <PaginationBar pageNum={pageNum} setPageNum={setPageNum} sortBy={sortBy} totalPage={totalPage} />
      )}
    </div>
  )
}
