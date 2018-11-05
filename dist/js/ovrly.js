/*!
 * Ovrly v1.0.0
 * by Dirk Einecke
 *
 * More info:
 * https://github.com/dirkeinecke/ovrly
 *
 * Copyright 2018 Dirk Einecke
 * Released under the MIT license
 * https://github.com/dirkeinecke/ovrly/blob/master/LICENSE
 *
 */
 
function ovrly(link) {
  const yOffset = 0;

  let overlay = document.createElement('div');
  overlay.setAttribute('id','ovrly');
  overlay.setAttribute('data-body-overflow', document.body.style.overflow);
  overlay.setAttribute(
    'style',
    'position:fixed;z-index:100;top:'+yOffset+'px;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);text-align:center;box-sizing:border-box;padding:50px;'
  );
  let image = document.createElement('img');
  image.setAttribute('src',link.href);
  image.setAttribute(
    'style',
    'width:auto;max-width:100%;height:auto;max-height:100%;margin:auto;position:relative;top:50%;transform:perspective(1px) translateY(-50%);'
  );
  overlay.appendChild(image);

  let closeButton = document.createElement('a');
  closeButton.setAttribute('href','#');
  closeButton.setAttribute('onclick', 'return ovrlyClose({\'key\':\'Escape\'});');
  closeButton.setAttribute(
    'style',
    'position:absolute;z-index:101;top:0;right:0;text-decoration:none;color:#fff;font-size:30px;padding:10px 15px 10px 10px;'
  );
  const closeButtonText = document.createTextNode('×');
  closeButton.appendChild(closeButtonText);
  overlay.appendChild(closeButton);

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  document.addEventListener(
    'keydown',
    ovrlyClose
  );

  return false;
}

function ovrlyClose(event) {  
  if ('key' in event) {
    if (event.key == 'Escape' || event.key == 'Esc') {
      const element = document.getElementById('ovrly');
      document.body.style.overflow = element.getAttribute('data-body-overflow');
      element.parentNode.removeChild(element);

      document.removeEventListener(
        'keydown',
        ovrlyClose
      );
    }
  }

  return false;
}