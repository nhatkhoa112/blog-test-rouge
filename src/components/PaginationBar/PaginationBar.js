import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { articleActions } from '../../redux/actions'

export const PaginationBar = ({ pageNum, setPageNum, totalPage }) => {
  const [disableFirst, setDisableFirst] = useState(pageNum === 1 ? true : false)
  const [disableLast, setDisableLast] = useState(pageNum === totalPage ? true : false)
  const dispatch = useDispatch()
  const handleClickOnFirst = e => {
    e.preventDefault()
    let newPage = 1
    setPageNum(newPage)
    setDisableFirst(true)
    setDisableLast(false)
    dispatch(articleActions.getArticles(newPage))
  }
  const handleClickOnPrev = e => {
    e.preventDefault()
    let newPage = pageNum
    newPage = pageNum - 1
    setPageNum(newPage)
    if (newPage !== 1) {
      setDisableFirst(false)
      setDisableLast(false)
    } else {
      setDisableFirst(true)
    }
    dispatch(articleActions.getArticles(newPage))
  }

  const handleClickOnLast = e => {
    e.preventDefault()
    let newPage = totalPage
    setPageNum(newPage)
    setDisableFirst(false)
    setDisableLast(true)
    dispatch(articleActions.getArticles(newPage))
  }
  const handleClickOnNext = e => {
    e.preventDefault()
    let newPage = pageNum + 1
    if (pageNum < totalPage) setPageNum(newPage)
    if (newPage !== totalPage) {
      setDisableFirst(false)
      setDisableLast(false)
    } else {
      setDisableLast(true)
    }
    dispatch(articleActions.getArticles(newPage))
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={disableFirst ? 'page-item disabled' : 'page-item'}>
          <button onClick={handleClickOnFirst} className="page-link">
            First
          </button>
        </li>
        <li className={disableFirst ? 'page-item disabled' : 'page-item'}>
          <button onClick={handleClickOnPrev} className="page-link">
            Previous
          </button>
        </li>
        <li className="page-item">
          <button onClick={handleClickOnFirst} className={pageNum === 1 ? 'page-link isActive' : 'page-link'}>
            1
          </button>
        </li>
        {pageNum > 2 && (
          <li className="page-item">
            <button active className="page-link">
              ...
            </button>
          </li>
        )}
        {pageNum > 1 && pageNum < totalPage && (
          <li className="page-item">
            <button className="page-link isActive">{pageNum}</button>
          </li>
        )}
        {pageNum < totalPage - 1 && (
          <li className="page-item">
            <button className="page-link">...</button>
          </li>
        )}
        {totalPage > 1 && (
          <li className="page-item">
            <button onClick={handleClickOnLast} className={pageNum === totalPage ? 'page-link isActive' : 'page-link'}>
              {totalPage}
            </button>
          </li>
        )}
        <li className={disableLast ? 'page-item disabled' : 'page-item'}>
          <button onClick={handleClickOnNext} className="page-link" aria-disabled={pageNum === totalPage}>
            Next
          </button>
        </li>
        <li className={disableLast ? 'page-item disabled' : 'page-item'}>
          <button onClick={handleClickOnLast} className="page-link" aria-disabled={pageNum === totalPage}>
            Last
          </button>
        </li>
      </ul>
    </nav>
  )
}
