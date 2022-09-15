// Desktop Header --Section
    // variables 
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
    
// Auto-Play Video --Section
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


// Images and Text Panel --Section
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

    // Output of the Main heading for the image panels
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
        imageTextPanelDiv.style.background = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('"+imageTextPanelBackgroundImageURL+"')";
        imageTextPanelDiv.style.backgroundSize = 'cover';
    });

// Right Image Left Text --Section
    // Variables for the Left Image Right Text section
const leftImageRightTextImageURL = 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/main_shot.avif?v=1663118242';
const leftImageRightTextImageHeader = `Toronto's Top Real Estate Agent`;
const leftImageRightTextImageSubText = 'The $2 Billon Man';
const leftImageRightTextImageParagraphText = 'With over $2 Billion in sales, Andrew Hartley has developed a global reputation as the top Toronto real estate agent. His agency expertise in the Toronto market with his integrity, loyalty, and professionalism, Andrew is sought out by A-list celebrities, tech founders, and business leaders.';
const leftImageRightTextImageButtonText = 'Learn More';

// Left Image Right Text output
const LeftImageRightTextSection = document.querySelector('.RightImageLeftText-Section');
const LeftImageRightTextSectionLeftSideDiv = document.createElement('div');
const LeftImageRightTextSectionRightSideDiv = document.createElement('div');
LeftImageRightTextSectionLeftSideDiv.classList.add('LeftImageRightTextSectionLeftSideDiv');
LeftImageRightTextSectionRightSideDiv.classList.add('LeftImageRightTextSectionRightSideDiv');

const leftImageRightTextImageHeaderEl = document.createElement('h1');
const leftImageRightTextImageSubTextEl = document.createElement('h3');
const leftImageRightTextImageParagraphTextEl = document.createElement('p');
const leftImageRightTextImageButtonEl = document.createElement('button');
const leftImageRightTextImageImageEl = document.createElement('img');

leftImageRightTextImageHeaderEl.appendChild(document.createTextNode(leftImageRightTextImageHeader));
LeftImageRightTextSectionLeftSideDiv.appendChild(leftImageRightTextImageHeaderEl);
LeftImageRightTextSection.appendChild(LeftImageRightTextSectionLeftSideDiv);

leftImageRightTextImageSubTextEl.appendChild(document.createTextNode(leftImageRightTextImageSubText));
LeftImageRightTextSectionLeftSideDiv.appendChild(leftImageRightTextImageSubTextEl);
LeftImageRightTextSection.appendChild(LeftImageRightTextSectionRightSideDiv);

leftImageRightTextImageParagraphTextEl.appendChild(document.createTextNode(leftImageRightTextImageParagraphText));
LeftImageRightTextSectionLeftSideDiv.appendChild(leftImageRightTextImageParagraphTextEl);
LeftImageRightTextSection.appendChild(LeftImageRightTextSectionRightSideDiv);

leftImageRightTextImageImageEl.classList.add('leftImageRightTextImageImageBtn');
LeftImageRightTextSectionRightSideDiv.appendChild(leftImageRightTextImageImageEl);
leftImageRightTextImageImageEl.src = leftImageRightTextImageURL;
leftImageRightTextImageImageEl.classList.add('leftImageRightTextImageImageEl');

leftImageRightTextImageButtonEl.classList.add('leftImageRightTextImageButton');
leftImageRightTextImageButtonEl.appendChild(document.createTextNode(leftImageRightTextImageButtonText.toUpperCase()));
LeftImageRightTextSectionLeftSideDiv.appendChild(leftImageRightTextImageButtonEl);

LeftImageRightTextSectionLeftSideDiv.appendChild(leftImageRightTextImageButtonEl);

// Images Zoom On Hover --Section
    // Variables
const imageZoomOnHoverURLs = [
    {
        URL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Oakville.avif?v=1663176288',
        Text: 'Oakville',
         href: '#'
    },
    {
         URL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Burlington.avif?v=1663176288',
        Text: 'Burlington',
        href: '#'
    },
    {
        URL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Downtown.avif?v=1663176288',
        Text: 'Downtown Toronto',
        href: '#'
    },
    {
        URL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Richmond_Hill.avif?v=1663176288',
         Text: 'Richmond Hill',
        href: '#'
    }
];

// Images Zoom On Hover Output
const imageOnHoverContainer = document.querySelector('.ImagesZoomOnHover-Section');
for (let j = 0; j < imageZoomOnHoverURLs.length; j++) {
    const imageOnHoverDivs = document.createElement('div');
    imageOnHoverDivs.classList.add('imageOnHoverDivs');
    imageOnHoverContainer.appendChild(imageOnHoverDivs);
}

const imageOnHoverDivs = document.querySelectorAll('.imageOnHoverDivs');
imageOnHoverDivs.forEach(div => {
    const imageOnHoverBackgroundDivs = document.createElement('div');
    imageOnHoverBackgroundDivs.classList.add('imageOnHoverBackgroundDivs');
    div.appendChild(imageOnHoverBackgroundDivs);
});

for (let z = 0; z < imageZoomOnHoverURLs.length; z++) {
    const imageOnHoverBackgroundDiv = document.querySelectorAll('.imageOnHoverBackgroundDivs');
    const imageZoomOnHoverURL = imageZoomOnHoverURLs[z].URL;
    imageOnHoverBackgroundDiv[z].style.background = "url('"+imageZoomOnHoverURL+"')";
    imageOnHoverBackgroundDiv[z].style.backgroundSize = 'cover';
};