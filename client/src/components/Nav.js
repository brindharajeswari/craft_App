import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            {/* <nav class="navbar" style="background-color: #e3f2fd;"> */}
            <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #e3f2fd">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>

                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="/crafts" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Crafts
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/christmascrafts">Christmas Crafts</Link></li>
                                    <li><Link class="dropdown-item" to="/valentinesdaycrafts">Valentines' Day crafts</Link></li>
                                    {/* <li><hr class="dropdown-divider"/></li> */}
                                    <li><Link class="dropdown-item" to="/wintercrafts">Winter Crafts</Link></li>
                                </ul>

                            </li>

                        </ul>

                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <ul>
                        <li class="nav-item" style={{ listStyleType: "none" }}>
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        // <div className="nav"> 
        //     <Link to="/">
        //        <div>Home</div>
        //     </Link>

        //     <Link to="/About">
        //        <div>About</div>
        //     </Link>  

        //     <Link to="/Crafts">
        //        <div> Photos</div>
        //     </Link>  

        //     <Link to="/Login">
        //        <div>Login</div>
        //     </Link>  

        //     <Link to="/contact">
        //        <div>Contact</div>
        //     </Link>
        // </div>
    )
}

export default Nav;