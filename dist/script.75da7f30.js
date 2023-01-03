// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
// Find the top of each section using --Section
// Variables for Social Platforms
var headerMobileSocialIcons = [//Facebook
{
  Link: 'https://www.facebook.com/',
  Icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-facebook-48.png?v=1663738855'
}, //Instagram
{
  Link: 'https://www.instagram.com',
  Icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-instagram-48.png?v=1663738854' //Twitter

}, {
  Link: 'https://twitter.com/',
  Icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-twitter-squared-48.png?v=1663738814'
}, // LinkedIn
{
  Link: 'https://linkedin.com',
  Icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-linkedin-48.png?v=1663738620'
}, // YouTube
{
  Link: 'https://www.youtube.com/',
  Icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-youtube-48.png?v=1663738815'
}, // TikTok
{
  Link: 'https://www.tiktok.com/',
  Icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-tiktok-48.png?v=1663738843'
}]; // Desktop Header --Section
// variables for header

var businessNameVar = "Andrew Hartley Realty";
var logoSrc = 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Ah_7d819f18-2c11-4e01-a30e-49b1d6d06afa.png?v=1660973154';
var logoAlt = 'Andrew Hartley Realty Logo';
var headerMenuList = [{
  title: 'Home',
  href: '#'
}, {
  title: 'About',
  href: '/#about' //Find the ID input using --id

}, {
  title: 'Our Properties',
  href: '/#ourproperties' //Find the ID input using --id

}, {
  title: 'Contact',
  href: '/#contact' //Find the ID input using --id

}]; // Desktop Header Section - Output onto DOM
// left side

var desktopHeaderLeft = document.querySelector('.desktop-header-left');
var headerLogoLink = document.createElement('a');
var headerLogo = document.createElement('img');
headerLogoLink.classList.add('headerLogoLink');
headerLogo.classList.add('businessName');
headerLogoLink.href = headerMenuList[0].href;
headerLogo.src = logoSrc;
headerLogo.alt = logoAlt;
headerLogoLink.appendChild(headerLogo);
desktopHeaderLeft.appendChild(headerLogoLink);
var HeaderBusinessName = document.createElement('h1');
HeaderBusinessName.classList.add('businessLogo');
HeaderBusinessName.appendChild(document.createTextNode(businessNameVar));
desktopHeaderLeft.appendChild(HeaderBusinessName); // right side

var desktopHeaderRight = document.querySelector('.desktop-header-right');
var headerMenuItems = document.createElement('ul');
headerMenuItems.classList.add('headerMenuItems');
desktopHeaderRight.appendChild(headerMenuItems);
headerMenuList.forEach(function (menuItem) {
  // adding the menu items
  var link = document.createElement('a');
  link.classList.add('navItem');
  link.href = menuItem.href;
  var linkName = menuItem.title;
  headerMenuItems.appendChild(link);
  link.appendChild(document.createTextNode(linkName.toUpperCase()));
}); // Mobile Header Section - Output onto DOM

var hamburgerIcon = document.querySelector('.mobileHeaderTab');
var headerDiv = document.querySelector('.desktop-header');
var crossOut = document.querySelector('.crossOut');
var hamburger = document.querySelector('.hamburger');
var mainContent = document.querySelector('.mainContainer'); // the social media icons and links 

var headerSocialLinks = document.createElement('div');
headerSocialLinks.classList.add('headerSocialLinks');
headerDiv.appendChild(headerSocialLinks); // for the icon output onto the DOM

headerMobileSocialIcons.forEach(function (social) {
  var headerMobileSocialIconLink = document.createElement('a');
  headerMobileSocialIconLink.classList.add('headerMobileSocialIconLink');
  var headerMobileSocialIconImgEl = document.createElement('img');
  headerMobileSocialIconImgEl.classList.add('headerMobileSocialIconImgEl');
  headerMobileSocialIconLink.appendChild(headerMobileSocialIconImgEl);
  var headerMobileSocialIconImgSrc = social.Link;
  headerMobileSocialIconImgEl.src = social.Icon;
  headerMobileSocialIconLink.href = headerMobileSocialIconImgSrc;
  headerSocialLinks.appendChild(headerMobileSocialIconLink);
});
var headermenuItem = document.querySelectorAll('.navItem');
headermenuItem.forEach(function (item) {
  item.addEventListener('click', function () {
    if (window.innerWidth < 900) {
      headerDiv.style.left = '-90%';
      hamburger.style.display = 'block';
      crossOut.style.display = 'none';
    }
  });
}); // Open menu function

hamburger.addEventListener('click', function (e) {
  headerDiv.style.left = '0%';
  hamburger.style.display = 'none';
  crossOut.style.display = 'block';
}); // close menu function

crossOut.addEventListener('click', function (e) {
  headerDiv.style.left = '-90%';
  crossOut.style.display = 'none';
  hamburger.style.display = 'block';
});
mainContent.addEventListener('click', function (e) {
  if (window.innerWidth < 900) {
    headerDiv.style.left = '-90%';
    crossOut.style.display = 'none';
    hamburger.style.display = 'block';
  }
}); // Resizing adjustment

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

window.onresize = desktopWindowResize; // Scroll affect for header
// The debounce function receives our function as a parameter

var debounce = function debounce(fn) {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  var frame; // The debounce function returns a new function that can receive a variable number of arguments

  return function () {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    } // Queue our function call for the next frame


    frame = requestAnimationFrame(function () {
      // Call our function and pass any params we received
      fn.apply(void 0, params);
    });
  };
}; // Reads out the scroll position and stores it in the data attribute so we can use it in our stylesheets


var storeScroll = function storeScroll() {
  document.documentElement.dataset.scroll = window.scrollY;
}; // Listen for new scroll events, here we debounce our `storeScroll` function


document.addEventListener('scroll', debounce(storeScroll), {
  passive: true
}); // Update scroll position for first time

storeScroll(); // Main Container Section
// Auto-Play Video --Section
// Auto-Play Video Section Variables

var AutoPlayVideoSourceURL = 'https://cdn.shopify.com/videos/c/o/v/0849338fcc9b4f2091ffbd4f9ba069dd.mp4';
var AutoPlayVideoSecText = 'Welcome to';
var AutoPlayVideoMainText = 'Andrew Hartley Realty';
var AutoPlayVideoSubText = 'Herbert Banker Realty';
var AutoPlayVideoButtonTitle = 'Search All Homes';
var AutoPlayVideoButtonURL = '#'; // Auto-Play Video Section - video Output

var AutoPlayVideoSection = document.querySelector('.AutoPlayVideo-Section');
var AutoPlayVideovideoEl = document.createElement('video');
var AutoPlayVideoSource = document.createElement('source');
AutoPlayVideoSource.src = AutoPlayVideoSourceURL;
AutoPlayVideovideoEl.muted = true;
AutoPlayVideovideoEl.loop = true;
AutoPlayVideovideoEl.autoplay = true;
AutoPlayVideovideoEl.classList.add('video');
AutoPlayVideovideoEl.appendChild(AutoPlayVideoSource);
AutoPlayVideoSection.appendChild(AutoPlayVideovideoEl); // Auto-Play Video Section - text Output

var AutoPlayVideoTextDiv = document.querySelector('.sectionTextDiv');
var mainTextEl = document.createElement('h1');
var secTextEl = document.createElement('p');
var subTextEl = document.createElement('p');
mainTextEl.classList.add('sectionText');
secTextEl.classList.add('sectionText');
subTextEl.classList.add('sectionSubText');
secTextEl.appendChild(document.createTextNode(AutoPlayVideoSecText));
AutoPlayVideoTextDiv.appendChild(secTextEl);
mainTextEl.appendChild(document.createTextNode(AutoPlayVideoMainText));
AutoPlayVideoTextDiv.appendChild(mainTextEl);
subTextEl.appendChild(document.createTextNode(AutoPlayVideoSubText));
AutoPlayVideoTextDiv.appendChild(subTextEl); // Call-To-Action button

var AutoPlayVideoButton = document.createElement('button');
AutoPlayVideoButton.classList.add('auto-Play-CTA');
var AutoPlayVideoButttonLink = document.createElement('a');
AutoPlayVideoButttonLink.classList.add('AutoPlayVideoButttonLink');
AutoPlayVideoButttonLink.href = AutoPlayVideoButtonURL;
AutoPlayVideoButton.appendChild(document.createTextNode(AutoPlayVideoButtonTitle.toUpperCase()));
AutoPlayVideoButttonLink.appendChild(AutoPlayVideoButton);
AutoPlayVideoTextDiv.appendChild(AutoPlayVideoButttonLink); // Pop-up animation on page load for autoplay video section

var autoplayVideoObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
var autoPlayVideohiddenElements = document.querySelectorAll('.sectionText');
autoPlayVideohiddenElements.forEach(function (el) {
  return autoplayVideoObserver.observe(el);
}); // Images and Text Panel --Section
// Images and Text Panel Section Variables

var imageTextPanelTitle = 'Explore Andrew Hartley Realty';
var imageTextPanelURLsAndText = [{
  text: 'Home Search',
  url: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/stephen-leonardi-XKIO6ZgCObo-unsplash.jpg?v=1662436369',
  href: '#'
}, {
  text: 'Exclusive Listings',
  url: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-max-vakhtbovych-7031414.jpg?v=1662436894',
  href: '#'
}, {
  text: 'Our Blog',
  url: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/roberto-nickson-so3wgJLwDxo-unsplash.jpg?v=1662436470',
  href: '#'
}, {
  text: 'Work with Andrew',
  url: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-chris-goodwin-32870.jpg?v=1662441099',
  href: '#'
}]; // Output of the Main heading for the image panels

var imageTextPanelContainer = document.querySelector('.ImagesTextPanel-Section');
imageTextPanelContainer.setAttribute('id', 'about'); // --id

var imageTextPanelHeading = document.createElement('h1');
imageTextPanelHeading.classList.add('imageTextPanelHeading');
imageTextPanelContainer.appendChild(imageTextPanelHeading);
imageTextPanelHeading.appendChild(document.createTextNode(imageTextPanelTitle.toUpperCase()));
imageTextPanelContainer.prepend(imageTextPanelHeading); // Image and Text Output

var ImagesTextPanelContainer = document.querySelector('.panelContainer'); // For the panels

imageTextPanelURLsAndText.forEach(function (panel) {
  // The link for the panel
  var imageTextPanelLink = document.createElement('a');
  imageTextPanelLink.classList.add('imageTextPanelLink');
  var imageTextPanelLinkURL = panel.href;
  imageTextPanelLink.href = imageTextPanelLinkURL;
  ImagesTextPanelContainer.appendChild(imageTextPanelLink); // The div container 

  var imageTextPanelDiv = document.createElement('div');
  imageTextPanelDiv.classList.add('ImagesTextPanelDivs');
  imageTextPanelLink.appendChild(imageTextPanelDiv); // The text

  var imageTextPanelEl = document.createElement('h2');
  imageTextPanelEl.classList.add('imageTextPanelText');
  var imageTextPanelText = panel.text;
  imageTextPanelEl.appendChild(document.createTextNode(imageTextPanelText));
  imageTextPanelDiv.appendChild(imageTextPanelEl); // The background image

  var imageTextPanelBackgroundImageURL = panel.url;
  imageTextPanelDiv.style.background = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('" + imageTextPanelBackgroundImageURL + "')";
  imageTextPanelDiv.style.backgroundSize = 'cover';
}); // Pop-up animation on page load for image text panel section

var imageTextPanelDivObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
var imageTextPanelDivAnimation = document.querySelectorAll('.imageTextPanelLink');
imageTextPanelDivAnimation.forEach(function (el) {
  return imageTextPanelDivObserver.observe(el);
}); // Right Image Left Text --Section
// Variables for the Right Image Left Text section

var leftImageRightTextImageURL = 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/main_shot.avif?v=1663118242';
var leftImageRightTextImageHeader = "Toronto's Top Real Estate Agent";
var leftImageRightTextImageSubText = 'The $2 Billon Man';
var leftImageRightTextImageParagraphText = 'With over $2 Billion in sales, Andrew Hartley has developed a global reputation as the top Toronto real estate agent. His agency expertise in the Toronto market with his integrity, loyalty, and professionalism, Andrew is sought out by A-list celebrities, tech founders, and business leaders.';
var leftImageRightTextImageButtonText = 'Learn More';
var leftImageRightTextImageButtonURL = '#'; // Left Image Right Text output

var LeftImageRightTextSection = document.querySelector('.RightImageLeftText-Section');
var LeftImageRightTextSectionLeftSideDiv = document.createElement('div');
var LeftImageRightTextSectionRightSideDiv = document.createElement('div');
LeftImageRightTextSectionLeftSideDiv.classList.add('LeftImageRightTextSectionLeftSideDiv');
LeftImageRightTextSectionRightSideDiv.classList.add('LeftImageRightTextSectionRightSideDiv'); // Element creation

var leftImageRightTextImageHeaderEl = document.createElement('h1');
var leftImageRightTextImageSubTextEl = document.createElement('h3');
var leftImageRightTextImageParagraphTextEl = document.createElement('p');
var leftImageRightTextImageButtonURLs = document.createElement('a');
var leftImageRightTextImageButtonEl = document.createElement('button');
var leftImageRightTextImageImageEl = document.createElement('img'); // section header

leftImageRightTextImageHeaderEl.appendChild(document.createTextNode(leftImageRightTextImageHeader));
LeftImageRightTextSectionLeftSideDiv.appendChild(leftImageRightTextImageHeaderEl);
LeftImageRightTextSection.appendChild(LeftImageRightTextSectionLeftSideDiv); // section sub text

leftImageRightTextImageSubTextEl.appendChild(document.createTextNode(leftImageRightTextImageSubText));
LeftImageRightTextSectionLeftSideDiv.appendChild(leftImageRightTextImageSubTextEl);
LeftImageRightTextSection.appendChild(LeftImageRightTextSectionRightSideDiv); // section paragraph 

leftImageRightTextImageParagraphTextEl.appendChild(document.createTextNode(leftImageRightTextImageParagraphText));
LeftImageRightTextSectionLeftSideDiv.appendChild(leftImageRightTextImageParagraphTextEl);
LeftImageRightTextSection.appendChild(LeftImageRightTextSectionRightSideDiv); // section right side image

leftImageRightTextImageImageEl.classList.add('leftImageRightTextImageImageBtn');
LeftImageRightTextSectionRightSideDiv.appendChild(leftImageRightTextImageImageEl);
leftImageRightTextImageImageEl.src = leftImageRightTextImageURL;
leftImageRightTextImageImageEl.classList.add('leftImageRightTextImageImageEl'); // section button CTA

leftImageRightTextImageButtonEl.classList.add('leftImageRightTextImageButton');
leftImageRightTextImageButtonURLs.classList.add('leftImageRightTextImageButtonURLs');
leftImageRightTextImageButtonURLs.href = leftImageRightTextImageButtonURL;
leftImageRightTextImageButtonURLs.appendChild(leftImageRightTextImageButtonEl);
leftImageRightTextImageButtonEl.appendChild(document.createTextNode(leftImageRightTextImageButtonText.toUpperCase()));
LeftImageRightTextSectionLeftSideDiv.appendChild(leftImageRightTextImageButtonURLs); // Pop-up animation on page load for single image with text section

var singleImagewithTextDivOberver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
var singleImagewithTextDiv = document.querySelectorAll('.LeftImageRightTextSectionLeftSideDiv');
singleImagewithTextDiv.forEach(function (el) {
  return singleImagewithTextDivOberver.observe(el);
}); // Only Text Panel Testimonial --Section
// variables

var onlyTextpanelTestimonialHeader = 'Latest Press and Media';
var onlyTextpanelTestimonialVariables = [{
  text: '"Andrew is Herbert Banker’s No. 1 agent, and his expertise has propelled him to the top of luxury real estate agents in the Toronto area."',
  subText: '- Evolve Realty Magazine'
}, {
  text: '"Andrew Hartley was recently inducted into the Toronto Real Estate Society Hall of Fame in 2022, being the youngest agent in history."',
  subText: '- GTA Reporter'
}, {
  text: '"In his more-than-two-decade career, Hartley has racked up more than $2 billion in sales, consistently ranking as one of the top agents in the country."',
  subText: '- Rich Realty News'
}]; // Only Text Panel Testimonial output for heading

var onlyTextpanelTestimonialContainer = document.querySelector('.OnlyTextPanelTestimonial-Section');
var onlyTextpanelTestimonialHeaderEl = document.createElement('h1');
onlyTextpanelTestimonialHeaderEl.classList.add('onlyTextpanelTestimonialHeaderEl');
onlyTextpanelTestimonialHeaderEl.appendChild(document.createTextNode(onlyTextpanelTestimonialHeader.toUpperCase()));
onlyTextpanelTestimonialContainer.appendChild(onlyTextpanelTestimonialHeaderEl); // Only Text Panel Testimonial output for testimonial

var onlyTextpanelTestimonialDivEl = document.createElement('div');
onlyTextpanelTestimonialDivEl.classList.add('onlyTextpanelTestimonialDivEl');
onlyTextpanelTestimonialContainer.appendChild(onlyTextpanelTestimonialDivEl);
onlyTextpanelTestimonialVariables.forEach(function (testimonial) {
  // variable creation
  var onlyTextpanelTestimonialtextDiv = document.createElement('div');
  onlyTextpanelTestimonialtextDiv.classList.add('onlyTextpanelTestimonialtextDiv');
  var onlyTextpanelTestimonialtextEl = document.createElement('p');
  onlyTextpanelTestimonialtextEl.classList.add('onlyTextpanelTestimonialtextEl');
  var onlyTextpanelTestimonialSignatureEl = document.createElement('p');
  onlyTextpanelTestimonialSignatureEl.classList.add('onlyTextpanelTestimonialSignatureEl');
  var onlyTextpanelTestimonialtext = testimonial.text;
  var onlyTextpanelTestimonialSignature = testimonial.subText; // add the text into the elements

  onlyTextpanelTestimonialtextEl.appendChild(document.createTextNode(onlyTextpanelTestimonialtext));
  onlyTextpanelTestimonialSignatureEl.appendChild(document.createTextNode(onlyTextpanelTestimonialSignature));
  onlyTextpanelTestimonialtextEl.style.fontStyle = 'italic';
  onlyTextpanelTestimonialtextDiv.appendChild(onlyTextpanelTestimonialtextEl);
  onlyTextpanelTestimonialtextDiv.appendChild(onlyTextpanelTestimonialSignatureEl); // adding the text into the DOM

  onlyTextpanelTestimonialDivEl.appendChild(onlyTextpanelTestimonialtextDiv);
}); // Testimonial animation going from left to right

var textPanelOnlyTestimonialObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
var onlyTextPanelTestimonialDivElements = document.querySelectorAll('.onlyTextpanelTestimonialtextDiv');
onlyTextPanelTestimonialDivElements.forEach(function (el) {
  return textPanelOnlyTestimonialObserver.observe(el);
}); // Images Zoom On Hover --Section
// Variables

var imageZoomOnHoverButtonTexts = 'Learn More';
var imageZoomOnHoverURLs = [{
  URL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/andre-francois-mckenzie-08uIUe2a9XY-unsplash.jpg?v=1663304584',
  Text: 'Oakville',
  href: '#'
}, {
  URL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/cole-ankney-ZdJ6eIKN3G0-unsplash.jpg?v=1663304852',
  Text: 'Burlington',
  href: '#'
}, {
  URL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Downtown.avif?v=1663176288',
  Text: 'Downtown',
  href: '#'
}, {
  URL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Richmond_Hill.avif?v=1663176288',
  Text: 'Hamilton',
  href: '#'
}]; // Images Zoom On Hover Output for background

var imageOnHoverContainer = document.querySelector('.ImagesZoomOnHover-Section');
imageOnHoverContainer.setAttribute('id', 'ourproperties'); //--id

for (var j = 0; j < imageZoomOnHoverURLs.length; j++) {
  var _imageOnHoverDivs = document.createElement('div');

  _imageOnHoverDivs.classList.add('imageOnHoverDivs');

  imageOnHoverContainer.appendChild(_imageOnHoverDivs);
}

var imageOnHoverDivs = document.querySelectorAll('.imageOnHoverDivs');
imageOnHoverDivs.forEach(function (div) {
  // Add background image div
  var imageOnHoverBackgroundDivs = document.createElement('div');
  imageOnHoverBackgroundDivs.classList.add('imageOnHoverBackgroundDivs');
  div.appendChild(imageOnHoverBackgroundDivs); // Creating the text element

  var imageOnHoverMainText = document.createElement('h3');
  imageOnHoverMainText.classList.add('imageOnHoverMainText');
  div.appendChild(imageOnHoverMainText); // Creating the button element

  var imageOnHoverButtonLinks = document.createElement('a');
  var imageOnHoverButton = document.createElement('button');
  imageOnHoverButtonLinks.classList.add('imageOnHoverButtonLinks');
  imageOnHoverButton.classList.add('imageOnHoverButton');
  div.appendChild(imageOnHoverButtonLinks);
  imageOnHoverButtonLinks.appendChild(imageOnHoverButton);
});

for (var z = 0; z < imageZoomOnHoverURLs.length; z++) {
  // adding the background URL 
  var imageOnHoverBackgroundDiv = document.querySelectorAll('.imageOnHoverBackgroundDivs');
  var imageZoomOnHoverURL = imageZoomOnHoverURLs[z].URL;
  imageOnHoverBackgroundDiv[z].style.background = "url('" + imageZoomOnHoverURL + "')";
  imageOnHoverBackgroundDiv[z].style.backgroundSize = 'cover'; // Adding the text to the text element

  var imageZoomOnHoverText = imageZoomOnHoverURLs[z].Text;
  var imageOnZoomHoverTextEl = document.querySelectorAll('.imageOnHoverMainText');
  imageOnZoomHoverTextEl[z].appendChild(document.createTextNode(imageZoomOnHoverText)); // adding the link to the button

  var imageOnHoverButtonLinks = document.querySelectorAll('.imageOnHoverButtonLinks');
  imageOnHoverButtonLinks[z].href = imageZoomOnHoverURLs[z].href; // Adding the text to the button element

  var imageZoomOnHoverButtonText = imageZoomOnHoverButtonTexts;
  var imageZoomOnHoverButtonEl = document.querySelectorAll('.imageOnHoverButton');
  imageZoomOnHoverButtonEl[z].appendChild(document.createTextNode(imageZoomOnHoverButtonText));
}

; // Contact CTA and Email Submission --Section
// variables on the left side

var contactCTAemailformBackgroundURL = 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/stephan-bechert-yFV39g6AZ5o-unsplash.jpg?v=1663451952';
var contactCTAemailformLeftSide = [{
  heading: 'Work with Us',
  subTextOne: 'We offer the highest level of expertise, service, and integrity.',
  subTextTwo: 'Andrew Hartley Realty is the leading real estate agent in the Toronto area, and has helped hundreds of buyers find luxury homes and mansions, resulting in almost $2 Billion of closed residential real estate transactions in the last 20 years.',
  buttonText: 'Learn More',
  buttonURL: '#'
}]; // variables on the right side 

var contactCTAemailformRightSide = [{
  heading: 'Newsletter',
  paragraphText: 'For exclusive news and market updates, sign up for our newsletter below.',
  formPlaceholder: 'Your email',
  buttonText: 'Submit',
  buttonURL: '#'
}]; // Contact CTA and Email Submission Output to the DOM
// creating the divs for the two sides

var ContactCTAEmailSubmissionContainer = document.querySelector('.ContactCTAEmailSubmission-Section');
ContactCTAEmailSubmissionContainer.setAttribute('id', 'contact'); // --id

var ContactCTAEmailSubmissionLeftDiv = document.createElement('div');
ContactCTAEmailSubmissionLeftDiv.classList.add('ContactCTAEmailSubmissionLeftDiv');
var ContactCTAEmailSubmissionRightDiv = document.createElement('div');
ContactCTAEmailSubmissionRightDiv.classList.add('ContactCTAEmailSubmissionRightDiv');
ContactCTAEmailSubmissionContainer.appendChild(ContactCTAEmailSubmissionLeftDiv);
ContactCTAEmailSubmissionContainer.appendChild(ContactCTAEmailSubmissionRightDiv); // The background image on both sides

ContactCTAEmailSubmissionContainer.style.background = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('" + contactCTAemailformBackgroundURL + "')";
ContactCTAEmailSubmissionContainer.style.backgroundSize = 'cover';
ContactCTAEmailSubmissionContainer.style.backgroundPosition = 'center'; // Adding the text inside the left div

contactCTAemailformLeftSide.forEach(function (element) {
  var ContactCTAEmailformLeftSideHeadingEl = document.createElement('h3');
  var ContactCTAEmailformLeftSideSubOneEl = document.createElement('p');
  var ContactCTAEmailformLeftSideSubTwoEl = document.createElement('p');
  ContactCTAEmailformLeftSideHeadingEl.appendChild(document.createTextNode(element.heading));
  ContactCTAEmailformLeftSideSubOneEl.appendChild(document.createTextNode(element.subTextOne));
  ContactCTAEmailformLeftSideSubTwoEl.appendChild(document.createTextNode(element.subTextTwo));
  ContactCTAEmailSubmissionLeftDiv.appendChild(ContactCTAEmailformLeftSideHeadingEl);
  ContactCTAEmailSubmissionLeftDiv.appendChild(ContactCTAEmailformLeftSideSubOneEl);
  ContactCTAEmailSubmissionLeftDiv.appendChild(ContactCTAEmailformLeftSideSubTwoEl); // Call To Action button for the left side 

  var ContactCTAEmailformLeftSideCTAbuttonURL = document.createElement('a');
  ContactCTAEmailformLeftSideCTAbuttonURL.classList.add('ContactCTAEmailformLeftSideCTAbuttonURL');
  ContactCTAEmailformLeftSideCTAbuttonURL.href = element.buttonURL;
  var ContactCTAEmailformLeftSideCTAbutton = document.createElement('button');
  ContactCTAEmailformLeftSideCTAbutton.classList.add('ContactCTAEmailformLeftSideCTAbutton');
  ContactCTAEmailformLeftSideCTAbuttonURL.appendChild(ContactCTAEmailformLeftSideCTAbutton);
  ContactCTAEmailformLeftSideCTAbutton.appendChild(document.createTextNode(element.buttonText));
  ContactCTAEmailSubmissionLeftDiv.appendChild(ContactCTAEmailformLeftSideCTAbuttonURL);
}); // Right side text and form addition

contactCTAemailformRightSide.forEach(function (element) {
  var contactCTAemailformRightSideHeading = document.createElement('h1');
  var contactCTAemailformRightSideParagraph = document.createElement('p');
  var contactCTAemailformRightSideSubmissionForm = document.createElement('form');
  var contactCTAemailformRightSideSubmissionFormInput = document.createElement('input');
  var contactCTAemailformRightSideSubmitBtnURL = document.createElement('a');
  var contactCTAemailformRightSideSubmitBtn = document.createElement('button');
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
}); // Footer --Section
// footer variables for the text-only list

var footerMenuTextHeadingVar = 'Andrew Hartley Realty';
var footerMenuTextInfo = [{
  // address
  title: 'Address:',
  info: '123 Main St. Toronto, ON M4C 4X6'
}, {
  // phone number
  title: 'Phone Number:',
  info: '613-123-4567'
}, {
  // email
  title: 'Email:',
  info: 'Andrew@andrewhartley.com'
}]; // Footer variables for link list

var footerMenuLinksHeading = 'Quick Links';
var footerMenuLinks = [{
  text: 'Home',
  URL: '#'
}, {
  text: 'About Us',
  URL: '/#about'
}, {
  text: 'Contact Us',
  URL: '/#contact'
}, {
  text: 'Policy',
  URL: '#'
}]; // Source (only) variable for embedded Google Map

var footerMap = [{
  iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.364388369042!2d-79.3020559953908!3d43.682187373323764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc1a464af03f%3A0x1c36d03a1cdb30b9!2s123%20Main%20St%2C%20Toronto%2C%20ON%20M4E%202V9!5e0!3m2!1sen!2sca!4v1663909450399!5m2!1sen!2sca'
}]; // Output of elements onto the DOM

var footerContainer = document.querySelector('.footer'); // output of the footer quick links

var footerMenuTextLinkDiv = document.createElement('div');
footerMenuTextLinkDiv.classList.add('footerMenuTextLinkDiv');
var footerMenuHeaderEl = document.createElement('h3');
footerMenuHeaderEl.classList.add('footerMenuHeaderEl');
footerMenuHeaderEl.appendChild(document.createTextNode(footerMenuLinksHeading));
footerMenuTextLinkDiv.appendChild(footerMenuHeaderEl);
footerContainer.appendChild(footerMenuTextLinkDiv);
footerMenuLinks.forEach(function (link) {
  var footerMenuLinkTextLLinkEl = document.createElement('a');
  footerMenuLinkTextLLinkEl.classList.add('footerMenuLinkTextLLinkEl');
  footerMenuLinkTextLLinkEl.href = link.URL;
  var footerMenuLinkText = document.createElement('p');
  footerMenuLinkText.classList.add('footerMenuLinkText');
  footerMenuLinkTextLLinkEl.appendChild(footerMenuLinkText);
  footerMenuLinkText.appendChild(document.createTextNode(link.text));
  footerMenuTextLinkDiv.appendChild(footerMenuLinkTextLLinkEl);
}); // Footer Google Maps section output 

var footerMenuMapDiv = document.createElement('div');
footerMenuMapDiv.classList.add('footerMenuMapDiv');
var footerMenuMapIframe = document.createElement('iframe');
footerMenuMapIframe.classList.add('footerMenuMapIframe');
footerMenuMapIframe.src = footerMap[0].iframeSrc;
footerMenuMapIframe.allowfullscreen = '';
footerMenuMapIframe.referrerpolicy = 'no-referrer-when-downgrade';
footerMenuMapIframe.loading = 'lazy';
footerMenuMapIframe.style.border = '0';
footerMenuMapDiv.appendChild(footerMenuMapIframe);
footerContainer.appendChild(footerMenuMapDiv); // Footer Text info section output

var footerMenuContactInfo = document.createElement('div');
footerMenuContactInfo.classList.add('footerMenuContactInfo');
footerContainer.appendChild(footerMenuContactInfo);
var footerMenuTextHeading = document.createElement('h3');
footerMenuTextHeading.classList.add('footerMenuTextHeading');
footerMenuTextHeading.appendChild(document.createTextNode(footerMenuTextHeadingVar));
footerMenuContactInfo.appendChild(footerMenuTextHeading);
footerMenuTextInfo.forEach(function (text) {
  var footerMenuTextTitle = document.createElement('p');
  footerMenuTextTitle.classList.add('footerMenuTextTitle');
  footerMenuTextTitle.appendChild(document.createTextNode(text.title));
  var footerMenuTextInformation = document.createElement('p');
  footerMenuTextInformation.classList.add('footerMenuTextInformation');
  footerMenuTextInformation.appendChild(document.createTextNode(text.info));
  footerMenuContactInfo.appendChild(footerMenuTextTitle);
  footerMenuContactInfo.appendChild(footerMenuTextInformation);
}); // Devanada signature

var footerBottomSection = document.createElement('div');
footerBottomSection.classList.add('footerBottomSection');
var devanadaSignature = 'Website designed and developed by Devanada.';
var devanadaSignatureEl = document.createElement('p');
devanadaSignatureEl.classList.add('devanadaSignatureEl');
devanadaSignatureEl.appendChild(document.createTextNode(devanadaSignature));
footerContainer.appendChild(devanadaSignatureEl); // To push the social media icons to the bottom of the footer

document.addEventListener('DOMContentLoaded', function (e) {
  document.addEventListener('scroll', function (e) {
    var documentHeight = document.body.scrollHeight;
    var currentScroll = window.scrollY + window.innerHeight; // When the user is a certain px away from the bottom, fire the event.
    // the modifier is the number of pixels 

    var modifier = 200;

    if (currentScroll + modifier > documentHeight && window.innerWidth > 900) {
      headerSocialLinks.style.paddingTop = '55vh';
    } else {
      headerSocialLinks.style.paddingTop = '12%';
    }
  });
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55991" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map