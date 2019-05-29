'use strict';

define("code-challenge/tests/helpers/ember-power-select", ["exports", "ember-power-select/test-support/helpers"], function (_exports, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = deprecatedRegisterHelpers;
  _exports.selectChoose = _exports.touchTrigger = _exports.nativeTouch = _exports.clickTrigger = _exports.typeInSearch = _exports.triggerKeydown = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;

  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate("DEPRECATED `import { ".concat(name, " } from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import { ").concat(name, " } from 'ember-power-select/test-support/helpers';`"), false, {
        until: '1.11.0',
        id: "ember-power-select-test-support-".concat(name)
      }));
      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  _exports.findContains = findContains;
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  _exports.nativeMouseDown = nativeMouseDown;
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  _exports.nativeMouseUp = nativeMouseUp;
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  _exports.triggerKeydown = triggerKeydown;
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  _exports.typeInSearch = typeInSearch;
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  _exports.clickTrigger = clickTrigger;
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  _exports.nativeTouch = nativeTouch;
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  _exports.touchTrigger = touchTrigger;
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  _exports.selectChoose = selectChoose;

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("code-challenge/tests/integration/components/base-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | base', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "apymWSPo",
        "block": "{\"symbols\":[],\"statements\":[[5,\"base\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "bxtCIELi",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"base\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("code-challenge/tests/integration/components/character-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | character', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "nOF1TZ4m",
        "block": "{\"symbols\":[],\"statements\":[[5,\"character\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "IX1rEuYd",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"character\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("code-challenge/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/base.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/base.js should pass ESLint\n\n');
  });
  QUnit.test('components/character.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/character.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass ESLint\n\n14:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });
  QUnit.test('models/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/application.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/applications.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/applications.js should pass ESLint\n\n');
  });
  QUnit.test('transitions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass ESLint\n\n');
  });
});
define("code-challenge/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('code-challenge/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'code-challenge/templates/application.hbs should pass TemplateLint.\n\ncode-challenge/templates/application.hbs\n  11:5  error  Incorrect indentation for `{{! This audio tag allows audio to be played when the user searches or on the landing page (vader breathing) }}` beginning at L11:C5. Expected `{{! This audio tag allows audio to be played when the user searches or on the landing page (vader breathing) }}` to be at an indentation of 2 but was found at 5.  block-indentation\n  12:4  error  Incorrect indentation for `<audio>` beginning at L12:C4. Expected `<audio>` to be at an indentation of 2 but was found at 4.  block-indentation\n  13:8  error  Incorrect indentation for `<source>` beginning at L13:C8. Expected `<source>` to be at an indentation of 6 but was found at 8.  block-indentation\n  17:0  error  Incorrect indentation for `{{! A small toggle switch for audio }}` beginning at L17:C0. Expected `{{! A small toggle switch for audio }}` to be at an indentation of 2 but was found at 0.  block-indentation\n  18:0  error  Incorrect indentation for `<div>` beginning at L18:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  26:0  error  Incorrect indentation for `{{! container for text input search function }}` beginning at L26:C0. Expected `{{! container for text input search function }}` to be at an indentation of 2 but was found at 0.  block-indentation\n  27:0  error  Incorrect indentation for `<div>` beginning at L27:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  42:0  error  Incorrect indentation for `{{! container for result count and dropdown menu }}` beginning at L42:C0. Expected `{{! container for result count and dropdown menu }}` to be at an indentation of 2 but was found at 0.  block-indentation\n  43:0  error  Incorrect indentation for `<div>` beginning at L43:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  86:0  error  Incorrect indentation for `{{! results contianer }}` beginning at L86:C0. Expected `{{! results contianer }}` to be at an indentation of 2 but was found at 0.  block-indentation\n  87:0  error  Incorrect indentation for `<div>` beginning at L87:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  132:0  error  Incorrect indentation for `{{outlet}}` beginning at L132:C0. Expected `{{outlet}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  19:4  error  Incorrect indentation for `<div>` beginning at L19:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  20:8  error  Incorrect indentation for `{{! The checkbox for whether audio can play or not }}` beginning at L20:C8. Expected `{{! The checkbox for whether audio can play or not }}` to be at an indentation of 6 but was found at 8.  block-indentation\n  21:8  error  Incorrect indentation for `<input>` beginning at L21:C8. Expected `<input>` to be at an indentation of 6 but was found at 8.  block-indentation\n  22:8  error  Incorrect indentation for `<label>` beginning at L22:C8. Expected `<label>` to be at an indentation of 6 but was found at 8.  block-indentation\n  28:4  error  Incorrect indentation for `<div>` beginning at L28:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  29:8  error  Incorrect indentation for `<div>` beginning at L29:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  30:12  error  Incorrect indentation for `<div>` beginning at L30:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  31:17  error  Incorrect indentation for `{{! input helper for search }}` beginning at L31:C17. Expected `{{! input helper for search }}` to be at an indentation of 14 but was found at 17.  block-indentation\n  32:16  error  Incorrect indentation for `{{input}}` beginning at L32:C16. Expected `{{input}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  33:16  error  Incorrect indentation for `{{! search button -> calls search action in application controller with user input }}` beginning at L33:C16. Expected `{{! search button -> calls search action in application controller with user input }}` to be at an indentation of 14 but was found at 16.  block-indentation\n  34:16  error  Incorrect indentation for `<span>` beginning at L34:C16. Expected `<span>` to be at an indentation of 14 but was found at 16.  block-indentation\n  35:20  error  Incorrect indentation for `<button>` beginning at L35:C20. Expected `<button>` to be at an indentation of 18 but was found at 20.  block-indentation\n  45:4  error  Incorrect indentation for `<div>` beginning at L45:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  46:8  error  Incorrect indentation for `<div>` beginning at L46:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  59:8  error  Incorrect indentation for `<div>` beginning at L59:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  47:12  error  Incorrect indentation for `{{! if we have data, display number of results based on gender selection }}` beginning at L47:C12. Expected `{{! if we have data, display number of results based on gender selection }}` to be at an indentation of 10 but was found at 12.  block-indentation\n  48:12  error  Incorrect indentation for `{{#if}}` beginning at L48:C12. Expected `{{#if}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  57:0  error  Incorrect indentation for `            RESULTS \n        ` beginning at L57:C0. Expected `            RESULTS \n        ` to be at an indentation of 10 but was found at 12.  block-indentation\n  49:16  error  Incorrect indentation for `{{#if}}` beginning at L49:C16. Expected `{{#if}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  55:0  error  Incorrect indentation for `                0\n` beginning at L55:C0. Expected `                0\n` to be at an indentation of 14 but was found at 16.  block-indentation\n  50:20  error  Incorrect indentation for `{{this.model.length}}` beginning at L50:C20. Expected `{{this.model.length}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  52:20  error  Incorrect indentation for `{{get}}` beginning at L52:C20. Expected `{{get}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  59:36  error  Incorrect indentation for ` GENDER\n            ` beginning at L59:C36. Expected ` GENDER\n            ` to be at an indentation of 10 but was found at 37.  block-indentation\n  60:12  error  Incorrect indentation for `<div>` beginning at L60:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  61:12  error  Incorrect indentation for `{{! power-select dropdown menu for gender chose\n            ->    installed using ember install ember-power-select \n            ->    makes for easier drop down handling\n                }}` beginning at L61:C12. Expected `{{! power-select dropdown menu for gender chose\n            ->    installed using ember install ember-power-select \n            ->    makes for easier drop down handling\n                }}` to be at an indentation of 14 but was found at 12.  block-indentation\n  65:16  error  Incorrect indentation for `{{#power-select}}` beginning at L65:C16. Expected `{{#power-select}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  73:12  error  Incorrect indentation for `{{! if we have results, add gender count values,\n            ->    otherwise only display gender }}` beginning at L73:C12. Expected `{{! if we have results, add gender count values,\n            ->    otherwise only display gender }}` to be at an indentation of 18 but was found at 12.  block-indentation\n  75:20  error  Incorrect indentation for `{{#if}}` beginning at L75:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  76:24  error  Incorrect indentation for `<b>` beginning at L76:C24. Expected `<b>` to be at an indentation of 22 but was found at 24.  block-indentation\n  78:24  error  Incorrect indentation for `<b>` beginning at L78:C24. Expected `<b>` to be at an indentation of 22 but was found at 24.  block-indentation\n  89:4  error  Incorrect indentation for `{{! this liquid spacer (liquid fire addon) allows for animation of growing elements }}` beginning at L89:C4. Expected `{{! this liquid spacer (liquid fire addon) allows for animation of growing elements }}` to be at an indentation of 2 but was found at 4.  block-indentation\n  90:4  error  Incorrect indentation for `{{#liquid-spacer}}` beginning at L90:C4. Expected `{{#liquid-spacer}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  92:4  error  Incorrect indentation for `{{! begin a list for our cards to be displayed }}` beginning at L92:C4. Expected `{{! begin a list for our cards to be displayed }}` to be at an indentation of 6 but was found at 4.  block-indentation\n  93:4  error  Incorrect indentation for `<ul>` beginning at L93:C4. Expected `<ul>` to be at an indentation of 6 but was found at 4.  block-indentation\n  95:4  error  Incorrect indentation for `{{! if model/results are not loaded display base results card }}` beginning at L95:C4. Expected `{{! if model/results are not loaded display base results card }}` to be at an indentation of 6 but was found at 4.  block-indentation\n  96:4  error  Incorrect indentation for `{{#unless}}` beginning at L96:C4. Expected `{{#unless}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  101:4  error  Incorrect indentation for `{{! case: display all results }}` beginning at L101:C4. Expected `{{! case: display all results }}` to be at an indentation of 6 but was found at 4.  block-indentation\n  102:4  error  Incorrect indentation for `{{#if}}` beginning at L102:C4. Expected `{{#if}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  97:8  error  Incorrect indentation for `<Base>` beginning at L97:C8. Expected `<Base>` to be at an indentation of 6 but was found at 8.  block-indentation\n  103:8  error  Incorrect indentation for `{{#each}}` beginning at L103:C8. Expected `{{#each}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  112:4  error  Incorrect indentation for `{{! case: display chosen gender }}` beginning at L112:C4. Expected `{{! case: display chosen gender }}` to be at an indentation of 6 but was found at 4.  block-indentation\n  114:8  error  Incorrect indentation for `{{#if}}` beginning at L114:C8. Expected `{{#if}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  104:12  error  Incorrect indentation for `{{#transition-group}}` beginning at L104:C12. Expected `{{#transition-group}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  108:37  error  Incorrect indentation for `transition-group` beginning at L104:C12. Expected `{{/transition-group}}` ending at L108:C37 to be at an indentation of 12 but was found at 16.  block-indentation\n  105:16  error  Incorrect indentation for `{{#liquid-spacer}}` beginning at L105:C16. Expected `{{#liquid-spacer}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  107:38  error  Incorrect indentation for `liquid-spacer` beginning at L105:C16. Expected `{{/liquid-spacer}}` ending at L107:C38 to be at an indentation of 16 but was found at 20.  block-indentation\n  106:20  error  Incorrect indentation for `<Character>` beginning at L106:C20. Expected `<Character>` to be at an indentation of 18 but was found at 20.  block-indentation\n  115:12  error  Incorrect indentation for `<Base>` beginning at L115:C12. Expected `<Base>` to be at an indentation of 10 but was found at 12.  block-indentation\n  117:12  error  Incorrect indentation for `{{#each}}` beginning at L117:C12. Expected `{{#each}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  118:16  error  Incorrect indentation for `{{#if}}` beginning at L118:C16. Expected `{{#if}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  119:20  error  Incorrect indentation for `{{#transition-group}}` beginning at L119:C20. Expected `{{#transition-group}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  120:24  error  Incorrect indentation for `{{#liquid-spacer}}` beginning at L120:C24. Expected `{{#liquid-spacer}}` to be at an indentation of 22 but was found at 24.  block-indentation\n  121:28  error  Incorrect indentation for `<Character>` beginning at L121:C28. Expected `<Character>` to be at an indentation of 26 but was found at 28.  block-indentation\n  136:8  error  Incorrect indentation for `\n    // File locations for audio files\n    const soundFiles = ["As you wish.mp3",\n                        "Bidding.mp3",\n                        "Apology.mp3",\n                        "Dont fail me again.mp3",\n                        "Every part of the ship.mp3",\n                        "Force.mp3",\n                        "He is here.mp3",\n                        "I am your father.mp3",\n                        "I have you now.mp3",\n                        "Lack of faith.mp3",\n                        "Last time.mp3",\n                        "No Disintigration.mp3",\n                        "Offering.mp3",\n                        "What Happened.mp3",\n                        "Yes my master.mp3"\n                        ];\n    //toggle function to pause and play audio if the vader icon is displayed\n    function toggle() {\n        var audio = document.getElementById(\'vader\');\n        audio.volume=".02";\n        if(document.getElementById("breathing"))\n            return audio.paused ? audio.play() : audio.pause();\n        else{\n            return audio.pause();\n        }\n    }\n    // plays a random clip on click of search if the audio toggle is on\n    function playRandomSoundClip(){\n        var audio = document.getElementById(\'vader\');\n        if(document.getElementById("customSwitch2").checked){\n            if(!audio.paused || audio.played){\n                audio.pause();\n                var rand = Math.floor(Math.random() * soundFiles.length);\n                audio.src = "/assets/sounds/" + soundFiles[rand];\n                audio.loop = false;\n                audio.play();\n            }\n        }\n    }\n` beginning at L136:C8. Expected `\n    // File locations for audio files\n    const soundFiles = ["As you wish.mp3",\n                        "Bidding.mp3",\n                        "Apology.mp3",\n                        "Dont fail me again.mp3",\n                        "Every part of the ship.mp3",\n                        "Force.mp3",\n                        "He is here.mp3",\n                        "I am your father.mp3",\n                        "I have you now.mp3",\n                        "Lack of faith.mp3",\n                        "Last time.mp3",\n                        "No Disintigration.mp3",\n                        "Offering.mp3",\n                        "What Happened.mp3",\n                        "Yes my master.mp3"\n                        ];\n    //toggle function to pause and play audio if the vader icon is displayed\n    function toggle() {\n        var audio = document.getElementById(\'vader\');\n        audio.volume=".02";\n        if(document.getElementById("breathing"))\n            return audio.paused ? audio.play() : audio.pause();\n        else{\n            return audio.pause();\n        }\n    }\n    // plays a random clip on click of search if the audio toggle is on\n    function playRandomSoundClip(){\n        var audio = document.getElementById(\'vader\');\n        if(document.getElementById("customSwitch2").checked){\n            if(!audio.paused || audio.played){\n                audio.pause();\n                var rand = Math.floor(Math.random() * soundFiles.length);\n                audio.src = "/assets/sounds/" + soundFiles[rand];\n                audio.loop = false;\n                audio.play();\n            }\n        }\n    }\n` to be at an indentation of 2 but was found at 4.  block-indentation\n  12:36  error  elements cannot have inline styles  no-inline-styles\n  45:21  error  elements cannot have inline styles  no-inline-styles\n  49:37  error  you must use double quotes in templates  quotes\n  102:25  error  you must use double quotes in templates  quotes\n  102:40  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('code-challenge/templates/components/base.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'code-challenge/templates/components/base.hbs should pass TemplateLint.\n\ncode-challenge/templates/components/base.hbs\n  13:4  error  Incorrect indentation for `<div>` beginning at L13:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  18:4  error  Incorrect indentation for `<p>` beginning at L18:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  19:0  error  Incorrect indentation for `{{! Otherwise (results == 0) we display No results and the image when there are no results and the component is called }}` beginning at L19:C0. Expected `{{! Otherwise (results == 0) we display No results and the image when there are no results and the component is called }}` to be at an indentation of 2 but was found at 0.  block-indentation\n  21:4  error  Incorrect indentation for `<div>` beginning at L21:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  26:4  error  Incorrect indentation for `<p>` beginning at L26:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  14:8  error  Incorrect indentation for `<div>` beginning at L14:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  15:12  error  Incorrect indentation for `<img>` beginning at L15:C12. Expected `<img>` to be at an indentation of 10 but was found at 12.  block-indentation\n  22:8  error  Incorrect indentation for `<div>` beginning at L22:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  23:12  error  Incorrect indentation for `<img>` beginning at L23:C12. Expected `<img>` to be at an indentation of 10 but was found at 12.  block-indentation\n  15:12  error  img tags must have an alt attribute  img-alt-attributes\n  23:12  error  img tags must have an alt attribute  img-alt-attributes\n  15:12  error  Self-closing a void element is redundant  self-closing-void-elements\n  23:12  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
  QUnit.test('code-challenge/templates/components/character.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'code-challenge/templates/components/character.hbs should pass TemplateLint.\n\ncode-challenge/templates/components/character.hbs\n  13:3  error  Incorrect indentation for `<li>` beginning at L13:C3. Expected `<li>` to be at an indentation of 2 but was found at 3.  block-indentation\n  31:0  error  Incorrect indentation for `{{! Otherwise (default) display limited information about the character }}` beginning at L31:C0. Expected `{{! Otherwise (default) display limited information about the character }}` to be at an indentation of 2 but was found at 0.  block-indentation\n  33:4  error  Incorrect indentation for `<li>` beginning at L33:C4. Expected `<li>` to be at an indentation of 2 but was found at 4.  block-indentation\n  29:5  error  Incorrect indentation for `li` beginning at L13:C3. Expected `</li>` ending at L29:C5 to be at an indentation of 3 but was found at 0.  block-indentation\n  15:4  error  Incorrect indentation for `<br>` beginning at L15:C4. Expected `<br>` to be at an indentation of 5 but was found at 4.  block-indentation\n  16:4  error  Incorrect indentation for `<p>` beginning at L16:C4. Expected `<p>` to be at an indentation of 5 but was found at 4.  block-indentation\n  27:4  error  Incorrect indentation for `<br>` beginning at L27:C4. Expected `<br>` to be at an indentation of 5 but was found at 4.  block-indentation\n  17:8  error  Incorrect indentation for `<b>` beginning at L17:C8. Expected `<b>` to be at an indentation of 6 but was found at 8.  block-indentation\n  45:5  error  Incorrect indentation for `li` beginning at L33:C4. Expected `</li>` ending at L45:C5 to be at an indentation of 4 but was found at 0.  block-indentation\n  35:4  error  Incorrect indentation for `<br>` beginning at L35:C4. Expected `<br>` to be at an indentation of 6 but was found at 4.  block-indentation\n  36:4  error  Incorrect indentation for `<p>` beginning at L36:C4. Expected `<p>` to be at an indentation of 6 but was found at 4.  block-indentation\n  37:8  error  Incorrect indentation for `<b>` beginning at L37:C8. Expected `<b>` to be at an indentation of 6 but was found at 8.  block-indentation\n  38:8  error  Incorrect indentation for `<br>` beginning at L38:C8. Expected `<br>` to be at an indentation of 6 but was found at 8.  block-indentation\n  39:8  error  Incorrect indentation for `{{person.gender}}` beginning at L39:C8. Expected `{{person.gender}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  40:8  error  Incorrect indentation for `{{! conditionally show text for "hair" and "eyes" when appropriate }}` beginning at L40:C8. Expected `{{! conditionally show text for "hair" and "eyes" when appropriate }}` to be at an indentation of 6 but was found at 8.  block-indentation\n  41:8  error  Incorrect indentation for `{{person.hair_color}}` beginning at L41:C8. Expected `{{person.hair_color}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  42:8  error  Incorrect indentation for `{{person.eye_color}}` beginning at L42:C8. Expected `{{person.eye_color}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  43:4  error  Incorrect indentation for `<br>` beginning at L43:C4. Expected `<br>` to be at an indentation of 6 but was found at 4.  block-indentation\n  14:109  error  elements cannot have inline styles  no-inline-styles\n  14:82  error  Interaction added to non-interactive element  no-invalid-interactive\n  34:86  error  Interaction added to non-interactive element  no-invalid-interactive\n  41:40  error  Using {{unless}} in combination with other helpers should be avoided. MaxHelpers: 0  simple-unless\n  41:44  error  Using {{unless}} in combination with other helpers should be avoided. MaxHelpers: 0  simple-unless\n  41:74  error  Using {{unless}} in combination with other helpers should be avoided. MaxHelpers: 0  simple-unless\n  42:39  error  Using {{unless}} in combination with other helpers should be avoided. MaxHelpers: 0  simple-unless\n  42:43  error  Using {{unless}} in combination with other helpers should be avoided. MaxHelpers: 0  simple-unless\n  42:72  error  Using {{unless}} in combination with other helpers should be avoided. MaxHelpers: 0  simple-unless\n');
  });
});
define("code-challenge/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/base-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/base-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/character-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/character-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });
});
define("code-challenge/tests/test-helper", ["code-challenge/app", "code-challenge/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("code-challenge/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define("code-challenge/tests/unit/models/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('application', {});
      assert.ok(model);
    });
  });
});
define("code-challenge/tests/unit/routes/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define('code-challenge/config/environment', [], function() {
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

require('code-challenge/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
