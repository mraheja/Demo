x = document.getElementsByTagName('ytd-rich-item-renderer');


function replaceThumbnail(element,src){
	element.getElementsByTagName('img')[0].src = src
}

function replaceTitle(element,title){
	var title_space = element.getElementsByTagName('h3')[0].getElementsByTagName('a')[0]
	title_space.setAttribute('aria-label',title);
	title_space.innerText = title;
}

function removeHover(element){
}

function changeChannel(element,channel,channel_thumb){
	element.getElementsByClassName('yt-formatted-string')[0].innerText = channel;
	element.getElementsByTagName('img')[1].src = channel_thumb;
}

function changeInfo(element){
}

replaceThumbnail(x[0],'https://i.ytimg.com/vi/RqQGUJK7Na4/hq720.jpg');
replaceTitle(x[0],'Tell my man shut up')
changeChannel(x[0],'The Problem','https://yt3.ggpht.com/a/AATXAJwdRKDz0osIVpeZZ7JinRXJksr23CM3YG3jkP8_0A=s100-c-k-c0xffffffff-no-rj-mo')

replaceThumbnail(x[1],'https://i.ytimg.com/vi/RqQGUJK7Na4/hq720.jpg');
replaceTitle(x[1],'Tell my man shut up')
changeChannel(x[1],'The Problem','https://yt3.ggpht.com/a/AATXAJwdRKDz0osIVpeZZ7JinRXJksr23CM3YG3jkP8_0A=s100-c-k-c0xffffffff-no-rj-mo')

//TODO:
// Implement Change functions
// 