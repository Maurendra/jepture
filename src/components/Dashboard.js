import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import jQuery from 'jquery';

import './custom.css';

import './template/stisla-master/assets/custom/jqvmap/dist/jqvmap.min.css';
import './template/stisla-master/assets/custom/summernote/dist/summernote-bs4.css';
import './template/stisla-master/assets/custom/owl.carousel/dist/assets/owl.carousel.min.css';
import './template/stisla-master/assets/custom/owl.carousel/dist/assets/owl.theme.default.min.css';

import './template/stisla-master/assets/css/style.css';
import './template/stisla-master/assets/css/components.css';

class Dashboard extends Component {

    async componentDidMount() {
    }

    loadScript = function (src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        document.body.appendChild(tag);
    }

    render() {
        return (
            <div id="app" >
                <div className="main-wrapper">
                    <div className="navbar-bg"></div>
                    <nav className="navbar navbar-expand-lg main-navbar">
                        <form className="form-inline mr-auto">
                            <ul className="navbar-nav mr-3">
                                <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars"></i></a></li>
                                <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search"></i></a></li>
                            </ul>
                            <div className="search-element">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250" />
                                <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                                <div className="search-backdrop"></div>
                                <div className="search-result">
                                    <div className="search-header">
                                        Histories
                                    </div>
                                    <div className="search-item">
                                        <a href="#">How to hack NASA using CSS</a>
                                        <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                                    </div>
                                    <div className="search-item">
                                        <a href="#">Kodinger.com</a>
                                        <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                                    </div>
                                    <div className="search-item">
                                        <a href="#">#Stisla</a>
                                        <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                                    </div>
                                    <div className="search-header">
                                        Result
                                    </div>
                                    <div className="search-item">
                                        <a href="#">
                                            <img className="mr-3 rounded" width="30" src={require("./template/stisla-master/assets/img/products/product-3-50.png")} alt="product" />
                                            oPhone S9 Limited Edition
                </a>
                                    </div>
                                    <div className="search-item">
                                        <a href="#">
                                            <img className="mr-3 rounded" width="30" src={require("./template/stisla-master/assets/img/products/product-2-50.png")} alt="product" />
                                            Drone X2 New Gen-7
                </a>
                                    </div>
                                    <div className="search-item">
                                        <a href="#">
                                            <img className="mr-3 rounded" width="30" src={require("./template/stisla-master/assets/img/products/product-1-50.png")} alt="product" />
                                            Headphone Blitz
                </a>
                                    </div>
                                    <div className="search-header">
                                        Projects
              </div>
                                    <div className="search-item">
                                        <a href="#">
                                            <div className="search-icon bg-danger text-white mr-3">
                                                <i className="fas fa-code"></i>
                                            </div>
                                            Stisla Admin Template
                </a>
                                    </div>
                                    <div className="search-item">
                                        <a href="#">
                                            <div className="search-icon bg-primary text-white mr-3">
                                                <i className="fas fa-laptop"></i>
                                            </div>
                                            Create a new Homepage Design
                </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav navbar-right">
                            <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle beep"><i className="far fa-envelope"></i></a>
                                <div className="dropdown-menu dropdown-list dropdown-menu-right">
                                    <div className="dropdown-header">Messages
                <div className="float-right">
                                            <a href="#">Mark All As Read</a>
                                        </div>
                                    </div>
                                    <div className="dropdown-list-content dropdown-list-message">
                                        <a href="#" className="dropdown-item dropdown-item-unread">
                                            <div className="dropdown-item-avatar">
                                                <img alt="image" src={require("./template/stisla-master/assets/img/avatar/avatar-1.png")} className="rounded-circle" />
                                                <div className="is-online"></div>
                                            </div>
                                            <div className="dropdown-item-desc">
                                                <b>Kusnaedi</b>
                                                <p>Hello, Bro!</p>
                                                <div className="time">10 Hours Ago</div>
                                            </div>
                                        </a>
                                        <a href="#" className="dropdown-item dropdown-item-unread">
                                            <div className="dropdown-item-avatar">
                                                <img alt="image" src={require("./template/stisla-master/assets/img/avatar/avatar-2.png")} className="rounded-circle" />
                                            </div>
                                            <div className="dropdown-item-desc">
                                                <b>Dedik Sugiharto</b>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                                <div className="time">12 Hours Ago</div>
                                            </div>
                                        </a>
                                        <a href="#" className="dropdown-item dropdown-item-unread">
                                            <div className="dropdown-item-avatar">
                                                <img alt="image" src="../assets/img/avatar/avatar-3.png" className="rounded-circle" />
                                                <div className="is-online"></div>
                                            </div>
                                            <div className="dropdown-item-desc">
                                                <b>Agung Ardiansyah</b>
                                                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                <div className="time">12 Hours Ago</div>
                                            </div>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <div className="dropdown-item-avatar">
                                                <img alt="image" src={require("./template/stisla-master/assets/img/avatar/avatar-4.png")} className="rounded-circle" />
                                            </div>
                                            <div className="dropdown-item-desc">
                                                <b>Ardian Rahardiansyah</b>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                                                <div className="time">16 Hours Ago</div>
                                            </div>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <div className="dropdown-item-avatar">
                                                <img alt="image" src={require("./template/stisla-master/assets/img/avatar/avatar-5.png")} className="rounded-circle" />
                                            </div>
                                            <div className="dropdown-item-desc">
                                                <b>Alfa Zulkarnain</b>
                                                <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                                <div className="time">Yesterday</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-footer text-center">
                                        <a href="#">View All <i className="fas fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell"></i></a>
                                <div className="dropdown-menu dropdown-list dropdown-menu-right">
                                    <div className="dropdown-header">Notifications
                <div className="float-right">
                                            <a href="#">Mark All As Read</a>
                                        </div>
                                    </div>
                                    <div className="dropdown-list-content dropdown-list-icons">
                                        <a href="#" className="dropdown-item dropdown-item-unread">
                                            <div className="dropdown-item-icon bg-primary text-white">
                                                <i className="fas fa-code"></i>
                                            </div>
                                            <div className="dropdown-item-desc">
                                                Template update is available now!
                    <div className="time text-primary">2 Min Ago</div>
                                            </div>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <div className="dropdown-item-icon bg-info text-white">
                                                <i className="far fa-user"></i>
                                            </div>
                                            <div className="dropdown-item-desc">
                                                <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                    <div className="time">10 Hours Ago</div>
                                            </div>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <div className="dropdown-item-icon bg-success text-white">
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div className="dropdown-item-desc">
                                                <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>
                                                <div className="time">12 Hours Ago</div>
                                            </div>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <div className="dropdown-item-icon bg-danger text-white">
                                                <i className="fas fa-exclamation-triangle"></i>
                                            </div>
                                            <div className="dropdown-item-desc">
                                                Low disk space. Let's clean it!
                    <div className="time">17 Hours Ago</div>
                                            </div>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <div className="dropdown-item-icon bg-info text-white">
                                                <i className="fas fa-bell"></i>
                                            </div>
                                            <div className="dropdown-item-desc">
                                                Welcome to Stisla template!
                    <div className="time">Yesterday</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-footer text-center">
                                        <a href="#">View All <i className="fas fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown"><a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                                <img alt="image" src={require("./template/stisla-master/assets/img/avatar/avatar-1.png")} className="rounded-circle mr-1" />
                                <div className="d-sm-none d-lg-inline-block">Hi, Ujang Maman</div></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-title">Logged in 5 min ago</div>
                                    <a href="features-profile.html" className="dropdown-item has-icon">
                                        <i className="far fa-user"></i> Profile
              </a>
                                    <a href="features-activities.html" className="dropdown-item has-icon">
                                        <i className="fas fa-bolt"></i> Activities
              </a>
                                    <a href="features-settings.html" className="dropdown-item has-icon">
                                        <i className="fas fa-cog"></i> Settings
              </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item has-icon text-danger">
                                        <i className="fas fa-sign-out-alt"></i> Logout
              </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-sidebar">
                        <aside id="sidebar-wrapper">
                            <div className="sidebar-brand">
                                <Link to="/dashboard">Stisla</Link>
                            </div>
                            <div className="sidebar-brand sidebar-brand-sm">
                                <a href="index.html">St</a>
                            </div>
                            <ul className="sidebar-menu">
                                <li className="menu-header">Dashboard</li>
                                <li className="nav-item dropdown active">
                                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Dashboard</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="index-0.html">General Dashboard</a></li>
                                        <li className="active"><a className="nav-link" href="index.html">Ecommerce Dashboard</a></li>
                                    </ul>
                                </li>
                                <li><Link to="/post" className="nav-link"><i className="far fa-square"></i> <span>Posts</span></Link></li>
                                <li className="menu-header">Starter</li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns"></i> <span>Layout</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="layout-default.html">Default Layout</a></li>
                                        <li><a className="nav-link" href="layout-transparent.html">Transparent Sidebar</a></li>
                                        <li><a className="nav-link" href="layout-top-navigation.html">Top Navigation</a></li>
                                    </ul>
                                </li>
                                <li><a className="nav-link" href="blank.html"><i className="far fa-square"></i> <span>Blank Page</span></a></li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-th"></i> <span>Bootstrap</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="bootstrap-alert.html">Alert</a></li>
                                        <li><a className="nav-link" href="bootstrap-badge.html">Badge</a></li>
                                        <li><a className="nav-link" href="bootstrap-breadcrumb.html">Breadcrumb</a></li>
                                        <li><a className="nav-link" href="bootstrap-buttons.html">Buttons</a></li>
                                        <li><a className="nav-link" href="bootstrap-card.html">Card</a></li>
                                        <li><a className="nav-link" href="bootstrap-carousel.html">Carousel</a></li>
                                        <li><a className="nav-link" href="bootstrap-collapse.html">Collapse</a></li>
                                        <li><a className="nav-link" href="bootstrap-dropdown.html">Dropdown</a></li>
                                        <li><a className="nav-link" href="bootstrap-form.html">Form</a></li>
                                        <li><a className="nav-link" href="bootstrap-list-group.html">List Group</a></li>
                                        <li><a className="nav-link" href="bootstrap-media-object.html">Media Object</a></li>
                                        <li><a className="nav-link" href="bootstrap-modal.html">Modal</a></li>
                                        <li><a className="nav-link" href="bootstrap-nav.html">Nav</a></li>
                                        <li><a className="nav-link" href="bootstrap-navbar.html">Navbar</a></li>
                                        <li><a className="nav-link" href="bootstrap-pagination.html">Pagination</a></li>
                                        <li><a className="nav-link" href="bootstrap-popover.html">Popover</a></li>
                                        <li><a className="nav-link" href="bootstrap-progress.html">Progress</a></li>
                                        <li><a className="nav-link" href="bootstrap-table.html">Table</a></li>
                                        <li><a className="nav-link" href="bootstrap-tooltip.html">Tooltip</a></li>
                                        <li><a className="nav-link" href="bootstrap-typography.html">Typography</a></li>
                                    </ul>
                                </li>
                                <li className="menu-header">Stisla</li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-th-large"></i> <span>Components</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="components-article.html">Article</a></li>
                                        <li><a className="nav-link beep beep-sidebar" href="components-avatar.html">Avatar</a></li>
                                        <li><a className="nav-link" href="components-chat-box.html">Chat Box</a></li>
                                        <li><a className="nav-link beep beep-sidebar" href="components-empty-state.html">Empty State</a></li>
                                        <li><a className="nav-link" href="components-gallery.html">Gallery</a></li>
                                        <li><a className="nav-link beep beep-sidebar" href="components-hero.html">Hero</a></li>
                                        <li><a className="nav-link" href="components-multiple-upload.html">Multiple Upload</a></li>
                                        <li><a className="nav-link beep beep-sidebar" href="components-pricing.html">Pricing</a></li>
                                        <li><a className="nav-link" href="components-statistic.html">Statistic</a></li>
                                        <li><a className="nav-link" href="components-tab.html">Tab</a></li>
                                        <li><a className="nav-link" href="components-table.html">Table</a></li>
                                        <li><a className="nav-link" href="components-user.html">User</a></li>
                                        <li><a className="nav-link beep beep-sidebar" href="components-wizard.html">Wizard</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link has-dropdown"><i className="far fa-file-alt"></i> <span>Forms</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="forms-advanced-form.html">Advanced Form</a></li>
                                        <li><a className="nav-link" href="forms-editor.html">Editor</a></li>
                                        <li><a className="nav-link" href="forms-validation.html">Validation</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-map-marker-alt"></i> <span>Google Maps</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="gmaps-advanced-route.html">Advanced Route</a></li>
                                        <li><a href="gmaps-draggable-marker.html">Draggable Marker</a></li>
                                        <li><a href="gmaps-geocoding.html">Geocoding</a></li>
                                        <li><a href="gmaps-geolocation.html">Geolocation</a></li>
                                        <li><a href="gmaps-marker.html">Marker</a></li>
                                        <li><a href="gmaps-multiple-marker.html">Multiple Marker</a></li>
                                        <li><a href="gmaps-route.html">Route</a></li>
                                        <li><a href="gmaps-simple.html">Simple</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-plug"></i> <span>Modules</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="modules-calendar.html">Calendar</a></li>
                                        <li><a className="nav-link" href="modules-chartjs.html">ChartJS</a></li>
                                        <li><a className="nav-link" href="modules-datatables.html">DataTables</a></li>
                                        <li><a className="nav-link" href="modules-flag.html">Flag</a></li>
                                        <li><a className="nav-link" href="modules-font-awesome.html">Font Awesome</a></li>
                                        <li><a className="nav-link" href="modules-ion-icons.html">Ion Icons</a></li>
                                        <li><a className="nav-link" href="modules-owl-carousel.html">Owl Carousel</a></li>
                                        <li><a className="nav-link" href="modules-sparkline.html">Sparkline</a></li>
                                        <li><a className="nav-link" href="modules-sweet-alert.html">Sweet Alert</a></li>
                                        <li><a className="nav-link" href="modules-toastr.html">Toastr</a></li>
                                        <li><a className="nav-link" href="modules-vector-map.html">Vector Map</a></li>
                                        <li><a className="nav-link" href="modules-weather-icon.html">Weather Icon</a></li>
                                    </ul>
                                </li>
                                <li className="menu-header">Pages</li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link has-dropdown"><i className="far fa-user"></i> <span>Auth</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="auth-forgot-password.html">Forgot Password</a></li>
                                        <li><a href="auth-login.html">Login</a></li>
                                        <li><a className="beep beep-sidebar" href="auth-login-2.html">Login 2</a></li>
                                        <li><a href="auth-register.html">Register</a></li>
                                        <li><a href="auth-reset-password.html">Reset Password</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-exclamation"></i> <span>Errors</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="errors-503.html">503</a></li>
                                        <li><a className="nav-link" href="errors-403.html">403</a></li>
                                        <li><a className="nav-link" href="errors-404.html">404</a></li>
                                        <li><a className="nav-link" href="errors-500.html">500</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-bicycle"></i> <span>Features</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="features-activities.html">Activities</a></li>
                                        <li><a className="nav-link" href="features-post-create.html">Post Create</a></li>
                                        <li><a className="nav-link" href="features-posts.html">Posts</a></li>
                                        <li><a className="nav-link" href="features-profile.html">Profile</a></li>
                                        <li><a className="nav-link" href="features-settings.html">Settings</a></li>
                                        <li><a className="nav-link" href="features-setting-detail.html">Setting Detail</a></li>
                                        <li><a className="nav-link" href="features-tickets.html">Tickets</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-ellipsis-h"></i> <span>Utilities</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="utilities-contact.html">Contact</a></li>
                                        <li><a className="nav-link" href="utilities-invoice.html">Invoice</a></li>
                                        <li><a href="utilities-subscribe.html">Subscribe</a></li>
                                    </ul>
                                </li>
                                <li><a className="nav-link" href="credits.html"><i className="fas fa-pencil-ruler"></i> <span>Credits</span></a></li>
                            </ul>

                            <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
                                <a href="https://getstisla.com/docs" className="btn btn-primary btn-lg btn-block btn-icon-split">
                                    <i className="fas fa-rocket"></i> Documentation
              </a>
                            </div>
                        </aside>
                    </div>

                    <div className="main-content" style={{ paddingRight: 0, paddingTop: 20 }}>
                        <section className="section">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="card card-statistic-2">
                                        <div className="card-stats">
                                            <div className="card-stats-title">Order Statistics -
                    <div className="dropdown d-inline">
                                                    <a className="font-weight-600 dropdown-toggle" data-toggle="dropdown" href="#" id="orders-month">August</a>
                                                    <ul className="dropdown-menu dropdown-menu-sm">
                                                        <li className="dropdown-title">Select Month</li>
                                                        <li><a href="#" className="dropdown-item">January</a></li>
                                                        <li><a href="#" className="dropdown-item">February</a></li>
                                                        <li><a href="#" className="dropdown-item">March</a></li>
                                                        <li><a href="#" className="dropdown-item">April</a></li>
                                                        <li><a href="#" className="dropdown-item">May</a></li>
                                                        <li><a href="#" className="dropdown-item">June</a></li>
                                                        <li><a href="#" className="dropdown-item">July</a></li>
                                                        <li><a href="#" className="dropdown-item active">August</a></li>
                                                        <li><a href="#" className="dropdown-item">September</a></li>
                                                        <li><a href="#" className="dropdown-item">October</a></li>
                                                        <li><a href="#" className="dropdown-item">November</a></li>
                                                        <li><a href="#" className="dropdown-item">December</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-stats-items">
                                                <div className="card-stats-item">
                                                    <div className="card-stats-item-count">24</div>
                                                    <div className="card-stats-item-label">Pending</div>
                                                </div>
                                                <div className="card-stats-item">
                                                    <div className="card-stats-item-count">12</div>
                                                    <div className="card-stats-item-label">Shipping</div>
                                                </div>
                                                <div className="card-stats-item">
                                                    <div className="card-stats-item-count">23</div>
                                                    <div className="card-stats-item-label">Completed</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-icon shadow-primary bg-primary">
                                            <i className="fas fa-archive"></i>
                                        </div>
                                        <div className="card-wrap">
                                            <div className="card-header">
                                                <h4>Total Orders</h4>
                                            </div>
                                            <div className="card-body">
                                                59
                  </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="card card-statistic-2">
                                        <div className="card-chart">
                                            <canvas id="balance-chart" height="80"></canvas>
                                        </div>
                                        <div className="card-icon shadow-primary bg-primary">
                                            <i className="fas fa-dollar-sign"></i>
                                        </div>
                                        <div className="card-wrap">
                                            <div className="card-header">
                                                <h4>Balance</h4>
                                            </div>
                                            <div className="card-body">
                                                $187,13
                  </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="card card-statistic-2">
                                        <div className="card-chart">
                                            <canvas id="sales-chart" height="80"></canvas>
                                        </div>
                                        <div className="card-icon shadow-primary bg-primary">
                                            <i className="fas fa-shopping-bag"></i>
                                        </div>
                                        <div className="card-wrap">
                                            <div className="card-header">
                                                <h4>Sales</h4>
                                            </div>
                                            <div className="card-body">
                                                4,732
                  </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Budget vs Sales</h4>
                                        </div>
                                        <div className="card-body">
                                            <canvas id="myChart" height="158"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card gradient-bottom">
                                        <div className="card-header">
                                            <h4>Top 5 Products</h4>
                                            <div className="card-header-action dropdown">
                                                <a href="#" data-toggle="dropdown" className="btn btn-danger dropdown-toggle">Month</a>
                                                <ul className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                                    <li className="dropdown-title">Select Period</li>
                                                    <li><a href="#" className="dropdown-item">Today</a></li>
                                                    <li><a href="#" className="dropdown-item">Week</a></li>
                                                    <li><a href="#" className="dropdown-item active">Month</a></li>
                                                    <li><a href="#" className="dropdown-item">This Year</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body" id="top-5-scroll">
                                            <ul className="list-unstyled list-unstyled-border">
                                                <li className="media">
                                                    <img className="mr-3 rounded" width="55" src={require("./template/stisla-master/assets/img/products/product-3-50.png")} alt="product" />
                                                    <div className="media-body">
                                                        <div className="float-right"><div className="font-weight-600 text-muted text-small">86 Sales</div></div>
                                                        <div className="media-title">oPhone S9 Limited</div>
                                                        <div className="mt-1">
                                                            <div className="budget-price">
                                                                <div className="budget-price-square bg-primary" data-width="64%"></div>
                                                                <div className="budget-price-label">$68,714</div>
                                                            </div>
                                                            <div className="budget-price">
                                                                <div className="budget-price-square bg-danger" data-width="43%"></div>
                                                                <div className="budget-price-label">$38,700</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <img className="mr-3 rounded" width="55" src={require("./template/stisla-master/assets/img/products/product-4-50.png")} alt="product" />
                                                    <div className="media-body">
                                                        <div className="float-right"><div className="font-weight-600 text-muted text-small">67 Sales</div></div>
                                                        <div className="media-title">iBook Pro 2018</div>
                                                        <div className="mt-1">
                                                            <div className="budget-price">
                                                                <div className="budget-price-square bg-primary" data-width="84%"></div>
                                                                <div className="budget-price-label">$107,133</div>
                                                            </div>
                                                            <div className="budget-price">
                                                                <div className="budget-price-square bg-danger" data-width="60%"></div>
                                                                <div className="budget-price-label">$91,455</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <img className="mr-3 rounded" width="55" src={require("./template/stisla-master/assets/img/products/product-1-50.png")} alt="product" />
                                                    <div className="media-body">
                                                        <div className="float-right"><div className="font-weight-600 text-muted text-small">63 Sales</div></div>
                                                        <div className="media-title">Headphone Blitz</div>
                                                        <div className="mt-1">
                                                            <div className="budget-price">
                                                                <div className="budget-price-square bg-primary" data-width="34%"></div>
                                                                <div className="budget-price-label">$3,717</div>
                                                            </div>
                                                            <div className="budget-price">
                                                                <div className="budget-price-square bg-danger" data-width="28%"></div>
                                                                <div className="budget-price-label">$2,835</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <img className="mr-3 rounded" width="55" src={require("./template/stisla-master/assets/img/products/product-3-50.png")} alt="product" />
                                                    <div className="media-body">
                                                        <div className="float-right"><div className="font-weight-600 text-muted text-small">28 Sales</div></div>
                                                        <div className="media-title">oPhone X Lite</div>
                                                        <div className="mt-1">
                                                            <div className="budget-price">
                                                                <div className="budget-price-square bg-primary" data-width="45%"></div>
                                                                <div className="budget-price-label">$13,972</div>
                                                            </div>
                                                            <div className="budget-price">
                                                                <div className="budget-price-square bg-danger" data-width="30%"></div>
                                                                <div className="budget-price-label">$9,660</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <img className="mr-3 rounded" width="55" src={require("./template/stisla-master/assets/img/products/product-5-50.png")} alt="product" />
                                                    <div className="media-body">
                                                        <div className="float-right"><div className="font-weight-600 text-muted text-small">19 Sales</div></div>
                                                        <div className="media-title">Old Camera</div>
                                                        <div className="mt-1">
                                                            <div className="budget-price">
                                                                <div className="budget-price-square bg-primary" data-width="35%"></div>
                                                                <div className="budget-price-label">$7,391</div>
                                                            </div>
                                                            <div className="budget-price">
                                                                <div className="budget-price-square bg-danger" data-width="28%"></div>
                                                                <div className="budget-price-label">$5,472</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer pt-3 d-flex justify-content-center">
                                            <div className="budget-price justify-content-center">
                                                <div className="budget-price-square bg-primary" data-width="20"></div>
                                                <div className="budget-price-label">Selling Price</div>
                                            </div>
                                            <div className="budget-price justify-content-center">
                                                <div className="budget-price-square bg-danger" data-width="20"></div>
                                                <div className="budget-price-label">Budget Price</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Best Products</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="owl-carousel owl-theme" id="products-carousel">
                                                <div>
                                                    <div className="product-item pb-3">
                                                        <div className="product-image">
                                                            <img alt="image" src={require("./template/stisla-master/assets/img/products/product-4-50.png")} className="img-fluid" />
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="product-name">iBook Pro 2018</div>
                                                            <div className="product-review">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                            <div className="text-muted text-small">67 Sales</div>
                                                            <div className="product-cta">
                                                                <a href="#" className="btn btn-primary">Detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="product-item">
                                                        <div className="product-image">
                                                            <img alt="image" src={require("./template/stisla-master/assets/img/products/product-3-50.png")} className="img-fluid" />
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="product-name">oPhone S9 Limited</div>
                                                            <div className="product-review">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star-half"></i>
                                                            </div>
                                                            <div className="text-muted text-small">86 Sales</div>
                                                            <div className="product-cta">
                                                                <a href="#" className="btn btn-primary">Detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="product-item">
                                                        <div className="product-image">
                                                            <img alt="image" src={require("./template/stisla-master/assets/img/products/product-1-50.png")} className="img-fluid" />
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="product-name">Headphone Blitz</div>
                                                            <div className="product-review">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                            </div>
                                                            <div className="text-muted text-small">63 Sales</div>
                                                            <div className="product-cta">
                                                                <a href="#" className="btn btn-primary">Detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Top Countries</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="text-title mb-2">July</div>
                                                    <ul className="list-unstyled list-unstyled-border list-unstyled-noborder mb-0">
                                                        <li className="media">
                                                            <img className="img-fluid mt-1 img-shadow" src={require("./template/stisla-master/assets/custom/flag-icon-css/flags/4x3/id.svg")} alt="image" width="40" />
                                                            <div className="media-body ml-3">
                                                                <div className="media-title">Indonesia</div>
                                                                <div className="text-small text-muted">3,282 <i className="fas fa-caret-down text-danger"></i></div>
                                                            </div>
                                                        </li>
                                                        <li className="media">
                                                            <img className="img-fluid mt-1 img-shadow" src={require("./template/stisla-master/assets/custom/flag-icon-css/flags/4x3/my.svg")} alt="image" width="40" />
                                                            <div className="media-body ml-3">
                                                                <div className="media-title">Malaysia</div>
                                                                <div className="text-small text-muted">2,976 <i className="fas fa-caret-down text-danger"></i></div>
                                                            </div>
                                                        </li>
                                                        <li className="media">
                                                            <img className="img-fluid mt-1 img-shadow" src={require("./template/stisla-master/assets/custom/flag-icon-css/flags/4x3/us.svg")} alt="image" width="40" />
                                                            <div className="media-body ml-3">
                                                                <div className="media-title">United States</div>
                                                                <div className="text-small text-muted">1,576 <i className="fas fa-caret-up text-success"></i></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 mt-sm-0 mt-4">
                                                    <div className="text-title mb-2">August</div>
                                                    <ul className="list-unstyled list-unstyled-border list-unstyled-noborder mb-0">
                                                        <li className="media">
                                                            <img className="img-fluid mt-1 img-shadow" src={require("./template/stisla-master/assets/custom/flag-icon-css/flags/4x3/id.svg")} alt="image" width="40" />
                                                            <div className="media-body ml-3">
                                                                <div className="media-title">Indonesia</div>
                                                                <div className="text-small text-muted">3,486 <i className="fas fa-caret-up text-success"></i></div>
                                                            </div>
                                                        </li>
                                                        <li className="media">
                                                            <img className="img-fluid mt-1 img-shadow" src={require("./template/stisla-master/assets/custom/flag-icon-css/flags/4x3/ps.svg")} alt="image" width="40" />
                                                            <div className="media-body ml-3">
                                                                <div className="media-title">Palestine</div>
                                                                <div className="text-small text-muted">3,182 <i className="fas fa-caret-up text-success"></i></div>
                                                            </div>
                                                        </li>
                                                        <li className="media">
                                                            <img className="img-fluid mt-1 img-shadow" src={require("./template/stisla-master/assets/custom/flag-icon-css/flags/4x3/de.svg")} alt="image" width="40" />
                                                            <div className="media-body ml-3">
                                                                <div className="media-title">Germany</div>
                                                                <div className="text-small text-muted">2,317 <i className="fas fa-caret-down text-danger"></i></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Invoices</h4>
                                            <div className="card-header-action">
                                                <a href="#" className="btn btn-danger">View More <i className="fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="table-responsive table-invoice">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Invoice ID</th>
                                                            <th>Customer</th>
                                                            <th>Status</th>
                                                            <th>Due Date</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><a href="#">INV-87239</a></td>
                                                            <td className="font-weight-600">Kusnadi</td>
                                                            <td><div className="badge badge-warning">Unpaid</div></td>
                                                            <td>July 19, 2018</td>
                                                            <td>
                                                                <a href="#" className="btn btn-primary">Detail</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#">INV-48574</a></td>
                                                            <td className="font-weight-600">Hasan Basri</td>
                                                            <td><div className="badge badge-success">Paid</div></td>
                                                            <td>July 21, 2018</td>
                                                            <td>
                                                                <a href="#" className="btn btn-primary">Detail</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#">INV-76824</a></td>
                                                            <td className="font-weight-600">Muhamad Nuruzzaki</td>
                                                            <td><div className="badge badge-warning">Unpaid</div></td>
                                                            <td>July 22, 2018</td>
                                                            <td>
                                                                <a href="#" className="btn btn-primary">Detail</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#">INV-84990</a></td>
                                                            <td className="font-weight-600">Agung Ardiansyah</td>
                                                            <td><div className="badge badge-warning">Unpaid</div></td>
                                                            <td>July 22, 2018</td>
                                                            <td>
                                                                <a href="#" className="btn btn-primary">Detail</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#">INV-87320</a></td>
                                                            <td className="font-weight-600">Ardian Rahardiansyah</td>
                                                            <td><div className="badge badge-success">Paid</div></td>
                                                            <td>July 28, 2018</td>
                                                            <td>
                                                                <a href="#" className="btn btn-primary">Detail</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-hero">
                                        <div className="card-header">
                                            <div className="card-icon">
                                                <i className="far fa-question-circle"></i>
                                            </div>
                                            <h4>14</h4>
                                            <div className="card-description">Customers need help</div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="tickets-list">
                                                <a href="#" className="ticket-item">
                                                    <div className="ticket-title">
                                                        <h4>My order hasn't arrived yet</h4>
                                                    </div>
                                                    <div className="ticket-info">
                                                        <div>Laila Tazkiah</div>
                                                        <div className="bullet"></div>
                                                        <div className="text-primary">1 min ago</div>
                                                    </div>
                                                </a>
                                                <a href="#" className="ticket-item">
                                                    <div className="ticket-title">
                                                        <h4>Please cancel my order</h4>
                                                    </div>
                                                    <div className="ticket-info">
                                                        <div>Rizal Fakhri</div>
                                                        <div className="bullet"></div>
                                                        <div>2 hours ago</div>
                                                    </div>
                                                </a>
                                                <a href="#" className="ticket-item">
                                                    <div className="ticket-title">
                                                        <h4>Do you see my mother?</h4>
                                                    </div>
                                                    <div className="ticket-info">
                                                        <div>Syahdan Ubaidillah</div>
                                                        <div className="bullet"></div>
                                                        <div>6 hours ago</div>
                                                    </div>
                                                </a>
                                                <a href="features-tickets.html" className="ticket-item ticket-more">
                                                    View All <i className="fas fa-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <footer className="main-footer">
                        <div className="footer-left">
                            Copyright &copy; 2018 <div className="bullet"></div> Design By <a href="https://nauval.in/">Muhamad Nauval Azhar</a>
                        </div>
                        <div className="footer-right">
                            2.3.0
        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Dashboard;