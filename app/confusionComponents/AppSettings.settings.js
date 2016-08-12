System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppSettings;
    return {
        setters:[],
        execute: function() {
            class AppSettings {
                static get API_ENDPOINT() {
                    return 'http://angularrestconfusionapp.au-syd.mybluemix.net/';
                }
            }
            exports_1("AppSettings", AppSettings);
        }
    }
});
//# sourceMappingURL=AppSettings.settings.js.map