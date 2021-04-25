import React, { Component } from 'react';



class Home extends Component{
    render(){
       
       return( 
           <div>
               
               <div className="main-top">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div className="custom-select-box">
                        <select id="basic" className="selectpicker show-tick form-control" data-placeholder="$ USD">
							<option>¥ JPY</option>
							<option>$ USD</option>
							<option>€ EUR</option>
						</select>
                    </div>
                    <div className="right-phone-box">
                        <p>Call US :- <a href="#"> +11 900 800 100</a></p>
                    </div>
                    <div className="our-link">
                        <ul>
                            <li><a href="#"><i className="fa fa-user s_color"></i> My Account</a></li>
                            <li><a href="#"><i className="fas fa-location-arrow"></i> Our location</a></li>
                            <li><a href="#"><i className="fas fa-headset"></i> Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div className="login-box">
						<select id="basic" className="selectpicker show-tick form-control" data-placeholder="Sign In">
							<option>Register Here</option>
							<option>Sign In</option>
						</select>
					</div>
                    <div className="text-slid-box">
                        <div id="offer-box" className="carouselTicker">
                            <ul className="offer-box">
                                <li>
                                    <i className="fab fa-opencart"></i> 20% off Entire Purchase Promo code: offT80
                                </li>
                                <li>
                                    <i className="fab fa-opencart"></i> 50% - 80% off on Vegetables
                                </li>
                                <li>
                                    <i className="fab fa-opencart"></i> Off 10%! Shop Vegetables
                                </li>
                                <li>
                                    <i className="fab fa-opencart"></i> Off 50%! Shop Now
                                </li>
                                <li>
                                    <i className="fab fa-opencart"></i> Off 10%! Shop Vegetables
                                </li>
                                <li>
                                    <i className="fab fa-opencart"></i> 50% - 80% off on Vegetables
                                </li>
                                <li>
                                    <i className="fab fa-opencart"></i> 20% off Entire Purchase Promo code: offT30
                                </li>
                                <li>
                                    <i className="fab fa-opencart"></i> Off 50%! Shop Now 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <header className="main-header">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
            <div className="container">
                 Start Header Navigation 
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
                    <a className="navbar-brand" href="index.html"><img src="images/logo.png" className="logo" alt=""/></a>
                </div>
              
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                        <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                        <li className="dropdown">
                            <a href="#" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">SHOP</a>
                            <ul className="dropdown-menu">
								<li><a href="shop.html">Sidebar Shop</a></li>
								<li><a href="shop-detail.html">Shop Detail</a></li>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="my-account.html">My Account</a></li>
                                <li><a href="wishlist.html">Wishlist</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li>
                        <li className="nav-item"><a className="nav-link" href="contact-us.html">Contact Us</a></li>
                    </ul>
                </div>
            
                <div className="attr-nav">
                    <ul>
                        <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                        <li className="side-menu">
							<a href="#">
								<i className="fa fa-shopping-bag"></i>
								<span className="badge">3</span>
								<p>My Cart</p>
							</a>
						</li>
                    </ul>
                </div>
               
            </div>
           
            <div className="side">
                <a href="#" className="close-side"><i className="fa fa-times"></i></a>
                <li className="cart-box">
                    <ul className="cart-list">
                        <li>
                            <a href="#" className="photo"><img src="images/img-pro-01.jpg" className="cart-thumb" alt="" /></a>
                            <h6><a href="#">Delica omtantur </a></h6>
                            <p>1x - <span className="price">$80.00</span></p>
                        </li>
                        <li>
                            <a href="#" className="photo"><img src="images/img-pro-02.jpg" className="cart-thumb" alt="" /></a>
                            <h6><a href="#">Omnes ocurreret</a></h6>
                            <p>1x - <span className="price">$60.00</span></p>
                        </li>
                        <li>
                            <a href="#" className="photo"><img src="images/img-pro-03.jpg" className="cart-thumb" alt="" /></a>
                            <h6><a href="#">Agam facilisis</a></h6>
                            <p>1x - <span className="price">$40.00</span></p>
                        </li>
                        <li className="total">
                            <a href="#" className="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                            <span className="float-right"><strong>Total</strong>: $180.00</span>
                        </li>
                    </ul>
                </li>
            </div>
         
        </nav>
        
    </header>

    <div className="top-search">
        <div className="container">
            <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-search"></i></span>
                <input type="text" className="form-control" placeholder="Search"/>
                <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
            </div>
        </div>
    </div>
     End Top Search 

     Start Slider 
    <div id="slides-shop" className="cover-slides">
        <ul className="slides-container">
            <li className="text-center">
                <img src="images/banner-01.jpg" alt=""/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="m-b-20"><strong>Welcome To <br/> Freshshop</strong></h1>
                            <p className="m-b-40">See how your users experience your website in realtime or view <br/> trends to see any changes in performance over time.</p>
                            <p><a className="btn hvr-hover" href="#">Shop New</a></p>
                        </div>
                    </div>
                </div>
            </li>
            <li className="text-center">
                <img src="images/banner-02.jpg" alt=""/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="m-b-20"><strong>Welcome To <br/> Freshshop</strong></h1>
                            <p className="m-b-40">See how your users experience your website in realtime or view <br/> trends to see any changes in performance over time.</p>
                            <p><a className="btn hvr-hover" href="#">Shop New</a></p>
                        </div>
                    </div>
                </div>
            </li>
            <li className="text-center">
                <img src="images/banner-03.jpg" alt=""/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="m-b-20"><strong>Welcome To <br/> Freshshop</strong></h1>
                            <p className="m-b-40">See how your users experience your website in realtime or view <br/> trends to see any changes in performance over time.</p>
                            <p><a className="btn hvr-hover" href="#">Shop New</a></p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div className="slides-navigation">
            <a href="#" className="next"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
            <a href="#" className="prev"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
        </div>
    </div>
     End Slider 

     Start Categories  
    <div className="categories-shop">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="shop-cat-box">
                        <img className="img-fluid" src="images/categories_img_01.jpg" alt="" />
                        <a className="btn hvr-hover" href="#">Lorem ipsum dolor</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="shop-cat-box">
                        <img className="img-fluid" src="images/categories_img_02.jpg" alt="" />
                        <a className="btn hvr-hover" href="#">Lorem ipsum dolor</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="shop-cat-box">
                        <img className="img-fluid" src="images/categories_img_03.jpg" alt="" />
                        <a className="btn hvr-hover" href="#">Lorem ipsum dolor</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
     End Categories 
	
	<div className="box-add-products">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12">
					<div className="offer-box-products">
						<img className="img-fluid" src="images/add-img-01.jpg" alt="" />
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12">
					<div className="offer-box-products">
						<img className="img-fluid" src="images/add-img-02.jpg" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>

     Start Products  
    <div className="products-box">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-all text-center">
                        <h1>Fruits & Vegetables</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="special-menu text-center">
                        <div className="button-group filter-button-group">
                            <button className="active" data-filter="*">All</button>
                            <button data-filter=".top-featured">Top featured</button>
                            <button data-filter=".best-seller">Best seller</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row special-list">
                <div className="col-lg-3 col-md-6 special-grid best-seller">
                    <div className="products-single fix">
                        <div className="box-img-hover">
                            <div className="type-lb">
                                <p className="sale">Sale</p>
                            </div>
                            <img src="images/img-pro-01.jpg" className="img-fluid" alt="Image"/>
                            <div className="mask-icon">
                                <ul>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                </ul>
                                <a className="cart" href="#">Add to Cart</a>
                            </div>
                        </div>
                        <div className="why-text">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <h5> $7.79</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 special-grid top-featured">
                    <div className="products-single fix">
                        <div className="box-img-hover">
                            <div className="type-lb">
                                <p className="new">New</p>
                            </div>
                            <img src="images/img-pro-02.jpg" className="img-fluid" alt="Image"/>
                            <div className="mask-icon">
                                <ul>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                </ul>
                                <a className="cart" href="#">Add to Cart</a>
                            </div>
                        </div>
                        <div className="why-text">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <h5> $9.79</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 special-grid top-featured">
                    <div className="products-single fix">
                        <div className="box-img-hover">
                            <div className="type-lb">
                                <p className="sale">Sale</p>
                            </div>
                            <img src="images/img-pro-03.jpg" className="img-fluid" alt="Image"/>
                            <div className="mask-icon">
                                <ul>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                </ul>
                                <a className="cart" href="#">Add to Cart</a>
                            </div>
                        </div>
                        <div className="why-text">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <h5> $10.79</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 special-grid best-seller">
                    <div className="products-single fix">
                        <div className="box-img-hover">
                            <div className="type-lb">
                                <p className="sale">Sale</p>
                            </div>
                            <img src="images/img-pro-04.jpg" className="img-fluid" alt="Image"/>
                            <div className="mask-icon">
                                <ul>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                </ul>
                                <a className="cart" href="#">Add to Cart</a>
                            </div>
                        </div>
                        <div className="why-text">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <h5> $15.79</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     End Products  

     Start Blog  
    <div className="latest-blog">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-all text-center">
                        <h1>latest blog</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4">
                    <div className="blog-box">
                        <div className="blog-img">
                            <img className="img-fluid" src="images/blog-img.jpg" alt="" />
                        </div>
                        <div className="blog-content">
                            <div className="title-blog">
                                <h3>Fusce in augue non nisi fringilla</h3>
                                <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                            </div>
                            <ul className="option-blog">
                                <li><a href="#"><i className="far fa-heart"></i></a></li>
                                <li><a href="#"><i className="fas fa-eye"></i></a></li>
                                <li><a href="#"><i className="far fa-comments"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4">
                    <div className="blog-box">
                        <div className="blog-img">
                            <img className="img-fluid" src="images/blog-img-01.jpg" alt="" />
                        </div>
                        <div className="blog-content">
                            <div className="title-blog">
                                <h3>Fusce in augue non nisi fringilla</h3>
                                <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                            </div>
                            <ul className="option-blog">
                                <li><a href="#"><i className="far fa-heart"></i></a></li>
                                <li><a href="#"><i className="fas fa-eye"></i></a></li>
                                <li><a href="#"><i className="far fa-comments"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4">
                    <div className="blog-box">
                        <div className="blog-img">
                            <img className="img-fluid" src="images/blog-img-02.jpg" alt="" />
                        </div>
                        <div className="blog-content">
                            <div className="title-blog">
                                <h3>Fusce in augue non nisi fringilla</h3>
                                <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                            </div>
                            <ul className="option-blog">
                                <li><a href="#"><i className="far fa-heart"></i></a></li>
                                <li><a href="#"><i className="fas fa-eye"></i></a></li>
                                <li><a href="#"><i className="far fa-comments"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     End Blog  


     Start Instagram Feed  
    <div className="instagram-box">
        <div className="main-instagram owl-carousel owl-theme">
            <div className="item">
                <div className="ins-inner-box">
                    <img src="images/instagram-img-01.jpg" alt="" />
                    <div className="hov-in">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="ins-inner-box">
                    <img src="images/instagram-img-02.jpg" alt="" />
                    <div className="hov-in">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="ins-inner-box">
                    <img src="images/instagram-img-03.jpg" alt="" />
                    <div className="hov-in">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="ins-inner-box">
                    <img src="images/instagram-img-04.jpg" alt="" />
                    <div className="hov-in">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="ins-inner-box">
                    <img src="images/instagram-img-05.jpg" alt="" />
                    <div className="hov-in">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="ins-inner-box">
                    <img src="images/instagram-img-06.jpg" alt="" />
                    <div className="hov-in">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="ins-inner-box">
                    <img src="images/instagram-img-07.jpg" alt="" />
                    <div className="hov-in">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="ins-inner-box">
                    <img src="images/instagram-img-08.jpg" alt="" />
                    <div className="hov-in">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="ins-inner-box">
                    <img src="images/instagram-img-09.jpg" alt="" />
                    <div className="hov-in">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="ins-inner-box">
                    <img src="images/instagram-img-05.jpg" alt="" />
                    <div className="hov-in">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <footer>
        <div className="footer-main">
            <div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="footer-top-box">
							<h3>Business Time</h3>
							<ul className="list-time">
								<li>Monday - Friday: 08.00am to 05.00pm</li> <li>Saturday: 10.00am to 08.00pm</li> <li>Sunday: <span>Closed</span></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="footer-top-box">
							<h3>Newsletter</h3>
							<form className="newsletter-box">
								<div className="form-group">
									<input className="" type="email" name="Email" placeholder="Email Address*" />
									<i className="fa fa-envelope"></i>
								</div>
								<button className="btn hvr-hover" type="submit">Submit</button>
							</form>
						</div>
					</div>
					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="footer-top-box">
							<h3>Social Media</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<ul>
                                <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-pinterest-p" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                            </ul>
						</div>
					</div>
				</div>
				<hr/>
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-widget">
                            <h4>About Freshshop</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> 							
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-link">
                            <h4>Information</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Customer Service</a></li>
                                <li><a href="#">Our Sitemap</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Delivery Information</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-link-contact">
                            <h4>Contact Us</h4>
                            <ul>
                                <li>
                                    <p><i className="fas fa-map-marker-alt"></i>Address: Michael I. Days 3756 <br/>Preston Street Wichita,<br/> KS 67213 </p>
                                </li>
                                <li>
                                    <p><i className="fas fa-phone-square"></i>Phone: <a href="tel:+1-888705770">+1-888 705 770</a></p>
                                </li>
                                <li>
                                    <p><i className="fas fa-envelope"></i>Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>


           </div>
    

    
        )
    }
}
export default Home