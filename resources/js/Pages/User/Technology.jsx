import React, { useState } from "react";import UserSidebar from '@/Components/UserComponents/UserSidebar';
import PageHead from "@/Components/UserComponents/PageHead";
import UserNav from "@/Components/UserComponents/UserNav";



export default function Technology() {
  const [showNav, setShowNav] = useState(false);
  return (
            <>
                <UserNav />
                <div className="toggle-btn">
                    <div
                        className="btn btn-primary btn-sm"
                        onClick={() => setShowNav(!showNav)}
                    >
                        btn
                    </div>
                </div>
    
                <UserSidebar show={showNav} />
                {/* <section className="main section-padding">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 col-sm-10 mx-auto">
                                <div className="theiaStickySidebar">
                                    <div className="main__content">
                                        <img
                                            src="img/politics-02.jpg"
                                            alt="header main image one"
                                            className="main__image"
                                        />
                                        <div className="main__text">
                                            <h3 className="heading-tertiary mb-4">
                                                <a href="blog-post.html">
                                                    Most exclusive report of political impact on people's lives in 2019.
                                                </a>
                                            </h3>
                                            <div className="main__link">
                                                <h5>May, 15 2019</h5>
                                                <div className="main__icon">
                                                    <i className="fa fa-heart-o mr-4" title="Favorite"></i>
                                                    <i className="fa fa-bookmark-o" title="Book Mark"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main__subcard">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 mx-auto">
                                                <img src="img/fashion-01.jpg" alt="article card image" className="main__subcard--image" />
                                            </div>
                                            <div className="col-md-6 col-sm-12 mx-auto align-self-center">
                                                <div className="main__subcard--text">
                                                    <h3 className="heading-quaternary weight">Fashion holiday festival started in the deep square park</h3>
                                                    <p className="paragraph">Donec auctor, orci at blandit bibendum, tellus erat ultricies ante, aclobortis justo lorem a urna.</p>
                                                    <div className="main__link">
                                                        <p className="heading-tag">
                                                            <a href="blog-post.html">Read More <i className="fa fa-arrow-right"></i></a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <section className="main-banner">
                                        <div className="main-banner__content">
                                            <h1 className="heading-secondary">
                                                Bloggers newsmagazine committed to bringing you the trending news and global updates.
                                            </h1>
                                        </div>
                                    </section>
    
                                    <div className="row mb-5">
                                        <div className="col-md-6 col-sm-12 mx-auto">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="heading-quaternary weight">Trending news heading</h5>
                                                    <p className="paragraph">
                                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                                    </p>
                                                    <button className="btn-blogger" onClick={() => location.href='blog-post.html'}>Read More</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12 mx-auto">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="heading-quaternary weight">Fashion news heading</h5>
                                                    <p className="paragraph">
                                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                                    </p>
                                                    <button className="btn-blogger" onClick={() => location.href='blog-post.html'}>Read More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="main__subcard">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 mx-auto align-self-center">
                                                <div className="main__subcard--text">
                                                    <h3 className="heading-quaternary weight">Fashion holiday festival started in the deep square park</h3>
                                                    <p className="paragraph">Donec auctor, orci at blandit bibendum, tellus erat ultricies ante, aclobortis justo lorem a urna.</p>
                                                    <div className="main__link">
                                                        <p className="heading-tag">
                                                            <a href="blog-post.html">Read More <i className="fa fa-arrow-right"></i>
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 mx-auto">
                                                <div id="carouselControls" className="carousel slide" data-ride="carousel">
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                            <img className="d-block w-100" src="img/health-01.jpg" alt="First slide" />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img className="d-block w-100" src="img/health-02.jpg" alt="Second slide" />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img className="d-block w-100" src="img/health-03.jpg" alt="Third slide" />
                                                        </div>
                                                    </div>
                                                    <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="sr-only">Previous</span>
                                                    </a>
                                                    <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                                                        <span className="carousel-control-next-icon" ariahidden="true"></span>
                                                        <span className="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="row mt-5">
                                        <div className="col-md-6 col-sm-12 mx-auto">
                                            <div className="card">
                                                <img className="card-img-top" src="img/economy-01.jpg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="heading-tag">AI helps organization to grow</h5>
                                                    <p className="card-text">
                                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                                    </p>
                                                    <button className="btn-blogger" onClick={() => location.href='blog-post.html'}>Read More</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12 mx-auto">
                                            <div className="card">
                                                <img className="card-img-top" src="img/politics-03.jpg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="heading-tag">Global leaders looking for co-operations</h5>
                                                    <p className="card-text">
                                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                                    </p>
                                                    <button className="btn-blogger" onClick={() => location.href='blog-post.html'}>Read More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-10 mx-auto sidebar">
                                <div className="theiaStickySidebar">
                                    <aside className="main__sidebar">
                                        <div className="main__search">
                                            <form className="search-form">
                                                <input type="search" placeholder="What do you want to Search?" />
                                                <button className="btn btn-search" type="submit">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                        <div className="main__author">
                                            <img src="img/author-01.jpg" alt="author image" className="main__author--image" />
                                            <p className="paragraph">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae nisl nunc. Curabitur hendrerit neque lacinia eros euismod mollis. Pellentesque cursus lorem eros, non tempus lectus ultricies sed.
                                            </p>
                                        </div>
                                        <div className="main__category">
                                            <h3 className="heading-tertiary">Categories</h3>
                                            <hr />
                                            <ul className="main__category--list">
                                                <li className="main__category--item">
                                                    <a href="#">
                                                        <span>Restaurant</span>
                                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className="main__category--item">
                                                    <a href="#">
                                                        <span>Health &amp; Fitness</span>
                                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className="main__category--item">
                                                    <a href="#">
                                                        <span>Holiday at Island</span>
                                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className="main__category--item">
                                                    <a href="#">
                                                        <span>Isolated Resorts</span>
                                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className="main__category--item">
                                                    <a href="#">
                                                        <span>Industry Updates</span>
                                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className="main__category--item">
                                                    <a href="#">
                                                        <span>Promotions</span>
                                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="main__recent">
                                            <h3 className="heading-tertiary">Recent Posts</h3>
                                            <hr className="style-main-thin" />
                                            <div className="main__recent--list">
                                                <img src="img/politics-03.jpg" alt="post image one" className="main__recent--img" />
                                                <div className="main__recent--details">
                                                    <a href="#">
                                                        <h4 className="heading-hover">Climate change impacting world economy</h4>
                                                    </a>
                                                    <i className="fa fa-calendar" aria-hidden="true" />
                                                    <span className="main__recent--contact">May 22, 2019</span>
                                                </div>
    
                                                <img src="img/health-03.jpg" alt="post image one" className="main__recent--img" />
                                                <div className="main__recent--details">
                                                    <a href="#">
                                                        <h4 className="heading-hover">Tips to good life and Energetic environment</h4>
                                                    </a>
                                                    <i className="fa fa-calendar" aria-hidden="true" />
                                                    <span className="main__recent--contact">March 11, 2019</span>
                                                </div>
    
                                                <img src="img/fashion-01.jpg" alt="post image one" className="main__recent--img" />
                                                <div className="main__recent--details">
                                                    <a href="#">
                                                        <h4 className="heading-hover">Summer fashion collection and tips</h4>
                                                    </a>
                                                    <i className="fa fa-calendar" aria-hidden="true" />
                                                    <span className="main__recent--contact">March 21, 2019</span>
                                                </div>
    
                                                <img src="img/health-02.jpg" alt="post image one" className="main__recent--img" />
                                                <div className="main__recent--details">
                                                    <a href="#">
                                                        <h4 className="heading-hover">Better health, better life. Work on yourself</h4>
                                                    </a>
                                                    <i className="fa fa-calendar" aria-hidden="true" />
                                                    <span className="main__recent--contact">April 01, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main__tags">
                                            <h3 className="heading-tertiary">Tags</h3>
                                            <hr className="style-main-thin" />
                                            <ul className="main__tags--list">
                                                <li className="main__tags--item"><a href="#">Politics</a></li>
                                                <li className="main__tags--item"><a href="#">Artificial Intelligence</a></li>
                                                <li className="main__tags--item"><a href="#">Industry 4.0</a></li>
                                                <li className="main__tags--item"><a href="#">Health</a></li>
                                                <li className="main__tags--item"><a href="#">Climate Change</a></li>
                                                <li className="main__tags--item"><a href="#">Global Warming</a></li>
                                                <li className="main__tags--item"><a href="#">Nature</a></li>
                                                <li className="main__tags--item"><a href="#">Monsoon</a></li>
                                            </ul>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
    
    <PageHead/>
    
    
    
    <div className="news-content">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-8">col-12 col-sm-8</div>
                <div className="col-12 col-sm-4">col-12 col-sm-4</div>
            </div>
        </div>
    </div>
    
            </>
  )
}
