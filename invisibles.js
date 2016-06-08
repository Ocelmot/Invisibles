function showInvisibles(text){
	console.log('ran');
	text = hideInvisibles(text);
	text = text.replace(/\n/g, "\uF001\n");
	text = text.replace(/\r/g, "\uF002\r");
	text = text.replace(/\t/g, "\uF000");
	text = text.replace(/ /g, "\uF003");
	return text;
}
function hideInvisibles(text){
	text = text.replace(/([\uF001\uF002\uF004])/gm, "");
	text = text.replace(/([\uF003])/gm, " ");
	text = text.replace(/([\uF000])/gm, "\t");
	return text;
}
function nodeShowInvis(node){
	if (node.nodeType == 3) {
		node.nodeValue = showInvisibles(node.nodeValue);
	}else if('childNodes' in node){
		if(!node.className.match(/(?:^|\s)show-invisibles(?!\S)/g)){
			node.className += ' show-invisibles';
		}
		var children = node.childNodes;
		for(var i=0; i<children.length; i++){
			nodeShowInvis(children[i]);
		}
	}
}
function nodeHideInvis(node){
	if (node.nodeType == 3) {
		node.nodeValue = hideInvisibles(node.nodeValue);
	}else if('childNodes' in node){
		node.className = node.className.replace(/(?:^|\s)show-invisibles(?!\S)/g, '');
		var children = node.childNodes;
		for(var i=0; i<children.length; i++){
			nodeHideInvis(children[i]);
		}
	}
}
