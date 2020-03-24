import React from 'react';
import './css/core.min.css';

class Navigation extends React.Component {

    render() {
        return (
            <div className="Navigation">
                
 {/* <!-- Overlay Navigation Menu --> */}
	<div className="overlay-navigation-wrapper" data-no-scrollbar
		data-animation="scale-in">
		<div className="overlay-navigation-scroll-pane">
			<div className="overlay-navigation-inner">
				<div className="v-align-middle">
					<div className="overlay-navigation-header row collapse full-width">
						<div className="column width-12">
							<div className="navigation-hide overlay-nav-hide">
								<a href="#"> <span className="icon-cancel"></span>
								</a>
							</div>
						</div>
					</div>
					<div className="row collapse full-width">
						<div className="column width-12">
							<nav className="overlay-navigation nav-block center">
								<ul>
									<li className="current"><a href="index.html">Home</a></li>
									<li><a href="work.html">Work</a></li>
									<li><a href="#" className="contains-sub-menu">Pages</a>
										<ul className="sub-menu">
											<li><a href="about-style-one.html">About Original</a></li>
											<li><a href="about-style-two.html">About Style 2</a></li>
											<li><a href="about-style-three.html">About Style 3</a></li>
											<li className="current"><a href="contact-style-one.html">Contact
													Original</a></li>
											<li><a href="contact-style-two.html">Contact Style 2</a>
											</li>
											<li><a href="contact-style-three.html">Contact Style
													3</a></li>
											<li><a href="404.html">404</a></li>
											<li><a href="500.html">500</a></li>
											<li><a href="maintenance.html">Maintenance</a></li>
										</ul></li>
									<li><a href="#" className="contains-sub-menu">Blog</a>
										<ul className="sub-menu">
											<li><a href="blog-sidebar-right-with-media.html">Blog
													Index Sidebar Right</a></li>
											<li><a href="blog-sidebar-left-with-media.html">Blog
													Index Sidebar Left</a></li>
											<li><a href="blog-wide-no-sidebar.html">Blog Without
													Sidebar</a></li>
											<li><a href="blog-single-post-sidebar-right.html">Single
													Post Sidebar Right</a></li>
											<li><a href="blog-single-post-sidebar-left.html">Single
													Post Sidebar Left</a></li>
											<li><a href="blog-single-post-wide-no-sidebar.html">Single
													Post Without Sidebar</a></li>
										</ul></li>
									<li><a href="#" className="contains-sub-menu">Projects</a>
										<ul className="sub-menu">
											<li><a href="project-style-one.html">Project Style
													One</a></li>
											<li><a href="project-style-two.html">Project Style
													Two</a></li>
											<li><a href="project-style-three.html">Project Style
													Three</a></li>
											<li><a href="project-style-four.html">Project Style
													Four</a></li>
										</ul></li>
									<li><a href="#" className="contains-sub-menu">Elements</a>
										<ul className="sub-menu">
											<li><a href="elements-accordions.html">Accordions</a></li>
											<li><a href="elements-buttons.html">Buttons</a></li>
											<li><a href="elements-feature-columns.html">Feature
													Columns</a></li>
											<li><a href="elements-footers.html">Footers</a></li>
											<li><a href="elements-forms.html">Forms</a></li>
											<li><a href="elements-lightbox.html">Lightbox</a></li>
											<li><a href="elements-maps.html">Maps</a></li>
											<li><a href="elements-pricing-tables.html">Pricing
													Tables</a></li>
											<li><a href="elements-progress-bars.html">Progress
													Bars</a></li>
											<li><a href="elements-rollovers.html">Rollovers</a></li>
											<li><a href="elements-signup-forms.html">Subscribe
													Forms</a></li>
											<li><a href="elements-slider.html">Slider</a></li>
											<li><a href="elements-tabs.html">Tabs</a></li>
											<li><a href="elements-testimonials.html">Testimonials</a>
											</li>
											<li><a href="elements-video.html">Video</a></li>
										</ul></li>
								</ul>
							</nav>
						</div>
					</div>
					<div className="overlay-navigation-footer row full-width center">
						<div className="column width-12 no-padding">
							<p className="copyright">&copy; 2014 THEMEMOUNTAIN. All Rights
								Reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Overlay Navigation Menu End --> */}

	{/* <!-- Side Navigation Menu --> */}
	<aside className="side-navigation-wrapper enter-right" data-no-scrollbar
		data-animation="slide-in">
		<div className="side-navigation-scroll-pane">
			<div className="side-navigation-inner">
				<div className="side-navigation-header">
					<div className="navigation-hide side-nav-hide">
						<a href="#"> <span className="icon-cancel medium"></span>
						</a>
					</div>
				</div>
				<nav className="side-navigation nav-block center">
					<ul>
						<li><a href="index.html">Home</a></li>
						<li><a href="#" className="contains-sub-menu">Work</a>
							<ul className="sub-menu">
								<li><a href="index-two-columns.html">Two Columns</a></li>
								<li><a href="index-three-columns.html">Three Columns</a></li>
								<li><a href="index-four-columns.html">Four Columns</a></li>
								<li><a href="index-two-columns-alt-nav-2.html">Two
										Columns Alt Nav 2</a></li>
								<li><a href="index-two-columns-alt-nav-3.html">Two
										Columns Alt Nav 3</a></li>
								<li><a href="index-two-columns-alt-preload-2.html">Two
										Columns Alt Preloader 2</a></li>
								<li><a href="index-two-columns-alt-preload-3.html">Two
										Columns Alt Preloader 3</a></li>
								<li><a href="index-two-columns-alt-preload-4.html">Two
										Columns Alt Preloader 4</a></li>
							</ul></li>
						<li className="current"><a href="#" className="contains-sub-menu">Pages</a>
							<ul className="sub-menu">
								<li><a href="about-style-one.html">About Original</a></li>
								<li><a href="about-style-two.html">About Style 2</a></li>
								<li><a href="about-style-three.html">About Style 3</a></li>
								<li className="current"><a href="contact-style-one.html">Contact
										Original</a></li>
								<li><a href="contact-style-two.html">Contact Style 2</a></li>
								<li><a href="contact-style-three.html">Contact Style 3</a>
								</li>
								<li><a href="404.html">404</a></li>
								<li><a href="500.html">500</a></li>
								<li><a href="maintenance.html">Maintenance</a></li>
							</ul></li>
						<li><a href="#" className="contains-sub-menu">Blog</a>
							<ul className="sub-menu">
								<li><a href="blog-sidebar-right-with-media.html">Blog
										Index Sidebar Right</a></li>
								<li><a href="blog-sidebar-left-with-media.html">Blog
										Index Sidebar Left</a></li>
								<li><a href="blog-wide-no-sidebar.html">Blog Without
										Sidebar</a></li>
								<li><a href="blog-single-post-sidebar-right.html">Single
										Post Sidebar Right</a></li>
								<li><a href="blog-single-post-sidebar-left.html">Single
										Post Sidebar Left</a></li>
								<li><a href="blog-single-post-wide-no-sidebar.html">Single
										Post Without Sidebar</a></li>
							</ul></li>
						<li><a href="#" className="contains-sub-menu">Projects</a>
							<ul className="sub-menu">
								<li><a href="project-style-one.html">Project Style One</a>
								</li>
								<li><a href="project-style-two.html">Project Style Two</a>
								</li>
								<li><a href="project-style-three.html">Project Style
										Three</a></li>
								<li><a href="project-style-four.html">Project Style
										Four</a></li>
							</ul></li>
						<li><a href="#" className="contains-sub-menu">Elements</a>
							<ul className="sub-menu">
								<li><a href="elements-accordions.html">Accordions</a></li>
								<li><a href="elements-buttons.html">Buttons</a></li>
								<li><a href="elements-feature-columns.html">Feature
										Columns</a></li>
								<li><a href="elements-footers.html">Footers</a></li>
								<li><a href="elements-forms.html">Forms</a></li>
								<li><a href="elements-lightbox.html">Lightbox</a></li>
								<li><a href="elements-maps.html">Maps</a></li>
								<li><a href="elements-pricing-tables.html">Pricing
										Tables</a></li>
								<li><a href="elements-progress-bars.html">Progress Bars</a>
								</li>
								<li><a href="elements-rollovers.html">Rollovers</a></li>
								<li><a href="elements-signup-forms.html">Subscribe
										Forms</a></li>
								<li><a href="elements-slider.html">Slider</a></li>
								<li><a href="elements-tabs.html">Tabs</a></li>
								<li><a href="elements-testimonials.html">Testimonials</a></li>
								<li><a href="elements-video.html">Video</a></li>
							</ul></li>
					</ul>
				</nav>
				<div className="side-navigation-footer center">
					<p className="copyright no-margin-bottom">&copy; 2014
						THEMEMOUNTAIN.</p>
				</div>
			</div>
		</div>
	</aside>
    {/* <!-- Side Navigation Menu End --> */}
    </div>
    );
        }
}

export default Navigation;