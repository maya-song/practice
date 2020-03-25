import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div className="Header">

{/* <!-- Header --> */}
			<header
				className="header header-absolute header-fixed-on-mobile header-transparent"
				data-helper-in-threshold="200" data-helper-out-threshold="400"
				data-sticky-threshold="200" data-bkg-threshold="200"
				data-compact-threshold="200">
				<div className="header-inner">
					<div className="row nav-bar">
						<div className="column width-12 nav-bar-inner">
							<div className="logo">
								<div className="logo-inner">
									<a href="index.html"><img src="images/g-logo.png"
										alt="GeminSoft Logo" /></a> <a href="index.html"><img
										src="images/g-logo-white.png" alt="GeminSoft Logo" /></a>
								</div>
							</div>
							<nav className="navigation nav-block secondary-navigation nav-right">
								<ul>
									<li className="aux-navigation">
										{/* <!-- Aux Navigation -->  */}
                                        <a href="#"
										className="navigation-show overlay-nav-show nav-icon"> <span
                                        className="icon-dots-three-vertical"></span> Menu
									</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
            {/* <!-- Header End --> */}
            </div>

            );
        }
    }
    export default Header;