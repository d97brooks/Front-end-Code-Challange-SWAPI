'use strict';



;define("code-challenge/app", ["exports", "code-challenge/resolver", "ember-load-initializers", "code-challenge/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("code-challenge/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (_exports, _lfGetOutletState) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfGetOutletState.default;
    }
  });
});
;define("code-challenge/components/base", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("code-challenge/components/basic-dropdown", ["exports", "ember-basic-dropdown/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
;define("code-challenge/components/basic-dropdown/content-element", ["exports", "ember-basic-dropdown/components/basic-dropdown/content-element"], function (_exports, _contentElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
;define("code-challenge/components/basic-dropdown/content", ["exports", "ember-basic-dropdown/components/basic-dropdown/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define("code-challenge/components/basic-dropdown/trigger", ["exports", "ember-basic-dropdown/components/basic-dropdown/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define("code-challenge/components/character", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    clicked: false,
    actions: {
      click() {
        this.toggleProperty("clicked");
      }

    }
  });

  _exports.default = _default;
});
;define("code-challenge/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (_exports, _illiquidModel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _illiquidModel.default;
    }
  });
});
;define("code-challenge/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (_exports, _liquidBind) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidBind.default;
    }
  });
});
;define("code-challenge/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (_exports, _liquidChild) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidChild.default;
    }
  });
});
;define("code-challenge/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (_exports, _liquidContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidContainer.default;
    }
  });
});
;define("code-challenge/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (_exports, _liquidIf) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidIf.default;
    }
  });
});
;define("code-challenge/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (_exports, _liquidMeasured) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.default;
    }
  });
  Object.defineProperty(_exports, "measure", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.measure;
    }
  });
});
;define("code-challenge/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (_exports, _liquidOutlet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidOutlet.default;
    }
  });
});
;define("code-challenge/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (_exports, _liquidSpacer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSpacer.default;
    }
  });
});
;define("code-challenge/components/liquid-sync", ["exports", "liquid-fire/components/liquid-sync"], function (_exports, _liquidSync) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSync.default;
    }
  });
});
;define("code-challenge/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (_exports, _liquidUnless) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidUnless.default;
    }
  });
});
;define("code-challenge/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (_exports, _liquidVersions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidVersions.default;
    }
  });
});
;define("code-challenge/components/power-select-multiple", ["exports", "ember-power-select/components/power-select-multiple"], function (_exports, _powerSelectMultiple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
;define("code-challenge/components/power-select-multiple/trigger", ["exports", "ember-power-select/components/power-select-multiple/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define("code-challenge/components/power-select", ["exports", "ember-power-select/components/power-select"], function (_exports, _powerSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
;define("code-challenge/components/power-select/before-options", ["exports", "ember-power-select/components/power-select/before-options"], function (_exports, _beforeOptions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
;define("code-challenge/components/power-select/options", ["exports", "ember-power-select/components/power-select/options"], function (_exports, _options) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
;define("code-challenge/components/power-select/placeholder", ["exports", "ember-power-select/components/power-select/placeholder"], function (_exports, _placeholder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
;define("code-challenge/components/power-select/power-select-group", ["exports", "ember-power-select/components/power-select/power-select-group"], function (_exports, _powerSelectGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
;define("code-challenge/components/power-select/search-message", ["exports", "ember-power-select/components/power-select/search-message"], function (_exports, _searchMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
;define("code-challenge/components/power-select/trigger", ["exports", "ember-power-select/components/power-select/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define("code-challenge/components/transition-group", ["exports", "ember-css-transitions/components/transition-group"], function (_exports, _transitionGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transitionGroup.default;
    }
  });
});
;define("code-challenge/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("code-challenge/controllers/application", ["exports", "fetch"], function (_exports, _fetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // import {makeArray} from '@ember/array'
  var _default = Ember.Controller.extend({
    genders: ['all', 'male', 'female', 'unknown', 'n/a'],
    // list of genders
    gender: '',
    // chosen gender
    searchInput: '',
    // renturns a map of all gender counts to be used for results and dropdown
    // -> computed when there is a change to model
    genderCounts: Ember.computed('model.[]', function () {
      // initialize vars
      let counts = [];
      counts["male"] = 0;
      counts["female"] = 0;
      counts["unknown"] = 0;
      counts["n/a"] = 0; // get all characters

      this.get('model').forEach(function (character) {
        // increment gender count for characters gender
        counts[character.gender] = counts[character.gender] + 1;
      }); // set all to length of model / num of characters

      counts["all"] = this.get('model').length; // this may be an extra call that we could remove by adding a count variable

      return counts;
    }),
    actions: {
      // This is our main function that pulls data from SWAPI
      search(input) {
        // input from user
        if (this.searchInput != input && input != undefined) {
          this.set('searchInput', input); // When search is called, I want to track whether it is still loading.
          // -> to maybe add the loading spinner later

          this.set('loading', true); // set our url and include our search parameter (/?search=)

          let url = "https://swapi.co/api/people/?search=".concat(input);
          let promise = (0, _fetch.default)(url).then(function (response) {
            if (!response.ok) {
              throw Error(response.statusText);
            }

            return response;
          }) // fetch the json file and check for error
          .then(resp => resp.json()) // convert response to json
          .then(json => this.set('model', json.results)) // set our model to the results returned
          .then(this.set('loading', false)); // update loading to false

          return promise;
        } // just alert that the input hasnt changed or is invalid
        else {
            alert("already showing results for '" + input + "'");
          }
      }

    }
  });

  _exports.default = _default;
});
;define("code-challenge/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("code-challenge/helpers/app-version", ["exports", "code-challenge/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("code-challenge/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("code-challenge/helpers/ember-power-select-is-group", ["exports", "ember-power-select/helpers/ember-power-select-is-group"], function (_exports, _emberPowerSelectIsGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsGroup", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
;define("code-challenge/helpers/ember-power-select-is-selected", ["exports", "ember-power-select/helpers/ember-power-select-is-selected"], function (_exports, _emberPowerSelectIsSelected) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsSelected", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
;define("code-challenge/helpers/ember-power-select-true-string-if-present", ["exports", "ember-power-select/helpers/ember-power-select-true-string-if-present"], function (_exports, _emberPowerSelectTrueStringIfPresent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectTrueStringIfPresent", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
;define("code-challenge/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("code-challenge/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("code-challenge/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("code-challenge/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("code-challenge/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("code-challenge/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("code-challenge/helpers/lf-lock-model", ["exports", "liquid-fire/helpers/lf-lock-model"], function (_exports, _lfLockModel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfLockModel.default;
    }
  });
  Object.defineProperty(_exports, "lfLockModel", {
    enumerable: true,
    get: function () {
      return _lfLockModel.lfLockModel;
    }
  });
});
;define("code-challenge/helpers/lf-or", ["exports", "liquid-fire/helpers/lf-or"], function (_exports, _lfOr) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfOr.default;
    }
  });
  Object.defineProperty(_exports, "lfOr", {
    enumerable: true,
    get: function () {
      return _lfOr.lfOr;
    }
  });
});
;define("code-challenge/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("code-challenge/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("code-challenge/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define("code-challenge/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("code-challenge/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("code-challenge/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("code-challenge/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("code-challenge/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("code-challenge/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("code-challenge/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("code-challenge/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "code-challenge/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("code-challenge/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("code-challenge/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("code-challenge/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("code-challenge/initializers/export-application-global", ["exports", "code-challenge/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("code-challenge/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals", "liquid-fire/velocity-ext"], function (_exports, _emberInternals, _velocityExt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  (0, _emberInternals.initialize)();
  var _default = {
    name: 'liquid-fire',
    initialize: function () {}
  };
  _exports.default = _default;
});
;define("code-challenge/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("code-challenge/mixins/transition-mixin", ["exports", "ember-css-transitions/mixins/transition-mixin"], function (_exports, _transitionMixin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transitionMixin.default;
    }
  });
});
;define("code-challenge/models/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({});

  _exports.default = _default;
});
;define("code-challenge/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("code-challenge/router", ["exports", "code-challenge/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {});
  var _default = Router;
  _exports.default = _default;
});
;define("code-challenge/routes/applications", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.findAll('application'); // get results from model
    }

  });

  _exports.default = _default;
});
;define("code-challenge/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("code-challenge/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _transitionMap.default;
  _exports.default = _default;
});
;define("code-challenge/services/text-measurer", ["exports", "ember-text-measurer/services/text-measurer"], function (_exports, _textMeasurer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
;define("code-challenge/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "XrjQuPtr",
    "block": "{\"symbols\":[\"person\",\"index\",\"person\",\"index\",\"gender\"],\"statements\":[[0,\"\\n\"],[7,\"head\"],[9],[0,\" \\n\"],[0,\"    \"],[7,\"audio\"],[11,\"id\",\"vader\"],[11,\"controls\",\"\"],[11,\"loop\",\"\"],[11,\"style\",\"display: none;\"],[9],[0,\"\\n        \"],[7,\"source\"],[11,\"src\",\"/assets/sounds/Darth-Vader-Breath.mp3\"],[11,\"type\",\"audio/mpeg\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"body\"],[9],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container text-right mb-5 mr-5 mt-5\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"custom-control custom-switch\"],[9],[0,\"\\n\"],[0,\"        \"],[7,\"input\"],[11,\"class\",\"custom-control-input\"],[11,\"id\",\"customSwitch2\"],[11,\"onclick\",\"toggle()\"],[11,\"type\",\"checkbox\"],[9],[10],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"custom-control-label\"],[11,\"for\",\"customSwitch2\"],[9],[0,\"Audio\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"containe-5 text-center mt-5\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-6 mx-auto\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group shadow-sm p-3 bg-white rounded\"],[9],[0,\"  \\n\"],[0,\"                \"],[1,[29,\"input\",null,[[\"class\",\"style\",\"type\",\"id\",\"value\",\"enter\",\"placeholder\"],[\"form-control float-left\",\"\",\"text\",\"search\",[25,[\"input\"]],[29,\"action\",[[24,0,[]],\"search\",[25,[\"input\"]]],null],\"Search Star Wars Characters\"]]],false],[0,\"\\n\"],[0,\"                \"],[7,\"span\"],[11,\"class\",\"input-group-btn\"],[9],[0,\"\\n                    \"],[7,\"button\"],[11,\"id\",\"btn\"],[11,\"class\",\"btn btn-search shadow-sm\"],[11,\"onclick\",\"playRandomSoundClip()\"],[11,\"type\",\"button\"],[9],[0,\" Search\"],[3,\"action\",[[24,0,[]],\"search\",[25,[\"input\"]]]],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"container w-50 mt-5\"],[9],[0,\"\\n    \\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[11,\"style\",\"\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col float-left\"],[9],[0,\"   \\n\"],[4,\"if\",[[25,[\"model\"]]],null,{\"statements\":[[4,\"if\",[[29,\"or\",[[29,\"eq\",[[25,[\"gender\"]],\"\"],null],[29,\"eq\",[[25,[\"gender\"]],\"all\"],null]],null]],null,{\"statements\":[[0,\"                    \"],[1,[24,0,[\"model\",\"length\"]],false],[0,\" \\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[1,[29,\"get\",[[25,[\"genderCounts\"]],[25,[\"gender\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"                0\\n\"]],\"parameters\":[]}],[0,\"            RESULTS \\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col text-right\"],[9],[0,\" GENDER\\n            \"],[7,\"div\"],[11,\"class\",\"col filter\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"renderInPlace\",\"placeholder\",\"selected\",\"onchange\"],[[25,[\"genders\"]],true,\"filter by gender\",[25,[\"gender\"]],[29,\"action\",[[24,0,[]],[29,\"mut\",[[25,[\"gender\"]]],null]],null]]],{\"statements\":[[4,\"if\",[[25,[\"model\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"b\"],[9],[1,[24,5,[]],false],[10],[0,\" (\"],[1,[29,\"get\",[[25,[\"genderCounts\"]],[24,5,[]]],null],false],[0,\")    \\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                        \"],[7,\"b\"],[9],[1,[24,5,[]],false],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[5]},null],[0,\"            \"],[10],[0,\"        \\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"container w-50 text-center mt-4\"],[9],[0,\"\\n\\n\"],[4,\"liquid-spacer\",null,[[\"growDuration\"],[\"800\"]],{\"statements\":[[0,\"\\n\"],[0,\"    \"],[7,\"ul\"],[11,\"class\",\"container shadow p-4 mb-5 bg-white rounded\"],[9],[0,\"\\n\\n\"],[4,\"unless\",[[25,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[5,\"base\",[],[[\"@results\"],[[29,\"get\",[[25,[\"genderCounts\"]],[25,[\"gender\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"if\",[[29,\"or\",[[29,\"eq\",[[25,[\"gender\"]],\"\"],null],[29,\"eq\",[[25,[\"gender\"]],\"all\"],null]],null]],null,{\"statements\":[[4,\"each\",[[25,[\"model\"]]],null,{\"statements\":[[4,\"transition-group\",null,[[\"transitionClass\"],[\"card\"]],{\"statements\":[[4,\"liquid-spacer\",null,[[\"growDuration\"],[\"800\"]],{\"statements\":[[0,\"                    \"],[5,\"character\",[],[[\"@person\",\"@index\"],[[24,3,[]],[24,4,[]]]]],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[3,4]},null],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[29,\"and\",[[29,\"eq\",[[29,\"get\",[[25,[\"genderCounts\"]],[25,[\"gender\"]]],null],0],null],[25,[\"model\"]]],null]],null,{\"statements\":[[0,\"            \"],[5,\"base\",[],[[\"@results\"],[[29,\"get\",[[25,[\"genderCounts\"]],[25,[\"gender\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[25,[\"model\"]]],null,{\"statements\":[[4,\"if\",[[29,\"eq\",[[25,[\"gender\"]],[24,1,[\"gender\"]]],null]],null,{\"statements\":[[4,\"transition-group\",null,[[\"transitionClass\"],[\"card\"]],{\"statements\":[[4,\"liquid-spacer\",null,[[\"growDuration\"],[\"800\"]],{\"statements\":[[0,\"                            \"],[5,\"character\",[],[[\"@person\",\"@index\"],[[24,1,[]],[24,2,[]]]]],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[1,2]},null]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"    \\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"],[1,[23,\"outlet\"],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"script\"],[9],[0,\"\\n    // File locations for audio files\\n    const soundFiles = [\\\"As you wish.mp3\\\",\\n                        \\\"Bidding.mp3\\\",\\n                        \\\"Apology.mp3\\\",\\n                        \\\"Dont fail me again.mp3\\\",\\n                        \\\"Every part of the ship.mp3\\\",\\n                        \\\"Force.mp3\\\",\\n                        \\\"He is here.mp3\\\",\\n                        \\\"I am your father.mp3\\\",\\n                        \\\"I have you now.mp3\\\",\\n                        \\\"Lack of faith.mp3\\\",\\n                        \\\"Last time.mp3\\\",\\n                        \\\"No Disintigration.mp3\\\",\\n                        \\\"Offering.mp3\\\",\\n                        \\\"What Happened.mp3\\\",\\n                        \\\"Yes my master.mp3\\\"\\n                        ];\\n    //toggle function to pause and play audio if the vader icon is displayed\\n    function toggle() {\\n        var audio = document.getElementById('vader');\\n        audio.volume=\\\".02\\\";\\n        if(document.getElementById(\\\"breathing\\\"))\\n            return audio.paused ? audio.play() : audio.pause();\\n        else{\\n            return audio.pause();\\n        }\\n    }\\n    // plays a random clip on click of search if the audio toggle is on\\n    function playRandomSoundClip(){\\n        var audio = document.getElementById('vader');\\n        if(document.getElementById(\\\"customSwitch2\\\").checked){\\n            if(!audio.paused || audio.played){\\n                audio.pause();\\n                var rand = Math.floor(Math.random() * soundFiles.length);\\n                audio.src = \\\"/assets/sounds/\\\" + soundFiles[rand];\\n                audio.loop = false;\\n                audio.play();\\n            }\\n        }\\n    }\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "code-challenge/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("code-challenge/templates/components/base", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "JUZMIK+A",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[29,\"not\",[[29,\"eq\",[[25,[\"results\"]],0],null]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-4 mx-auto\"],[9],[0,\"\\n            \"],[7,\"img\"],[11,\"class\",\"center mt-5 mr-5\"],[11,\"id\",\"breathing\"],[11,\"src\",\"/assets/graphics/vader-icon.svg\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-center mb-5 mr-5\"],[9],[0,\"Search Characters By Name\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-4 mx-auto\"],[9],[0,\"\\n            \"],[7,\"img\"],[11,\"class\",\"center mt-5 mr-5\"],[11,\"id\",\"breathing\"],[11,\"src\",\"/assets/graphics/vader-icon.svg\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-center mb-5 mr-5\"],[9],[0,\"No results\"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "code-challenge/templates/components/base.hbs"
    }
  });

  _exports.default = _default;
});
;define("code-challenge/templates/components/character", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hq7dqYHB",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"if\",[[25,[\"clicked\"]]],null,{\"statements\":[[0,\"   \"],[7,\"li\"],[12,\"class\",[30,[\"card card-item border-left-0 \\n\",[29,\"if\",[[29,\"eq\",[[25,[\"index\"]],0],null],\"border-top-0\"],null],\" border-right-0 border-bottom-0 mr-5 text-left\"]]],[12,\"onclick\",[29,\"action\",[[24,0,[]],\"click\"],null]],[11,\"style\",\"width: 100%\"],[9],[0,\"\\n    \"],[7,\"br\"],[9],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"content\"],[9],[0,\"\\n        \"],[7,\"b\"],[9],[0,\"Name: \"],[1,[25,[\"person\",\"name\"]],false],[10],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n        Height: \"],[1,[25,[\"person\",\"height\"]],false],[7,\"br\"],[9],[10],[0,\"\\n        Mass: \"],[1,[25,[\"person\",\"mass\"]],false],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n        Gender: \"],[1,[25,[\"person\",\"gender\"]],false],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n        Skin Color: \"],[1,[25,[\"person\",\"skin_color\"]],false],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n        Hair Color:  \"],[1,[25,[\"person\",\"hair_color\"]],false],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n        Eye Color: \"],[1,[25,[\"person\",\"eye_color\"]],false],[7,\"br\"],[9],[10],[0,\"\\n        Birth Year: \"],[1,[25,[\"person\",\"birth_year\"]],false],[7,\"br\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"br\"],[9],[10],[0,\"\\n    \\n\"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"li\"],[12,\"class\",[30,[\"card card-item border-left-0 \\n    \",[29,\"if\",[[29,\"eq\",[[25,[\"index\"]],0],null],\"border-top-0\"],null],\" border-right-0 border-bottom-0 mr-5 text-left\"]]],[12,\"onclick\",[29,\"action\",[[24,0,[]],\"click\"],null]],[9],[0,\"\\n    \"],[7,\"br\"],[9],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"content\"],[9],[0,\"\\n        \"],[7,\"b\"],[9],[1,[25,[\"person\",\"name\"]],false],[10],[0,\" \\n        \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[1,[25,[\"person\",\"gender\"]],false],[0,\" • \\n\"],[0,\"        \"],[1,[25,[\"person\",\"hair_color\"]],false],[0,\" \"],[4,\"unless\",[[29,\"or\",[[29,\"eq\",[\"none\",[25,[\"person\",\"hair_color\"]]],null],[29,\"eq\",[\"n/a\",[25,[\"person\",\"hair_color\"]]],null]],null]],null,{\"statements\":[[0,\" hair \"]],\"parameters\":[]},null],[0,\" • \\n        \"],[1,[25,[\"person\",\"eye_color\"]],false],[0,\" \"],[4,\"unless\",[[29,\"or\",[[29,\"eq\",[\"none\",[25,[\"person\",\"eye_color\"]]],null],[29,\"eq\",[\"n/a\",[25,[\"person\",\"eye_color\"]]],null]],null]],null,{\"statements\":[[0,\" eyes \"]],\"parameters\":[]},null],[0,\" \\n    \"],[7,\"br\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "code-challenge/templates/components/character.hbs"
    }
  });

  _exports.default = _default;
});
;define("code-challenge/transitions", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default() {// Add your transitions here, like:
    //   this.transition(
    //     this.fromRoute('people.index'),
    //     this.toRoute('people.detail'),
    //     this.use('toLeft'),
    //     this.reverse('toRight')
    //   );
  }
});
;define("code-challenge/transitions/cross-fade", ["exports", "liquid-fire/transitions/cross-fade"], function (_exports, _crossFade) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _crossFade.default;
    }
  });
});
;define("code-challenge/transitions/default", ["exports", "liquid-fire/transitions/default"], function (_exports, _default) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
;define("code-challenge/transitions/explode", ["exports", "liquid-fire/transitions/explode"], function (_exports, _explode) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _explode.default;
    }
  });
});
;define("code-challenge/transitions/fade", ["exports", "liquid-fire/transitions/fade"], function (_exports, _fade) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fade.default;
    }
  });
});
;define("code-challenge/transitions/flex-grow", ["exports", "liquid-fire/transitions/flex-grow"], function (_exports, _flexGrow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flexGrow.default;
    }
  });
});
;define("code-challenge/transitions/fly-to", ["exports", "liquid-fire/transitions/fly-to"], function (_exports, _flyTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flyTo.default;
    }
  });
});
;define("code-challenge/transitions/move-over", ["exports", "liquid-fire/transitions/move-over"], function (_exports, _moveOver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _moveOver.default;
    }
  });
});
;define("code-challenge/transitions/scale", ["exports", "liquid-fire/transitions/scale"], function (_exports, _scale) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _scale.default;
    }
  });
});
;define("code-challenge/transitions/scroll-then", ["exports", "liquid-fire/transitions/scroll-then"], function (_exports, _scrollThen) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _scrollThen.default;
    }
  });
});
;define("code-challenge/transitions/to-down", ["exports", "liquid-fire/transitions/to-down"], function (_exports, _toDown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toDown.default;
    }
  });
});
;define("code-challenge/transitions/to-left", ["exports", "liquid-fire/transitions/to-left"], function (_exports, _toLeft) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toLeft.default;
    }
  });
});
;define("code-challenge/transitions/to-right", ["exports", "liquid-fire/transitions/to-right"], function (_exports, _toRight) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toRight.default;
    }
  });
});
;define("code-challenge/transitions/to-up", ["exports", "liquid-fire/transitions/to-up"], function (_exports, _toUp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toUp.default;
    }
  });
});
;define("code-challenge/transitions/wait", ["exports", "liquid-fire/transitions/wait"], function (_exports, _wait) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _wait.default;
    }
  });
});
;

;define('code-challenge/config/environment', [], function() {
  var prefix = 'code-challenge';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("code-challenge/app")["default"].create({"name":"code-challenge","version":"0.0.0+efc516b2"});
          }
        
//# sourceMappingURL=code-challenge.map
