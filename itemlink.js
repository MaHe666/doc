
var xItemIDs={"8": "dfe8116b_15b70419_0.qrich.html"
	, "7": "9beb0ffe_58830ad5_0.qrich.html"
	, "9": "9d7a1049_19b91375_0.qrich.html"
	, "3": "9cc7101b_a4160e19_0.qrich.html"
	, "2": "61300eda_91e10c3b_0.qrich.html"
	, "1": "51dc0e6a_68700b83_0.qrich.html"
	, "0": "60190ec7_56860a9a_0.qrich.html"
	, "6": "15da0c96_c7e42f06_0.qrich.html"
	, "4": "11110d0a_bc110ed8_0.qrich.html"};

var xBkmkIDs={};

$(document).ready(function(){

	var _urlTarget=function(sHref){
		var sUrl;
		var m=sHref.match(/^nyf:\/\/entry\?itemid=(\d+)/i);
		if(m && m.length>1){
			var sFn=xItemIDs[m[1]];
			if(sFn){
				sUrl=sFn;
			}else{
				alert('Cannot locate the target webpage. \n\n' + sHref);
			}
			if(!sUrl) sUrl='';
		}else{
			m=sHref.match(/^nyf:\/\/entry\?bmid=(\d+)/i);
			if(m && m.length>1){
				var sBmID=m[1];
				if(sBmID){
					var v=(xBkmkIDs[sBmID]||'').split('\t');
					if(v && v.length>2){
						var sItemID=parseInt(v[0]), sSsgName=v[1], sAnchor=v[2];
						var sFn=xItemIDs[sItemID];
						if(sFn){
							sUrl=sFn + '#' + sAnchor;
						}else{
							alert('Cannot locate the target webpage. \n\n' + sHref);
						}
					}
				}
				if(!sUrl) sUrl='';
			}
		}
		return sUrl;
	};

	var linkOf=function(p){
		var sUri='';
		while(p && !sUri){
			sUri=p.href||'';
			p=p.parentNode;
		}
		return sUri;
	};

	$('a').click(function(e){
		//2018.4.5 the target element could be a <SPAN> inside of <a>
		var sHref=linkOf(e.target);
		if(sHref){
			var sUrl=_urlTarget(sHref);
			if(sUrl){
				document.location.href=sUrl;
				return false;
			}else if(sUrl===''){
				return false; //2017.10.21 bad nyf:// links;
			}else{
				window.open(sHref);
				return false;
			}
		}else{
			return false;
		}
	});

});
