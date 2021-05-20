import React from 'react'

const Curso = () => (
    <article class="card">
      <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="https://scontent.flim1-2.fna.fbcdn.net/v/t1.6435-9/83225082_2529414984013547_8177895134931714048_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a4a2d7&_nc_ohc=jWeuCR_P_FwAX90gmhb&_nc_ht=scontent.flim1-2.fna&oh=b192a01b4da93c4646eb6369676b66c2&oe=60CB281A" alt="greta"/>
      </div>
      <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">
          Programación orientada a objetos con Go
        </h3>
        <div class="s-mb-2 s-main-center">
          <div class="card__teacher s-cross-center">
            <div class="card__avatar s-mr-1">
              <div class="circle img-container">
                <img src="https://scontent.flim1-2.fna.fbcdn.net/v/t1.6435-9/141115726_2844145469207162_6878228424090213429_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=AukrupnyY18AX9tHiZg&_nc_ht=scontent.flim1-2.fna&oh=b27f51aed49462d9a3336c2c567df9df&oe=60CB76BC" alt="" />
              </div>
            </div>
            <span class="small">Greta Tarazona</span>
          </div>
        </div>
        <div class="s-main-center">
          <a class="button--ghost-alert button--tiny" href="#">$ Invaluable</a>
        </div>
      </div>
    </article> 
)

export default Curso;