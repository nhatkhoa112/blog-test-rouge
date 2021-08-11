import React from 'react'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <ul className="content__items">
          <li>
            <button className="content__item">Blogs</button>
          </li>
          <li>
            <button className="content__item">About us</button>
          </li>
          <li>
            <button className="content__item">Products</button>
          </li>
          <li>
            <button className="content__item">Academy</button>
          </li>
          <li>
            <button className="content__item">Contact</button>
          </li>
        </ul>
        <ul className="content__icons">
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
          <li>
            <i className="fab fa-twitter"></i>
          </li>
          <li>
            <i className="fab fa-instagram"></i>
          </li>{' '}
          <li>
            <i className="fab fa-linkedin-in"></i>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <>Copyright@ArifurRahman-2018-AllRights Reserved.</>
      </div>
    </div>
  )
}
