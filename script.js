(function addTitle() {
	var title = document.createElement('title');
	title.textContent = "My JavaScript Blog";
	document.head.appendChild(title);
})();

(function addArticleHeader() {
	var article = document.getElementsByTagName('article')[0];
	var h1 = document.createElement('h1');
	article.insertBefore(h1, article.childNodes[0]);
	h1.textContent = "My First Blog Post";
})();

(function addArticle() {
	var article = document.createElement('article');
	var h1 = document.createElement('h1');
	var p = document.createElement('p');
	document.body.insertBefore(article, document.getElementsByTagName('article')[0]);
	article.appendChild(h1);
	article.appendChild(p);
	h1.textContent = "My Second Blog Post";
	p.textContent = "This is a blog post about really " +
		"awesome stuff I've done in JavaScript.";
})();

var toggle = function(header) {
	var p = header.nextElementSibling;
	console.log(p.style);
	if(p.getAttribute('style') === "display: none")
		p.setAttribute('style', 'display: inital')
		else(p.setAttribute('style', 'display: none'))	
}; 

var headers = document.getElementsByTagName("h1");
	// console.log(headers);
Array.prototype.forEach.call(headers, function(header) {
	if(header.parentNode.tagName === 'ARTICLE') {
			header.addEventListener("click", function() { toggle(header); }, false);
			console.log(header);
	}		
});

var highlight = function(articleBody) {
	if(article.getAttribute('class') === "alt-article")
		article.setAttribute('class', 'article')
		else(article.setAttribute('class', 'alt-article'))
};

var articleBody = document.getElementsByTagName('article');
console.log(articleBody);
Array.prototype.forEach.call(articleBody, function(article) {
	if(articleBody.parentNode.tagName === 'ARTICLE') {
		articleBody.addEventListener('click', function() { highlight(articleBody); }, false);
		console.log(articleBody);
	}	
});

