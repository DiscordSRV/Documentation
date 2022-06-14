// Website

/* {data-iframe="true" id="open-website"} */
lightGallery(document.getElementById('open-website'), {
  selector: 'this',
  iframeMaxWidth: '80%'
});

/* 
window.addEventListener('load', (event) => {
  const aElements = document.getElementsByTagName('a');

  for (element of aElements) {
    if (element.getAttribute('href').match(/config\.discordsrv\.com|127\.0\.0\.1/g) !== null) continue;

    element.setAttribute("data-iframe", "true")
    lightGallery(element, {
      selector: 'this',
      iframeMaxWidth: '80%'
    });
  }
});
*/