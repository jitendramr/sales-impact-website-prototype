// Author: REDTRAY
// Version 1.0 [last updated: 10.07.2008]
// This code is to render flash movies
//

function render_flash(movie,w,h){
	movie = "flash/" + movie;
	document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ w +'" height="'+ h +'" id="tool" align="">');
	document.write('	<param name="movie" value="'+ movie +'">');
	document.write('	<param name="quality" value="high">');
	document.write('	<param name="bgcolor" value="#ffffff">');
	document.write('	<param name="menu" value="false">');
	document.write('	<param name="wmode" value="transparent">');
	document.write('	<embed src="'+ movie +'" quality="high" bgcolor="#ffffff"  width="'+ w +'" height="'+ h +'" name="tool" align="" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>');
	document.write('</object>');
}
