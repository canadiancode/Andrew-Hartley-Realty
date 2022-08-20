// Desktop Header Section - variables
const businessNameVar = "Andrew Hartley Realty";
const logoSrc = 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Ah_7d819f18-2c11-4e01-a30e-49b1d6d06afa.png?v=1660973154';
const logoAlt = 'Andrew Hartley Realty Logo';
const headerMenuList = [
    {
        title: 'Home',
        href: '#',
    },
    {
        title: 'Our Properties',
        href: '#',
    },
    {
        title: 'About',
        href: '#',
    },
    {
        title: 'Contact',
        href: '#',
    }
];

// Desktop Header Section - Output onto DOM
    // left side
const desktopHeaderLeft = document.querySelector('.desktop-header-left');

const headerLogo = document.createElement('img');
headerLogo.classList.add('businessName');
headerLogo.src = logoSrc;
headerLogo.alt = logoAlt;
desktopHeaderLeft.appendChild(headerLogo);

const HeaderBusinessName = document.createElement('h1');
HeaderBusinessName.classList.add('businessLogo');
HeaderBusinessName.appendChild(document.createTextNode(businessNameVar));
desktopHeaderLeft.appendChild(HeaderBusinessName);

    // right side
const desktopHeaderRight = document.querySelector('.desktop-header-right');

const headerMenuItems = document.createElement('ul');
headerMenuItems.classList.add('headerMenuItems');
desktopHeaderRight.appendChild(headerMenuItems);

headerMenuList.forEach(menuItem => {
    const link = document.createElement('a');
    link.classList.add('navItem');
    const linkName = menuItem.title;
    headerMenuItems.appendChild(link);
    link.appendChild(document.createTextNode(linkName.toUpperCase()));
})

// Mobile Header Section - Output onto DOM
const hamburgerIcon = document.querySelector('.mobileHeaderTab');
const headerDiv = document.querySelector('.desktop-header');
const crossOut = document.querySelector('.crossOut');
const hamburger = document.querySelector('.hamburger');
const mainContent = document.querySelector('.mainContainer');

    // Open menu
hamburger.addEventListener('click', function(e) {
    headerDiv.style.left = '0%';
    hamburger.style.display = 'none';
    crossOut.style.display = 'block';
});

    // close menu
crossOut.addEventListener('click', function(e) {
    headerDiv.style.left = '-90%';
    crossOut.style.display = 'none';
    hamburger.style.display = 'block';
});

// Resizing adjustment
function desktopWindowResize() {
    if (window.innerWidth > 900) {
        headerDiv.style.left = '0%';
        hamburger.style.display = 'none';
        crossOut.style.display = 'block';
    } else if (window.innerWidth < 900) {
        headerDiv.style.left = '-90%';
        crossOut.style.display = 'none';
        hamburger.style.display = 'block';
    }
}
window.onresize = desktopWindowResize;

// Main Container Section
    
// Auto-Play Video Section
    // Auto-Play Video Section Variables
    const AutoPlayVideoSourceURL = 'https://cdn.shopify.com/videos/c/o/v/802fd30d328841ae870b603703b9493d.mp4';
    const AutoPlayVideoMainText = 'Andrew Hartley Realty';
    const AutoPlayVideoSecText = 'Welcome to'
    const AutoPlayVideoButtonTitle = 'Search All Homes'

    // Auto-Play Video Section - video Output
    const AutoPlayVideoSection = document.querySelector('.AutoPlayVideo-Section');
    const AutoPlayVideovideoEl = document.createElement('video');
    const AutoPlayVideoSource = document.createElement('source');
    AutoPlayVideoSource.src = AutoPlayVideoSourceURL;
    AutoPlayVideovideoEl.muted = true;
    AutoPlayVideovideoEl.loop = true;
    AutoPlayVideovideoEl.autoplay = true;
    AutoPlayVideovideoEl.classList.add('video');
    AutoPlayVideovideoEl.appendChild(AutoPlayVideoSource);
    AutoPlayVideoSection.appendChild(AutoPlayVideovideoEl);

    // Auto-Play Video Section - text Output
    const AutoPlayVideoTextDiv =  document.querySelector('.sectionTextDiv');
    const mainTextEl = document.createElement('h1');
    const secTextEl = document.createElement('p');
    mainTextEl.classList.add('sectionText');
    secTextEl.classList.add('sectionText');
    secTextEl.appendChild(document.createTextNode(AutoPlayVideoSecText));
    AutoPlayVideoTextDiv.appendChild(secTextEl);
    mainTextEl.appendChild(document.createTextNode(AutoPlayVideoMainText));
    AutoPlayVideoTextDiv.appendChild(mainTextEl);

    // Call-To-Action button
    const AutoPlayVideoButton = document.createElement('button');
    AutoPlayVideoButton.classList.add('auto-Play-CTA');
    AutoPlayVideoButton.appendChild(document.createTextNode(AutoPlayVideoButtonTitle));
    AutoPlayVideoTextDiv.appendChild(AutoPlayVideoButton);