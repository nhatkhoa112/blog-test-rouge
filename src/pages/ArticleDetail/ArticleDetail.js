import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Moment from 'react-moment'
import { articleActions } from '../../redux/actions'
import { Loading } from '../../components/Loading/Loading'

export const ArticleDetail = () => {
  const dispatch = useDispatch()
  const { article, isLoading } = useSelector(state => state.article)
  const { id } = useParams()
  useEffect(() => {
    dispatch(articleActions.getArticleById(id))
  }, [dispatch, id])

  if (isLoading) return <Loading />
  return (
    <div className="article-detail">
      <div className="article__card">
        <div className="card__createdAt">
          - <Moment format="MMMM Do YYYY">{article.createdAt}</Moment> -
        </div>
        <div className="card__title">{article.title}</div>
        <div className="card__image">
          <img src={article.image} alt="" />
        </div>
        <div className="card__content">{article.content}</div>
        <div className="card__more-info">
          <div className="info__left">
            <div className="reactions">
              <svg xmlns="http://www.w3.org/2000/svg" width="78.818" height="17.875" viewBox="0 0 78.818 17.875">
                <g id="Group_11" data-name="Group 11" transform="translate(-417.317 -1790.813)">
                  <text
                    id="_0"
                    data-name={0}
                    transform="translate(492.135 1804)"
                    fill="#c3ccd3"
                    fontSize={12}
                    fontFamily="Lato-Regular, Lato"
                  >
                    <tspan x="-3.48" y={0}>
                      0
                    </tspan>
                  </text>
                  <text
                    id="_11"
                    data-name={11}
                    transform="translate(447.651 1804)"
                    fill="#c3ccd3"
                    fontSize={12}
                    fontFamily="Lato-Regular, Lato"
                  >
                    <tspan x="-6.96" y={0}>
                      11
                    </tspan>
                  </text>
                  <path
                    id="Path_21"
                    data-name="Path 21"
                    d="M.688-16.5v8.25H4.813v.688H0v-9.625H12.375v4.813h-.687V-16.5ZM5.5-11.687H17.875v9.625H15.813V.688h-.559L12.5-2.062h-7ZM17.188-2.75V-11h-11v8.25h6.574L15.125-.387V-2.75Z"
                    transform="translate(464.097 1808)"
                    fill="#c3ccd3"
                  />
                  <path
                    id="Path_22"
                    data-name="Path 22"
                    d="M8.125,0,6.953-1.055Q4.922-2.93,4.023-3.789T1.973-5.977A8.714,8.714,0,0,1,.41-8.34,5.832,5.832,0,0,1,0-10.508a4.349,4.349,0,0,1,1.289-3.2A4.3,4.3,0,0,1,4.453-15a4.589,4.589,0,0,1,3.672,1.719A4.589,4.589,0,0,1,11.8-15a4.3,4.3,0,0,1,3.164,1.289,4.349,4.349,0,0,1,1.289,3.2,5.832,5.832,0,0,1-.41,2.168,8.714,8.714,0,0,1-1.562,2.363q-1.152,1.328-2.051,2.188T9.3-1.055Z"
                    transform="translate(417.317 1808)"
                    fill="#f25b84"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="info__right">+ 20 mores</div>
        </div>
      </div>
    </div>
  )
}
