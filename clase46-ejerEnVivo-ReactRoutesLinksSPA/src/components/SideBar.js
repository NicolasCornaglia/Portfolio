import React from 'react';
import image from '../assets/images/logo-DH.png';
import { Link, Route, Switch } from 'react-router-dom';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import CloseTabs from './CloseTabs'
import NotFound from './NotFound'
import ContentWrapper from './ContentWrapper';

function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link to="/" exact={true} className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House" />
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <Link to="/dashboardMovies" exact={true} className="nav-link" >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - DH movies</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li>

                <li className="nav-item">
                    <Link to="/genresInDb" exact={true} className="nav-link" > Render Genres </Link>
                </li>

                <li className="nav-item">
                    <Link to="/lastMovieInDb" exact={true} className="nav-link" > Render LastMovieInDb </Link>
                </li>

                <li className="nav-item">
                    <Link to="/contentRowMovies" exact={true} className="nav-link" > Render ContentRowMovies </Link>
                </li>

                <li className="nav-item">
                    <Link to="/closeTabs" exact={true} className="nav-link" > Close All Content </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Switch>
                <Route exact={true} path='/genresInDb' component={GenresInDb} />
                <Route path='/lastMovieInDb' component={LastMovieInDb} />
                <Route path='/contentRowMovies' component={ContentRowMovies} />
                <Route path='/closeTabs' component={CloseTabs} />
                <Route path='/dashboardMovies' component={ContentWrapper}/>
                <Route path='/' exact={true} component={ContentWrapper}/>
                <Route component={NotFound} />
            </Switch>

        </React.Fragment>
    )
}
export default SideBar;