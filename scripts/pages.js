var RocknCoder = RocknCoder || {};

(function () {
  "use strict";

  RocknCoder.Pages = RocknCoder.Pages || {};

  RocknCoder.Pages.page1 = (function () {
    return {
      pageshow:function () {
        $('.activator').homeMenu();
      },
      pagehide:function () {
      }
    };
  }());

  RocknCoder.Pages.page2 = (function () {
    return {
      pageshow:function () {
      },
      pagehide:function () {
      }
    };
  }());
}());

