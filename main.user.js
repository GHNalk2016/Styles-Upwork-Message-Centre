// ==UserScript==
// @name			Styles: Upwork.com Message Center
// @version			0.2.11
// @description		Clear some of the elements from Upwork.com message center.
// @author			GHNalk2016
// @include			*://*.upwork.com/messages/rooms/*
// @require			http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant			GM_addStyle
// @updateURL		https://raw.githubusercontent.com/GHNalk2016/Styles-Upwork-Message-Centre/master/main.user.js
// @downloadURL		https://raw.githubusercontent.com/GHNalk2016/Styles-Upwork-Message-Centre/master/main.user.js
// ==/UserScript==

//addGlobalStyle('#up-s-top-nav-container { display: none; }'); // On/off main header.

addGlobalStyle('#room-nav { display: none !important; }'); // On/off left panel.
//addGlobalStyle('#room-nav .room-leftnav-header { display: none; }'); // On/off left panel header.

addGlobalStyle('#room-main-body { width: 100% !important; height: calc(100% + 142px); }'); // On/off story panel header.
addGlobalStyle('#chat-header { display: none !important; }'); // On/off story panel header.

addGlobalStyle('#chat-header #room-chat-nav { display: none !important; }'); // On/off story panel header buttons.
addGlobalStyle('#story-box .room-timestamp.contextual-room-timestamp { display: none; }'); // On/off story panel contextual timestamp.
addGlobalStyle('#story-box .story-attachment-url { display: none; }'); // On/off story panel attachment urls.
addGlobalStyle('#story-box .composer-panel { display: none; }'); // On/off composer panel.
// ------------------------------------------------------------------------------------------------

// Story panel header modifications.
addGlobalStyle('#chat-header { height: auto; padding: 5px; }');
addGlobalStyle('#chat-header .room-header-name .room-name { float: left; }');
addGlobalStyle('#chat-header .room-header-name .room-topic { padding: 5px 10px; }');
//-------------------------------------------------------------------------------------------------

// Composer panel modifications.
//addGlobalStyle('.msg-composer-maxheight { max-height: 100% !important; }');
//addGlobalStyle('.msg-composer-input { height: 60px !important; }');
//-------------------------------------------------------------------------------------------------

// Other modifications.
//addGlobalStyle('.main-container .fill { height: 655px; }');
//addGlobalStyle('.story-panel { height: 545px !important; }');

//addGlobalStyle('#room-nav.main-body-col, .room-body { height: auto; }');

// ------------------------------------------------------------------------------------------------

function addGlobalStyle(css) {
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}
