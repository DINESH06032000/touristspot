var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'orbitcontrol_patch:plugin',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'orbitcontrol_patch',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

