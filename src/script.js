// Find the top of each section using --Section

// Variables for Social Platforms
const headerMobileSocialIcons = [
    //Facebook
    {
        Link: 'https://www.facebook.com/',
        Icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-facebook-48.png?v=1663738855'
    },    
    //Instagram
    {
        Link: 'https://www.instagram.com',
        Icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-instagram-48.png?v=1663738854'
    //Twitter
    },
    {
        Link: 'https://twitter.com/',
        Icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-twitter-squared-48.png?v=1663738814'
    },    
    // LinkedIn
    {
        Link: 'https://linkedin.com',
        Icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-linkedin-48.png?v=1663738620'
    },    
    // YouTube
    {
        Link: 'https://www.youtube.com/',
        Icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-youtube-48.png?v=1663738815'
    },
    // TikTok
    {
        Link: 'https://www.tiktok.com/',
        Icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-tiktok-48.png?v=1663738843'
    }    
];

// Desktop Header --Section
    // variables for header
const businessNameVar = "Andrew Hartley Realty";
const logoSrc = 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Ah_7d819f18-2c11-4e01-a30e-49b1d6d06afa.png?v=1660973154';
const logoAlt = 'Andrew Hartley Realty Logo';
const headerMenuList = [
    {
        title: 'Home',
        href: '#',
    },
    {
        title: 'About',
        href: '/#about',  //Find the ID input using --id
    },
    {
        title: 'Our Properties',
        href: '/#ourproperties', //Find the ID input using --id
    },
    {
        title: 'Contact',
        href: '/#contact', //Find the ID input using --id
    }
];

// Desktop Header Section - Output onto DOM
    // left side
const desktopHeaderLeft = document.querySelector('.desktop-header-left');

const headerLogoLink = document.createElement('a');
const headerLogo = document.createElement('img');
headerLogoLink.classList.add('headerLogoLink');
headerLogo.classList.add('businessName');
headerLogoLink.href = headerMenuList[0].href;
headerLogo.src = logoSrc;
headerLogo.alt = logoAlt;
headerLogoLink.appendChild(headerLogo);
desktopHeaderLeft.appendChild(headerLogoLink);

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
    // adding the menu items
    const link = document.createElement('a');
    link.classList.add('navItem');
    link.href = menuItem.href;
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

// the social media icons and links 
const headerSocialLinks = document.createElement('div');
headerSocialLinks.classList.add('headerSocialLinks');
headerDiv.appendChild(headerSocialLinks);
    // for the icon output onto the DOM
    headerMobileSocialIcons.forEach(social => {
        const  headerMobileSocialIconLink = document.createElement('a');
        headerMobileSocialIconLink.classList.add('headerMobileSocialIconLink');
        const headerMobileSocialIconImgEl = document.createElement('img');
        headerMobileSocialIconImgEl.classList.add('headerMobileSocialIconImgEl');
        headerMobileSocialIconLink.appendChild(headerMobileSocialIconImgEl);
        const headerMobileSocialIconImgSrc = social.Link;
        headerMobileSocialIconImgEl.src = social.Icon;
        headerMobileSocialIconLink.href = headerMobileSocialIconImgSrc;
        headerSocialLinks.appendChild(headerMobileSocialIconLink);
    });

// Open menu function
hamburger.addEventListener('click', function(e) {
    headerDiv.style.left = '0%';
    hamburger.style.display = 'none';
    crossOut.style.display = 'block';
});

// close menu function
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

// Scroll affect for header
  // The debounce function receives our function as a parameter
  const debounce = (fn) => {
    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;

    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) { 
        cancelAnimationFrame(frame);
      }
  
      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
        
        // Call our function and pass any params we received
        fn(...params);
      });
    } 
  };
  
  // Reads out the scroll position and stores it in the data attribute so we can use it in our stylesheets
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  }
  
  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(storeScroll), { passive: true });
  
  // Update scroll position for first time
  storeScroll();

// Main Container Section
    
// Auto-Play Video --Section
    // Auto-Play Video Section Variables
    const AutoPlayVideoSourceURL = 'https://cdn.shopify.com/videos/c/o/v/0849338fcc9b4f2091ffbd4f9ba069dd.mp4';
    const AutoPlayVideoSecText = 'Welcome to';
    const AutoPlayVideoMainText = 'Andrew Hartley Realty';
    const AutoPlayVideoSubText = 'Herbert Banker Realty';
    const AutoPlayVideoButtonTitle = 'Search All Homes';
    const AutoPlayVideoButtonURL = '#';

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
    const AutoPlayVideoButttonLink = document.createElement('a');
    AutoPlayVideoButttonLink.classList.add('AutoPlayVideoButttonLink');
    AutoPlayVideoButttonLink.href = AutoPlayVideoButtonURL;
    AutoPlayVideoButton.appendChild(document.createTextNode(AutoPlayVideoButtonTitle.toUpperCase()));
    AutoPlayVideoButttonLink.appendChild(AutoPlayVideoButton);
    AutoPlayVideoTextDiv.appendChild(AutoPlayVideoButttonLink);
    
    // Pop-up animation on page load for autoplay video section
    const autoplayVideoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    const autoPlayVideohiddenElements = document.querySelectorAll('.sectionText');
    autoPlayVideohiddenElements.forEach((el) => autoplayVideoObserver.observe(el));

    

// Images and Text Panel --Section
    // Images and Text Panel Section Variables
    const imageTextPanelTitle = 'Explore Andrew Hartley Realty';
    const imageTextPanelURLsAndText = [
        {
            text: 'Home Search',
            url:'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/stephen-leonardi-XKIO6ZgCObo-unsplash.jpg?v=1662436369',
            href: '#'
        },
        {
            text: 'Exclusive Listings',
            url:'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-max-vakhtbovych-7031414.jpg?v=1662436894',
            href: '#'
        },
        {
            text: 'Our Blog',
            url:'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/roberto-nickson-so3wgJLwDxo-unsplash.jpg?v=1662436470',
            href: '#'
        },
        {
            text: 'Work with Andrew',
            url:'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-chris-goodwin-32870.jpg?v=1662441099',
            href: '#'
        }
    ];

    // Output of the Main heading for the image panels
    const imageTextPanelContainer = document.querySelector('.ImagesTextPanel-Section');
    imageTextPanelContainer.setAttribute('id', 'about'); // --id
    const imageTextPanelHeading = document.createElement('h1');
    imageTextPanelHeading.classList.add('imageTextPanelHeading');
    imageTextPanelContainer.appendChild(imageTextPanelHeading);
    imageTextPanelHeading.appendChild(document.createTextNode(imageTextPanelTitle.toUpperCase()));
    imageTextPanelContainer.prepend(imageTextPanelHeading);

    // Image and Text Output
    const ImagesTextPanelContainer = document.querySelector('.panelContainer');

    // For the panels
    imageTextPanelURLsAndText.forEach(panel => {
        
        // The link for the panel
        const imageTextPanelLink = document.createElement('a');
        imageTextPanelLink.classList.add('imageTextPanelLink');
        const imageTextPanelLinkURL = panel.href;
        imageTextPanelLink.href = imageTextPanelLinkURL;
        ImagesTextPanelContainer.appendChild(imageTextPanelLink);
        
        // The div container 
        const imageTextPanelDiv = document.createElement('div');
        imageTextPanelDiv.classList.add('ImagesTextPanelDivs');
        imageTextPanelLink.appendChild(imageTextPanelDiv);


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

    // Pop-up animation on page load for image text panel section
    const imageTextPanelDivObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const imageTextPanelDivAnimation = document.querySelectorAll('.imageTextPanelLink');
    imageTextPanelDivAnimation.forEach((el) => imageTextPanelDivObserver.observe(el));

// Right Image Left Text --Section
    // Variables for the Right Image Left Text section
const leftImageRightTextImageURL = 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/main_shot.avif?v=1663118242';
const leftImageRightTextImageHeader = `Toronto's Top Real Estate Agent`;
const leftImageRightTextImageSubText = 'The $2 Billon Man';
const leftImageRightTextImageParagraphText = 'With over $2 Billion in sales, Andrew Hartley has developed a global reputation as the top Toronto real estate agent. His agency expertise in the Toronto market with his integrity, loyalty, and professionalism, Andrew is sought out by A-list celebrities, tech founders, and business leaders.';
const leftImageRightTextImageButtonText = 'Learn More';
const leftImageRightTextImageButtonURL = '#';

// Left Image Right Text output
const LeftImageRightTextSection = document.querySelector('.RightImageLeftText-Section');
const LeftImageRightTextSectionLeftSideDiv = document.createElement('div');
const LeftImageRightTextSectionRightSideDiv = document.createElement('div');
LeftImageRightTextSectionLeftSideDiv.classList.add('LeftImageRightTextSectionLeftSideDiv');
LeftImageRightTextSectionRightSideDiv.classList.add('LeftImageRightTextSectionRightSideDiv');

// Element creation
const leftImageRightTextImageHeaderEl = document.createElement('h1');
const leftImageRightTextImageSubTextEl = document.createElement('h3');
const leftImageRightTextImageParagraphTextEl = document.createElement('p');
const leftImageRightTextImageButtonURLs = document.createElement('a');
const leftImageRightTextImageButtonEl = document.createElement('button');
const leftImageRightTextImageImageEl = document.createElement('img');

// section header
leftImageRightTextImageHeaderEl.appendChild(document.createTextNode(leftImageRightTextImageHeader));
LeftImageRightTextSectionLeftSideDiv.appendChild(leftImageRightTextImageHeaderEl);
LeftImageRightTextSection.appendChild(LeftImageRightTextSectionLeftSideDiv);

// section sub text
leftImageRightTextImageSubTextEl.appendChild(document.createTextNode(leftImageRightTextImageSubText));
LeftImageRightTextSectionLeftSideDiv.appendChild(leftImageRightTextImageSubTextEl);
LeftImageRightTextSection.appendChild(LeftImageRightTextSectionRightSideDiv);

// section paragraph 
leftImageRightTextImageParagraphTextEl.appendChild(document.createTextNode(leftImageRightTextImageParagraphText));
LeftImageRightTextSectionLeftSideDiv.appendChild(leftImageRightTextImageParagraphTextEl);
LeftImageRightTextSection.appendChild(LeftImageRightTextSectionRightSideDiv);

// section right side image
leftImageRightTextImageImageEl.classList.add('leftImageRightTextImageImageBtn');
LeftImageRightTextSectionRightSideDiv.appendChild(leftImageRightTextImageImageEl);
leftImageRightTextImageImageEl.src = leftImageRightTextImageURL;
leftImageRightTextImageImageEl.classList.add('leftImageRightTextImageImageEl');

// section button CTA
leftImageRightTextImageButtonEl.classList.add('leftImageRightTextImageButton');
leftImageRightTextImageButtonURLs.classList.add('leftImageRightTextImageButtonURLs');
leftImageRightTextImageButtonURLs.href = leftImageRightTextImageButtonURL;
leftImageRightTextImageButtonURLs.appendChild(leftImageRightTextImageButtonEl);
leftImageRightTextImageButtonEl.appendChild(document.createTextNode(leftImageRightTextImageButtonText.toUpperCase()));
LeftImageRightTextSectionLeftSideDiv.appendChild(leftImageRightTextImageButtonURLs);

// Pop-up animation on page load for single image with text section
const singleImagewithTextDivOberver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const singleImagewithTextDiv = document.querySelectorAll('.LeftImageRightTextSectionLeftSideDiv');
singleImagewithTextDiv.forEach((el) => singleImagewithTextDivOberver.observe(el));


// Only Text Panel Testimonial --Section
// variables
const onlyTextpanelTestimonialHeader = 'Latest Press and Media';
const onlyTextpanelTestimonialVariables = [
    {
        text: '"Andrew is Herbert Banker’s No. 1 agent, and his expertise has propelled him to the top of luxury real estate agents in the Toronto area."',
        subText: '- Evolve Realty Magazine'
    },
    {
        text: '"Andrew Hartley was recently inducted into the Toronto Real Estate Society Hall of Fame in 2022, being the youngest agent in history."',
        subText: '- GTA Reporter'
    },
    {
        text: '"In his more-than-two-decade career, Hartley has racked up more than $2 billion in sales, consistently ranking as one of the top agents in the country."',
        subText: '- Rich Realty News'
    }
];

// Only Text Panel Testimonial output for heading
const onlyTextpanelTestimonialContainer = document.querySelector('.OnlyTextPanelTestimonial-Section');
const onlyTextpanelTestimonialHeaderEl = document.createElement('h1');
onlyTextpanelTestimonialHeaderEl.classList.add('onlyTextpanelTestimonialHeaderEl');
onlyTextpanelTestimonialHeaderEl.appendChild(document.createTextNode(onlyTextpanelTestimonialHeader.toUpperCase()));
onlyTextpanelTestimonialContainer.appendChild(onlyTextpanelTestimonialHeaderEl);

// Only Text Panel Testimonial output for testimonial
const onlyTextpanelTestimonialDivEl = document.createElement('div');
onlyTextpanelTestimonialDivEl.classList.add('onlyTextpanelTestimonialDivEl');
onlyTextpanelTestimonialContainer.appendChild(onlyTextpanelTestimonialDivEl);

onlyTextpanelTestimonialVariables.forEach(testimonial => {
    // variable creation
    const onlyTextpanelTestimonialtextDiv = document.createElement('div');
    onlyTextpanelTestimonialtextDiv.classList.add('onlyTextpanelTestimonialtextDiv');
    const onlyTextpanelTestimonialtextEl = document.createElement('p');
    onlyTextpanelTestimonialtextEl.classList.add('onlyTextpanelTestimonialtextEl');
    const onlyTextpanelTestimonialSignatureEl = document.createElement('p');
    onlyTextpanelTestimonialSignatureEl.classList.add('onlyTextpanelTestimonialSignatureEl');

    const onlyTextpanelTestimonialtext = testimonial.text;
    const onlyTextpanelTestimonialSignature = testimonial.subText;

    // add the text into the elements
    onlyTextpanelTestimonialtextEl.appendChild(document.createTextNode(onlyTextpanelTestimonialtext));
    onlyTextpanelTestimonialSignatureEl.appendChild(document.createTextNode(onlyTextpanelTestimonialSignature));
    onlyTextpanelTestimonialtextEl.style.fontStyle = 'italic';
    onlyTextpanelTestimonialtextDiv.appendChild(onlyTextpanelTestimonialtextEl);
    onlyTextpanelTestimonialtextDiv.appendChild(onlyTextpanelTestimonialSignatureEl);

    // adding the text into the DOM
    onlyTextpanelTestimonialDivEl.appendChild(onlyTextpanelTestimonialtextDiv);

});

// Testimonial animation going from left to right
const textPanelOnlyTestimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const onlyTextPanelTestimonialDivElements = document.querySelectorAll('.onlyTextpanelTestimonialtextDiv');
onlyTextPanelTestimonialDivElements.forEach((el) => textPanelOnlyTestimonialObserver.observe(el));


// Images Zoom On Hover --Section
    // Variables
const imageZoomOnHoverButtonTexts = 'Learn More';
const imageZoomOnHoverURLs = [
    {
        URL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/andre-francois-mckenzie-08uIUe2a9XY-unsplash.jpg?v=1663304584',
        Text: 'Oakville',
         href: '#'
    },
    {
         URL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/cole-ankney-ZdJ6eIKN3G0-unsplash.jpg?v=1663304852',
        Text: 'Burlington',
        href: '#'
    },
    {
        URL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Downtown.avif?v=1663176288',
        Text: 'Downtown',
        href: '#'
    },
    {
        URL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Richmond_Hill.avif?v=1663176288',
        Text: 'Hamilton',
        href: '#'
    }
];

// Images Zoom On Hover Output for background
const imageOnHoverContainer = document.querySelector('.ImagesZoomOnHover-Section');
imageOnHoverContainer.setAttribute('id', 'ourproperties'); //--id
for (let j = 0; j < imageZoomOnHoverURLs.length; j++) {
    const imageOnHoverDivs = document.createElement('div');
    imageOnHoverDivs.classList.add('imageOnHoverDivs');
    imageOnHoverContainer.appendChild(imageOnHoverDivs);
}

const imageOnHoverDivs = document.querySelectorAll('.imageOnHoverDivs');
imageOnHoverDivs.forEach(div => {
    // Add background image div
    const imageOnHoverBackgroundDivs = document.createElement('div');
    imageOnHoverBackgroundDivs.classList.add('imageOnHoverBackgroundDivs');
    div.appendChild(imageOnHoverBackgroundDivs);

    // Creating the text element
    const imageOnHoverMainText = document.createElement('h3');
    imageOnHoverMainText.classList.add('imageOnHoverMainText');
    div.appendChild(imageOnHoverMainText);

    // Creating the button element
    const imageOnHoverButtonLinks = document.createElement('a');
    const imageOnHoverButton = document.createElement('button');
    imageOnHoverButtonLinks.classList.add('imageOnHoverButtonLinks');
    imageOnHoverButton.classList.add('imageOnHoverButton');
    div.appendChild(imageOnHoverButtonLinks);
    imageOnHoverButtonLinks.appendChild(imageOnHoverButton);
});

for (let z = 0; z < imageZoomOnHoverURLs.length; z++) {
    // adding the background URL 
    const imageOnHoverBackgroundDiv = document.querySelectorAll('.imageOnHoverBackgroundDivs');
    const imageZoomOnHoverURL = imageZoomOnHoverURLs[z].URL;
    imageOnHoverBackgroundDiv[z].style.background = "url('"+imageZoomOnHoverURL+"')";
    imageOnHoverBackgroundDiv[z].style.backgroundSize = 'cover';

    // Adding the text to the text element
    const imageZoomOnHoverText = imageZoomOnHoverURLs[z].Text;
    const imageOnZoomHoverTextEl = document.querySelectorAll('.imageOnHoverMainText');
    imageOnZoomHoverTextEl[z].appendChild(document.createTextNode(imageZoomOnHoverText));

    // adding the link to the button
    const imageOnHoverButtonLinks = document.querySelectorAll('.imageOnHoverButtonLinks');
    imageOnHoverButtonLinks[z].href = imageZoomOnHoverURLs[z].href;

    // Adding the text to the button element
    const imageZoomOnHoverButtonText = imageZoomOnHoverButtonTexts;
    const imageZoomOnHoverButtonEl = document.querySelectorAll('.imageOnHoverButton');
    imageZoomOnHoverButtonEl[z].appendChild(document.createTextNode(imageZoomOnHoverButtonText));
};

// Contact CTA and Email Submission --Section
// variables on the left side
const contactCTAemailformBackgroundURL = 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/stephan-bechert-yFV39g6AZ5o-unsplash.jpg?v=1663451952';
const contactCTAemailformLeftSide = [
    {
        heading: 'Work with Us',
        subTextOne: 'We offer the highest level of expertise, service, and integrity.',
        subTextTwo: 'Andrew Hartley Realty is the leading real estate agent in the Toronto area, and has helped hundreds of buyers find luxury homes and mansions, resulting in almost $2 Billion of closed residential real estate transactions in the last 20 years.',
        buttonText: 'Learn More',
        buttonURL: '#'
    },
];
// variables on the right side 
const contactCTAemailformRightSide = [
    {
        heading: 'Newsletter',
        paragraphText: 'For exclusive news and market updates, sign up for our newsletter below.',
        formPlaceholder: 'Your email',
        buttonText: 'Submit',
        buttonURL: '#'
    },
];

// Contact CTA and Email Submission Output to the DOM
// creating the divs for the two sides
const ContactCTAEmailSubmissionContainer = document.querySelector('.ContactCTAEmailSubmission-Section');
ContactCTAEmailSubmissionContainer.setAttribute('id', 'contact'); // --id
const ContactCTAEmailSubmissionLeftDiv = document.createElement('div');
ContactCTAEmailSubmissionLeftDiv.classList.add('ContactCTAEmailSubmissionLeftDiv');
const ContactCTAEmailSubmissionRightDiv = document.createElement('div');
ContactCTAEmailSubmissionRightDiv.classList.add('ContactCTAEmailSubmissionRightDiv');
ContactCTAEmailSubmissionContainer.appendChild(ContactCTAEmailSubmissionLeftDiv);
ContactCTAEmailSubmissionContainer.appendChild(ContactCTAEmailSubmissionRightDiv);

// The background image on both sides
ContactCTAEmailSubmissionContainer.style.background = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('"+contactCTAemailformBackgroundURL+"')";
ContactCTAEmailSubmissionContainer.style.backgroundSize = 'cover';
ContactCTAEmailSubmissionContainer.style.backgroundPosition = 'center';

// Adding the text inside the left div
contactCTAemailformLeftSide.forEach(element => {
    const ContactCTAEmailformLeftSideHeadingEl = document.createElement('h3');
    const ContactCTAEmailformLeftSideSubOneEl = document.createElement('p');
    const ContactCTAEmailformLeftSideSubTwoEl = document.createElement('p');
    ContactCTAEmailformLeftSideHeadingEl.appendChild(document.createTextNode(element.heading));
    ContactCTAEmailformLeftSideSubOneEl.appendChild(document.createTextNode(element.subTextOne));
    ContactCTAEmailformLeftSideSubTwoEl.appendChild(document.createTextNode(element.subTextTwo));
    ContactCTAEmailSubmissionLeftDiv.appendChild(ContactCTAEmailformLeftSideHeadingEl);
    ContactCTAEmailSubmissionLeftDiv.appendChild(ContactCTAEmailformLeftSideSubOneEl);
    ContactCTAEmailSubmissionLeftDiv.appendChild(ContactCTAEmailformLeftSideSubTwoEl);

    // Call To Action button for the left side 
    const ContactCTAEmailformLeftSideCTAbuttonURL = document.createElement('a');
    ContactCTAEmailformLeftSideCTAbuttonURL.classList.add('ContactCTAEmailformLeftSideCTAbuttonURL');
    ContactCTAEmailformLeftSideCTAbuttonURL.href = element.buttonURL;
    const ContactCTAEmailformLeftSideCTAbutton = document.createElement('button');
    ContactCTAEmailformLeftSideCTAbutton.classList.add('ContactCTAEmailformLeftSideCTAbutton');
    ContactCTAEmailformLeftSideCTAbuttonURL.appendChild(ContactCTAEmailformLeftSideCTAbutton);
    ContactCTAEmailformLeftSideCTAbutton.appendChild(document.createTextNode(element.buttonText));
    ContactCTAEmailSubmissionLeftDiv.appendChild(ContactCTAEmailformLeftSideCTAbuttonURL);
    });

// Right side text and form addition
contactCTAemailformRightSide.forEach(element => {
    const contactCTAemailformRightSideHeading = document.createElement('h1');
    const contactCTAemailformRightSideParagraph = document.createElement('p');
    const contactCTAemailformRightSideSubmissionForm = document.createElement('form');
    const contactCTAemailformRightSideSubmissionFormInput = document.createElement('input');
    const contactCTAemailformRightSideSubmitBtnURL = document.createElement('a');
    const contactCTAemailformRightSideSubmitBtn = document.createElement('button');

    contactCTAemailformRightSideHeading.appendChild(document.createTextNode(element.heading));
    ContactCTAEmailSubmissionRightDiv.appendChild(contactCTAemailformRightSideHeading);
    contactCTAemailformRightSideParagraph.appendChild(document.createTextNode(element.paragraphText));
    ContactCTAEmailSubmissionRightDiv.appendChild(contactCTAemailformRightSideParagraph);
    contactCTAemailformRightSideSubmissionForm.appendChild(contactCTAemailformRightSideSubmissionFormInput);
    contactCTAemailformRightSideSubmissionFormInput.placeholder = element.formPlaceholder;
    ContactCTAEmailSubmissionRightDiv.appendChild(contactCTAemailformRightSideSubmissionForm);
    contactCTAemailformRightSideSubmitBtnURL.appendChild(contactCTAemailformRightSideSubmitBtn);
    contactCTAemailformRightSideSubmitBtnURL.href = element.buttonURL;
    contactCTAemailformRightSideSubmitBtn.appendChild(document.createTextNode(element.buttonText));
    ContactCTAEmailSubmissionRightDiv.appendChild(contactCTAemailformRightSideSubmitBtnURL);
});

// Footer --Section
// footer variables for the text-only list
const footerMenuTextHeadingVar = 'Andrew Hartley Realty';
const footerMenuTextInfo = [
    {   
        // address
        title: 'Address:',
        info: '123 Main St. Toronto, ON M4C 4X6'
    },
    {
        // phone number
        title: 'Phone Number:',
        info: '613-123-4567'
    },
    {
        // email
        title: 'Email:',
        info: 'Andrew@andrewhartley.com'
    }
];
// Footer variables for link list
const footerMenuLinksHeading = 'Quick Links';
const footerMenuLinks = [
    {
        text: 'Home',
        URL: '#'
    },
    {
        text: 'About Us',
        URL: '#'
    },
    {
        text: 'Contact Us',
        URL: '#'
    },
    {
        text: 'Policy',
        URL: '#'
    },
];

// Source (only) variable for embedded Google Map
const footerMap = [
    {
        iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.364388369042!2d-79.3020559953908!3d43.682187373323764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc1a464af03f%3A0x1c36d03a1cdb30b9!2s123%20Main%20St%2C%20Toronto%2C%20ON%20M4E%202V9!5e0!3m2!1sen!2sca!4v1663909450399!5m2!1sen!2sca'
    }
];

// Output of elements onto the DOM
const footerContainer = document.querySelector('.footer');

// output of the footer quick links
const footerMenuTextLinkDiv = document.createElement('div');
footerMenuTextLinkDiv.classList.add('footerMenuTextLinkDiv');
const footerMenuHeaderEl = document.createElement('h3');
footerMenuHeaderEl.classList.add('footerMenuHeaderEl');
footerMenuHeaderEl.appendChild(document.createTextNode(footerMenuLinksHeading));
footerMenuTextLinkDiv.appendChild(footerMenuHeaderEl);
footerContainer.appendChild(footerMenuTextLinkDiv);
footerMenuLinks.forEach(link => {
    const footerMenuLinkTextLLinkEl = document.createElement('a');
    footerMenuLinkTextLLinkEl.classList.add('footerMenuLinkTextLLinkEl');
    footerMenuLinkTextLLinkEl.href = link.URL;
    const footerMenuLinkText = document.createElement('p');
    footerMenuLinkText.classList.add('footerMenuLinkText');
    footerMenuLinkTextLLinkEl.appendChild(footerMenuLinkText);
    footerMenuLinkText.appendChild(document.createTextNode(link.text));
    footerMenuTextLinkDiv.appendChild(footerMenuLinkTextLLinkEl);
});

// Footer Google Maps section output 
const footerMenuMapDiv = document.createElement('div');
footerMenuMapDiv.classList.add('footerMenuMapDiv');
const footerMenuMapIframe = document.createElement('iframe');
footerMenuMapIframe.classList.add('footerMenuMapIframe');
footerMenuMapIframe.src = footerMap[0].iframeSrc;
footerMenuMapIframe.allowfullscreen = '';
footerMenuMapIframe.referrerpolicy = 'no-referrer-when-downgrade';
footerMenuMapIframe.loading = 'lazy';
footerMenuMapIframe.style.border = '0';
footerMenuMapDiv.appendChild(footerMenuMapIframe);
footerContainer.appendChild(footerMenuMapDiv);

// Footer Text info section output
const footerMenuContactInfo = document.createElement('div');
footerMenuContactInfo.classList.add('footerMenuContactInfo');
footerContainer.appendChild(footerMenuContactInfo);

const footerMenuTextHeading = document.createElement('h3');
footerMenuTextHeading.classList.add('footerMenuTextHeading');
footerMenuTextHeading.appendChild(document.createTextNode(footerMenuTextHeadingVar));
footerMenuContactInfo.appendChild(footerMenuTextHeading);

footerMenuTextInfo.forEach(text => {
    const footerMenuTextTitle = document.createElement('p');
    footerMenuTextTitle.classList.add('footerMenuTextTitle');
    footerMenuTextTitle.appendChild(document.createTextNode(text.title));
    const footerMenuTextInformation = document.createElement('p');
    footerMenuTextInformation.classList.add('footerMenuTextInformation');
    footerMenuTextInformation.appendChild(document.createTextNode(text.info));
    footerMenuContactInfo.appendChild(footerMenuTextTitle);
    footerMenuContactInfo.appendChild(footerMenuTextInformation);
});

// Devanada signature
const footerBottomSection = document.createElement('div');
footerBottomSection.classList.add('footerBottomSection');
const devanadaSignature = 'Website designed and developed by Devanada.';
const devanadaSignatureEl = document.createElement('p');
devanadaSignatureEl.classList.add('devanadaSignatureEl');
devanadaSignatureEl.appendChild(document.createTextNode(devanadaSignature));
footerContainer.appendChild(devanadaSignatureEl);

// To push the social media icons to the bottom of the footer
document.addEventListener('DOMContentLoaded', function(e) {
    document.addEventListener('scroll', function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        // When the user is a certain px away from the bottom, fire the event.
        // the modifier is the number of pixels 
        let modifier = 200; 
        if((currentScroll + modifier > documentHeight) && (window.innerWidth > 900)) {
            headerSocialLinks.style.paddingTop = '55vh';
        } else {
            headerSocialLinks.style.paddingTop = '12%';
        }
    });
});