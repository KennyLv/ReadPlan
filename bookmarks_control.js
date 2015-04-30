/*
<link rel="stylesheet" href="bookmarks_style.css" type="text/css"/>
<script  src="bookmarks_control.js" type="text/javascript" ></script>
*/

var dt = document.getElementsByTagName('dt');
for(var i=0;i<dt.length;i++){
				var dddd = dt[i];
				if(dddd.childNodes[0].tagName == "H3" && dddd.childNodes[1]){
								//dddd.childNodes[0].style.display = "none";
				}
}