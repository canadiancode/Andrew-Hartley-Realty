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
mainContent.addEventListener('click', function(e) {
    
    if (window.innerWidth < 900) {
        headerDiv.style.left = '-90%';
        crossOut.style.display = 'none';
        hamburger.style.display = 'block';
    }
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
    const AutoPlayVideoSourceURL = 'https://cdn.shopify.com/videos/c/o/v/0849338fcc9b4f2091ffbd4f9ba069dd.mp4';
    const AutoPlayVideoSecText = 'Welcome to';
    const AutoPlayVideoMainText = 'Andrew Hartley Realty';
    const AutoPlayVideoSubText = 'Herbert Banker Realty';
    const AutoPlayVideoButtonTitle = 'Search All Homes';

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
    const subTextEl = document.createElement('p');
    mainTextEl.classList.add('sectionText');
    secTextEl.classList.add('sectionText');
    subTextEl.classList.add('sectionSubText');
    secTextEl.appendChild(document.createTextNode(AutoPlayVideoSecText));
    AutoPlayVideoTextDiv.appendChild(secTextEl);
    mainTextEl.appendChild(document.createTextNode(AutoPlayVideoMainText));
    AutoPlayVideoTextDiv.appendChild(mainTextEl);
    subTextEl.appendChild(document.createTextNode(AutoPlayVideoSubText));
    AutoPlayVideoTextDiv.appendChild(subTextEl);

    // Call-To-Action button
    const AutoPlayVideoButton = document.createElement('button');
    AutoPlayVideoButton.classList.add('auto-Play-CTA');
    AutoPlayVideoButton.appendChild(document.createTextNode(AutoPlayVideoButtonTitle.toUpperCase()));
    AutoPlayVideoTextDiv.appendChild(AutoPlayVideoButton);


// Images and Text Panel Section
    // Images and Text Panel Section Variables
    const imageTextPanelTitle = 'Explore Andrew Hartley Realty';
    const imageTextPanelURLsAndText = [
        {
            text: 'Home Search',
            url:'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/stephen-leonardi-XKIO6ZgCObo-unsplash.jpg?v=1662436369'
        },
        {
            text: 'Exclusive Listings',
            url:'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-max-vakhtbovych-7031414.jpg?v=1662436894'
        },
        {
            text: 'Our Blog',
            url:'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/roberto-nickson-so3wgJLwDxo-unsplash.jpg?v=1662436470'
        },
        {
            text: 'Work with Andrew',
            url:'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-chris-goodwin-32870.jpg?v=1662441099'
        }
    ];

    // For the maain heading
    const imageTextPanelContainer = document.querySelector('.ImagesTextPanel-Section');
    const imageTextPanelHeading = document.createElement('h1');
    imageTextPanelHeading.classList.add('imageTextPanelHeading');
    imageTextPanelContainer.appendChild(imageTextPanelHeading);
    imageTextPanelHeading.appendChild(document.createTextNode(imageTextPanelTitle.toUpperCase()));
    imageTextPanelContainer.prepend(imageTextPanelHeading);

    // Image and Text Output
    const ImagesTextPanelContainer = document.querySelector('.panelContainer');

    // For the panels
    imageTextPanelURLsAndText.forEach(panel => {
        // The div container 
        const imageTextPanelDiv = document.createElement('div');
        imageTextPanelDiv.classList.add('ImagesTextPanelDivs');
        ImagesTextPanelContainer.appendChild(imageTextPanelDiv);

        // The text
        const imageTextPanelEl = document.createElement('h2');
        imageTextPanelEl.classList.add('imageTextPanelText');
        const imageTextPanelText = panel.text;
        imageTextPanelEl.appendChild(document.createTextNode(imageTextPanelText));
        imageTextPanelDiv.appendChild(imageTextPanelEl);

        // The background image
        const imageTextPanelBackgroundImageURL = panel.url;
        console.log(imageTextPanelBackgroundImageURL);
        imageTextPanelDiv.style.background = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('"+imageTextPanelBackgroundImageURL+"')";
        imageTextPanelDiv.style.backgroundSize = 'cover';
    })

// Images and Text Panel Section

// Left Image Right Text Section
const leftImageRightTextImageURL = '';

