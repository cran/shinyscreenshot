var shinyscreenshot = {
  initScreenshot : function(params) {
    setTimeout(function() { shinyscreenshot.takeScreenshot(params) }, params.timer*1000);
  },

  takeScreenshot : function(params) {
    var element = $(params.selector)[0];
    html2canvas(
      element, {
        scale : params.scale,
        logging : false,
        useCORS : true
      }
    ).then(function(canvas) {
      var img = canvas.toDataURL();
      saveAs(img, params.filename);
    });
  },

  screenshotButton : function(id) {
    var params = $("#" + id).data("shinyscreenshot-params");
    shinyscreenshot.initScreenshot(params);
  }
};

Shiny.addCustomMessageHandler('screenshot', shinyscreenshot.initScreenshot)
