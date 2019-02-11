'use strict';

var remote = require('electron').remote;

var process = remote.process;

//remote.getCurrentWindow().closeDevTools();

var obtains = [
  'µ/components/camera.js',
];

obtain(obtains, (cam)=> {

  exports.app = {};

  exports.app.start = ()=> {

    console.log('started');

    document.onkeypress = (e)=> {

    };

    document.onkeyup = (e)=> {
      if (e.which == 73 && e.getModifierState('Control') &&  e.getModifierState('Shift')) {
        remote.getCurrentWindow().toggleDevTools();
      }
    };

    process.on('SIGINT', ()=> {
      process.nextTick(function () { process.exit(0); });
    });
  };

  provide(exports);
});
