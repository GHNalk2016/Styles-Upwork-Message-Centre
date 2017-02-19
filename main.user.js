// ==UserScript==
// @name					Styles: Upwork.com Message Centre
// @version					0.2.2
// @description			Clear some of the elements from the message center of Upwork.com website.
// @author					GHNalk2016
// @include					*://*.upwork.com/messages/rooms/*
// @require					http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant						GM_addStyle
// @updateURL			https://gist.githubusercontent.com/GHNalk2016/-------------/raw/main.meta.js
// @downloadURL		https://gist.githubusercontent.com/GHNalk2016/-------------/raw/main.user.js
// ==/UserScript==

// On/off each element by activating/deactivating each line of code in this section.
addGlobalStyle('.header-navbar-skinny { display: none; }'); // On/off main header.

  //addGlobalStyle('#room-nav { display: none; }'); // On/off left panel.
  //addGlobalStyle('#room-main-body { width: 100% !important; }');

addGlobalStyle('#room-nav .room-leftnav-header { display: none; }'); // On/off left panel header.
addGlobalStyle('#chat-header { display: none; }'); // On/off story panel header.

addGlobalStyle('#chat-header #room-chat-nav { display: none; }'); // On/off story panel header buttons.
addGlobalStyle('#story-box .room-timestamp.contextual-room-timestamp { display: none; }'); // On/off story panel contextual timestamp.
addGlobalStyle('#story-box .story-attachment-url { display: none; }'); // On/off story panel attachment urls.

  addGlobalStyle('#story-box .composer-panel { display: none; }'); // On/off composer panel.
//-------------------------------------------------------------------------------------------------

// Story panel header modifications.
addGlobalStyle('#chat-header { height: auto; padding: 5px; }');
addGlobalStyle('#chat-header .room-header-name .room-name { float: left; }');
addGlobalStyle('#chat-header .room-header-name .room-topic { padding: 5px 10px; }');
//-------------------------------------------------------------------------------------------------

// Composer panel modifications.
addGlobalStyle('.msg-composer-maxheight { max-height: 100% !important; }');
addGlobalStyle('.msg-composer-input { height: 60px !important; }');
//-------------------------------------------------------------------------------------------------

// Other modifications.
addGlobalStyle('.main-container .fill { height: auto; }'); // height: auto (655px)
addGlobalStyle('.room-list-container { height: 615px !important; }');
addGlobalStyle('#story-box .story-panel { height: 100% !important; }');
  addGlobalStyle('#story-box .story-panel { height: 645px !important; }'); // height: 470px, 600px, 645px (605px, 635px)
//-------------------------------------------------------------------------------------------------

function addGlobalStyle(css) {
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}
