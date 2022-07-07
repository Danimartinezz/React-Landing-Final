import React from "react";


let menu = [
    { label: "Home", url: "#" },
    { label: "About", url: "#" },
    { label: "Services", url: "#" },
    { label: "Contact", url: "#" }
];
var logo="Start Bootstrap"

const NavBar = () => {
    const navBarItems = menu.map((item) => (
        <li className="nav-item">
            <a className="nav-link text-light" href={item.url}>
                {item.label}
            </a>
        </li>
    ));
    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand text-light ms-5" href="#">{logo}</a>
                {/* Toggler when screen changes */}
                <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Navbar Items */}
                    <ul className="navbar-nav ms-auto me-5">{navBarItems}</ul>
                </div>
            </div>
        </nav>
    )
}
//Array of objects for the navbar links and labels

//END <NavBar />


export default NavBar










// const NavBar = () => {
// 	return (
// 		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
// 		<div className="row  col-md-3 offset-sm-1">
// 			<a className="navbar-brand" href="#">
// 				Start Bootstrap
// 			</a>
// 		</div>
// 		<div className="row  col-sm-2 offset-sm-4">
// 			<ul className="navbar-nav">
// 				<li className="nav-item active">
// 					<a className="nav-link" href="#">
// 						Home <span className="sr-only">(current)</span>
// 					</a>
// 				</li>
// 				<li className="nav-item">
// 					<a className="nav-link" href="#">
// 						About
// 					</a>
// 				</li>
// 				<li className="nav-item">
// 					<a className="nav-link" href="#">
// 						Services
// 					</a>
// 				</li>
// 				<li className="nav-item">
// 					<a className="nav-link" href="#">
// 						Contact
// 					</a>
// 				</li>
// 			</ul>
// 		</div>
// 	</nav>
		
// 	);
// };

// export default NavBar;

