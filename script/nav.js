//
// Author: REDTRAY
// Version 1 [last updated: 13.10.2008]
// This javascript code handles the top navigation menu
// This is a common code for all the web pages
//

// Main navigation bar

function hover(btn){
	var current_page=is_this_current_page(btn);
	if(!current_page){
		document.getElementById(btn).style.backgroundImage="url(images/nav_item_hover"+get_current_item_number(btn)+".gif)";
		document.getElementById(btn).style.fontColor="rgb(250,250,0)";
	}
}

function hout(btn){
	var current_page=is_this_current_page(btn);
	if(!current_page){
		document.getElementById(btn).style.backgroundImage="url(images/transparent.gif)";
	}
}

// helper functions

function get_current_item_number(btn){
	return (btn.substring(btn.length-1,btn.length));
}

function is_this_current_page(btn){
	var is_current = btn.indexOf('current');
	if(is_current!=-1)return true;
	else return false;
}