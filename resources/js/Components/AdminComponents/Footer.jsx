// import React from 'react'

export default function Footer() {
  return (
  
      <footer className="footer pt-3 " >
          <div className="container-fluid">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6 mb-lg-0 mb-4">
                <div
                  className="copyright text-center text-sm text-muted text-lg-start"
                >
                  ©
                  <script>
                    document.write(new Date().getFullYear());
                  </script>
                  , made with <i className="fa fa-heart"></i> by
                  <a
                    className="font-weight-bold"
                    target="_blank"
                    >Acute Dev</a>
                  for a better web.
                </div>
              </div>
              <div className="col-lg-6">
                <ul
                  className="nav nav-footer justify-content-center justify-content-lg-end"
                >
                  {/* <li className="nav-item">
                    <p
                    
                      className="nav-link text-muted"
                      target="_blank"
                      >
                        Creative Tim</p>
                    
                  </li> */}
                  <li className="nav-item">
                    <p
                      className="nav-link text-muted"
                      target="_blank"
                      >About Us</p>
                  </li>
                  <li className="nav-item">
                    <p
                      className="nav-link text-muted"
                      target="_blank"
                      >Contact Us</p>
                  </li>
                  <li className="nav-item">
                    <p
                      className="nav-link pe-0 text-muted"
                      target="_blank"
                      >License</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
 
  )
}

