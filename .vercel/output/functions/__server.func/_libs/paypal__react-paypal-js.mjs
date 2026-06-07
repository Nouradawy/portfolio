import { r as reactExports, R as React } from "./react.mjs";
var SCRIPT_LOADING_STATE;
(function(SCRIPT_LOADING_STATE2) {
  SCRIPT_LOADING_STATE2["INITIAL"] = "initial";
  SCRIPT_LOADING_STATE2["PENDING"] = "pending";
  SCRIPT_LOADING_STATE2["REJECTED"] = "rejected";
  SCRIPT_LOADING_STATE2["RESOLVED"] = "resolved";
})(SCRIPT_LOADING_STATE || (SCRIPT_LOADING_STATE = {}));
var DISPATCH_ACTION;
(function(DISPATCH_ACTION2) {
  DISPATCH_ACTION2["LOADING_STATUS"] = "setLoadingStatus";
  DISPATCH_ACTION2["RESET_OPTIONS"] = "resetOptions";
  DISPATCH_ACTION2["SET_BRAINTREE_INSTANCE"] = "braintreeInstance";
})(DISPATCH_ACTION || (DISPATCH_ACTION = {}));
var PAYPAL_HOSTED_FIELDS_TYPES;
(function(PAYPAL_HOSTED_FIELDS_TYPES2) {
  PAYPAL_HOSTED_FIELDS_TYPES2["NUMBER"] = "number";
  PAYPAL_HOSTED_FIELDS_TYPES2["CVV"] = "cvv";
  PAYPAL_HOSTED_FIELDS_TYPES2["EXPIRATION_DATE"] = "expirationDate";
  PAYPAL_HOSTED_FIELDS_TYPES2["EXPIRATION_MONTH"] = "expirationMonth";
  PAYPAL_HOSTED_FIELDS_TYPES2["EXPIRATION_YEAR"] = "expirationYear";
  PAYPAL_HOSTED_FIELDS_TYPES2["POSTAL_CODE"] = "postalCode";
})(PAYPAL_HOSTED_FIELDS_TYPES || (PAYPAL_HOSTED_FIELDS_TYPES = {}));
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest$1(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var SCRIPT_ID = "data-react-paypal-script-id";
var SDK_SETTINGS = {
  DATA_JS_SDK_LIBRARY: "dataJsSdkLibrary",
  DATA_LIBRARY_VALUE: "react-paypal-js",
  DATA_NAMESPACE: "dataNamespace",
  DATA_SDK_INTEGRATION_SOURCE: "dataSdkIntegrationSource"
};
var LOAD_SCRIPT_ERROR = "Failed to load the PayPal JS SDK script.";
var DEFAULT_PAYPAL_NAMESPACE = "paypal";
var SCRIPT_PROVIDER_REDUCER_ERROR = "usePayPalScriptReducer must be used within a PayPalScriptProvider";
function getPayPalWindowNamespace$1(namespace) {
  if (namespace === void 0) {
    namespace = DEFAULT_PAYPAL_NAMESPACE;
  }
  return window[namespace];
}
function hashStr(str) {
  var hash = "";
  for (var i = 0; i < str.length; i++) {
    var total = str[i].charCodeAt(0) * i;
    if (str[i + 1]) {
      total += str[i + 1].charCodeAt(0) * (i - 1);
    }
    hash += String.fromCharCode(97 + Math.abs(total) % 26);
  }
  return hash;
}
function generateErrorMessage(_a) {
  var reactComponentName = _a.reactComponentName, sdkComponentKey = _a.sdkComponentKey, _b = _a.sdkRequestedComponents, sdkRequestedComponents = _b === void 0 ? "" : _b, _c = _a.sdkDataNamespace, sdkDataNamespace = _c === void 0 ? DEFAULT_PAYPAL_NAMESPACE : _c;
  var requiredOptionCapitalized = sdkComponentKey.charAt(0).toUpperCase().concat(sdkComponentKey.substring(1));
  var errorMessage = "Unable to render <".concat(reactComponentName, " /> because window.").concat(sdkDataNamespace, ".").concat(requiredOptionCapitalized, " is undefined.");
  var requestedComponents = typeof sdkRequestedComponents === "string" ? sdkRequestedComponents : sdkRequestedComponents.join(",");
  if (!requestedComponents.includes(sdkComponentKey)) {
    var expectedComponents = [requestedComponents, sdkComponentKey].filter(Boolean).join();
    errorMessage += "\nTo fix the issue, add '".concat(sdkComponentKey, "' to the list of components passed to the parent PayPalScriptProvider:") + "\n`<PayPalScriptProvider options={{ components: '".concat(expectedComponents, "'}}>`.");
  }
  return errorMessage;
}
function getScriptID(options) {
  var _a = options, _b = SCRIPT_ID;
  _a[_b];
  var paypalScriptOptions = __rest$1(_a, [_b + ""]);
  return "react-paypal-js-".concat(hashStr(JSON.stringify(paypalScriptOptions)));
}
function destroySDKScript(reactPayPalScriptID) {
  var scriptNode = self.document.querySelector("script[".concat(SCRIPT_ID, '="').concat(reactPayPalScriptID, '"]'));
  if (scriptNode === null || scriptNode === void 0 ? void 0 : scriptNode.parentNode) {
    scriptNode.parentNode.removeChild(scriptNode);
  }
}
function scriptReducer(state, action) {
  var _a, _b;
  switch (action.type) {
    case DISPATCH_ACTION.LOADING_STATUS:
      if (typeof action.value === "object") {
        return __assign(__assign({}, state), {
          loadingStatus: action.value.state,
          loadingStatusErrorMessage: action.value.message
        });
      }
      return __assign(__assign({}, state), {
        loadingStatus: action.value
      });
    case DISPATCH_ACTION.RESET_OPTIONS:
      destroySDKScript(state.options[SCRIPT_ID]);
      return __assign(__assign({}, state), {
        loadingStatus: SCRIPT_LOADING_STATE.PENDING,
        options: __assign(__assign((_a = {}, _a[SDK_SETTINGS.DATA_SDK_INTEGRATION_SOURCE] = SDK_SETTINGS.DATA_LIBRARY_VALUE, _a), action.value), (_b = {}, _b[SCRIPT_ID] = "".concat(getScriptID(action.value)), _b))
      });
    case DISPATCH_ACTION.SET_BRAINTREE_INSTANCE:
      return __assign(__assign({}, state), {
        braintreePayPalCheckoutInstance: action.value
      });
    default: {
      return state;
    }
  }
}
var ScriptContext = reactExports.createContext(null);
function validateReducer(scriptContext) {
  if (typeof (scriptContext === null || scriptContext === void 0 ? void 0 : scriptContext.dispatch) === "function" && scriptContext.dispatch.length !== 0) {
    return scriptContext;
  }
  throw new Error(SCRIPT_PROVIDER_REDUCER_ERROR);
}
function usePayPalScriptReducer() {
  var scriptContext = validateReducer(reactExports.useContext(ScriptContext));
  var derivedStatusContext = __assign(__assign({}, scriptContext), {
    isInitial: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.INITIAL,
    isPending: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.PENDING,
    isResolved: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.RESOLVED,
    isRejected: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.REJECTED
  });
  return [derivedStatusContext, scriptContext.dispatch];
}
reactExports.createContext({});
function useProxyProps(props) {
  var proxyRef = reactExports.useRef(new Proxy({}, {
    get: function(target, prop, receiver) {
      if (typeof target[prop] === "function") {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return target[prop].apply(target, args);
        };
      }
      return Reflect.get(target, prop, receiver);
    }
  }));
  proxyRef.current = Object.assign(proxyRef.current, props);
  return proxyRef.current;
}
var PayPalButtonsErrorBoundary = (
  /** @class */
  (function(_super) {
    __extends(PayPalButtonsErrorBoundary2, _super);
    function PayPalButtonsErrorBoundary2(props) {
      var _this = _super.call(this, props) || this;
      _this.state = {
        hasError: false
      };
      return _this;
    }
    PayPalButtonsErrorBoundary2.getDerivedStateFromError = function() {
      return {
        hasError: true
      };
    };
    PayPalButtonsErrorBoundary2.prototype.componentDidCatch = function(error, errorInfo) {
      console.error("Error in PayPalButtons component:", error, errorInfo);
      if (typeof this.props.onError === "function") {
        this.props.onError({
          message: error.message,
          name: error.name,
          stack: error.stack,
          componentStack: errorInfo.componentStack
        });
      }
    };
    PayPalButtonsErrorBoundary2.prototype.render = function() {
      if (this.state.hasError) {
        return null;
      }
      return this.props.children;
    };
    return PayPalButtonsErrorBoundary2;
  })(reactExports.Component)
);
var PayPalButtonsInner = function(_a) {
  var _b;
  var _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, children = _a.children, _e = _a.forceReRender, forceReRender = _e === void 0 ? [] : _e, buttonProps = __rest$1(_a, ["className", "disabled", "children", "forceReRender"]);
  var isDisabledStyle = disabled ? {
    opacity: 0.38
  } : {};
  var classNames = "".concat(className, " ").concat(disabled ? "paypal-buttons-disabled" : "").trim();
  var buttonsContainerRef = reactExports.useRef(null);
  var buttons = reactExports.useRef(null);
  var proxyProps = useProxyProps(buttonProps);
  var _f = usePayPalScriptReducer()[0], isResolved = _f.isResolved, options = _f.options;
  var _g = reactExports.useState(null), initActions = _g[0], setInitActions = _g[1];
  var _h = reactExports.useState(true), isEligible = _h[0], setIsEligible = _h[1];
  var _j = reactExports.useState(null), setErrorState = _j[1];
  function closeButtonsComponent() {
    if (buttons.current !== null) {
      buttons.current.close().catch(function() {
      });
    }
  }
  if ((_b = buttons.current) === null || _b === void 0 ? void 0 : _b.updateProps) {
    buttons.current.updateProps({
      message: buttonProps.message
    });
  }
  reactExports.useEffect(function() {
    if (isResolved === false) {
      return closeButtonsComponent;
    }
    var paypalWindowNamespace = getPayPalWindowNamespace$1(options.dataNamespace);
    if (paypalWindowNamespace === void 0 || paypalWindowNamespace.Buttons === void 0) {
      setErrorState(function() {
        throw new Error(generateErrorMessage({
          reactComponentName: PayPalButtons.displayName,
          sdkComponentKey: "buttons",
          sdkRequestedComponents: options.components,
          sdkDataNamespace: options[SDK_SETTINGS.DATA_NAMESPACE]
        }));
      });
      return closeButtonsComponent;
    }
    var decoratedOnInit = function(data, actions) {
      setInitActions(actions);
      if (typeof buttonProps.onInit === "function") {
        buttonProps.onInit(data, actions);
      }
    };
    try {
      buttons.current = paypalWindowNamespace.Buttons(__assign(__assign({}, proxyProps), {
        onInit: decoratedOnInit
      }));
    } catch (err) {
      return setErrorState(function() {
        throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(err));
      });
    }
    if (buttons.current.isEligible() === false) {
      setIsEligible(false);
      return closeButtonsComponent;
    }
    if (!buttonsContainerRef.current) {
      return closeButtonsComponent;
    }
    buttons.current.render(buttonsContainerRef.current).catch(function(err) {
      if (buttonsContainerRef.current === null || buttonsContainerRef.current.children.length === 0) {
        return;
      }
      setErrorState(function() {
        throw new Error("Failed to render <PayPalButtons /> component. ".concat(err));
      });
    });
    return closeButtonsComponent;
  }, __spreadArray(__spreadArray([isResolved], forceReRender, true), [buttonProps.fundingSource], false));
  reactExports.useEffect(function() {
    if (initActions === null) {
      return;
    }
    if (disabled === true) {
      initActions.disable().catch(function() {
      });
    } else {
      initActions.enable().catch(function() {
      });
    }
  }, [disabled, initActions]);
  return React.createElement(React.Fragment, null, isEligible ? React.createElement("div", {
    ref: buttonsContainerRef,
    style: isDisabledStyle,
    className: classNames
  }) : children);
};
PayPalButtonsInner.displayName = "PayPalButtons";
var PayPalButtons = function(props) {
  return React.createElement(PayPalButtonsErrorBoundary, {
    onError: props.onError
  }, React.createElement(PayPalButtonsInner, __assign({}, props)));
};
PayPalButtons.displayName = "PayPalButtons";
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function findScript(url, attributes) {
  var currentScript = document.querySelector('script[src="'.concat(url, '"]'));
  if (currentScript === null) return null;
  var nextScript = createScriptElement(url, attributes);
  var currentScriptClone = currentScript.cloneNode();
  delete currentScriptClone.dataset.uidAuto;
  if (Object.keys(currentScriptClone.dataset).length !== Object.keys(nextScript.dataset).length) {
    return null;
  }
  var isExactMatch = true;
  Object.keys(currentScriptClone.dataset).forEach(function(key) {
    if (currentScriptClone.dataset[key] !== nextScript.dataset[key]) {
      isExactMatch = false;
    }
  });
  return isExactMatch ? currentScript : null;
}
function insertScriptElement(_a) {
  var url = _a.url, attributes = _a.attributes, onSuccess = _a.onSuccess, onError = _a.onError;
  var newScript = createScriptElement(url, attributes);
  newScript.onerror = onError;
  newScript.onload = onSuccess;
  document.head.insertBefore(newScript, document.head.firstElementChild);
}
function processOptions(options) {
  var customSdkBaseUrl = Object.prototype.hasOwnProperty.call(options, "sdkBaseUrl") ? options.sdkBaseUrl : void 0;
  var environment = options.environment;
  options.sdkBaseUrl;
  var rest = __rest(options, ["environment", "sdkBaseUrl"]);
  var sdkBaseUrl = customSdkBaseUrl || processSdkBaseUrl(environment);
  var optionsWithStringIndex = rest;
  var _a = Object.keys(optionsWithStringIndex).filter(function(key) {
    return typeof optionsWithStringIndex[key] !== "undefined" && optionsWithStringIndex[key] !== null && optionsWithStringIndex[key] !== "";
  }).reduce(function(accumulator, key) {
    var value = optionsWithStringIndex[key].toString();
    key = camelCaseToKebabCase(key);
    if (key.substring(0, 4) === "data" || key === "crossorigin") {
      accumulator.attributes[key] = value;
    } else {
      accumulator.queryParams[key] = value;
    }
    return accumulator;
  }, {
    queryParams: {},
    attributes: {}
  }), queryParams = _a.queryParams, attributes = _a.attributes;
  if (queryParams["merchant-id"] && queryParams["merchant-id"].indexOf(",") !== -1) {
    attributes["data-merchant-id"] = queryParams["merchant-id"];
    queryParams["merchant-id"] = "*";
  }
  return {
    url: "".concat(sdkBaseUrl, "?").concat(objectToQueryString(queryParams)),
    attributes
  };
}
function camelCaseToKebabCase(str) {
  var replacer = function(match, indexOfMatch) {
    return (indexOfMatch ? "-" : "") + match.toLowerCase();
  };
  return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, replacer);
}
function objectToQueryString(params) {
  var queryString = "";
  Object.keys(params).forEach(function(key) {
    if (queryString.length !== 0) queryString += "&";
    queryString += key + "=" + params[key];
  });
  return queryString;
}
function processSdkBaseUrl(environment) {
  return environment === "sandbox" ? "https://www.sandbox.paypal.com/sdk/js" : "https://www.paypal.com/sdk/js";
}
function createScriptElement(url, attributes) {
  if (attributes === void 0) {
    attributes = {};
  }
  var newScript = document.createElement("script");
  newScript.src = url;
  Object.keys(attributes).forEach(function(key) {
    newScript.setAttribute(key, attributes[key]);
    if (key === "data-csp-nonce") {
      newScript.setAttribute("nonce", attributes["data-csp-nonce"]);
    }
  });
  return newScript;
}
function loadScript(options, PromisePonyfill) {
  if (PromisePonyfill === void 0) {
    PromisePonyfill = Promise;
  }
  validateArguments(options, PromisePonyfill);
  if (typeof document === "undefined") return PromisePonyfill.resolve(null);
  var _a = processOptions(options), url = _a.url, attributes = _a.attributes;
  var namespace = attributes["data-namespace"] || "paypal";
  var existingWindowNamespace = getPayPalWindowNamespace(namespace);
  if (!attributes["data-js-sdk-library"]) {
    attributes["data-js-sdk-library"] = "paypal-js";
  }
  if (findScript(url, attributes) && existingWindowNamespace) {
    return PromisePonyfill.resolve(existingWindowNamespace);
  }
  return loadCustomScript({
    url,
    attributes
  }, PromisePonyfill).then(function() {
    var newWindowNamespace = getPayPalWindowNamespace(namespace);
    if (newWindowNamespace) {
      return newWindowNamespace;
    }
    throw new Error("The window.".concat(namespace, " global variable is not available."));
  });
}
function loadCustomScript(options, PromisePonyfill) {
  if (PromisePonyfill === void 0) {
    PromisePonyfill = Promise;
  }
  validateArguments(options, PromisePonyfill);
  var url = options.url, attributes = options.attributes;
  if (typeof url !== "string" || url.length === 0) {
    throw new Error("Invalid url.");
  }
  if (typeof attributes !== "undefined" && typeof attributes !== "object") {
    throw new Error("Expected attributes to be an object.");
  }
  return new PromisePonyfill(function(resolve, reject) {
    if (typeof document === "undefined") return resolve();
    insertScriptElement({
      url,
      attributes,
      onSuccess: function() {
        return resolve();
      },
      onError: function() {
        var defaultError = new Error('The script "'.concat(url, '" failed to load. Check the HTTP status code and response body in DevTools to learn more.'));
        return reject(defaultError);
      }
    });
  });
}
function getPayPalWindowNamespace(namespace) {
  return window[namespace];
}
function validateArguments(options, PromisePonyfill) {
  if (typeof options !== "object" || options === null) {
    throw new Error("Expected an options object.");
  }
  var environment = options.environment;
  if (environment && environment !== "production" && environment !== "sandbox") {
    throw new Error('The `environment` option must be either "production" or "sandbox".');
  }
  if (typeof PromisePonyfill !== "undefined" && typeof PromisePonyfill !== "function") {
    throw new Error("Expected PromisePonyfill to be a function.");
  }
}
var PayPalScriptProvider = function(_a) {
  var _b;
  var _c = _a.options, options = _c === void 0 ? {
    clientId: "test"
  } : _c, children = _a.children, _d = _a.deferLoading, deferLoading = _d === void 0 ? false : _d;
  var _e = reactExports.useReducer(scriptReducer, {
    options: __assign(__assign({}, options), (_b = {}, _b[SDK_SETTINGS.DATA_JS_SDK_LIBRARY] = SDK_SETTINGS.DATA_LIBRARY_VALUE, _b[SDK_SETTINGS.DATA_SDK_INTEGRATION_SOURCE] = SDK_SETTINGS.DATA_LIBRARY_VALUE, _b[SCRIPT_ID] = "".concat(getScriptID(options)), _b)),
    loadingStatus: deferLoading ? SCRIPT_LOADING_STATE.INITIAL : SCRIPT_LOADING_STATE.PENDING
  }), state = _e[0], dispatch = _e[1];
  reactExports.useEffect(function() {
    if (deferLoading === false && state.loadingStatus === SCRIPT_LOADING_STATE.INITIAL) {
      return dispatch({
        type: DISPATCH_ACTION.LOADING_STATUS,
        value: SCRIPT_LOADING_STATE.PENDING
      });
    }
    if (state.loadingStatus !== SCRIPT_LOADING_STATE.PENDING) {
      return;
    }
    var isSubscribed = true;
    loadScript(state.options).then(function() {
      if (isSubscribed) {
        dispatch({
          type: DISPATCH_ACTION.LOADING_STATUS,
          value: SCRIPT_LOADING_STATE.RESOLVED
        });
      }
    }).catch(function(err) {
      console.error("".concat(LOAD_SCRIPT_ERROR, " ").concat(err));
      if (isSubscribed) {
        dispatch({
          type: DISPATCH_ACTION.LOADING_STATUS,
          value: {
            state: SCRIPT_LOADING_STATE.REJECTED,
            message: String(err)
          }
        });
      }
    });
    return function() {
      isSubscribed = false;
    };
  }, [state.options, deferLoading, state.loadingStatus]);
  return React.createElement(ScriptContext.Provider, {
    value: __assign(__assign({}, state), {
      dispatch
    })
  }, children);
};
function ignore() {
  return;
}
reactExports.createContext({
  cardFieldsForm: null,
  fields: {},
  registerField: ignore,
  // implementation is inside hook and passed through the provider
  unregisterField: ignore
  // implementation is inside hook and passed through the provider
});
export {
  PayPalScriptProvider as P,
  PayPalButtons as a
};
