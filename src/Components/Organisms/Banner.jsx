import React from 'react'

const Banner = () => (
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://images.unsplash.com/photo-1621359729283-c83f6d0da708?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Título del banner</p>
          <p> Tu futuro te está esperando</p>
          <a href="https://www.facebook.com/photo?fbid=2844145465873829&set=a.1378298709125186" target= "_blank" rel="noreferrer" className="button">Suscribirse</a>
        </div>
      </div>
    </div>
  </div>   
)

export default Banner

