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

function togglePostOpened()
{
	const isHidden = nav_links.classList.contains('hidden');
 
	if (!isHidden)
	{
		plus.style.transform = 'rotate(0deg)';
		nav_links.style.opacity = "0%";
		nav_links.style.maxHeight = "0px";
		//nav_links.style.paddingBottom = "35px";
		nav_links.classList.add('hidden');
	}
	else
	{
		plus.style.transform = 'rotate(-45deg)';
		nav_links.style.opacity = "100%";
		nav_links.style.maxHeight = "50px";
		//nav_links.style.paddingBottom = "50px";
		nav_links.classList.remove('hidden');
	}
}

