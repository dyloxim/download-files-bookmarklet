javascript:(() => {
  const items = document.querySelectorAll('a');
  let delay = 0;
  var download_num = 1;
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    const href = item.getAttribute('href');
    const ext = (href == null ? '' : href).split('/').slice(-1)[0].split('.').slice(-1)[0];
    if (ext != '' && !ext.match(/htm/) && !href.match(/mailto/)) {
      item.setAttribute('download', download_num + ". " + item.getAttribute('href'));
      download_num++;
      setTimeout(() => item.click(), delay);
      delay += 500;
    }   
  } 
})();
