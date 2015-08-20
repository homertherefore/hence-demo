/**
 * @module hence-demo
 */
'use strict';

import console from 'consoler';
import Hence from 'hence-component-framework';

/**
 * HenceDemo Component
 * @constructor
 */
let HenceDemo = Hence.Ui({
  is: 'hence-demo',
  properties: {
    callToAction: Object,
    emailError: String
  },
  eventCallToAction: Hence.hook('callToAction', (data, model, e)=> {
    // Data in this case is referencing this.callToAction on the component, but this isn't always the case. The
    // full targeted object will be accessible here, allowing you to prepare/adjust/check/leverage any aspect of it.

    console.log('calltoaction with', [this, data, model, e]);

    // Was a valid email inputted?
    if (!data.email.match(/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/)) {
      // If we flag this, the resulting hook action will not fire.
      data._error = true;

      // Serve a custom error is provided, else show a default one.
      this.emailError = data.customError || "You didn't enter a valid email, please correct it.";
    }
  }),
  clearError() {
    this.emailError = "";
  }
});

export default HenceDemo;
