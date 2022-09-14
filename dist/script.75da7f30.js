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
// Desktop Header --Section - variables 
var businessNameVar = "Andrew Hartley Realty";
var logoSrc = 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/Ah_7d819f18-2c11-4e01-a30e-49b1d6d06afa.png?v=1660973154';
var logoAlt = 'Andrew Hartley Realty Logo';
var headerMenuList = [{
  title: 'Home',
  href: '#'
}, {
  title: 'Our Properties',
  href: '#'
}, {
  title: 'About',
  href: '#'
}, {
  title: 'Contact',
  href: '#'
}]; // Desktop Header Section - Output onto DOM
// left side

var desktopHeaderLeft = document.querySelector('.desktop-header-left');
var headerLogo = document.createElement('img');
headerLogo.classList.add('businessName');
headerLogo.src = logoSrc;
headerLogo.alt = logoAlt;
desktopHeaderLeft.appendChild(headerLogo);
var HeaderBusinessName = document.createElement('h1');
HeaderBusinessName.classList.add('businessLogo');
HeaderBusinessName.appendChild(document.createTextNode(businessNameVar));
desktopHeaderLeft.appendChild(HeaderBusinessName); // right side

var desktopHeaderRight = document.querySelector('.desktop-header-right');
var headerMenuItems = document.createElement('ul');
headerMenuItems.classList.add('headerMenuItems');
desktopHeaderRight.appendChild(headerMenuItems);
headerMenuList.forEach(function (menuItem) {
  var link = document.createElement('a');
  link.classList.add('navItem');
  var linkName = menuItem.title;
  headerMenuItems.appendChild(link);
  link.appendChild(document.createTextNode(linkName.toUpperCase()));
}); // Mobile Header Section - Output onto DOM

var hamburgerIcon = document.querySelector('.mobileHeaderTab');
var headerDiv = document.querySelector('.desktop-header');
var crossOut = document.querySelector('.crossOut');
var hamburger = document.querySelector('.hamburger');
var mainContent = document.querySelector('.mainContainer'); // Open menu

hamburger.addEventListener('click', function (e) {
  headerDiv.style.left = '0%';
  hamburger.style.display = 'none';
  crossOut.style.display = 'block';
}); // close menu

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

window.onresize = desktopWindowResize; // Main Container Section
// Auto-Play Video --Section
// Auto-Play Video Section Variables

var AutoPlayVideoSourceURL = 'https://cdn.shopify.com/videos/c/o/v/0849338fcc9b4f2091ffbd4f9ba069dd.mp4';
var AutoPlayVideoSecText = 'Welcome to';
var AutoPlayVideoMainText = 'Andrew Hartley Realty';
var AutoPlayVideoSubText = 'Herbert Banker Realty';
var AutoPlayVideoButtonTitle = 'Search All Homes'; // Auto-Play Video Section - video Output

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
AutoPlayVideoButton.appendChild(document.createTextNode(AutoPlayVideoButtonTitle.toUpperCase()));
AutoPlayVideoTextDiv.appendChild(AutoPlayVideoButton); // Images and Text Panel --Section
// Images and Text Panel Section Variables

var imageTextPanelTitle = 'Explore Andrew Hartley Realty';
var imageTextPanelURLsAndText = [{
  text: 'Home Search',
  url: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/stephen-leonardi-XKIO6ZgCObo-unsplash.jpg?v=1662436369'
}, {
  text: 'Exclusive Listings',
  url: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-max-vakhtbovych-7031414.jpg?v=1662436894'
}, {
  text: 'Our Blog',
  url: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/roberto-nickson-so3wgJLwDxo-unsplash.jpg?v=1662436470'
}, {
  text: 'Work with Andrew',
  url: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-chris-goodwin-32870.jpg?v=1662441099'
}]; // Output of the Main heading for the image panels

var imageTextPanelContainer = document.querySelector('.ImagesTextPanel-Section');
var imageTextPanelHeading = document.createElement('h1');
imageTextPanelHeading.classList.add('imageTextPanelHeading');
imageTextPanelContainer.appendChild(imageTextPanelHeading);
imageTextPanelHeading.appendChild(document.createTextNode(imageTextPanelTitle.toUpperCase()));
imageTextPanelContainer.prepend(imageTextPanelHeading); // Image and Text Output

var ImagesTextPanelContainer = document.querySelector('.panelContainer'); // For the panels

imageTextPanelURLsAndText.forEach(function (panel) {
  // The div container 
  var imageTextPanelDiv = document.createElement('div');
  imageTextPanelDiv.classList.add('ImagesTextPanelDivs');
  ImagesTextPanelContainer.appendChild(imageTextPanelDiv); // The text

  var imageTextPanelEl = document.createElement('h2');
  imageTextPanelEl.classList.add('imageTextPanelText');
  var imageTextPanelText = panel.text;
  imageTextPanelEl.appendChild(document.createTextNode(imageTextPanelText));
  imageTextPanelDiv.appendChild(imageTextPanelEl); // The background image

  var imageTextPanelBackgroundImageURL = panel.url;
  console.log(imageTextPanelBackgroundImageURL);
  imageTextPanelDiv.style.background = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('" + imageTextPanelBackgroundImageURL + "')";
  imageTextPanelDiv.style.backgroundSize = 'cover';
}); // Right Image Left Text --Section
// Variables for the Left Image Right Text section

var leftImageRightTextImageURL = 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/main_shot.avif?v=1663118242';
var leftImageRightTextImageHeader = "Toronto's Top Real Estate Agent";
var leftImageRightTextImageSubText = 'The $2 Billon Man';
var leftImageRightTextImageParagraphText = 'With over $2 Billion in sales, Andrew Hartley has developed a global reputation as the top Toronto real estate agent. His agency expertise in the Toronto market with his integrity, loyalty, and professionalism, Andrew is sought out by A-list celebrities, tech founders, and business leaders.';
var leftImageRightTextImageButtonText = 'Learn More'; // Left Image Right Text output

var LeftImageRightTextSection = document.querySelector('.RightImageLeftText-Section');
var LeftImageRightTextSectionLeftSideDiv = document.createElement('div');
var LeftImageRightTextSectionRightSideDiv = document.createElement('div');
LeftImageRightTextSectionLeftSideDiv.classList.add('LeftImageRightTextSectionLeftSideDiv');
LeftImageRightTextSectionRightSideDiv.classList.add('LeftImageRightTextSectionRightSideDiv');
var leftImageRightTextImageHeaderEl = document.createElement('h1');
var leftImageRightTextImageSubTextEl = document.createElement('h3');
var leftImageRightTextImageParagraphTextEl = document.createElement('p');
var leftImageRightTextImageButtonEl = document.createElement('button');
var leftImageRightTextImageImageEl = document.createElement('img');
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54744" + '/');

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