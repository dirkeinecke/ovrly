/*!
 * Ovrly v1.1.0
 * by Dirk Einecke
 *
 * More info:
 * https://github.com/dirkeinecke/ovrly
 *
 * Copyright 2018, 2019 Dirk Einecke
 * Released under the MIT license
 * https://github.com/dirkeinecke/ovrly/blob/master/LICENSE
 *
 */

var ovrly = {

  open: function(link) {
    const zIndex = Number.MAX_SAFE_INTEGER;
    const yOffset = 0;
  
    let overlay = document.createElement('div');
    overlay.setAttribute('id','ovrly');
    overlay.setAttribute(
      'style',
      'position:fixed;z-index:'+zIndex+';top:'+yOffset+'px;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);text-align:center;box-sizing:border-box;padding:50px;'
    );
    let image = document.createElement('img');
    image.setAttribute('src',link.href);
    image.setAttribute(
      'style',
      'width:auto;max-width:100%;height:auto;max-height:100%;margin:auto;position:relative;top:50%;transform:perspective(1px) translateY(-50%);cursor:zoom-out;'
    );
    overlay.appendChild(image);
  
    let closeButton = document.createElement('a');
    closeButton.setAttribute('href','#');
    closeButton.setAttribute('onclick', 'return ovrly.close({\'key\':\'Escape\'});');
    closeButton.setAttribute(
      'style',
      'position:absolute;z-index:'+(zIndex+1)+';top:0;right:0;text-decoration:none;color:#fff;font-size:30px;padding:10px 15px 10px 10px;'
    );
    const closeButtonText = document.createTextNode('×');
    closeButton.appendChild(closeButtonText);
    overlay.appendChild(closeButton);
  
    document.body.appendChild(overlay);
  
    document.addEventListener(
      'keydown',
      ovrly.close
    );
  
    window.addEventListener(
      'scroll',
      ovrly.close
    );

    document.getElementById('ovrly').addEventListener(
      'click',
      ovrly.close
    );
  
    return false;
  },
  
  close: function(event) {
    var fire = false;
  
    if ('key' in event) {
      if (event.key == 'Escape' || event.key == 'Esc') {
        fire = true;
      }
    } else if ('type' in event) {
      if (event.type == 'scroll' || event.type == 'click') {
        fire = true;
      }
    }
  
    if (fire == true) {
      const element = document.getElementById('ovrly');
      element.parentNode.removeChild(element);
  
      document.removeEventListener(
        'keydown',
        ovrly.close
      );
  
      window.removeEventListener(
        'scroll',
        ovrly.close
      );
    }
  
    return false;
  }

}
