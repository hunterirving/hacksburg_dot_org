let images = ['https://hunterirving.com/hacksburg_dot_org/resources/images/seedstarting_cropped.jpg', 'https://hunterirving.com/hacksburg_dot_org/resources/images/casting_cropped.jpg', 'https://hunterirving.com/hacksburg_dot_org/resources/images/deadpool_cropped.jpg'];
let index = 0;
let imgElement = null;

window.addEventListener('DOMContentLoaded', (event) => {
	/* dim/undim current page in nav_links while hovering over other nav elements */
	current_page = document.getElementById('current_page');
	nav_link_container = document.getElementById('nav_links')
	nav_links = nav_link_container.children;
	nav_link_container.onmouseleave = undim_current_page;
	for (var i = 0; i < nav_links.length; i++) {
		if (nav_links[i].id != "nav_break" && nav_links[i].id != "current_page") {
			nav_links[i].onmouseover = dim_current_page;
		}
	}

	/*update pinned post carousel every 4 seconds*/
	imgElement = document.querySelector(".carousel");
	setInterval(updateCarousel, 5000);
});

function dim_current_page() {
	current_page.style.cssText = "color: var(--black)";
}

function undim_current_page() {
	current_page.style.cssText = "color: var(--darker_green)";
}

function togglePostOpened(x)
{
	closeable = x.parentNode.parentNode.querySelector('.closeable');
	if (closeable.classList.contains('closed')) {
		x.style.transform = 'rotate(-45deg)';
		closeable.classList.remove('closed');
	}
	else {
		x.style.transform = "rotate(0deg)";
		closeable.classList.add('closed'); 
	}
}

function updateCarousel() {
	index > 1 ? index = 0 : index++;
	imgElement.src = images[index];
}
