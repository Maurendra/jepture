import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import './custom_login.css';

import './template/stisla-master/assets/custom/bootstrap-social/bootstrap-social.css';

import './template/stisla-master/assets/css/style.css';
import './template/stisla-master/assets/css/components.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postData: [],
            length: 0,
            titleUpdate: '',
            authorUpdate: '',
            bodyUpdate: '',
            slugUpdate: '',
            categoryUpdate: '',
            idUpdate: '',
            tenggalUpdate: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateSubmit = this.updateSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    async componentDidMount() {
        this.load();
        console.log('test');
        this.loadScript('https://code.jquery.com/jquery-3.3.1.min.js');
        this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js');
        this.loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js');
        this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js');
        this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js');
        this.loadScript('./template/stisla-master/assets/js/stisla.js');

        this.loadScript('./template/stisla-master/assets/js/scripts.js');
        this.loadScript('./template/stisla-master/assets/js/custom.js');
    }

    loadScript = function (src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        document.head.appendChild(tag);
    }

    load = async () => {
        let url = "http://localhost:3000/posts/";
        let data = require('./db.json');

        this.setState({ postData: data, length: data.length });
        console.log('Test ' + this.state.postData);
    };

    async delete(id) {
        let data = this.state.postData;
        let i = 0;
        data.forEach(element => {
            if (element.id === id) {
                data.splice(i,1);
            }
            i++;
        });
        // window.location.reload();
    }

    update(id, title, author, body, slug, category, created_at) {
        this.setState({
            idUpdate: id,
            titleUpdate: title,
            authorUpdate: author,
            bodyUpdate: body,
            slugUpdate: slug,
            categoryUpdate: category,
            tanggalUpdate: created_at
        })
    }

    async updateSubmit(event) {
        event.preventDefault();
        let arrbulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        let date = new Date();
        let tanggal = date.getDate();
        let bulan = date.getMonth();
        let tahun = date.getFullYear();
        let tanggalHarini = tanggal + "-" + arrbulan[bulan] + "-" + tahun;

        let status = false;
        let data = this.state.postData;
        let i = 0;
        let iDelete = 0;
        data.forEach(element => {
            if (element.id === this.state.idUpdate) {
                status = true;
                iDelete = i;
            }
            i++;
        });

        if (status) {
            let post = {
                id: this.state.idUpdate,
                title: event.target.titleUpdate.value,
                author: event.target.authorUpdate.value,
                body: event.target.bodyUpdate.value,
                slug: event.target.slugUpdate.value,
                category_name: event.target.categoryUpdate.value,
                created_at: this.state.tanggalUpdate,
                updated_at: tanggalHarini
            }
            data.splice(iDelete, 1);
            data.push(post);
            console.log('update' + data);
            this.setState({
                postData: data
            })
            // window.history.back();
            // $('#modal-update').toggle();
            // window.location.reload();   
        } else {
            // $('#modal-update').hide();
            console.log('error');
            // window.location.reload();
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        let arrbulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        let date = new Date();
        let tanggal = date.getDate();
        let bulan = date.getMonth();
        let tahun = date.getFullYear();
        let tanggalHarini = tanggal + "-" + arrbulan[bulan] + "-" + tahun;
        let id = 1;
        if (this.state.length !== 0) {
            id = this.state.postData[this.state.length-1].id + 1;   
        }

        let status = false;
        let data = this.state.postData;
        data.forEach(element => {
            if (element.id === id) {
                status = true;
            }
        });

        if (status) {
            console.log('error');
            // window.location.reload();   
        } else {
            let post = {
                id: id,
                title: event.target.titleAdd.value,
                author: event.target.authorAdd.value,
                body: event.target.bodyAdd.value,
                slug: event.target.slugAdd.value,
                category_name: event.target.categoryAdd.value,
                created_at: tanggalHarini,
                updated_at: ''
            }
            data.push(post);
            console.log('insert' + data);
            this.setState({
                postData: data
            })
            // var fs = require('fs');
            // fs.writeFile("db.json", data, function(err) {
            //     if (err) {
            //         console.log("error" + err);
            //     }
            // });
            // window.location.reload();
        }
    }

    render() {
        const { postData } = this.state;
        return (
            <div id="app">
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
                            <div className="section-header">
                                <h1>Posts</h1>
                                <div className="section-header-button">
                                    <Link data-toggle="modal" data-target="#modal-add" className="btn btn-primary">Add New</Link>
                                </div>
                                <div className="section-header-breadcrumb">
                                    <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
                                    <div className="breadcrumb-item"><a href="#">Posts</a></div>
                                    <div className="breadcrumb-item">All Posts</div>
                                </div>
                            </div>
                            <div className="section-body">
                                <h2 className="section-title">Posts</h2>
                                <p className="section-lead">
                                    You can manage all posts, such as editing, deleting and more.
            </p>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="card mb-0">
                                            <div className="card-body">
                                                <ul className="nav nav-pills">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="#">All <span className="badge badge-white">5</span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Draft <span className="badge badge-primary">1</span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Pending <span className="badge badge-primary">1</span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Trash <span className="badge badge-primary">0</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>All Posts</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="float-left">
                                                    <select className="form-control selectric">
                                                        <option>Action For Selected</option>
                                                        <option>Move to Draft</option>
                                                        <option>Move to Pending</option>
                                                        <option>Delete Pemanently</option>
                                                    </select>
                                                </div>
                                                <div className="float-right">
                                                    <form>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" placeholder="Search" />
                                                            <div className="input-group-append">
                                                                <button className="btn btn-primary"><i className="fas fa-search"></i></button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>

                                                <div className="clearfix mb-3"></div>

                                                <div className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th className="text-center pt-2">
                                                                    <div className="custom-checkbox custom-checkbox-table custom-control">
                                                                        <input type="checkbox" data-checkboxes="mygroup" data-checkbox-role="dad" className="custom-control-input" id="checkbox-all" />
                                                                        <label htmlFor="checkbox-all" className="custom-control-label">&nbsp;</label>
                                                                    </div>
                                                                </th>
                                                                <th>Title</th>
                                                                <th>Category</th>
                                                                <th>Author</th>
                                                                <th>Created At</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            {postData.map((data) => {
                                                                return <tr>
                                                                    <td>
                                                                        <div className="custom-checkbox custom-control">
                                                                            <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input" id="checkbox-2" />
                                                                            <label htmlFor="checkbox-2" className="custom-control-label">&nbsp;</label>
                                                                        </div>
                                                                    </td>
                                                                    <td>{data.title}
                                                                        <div className="table-links">
                                                                            <a href="#">View</a>
                                                                            <div className="bullet"></div>
                                                                            <Link onClick={() => this.update(data.id, data.title, data.author, data.body, data.slug, data.category_name, data.created_at)} data-toggle="modal" data-target="#modal-update">Edit</Link>
                                                                            <div className="bullet"></div>
                                                                            <Link onClick={() => this.delete(data.id)} className="text-danger">Delete</Link>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#">{data.category_name}</a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#">
                                                                            <img alt="image" src={require("./template/stisla-master/assets/img/avatar/avatar-5.png")} className="rounded-circle" width="35" data-toggle="title" title="" />
                                                                            <div className="d-inline-block ml-1">{data.author}</div>
                                                                        </a>
                                                                    </td>
                                                                    <td>{data.created_at}</td>
                                                                    <td><div className="badge badge-primary">Published</div></td>
                                                                </tr>
                                                            })}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="float-right">
                                                    <nav>
                                                        <ul className="pagination">
                                                            <li className="page-item disabled">
                                                                <a className="page-link" href="#" aria-label="Previous">
                                                                    <span aria-hidden="true">&laquo;</span>
                                                                    <span className="sr-only">Previous</span>
                                                                </a>
                                                            </li>
                                                            <li className="page-item active">
                                                                <a className="page-link" href="#">1</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#">2</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#">3</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#" aria-label="Next">
                                                                    <span aria-hidden="true">&raquo;</span>
                                                                    <span className="sr-only">Next</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
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
                    <div className="modal fade" id="modal-add">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Add data</h3>
                                    </div>

                                    <form role="form" onSubmit={this.handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input type="text" className="form-control" name="titleAdd" id="title-add" placeholder="Enter title" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Author</label>
                                                <input type="text" className="form-control" name="authorAdd" id="author-add" placeholder="Enter author" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Body</label>
                                                <input type="body" className="form-control" name="bodyAdd" id="body-add" placeholder="Enter body" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Slug</label>
                                                <input type="text" className="form-control" name="slugAdd" id="slug-add" placeholder="Slug" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Category Name</label>
                                                <input type="text" className="form-control" name="categoryAdd" id="category-add" placeholder="Enter Category" required />
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary swalDefaultSuccess">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="modal-update">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Update data</h3>
                                    </div>

                                    <form role="form" onSubmit={this.updateSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input type="text" className="form-control" name="titleUpdate" id="title-update" defaultValue={this.state.titleUpdate} placeholder="Enter title" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Author</label>
                                                <input type="text" className="form-control" name="authorUpdate" id="author-update" defaultValue={this.state.authorUpdate} placeholder="Enter author" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Body</label>
                                                <input type="body" className="form-control" name="bodyUpdate" id="body-update" defaultValue={this.state.bodyUpdate} placeholder="Enter body" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Slug</label>
                                                <input type="text" className="form-control" name="slugUpdate" id="slug-update" defaultValue={this.state.slugUpdate} placeholder="Slug" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Category Name</label>
                                                <input type="text" className="form-control" name="categoryUpdate" id="category-update" defaultValue={this.state.categoryUpdate} placeholder="Enter Category" required />
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary swalDefaultSuccess">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;