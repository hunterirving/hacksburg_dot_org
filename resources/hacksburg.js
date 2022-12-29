window.addEventListener('DOMContentLoaded', (event) => {
	current_page = document.getElementById('current_page');
	nav_link_container = document.getElementById('nav_links')
	nav_links = nav_link_container.children;
	nav_link_container.onmouseleave = undim_current_page;
	for (var i = 0; i < nav_links.length; i++) {
		if (nav_links[i].id != "nav_break" && nav_links[i].id != "current_page") {
			nav_links[i].onmouseover = dim_current_page;
		}
	}
});

function dim_current_page() {
	current_page.style.cssText = "color: var(--black)";
}

function undim_current_page() {
	current_page.style.cssText = "color: var(--darker_green)";
}

function togglePostOpened(x)
{
	post_body = x.parentNode.parentNode.querySelector('.post_body');
	if (post_body.classList.contains('closed')) {
		x.style.transform = 'rotate(-45deg)';
		post_body.classList.remove('closed');
	}
	else {
		x.style.transform = "rotate(0deg)";
		post_body.classList.add('closed'); 
	}
}

