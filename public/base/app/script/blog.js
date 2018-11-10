const config = document.querySelector('.config');

const posts_uri = config.getAttribute('data-posts-uri');
const title_elem = document.querySelector(config.getAttribute('data-title-class'));
const blog_title = title_elem.innerText;
const post_elem = document.querySelector(config.getAttribute('data-post-class'));

marked.setOptions({
  highlight: function(code, lang) {
    console.log(code);
    if(lang == undefined || !hljs.getLanguage(lang)) return code; 
    return hljs.highlight(lang, code).value;
  }
});

function clearText(elem) {
  console.log("cleared text");
  elem.innerHTML = "";
}

function displayPost(postname) {
  clearText(post_elem);
  document.querySelector('.exit').style.visibility = 'visible';

  console.log(postname);


  let headers = {
    "Accept": "application/vnd.github.v3.raw"
  };

  fetch(`${posts_uri}/${postname}.md`, {
    headers: headers
  }).then(response => {
    console.log(response);
    if(response.status !== 200) {
      console.log(`problem occured: status ${response.status}`);
      return;
    }
    return response.text();
  }).then(text => {
    console.log(text);
    post_elem.innerHTML = marked(text);
    title_elem.innerText = postname;
  });
}

function displayContents() {
  clearText(post_elem);
  document.querySelector('.exit').style.visibility = 'hidden';

  title_elem.innerText = blog_title;

  fetch(posts_uri).then(response => response.json()).then(data => {
  data.reverse().forEach(datum => {
    if(datum.type == "file") {
      let name = datum.name.replace(".md", "");
      let anchor = document.createElement("a")
      anchor.href = `#${name}`;
      anchor.setAttribute("data-filename", datum.name);
      anchor.appendChild(document.createTextNode(name));
      post_elem.appendChild(anchor);
      post_elem.appendChild(document.createElement("br"));
    }

  });
});
}

window.onhashchange = function() {
  
  let hash = window.location.hash;
  
  if(hash == "") {
    displayContents();
  }
  else {
    displayPost(decodeURIComponent(hash.replace("#", "")));
  }
}

window.onhashchange();