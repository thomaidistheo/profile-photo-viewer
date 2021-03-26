document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var url = document.getElementById('tumblr-url').value;
    
    if (url.indexOf('https://') === 0) {
        url = url.substring('https://'.length);
    } else if (url.indexOf('http://') === 0) {
        url = url.substring('http://'.length);
    }
    if (url.indexOf('www.tumblr.com/dashboard/blog/') === 0) {
        url = url.substring('www.tumblr.com/dashboard/blog/'.length);
    }
    if (url.indexOf('/') > 0) {
        url = url.substring(0, url.indexOf('/'));
    }
    if (url === 'www.tumblr.com') {
        ralert('This blog URL is not valid. Use something like "example.tumblr.com".');
        return;
    }
    
    var img = document.createElement('img');
    img.src = 'https://api.tumblr.com/v2/blog/' + encodeURIComponent(url) + '/avatar/512';
    img.style.display = 'block';
    img.style.marginBottom = '24px';
    
    img.addEventListener('error', function(event) {
        ralert('The blog does not exist.');
        this.remove();
    });
    
    var out = document.getElementById('tumblr-out');
    out.insertBefore(img, out.firstChild);
})
