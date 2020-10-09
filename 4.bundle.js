(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{78:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(21);n(74);var i=n(1),o=n(22),a=n(28),s=n(27);function c(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var u,p,f,l=c(r),g=((u={})["trace started"]="Trace {$traceName} was started before.",u["trace stopped"]="Trace {$traceName} is not running.",u["nonpositive trace startTime"]="Trace {$traceName} startTime should be positive.",u["nonpositive trace duration"]="Trace {$traceName} duration should be positive.",u["no window"]="Window is not available.",u["no app id"]="App id is not available.",u["no project id"]="Project id is not available.",u["no api key"]="Api key is not available.",u["invalid cc log"]="Attempted to queue invalid cc event",u["FB not default"]="Performance can only start when Firebase app instance is the default one.",u["RC response not ok"]="RC response is not ok",u["invalid attribute name"]="Attribute name {$attributeName} is invalid.",u["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",u["invalid custom metric name"]="Custom metric name {$customMetricName} is invalid",u["invalid String merger input"]="Input for String merger is invalid, contact support team to resolve.",u),m=new o.ErrorFactory("performance","Performance",g),h=new a.Logger("Performance");h.logLevel=a.LogLevel.INFO;var d,v=function(){function t(t){if(this.window=t,!t)throw m.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return t.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},t.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},t.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},t.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},t.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},t.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},t.prototype.requiredApisAvailable=function(){return fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled?!!o.isIndexedDBAvailable()||(h.info("IndexedDB is not supported by current browswer"),!1):(h.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)},t.prototype.setupObserver=function(t,e){this.PerformanceObserver&&new this.PerformanceObserver((function(t){for(var n=0,r=t.getEntries();n<r.length;n++){var i=r[n];e(i)}})).observe({entryTypes:[t]})},t.getInstance=function(){return void 0===p&&(p=new t(f)),p},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(t,e){var n=t.length-e.length;if(n<0||n>1)throw m.create("invalid String merger input");for(var r=[],i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b,y,I=function(){function t(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=_("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=_("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return t.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!t)throw m.create("no app id");return t},t.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!t)throw m.create("no project id");return t},t.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!t)throw m.create("no api key");return t},t.prototype.getFlTransportFullUrl=function(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)},t.getInstance=function(){return void 0===d&&(d=new t),d},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return b}!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"}(y||(y={}));var E=["firebase_","google_","ga_"],w=new RegExp("^[a-zA-Z]\\w*$");function A(){switch(v.getInstance().document.visibilityState){case"visible":return y.VISIBLE;case"hidden":return y.HIDDEN;default:return y.UNKNOWN}}function S(){var t=v.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var M=!0;function N(t){var e=function(){var t=v.getInstance().localStorage;if(!t)return;var e=t.getItem("@firebase/performance/configexpire");if(!(e&&(n=e,Number(n)>Date.now())))return;var n;var r=t.getItem("@firebase/performance/config");if(!r)return;try{return JSON.parse(r)}catch(t){return}}();return e?(k(e),Promise.resolve()):function(t){return(e=I.getInstance().installationsService.getToken(),e.then((function(t){})),e).then((function(e){var n="https://firebaseremoteconfig.googleapis.com/v1/projects/"+I.getInstance().getProjectId()+"/namespaces/fireperf:fetch?key="+I.getInstance().getApiKey(),r=new Request(n,{method:"POST",headers:{Authorization:"FIREBASE_INSTALLATIONS_AUTH "+e},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:I.getInstance().getAppId(),app_version:"0.4.2",sdk_version:"0.0.1"})});return fetch(r).then((function(t){if(t.ok)return t.json();throw m.create("RC response not ok")}))})).catch((function(){h.info("Could not fetch config, will use default configs")}));var e;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t).then(k).then((function(t){return function(t){var e=v.getInstance().localStorage;if(!t||!e)return;e.setItem("@firebase/performance/config",JSON.stringify(t)),e.setItem("@firebase/performance/configexpire",String(Date.now()+60*I.getInstance().configTimeToLive*60*1e3))}(t)}),(function(){}))}function k(t){if(!t)return t;var e=I.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=M,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(e.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=R(e.tracesSamplingRate),e.logNetworkAfterSampling=R(e.networkRequestsSamplingRate),t}function R(t){return Math.random()<=t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O,U=1;function P(){var t;return U=2,O=O||(t=v.getInstance().document,new Promise((function(e){if(t&&"complete"!==t.readyState){var n=function(){"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()}))).then((function(){return(t=I.getInstance().installationsService.getId()).then((function(t){b=t})),t;var t})).then((function(t){return N(t)})).then((function(){return B()}),(function(){return B()}))}function B(){U=3}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,C=3,D=[],L=!1;function j(t){setTimeout((function(){if(0!==C)return D.length?void function(){var t=i.__spreadArrays(D);D=[];var e=t.map((function(t){return{source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)}}));(function(t,e){return function(t){var e=I.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}(t).then((function(t){return t.ok||h.info("Call to Firebase backend failed."),t.json()})).then((function(t){var n=Number(t.nextRequestWaitMillis),r=1e4;isNaN(n)||(r=Math.max(n,r));var o=t.logResponseDetails;Array.isArray(o)&&o.length>0&&"RETRY_REQUEST_LATER"===o[0].responseAction&&(D=i.__spreadArrays(e,D),h.info("Retry transport request later.")),C=3,j(r)}))})({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:I.getInstance().logSource,log_event:e},t).catch((function(){D=i.__spreadArrays(t,D),C--,h.info("Tries left: "+C+"."),j(1e4)}))}():j(1e4)}),t)}function q(t){if(!t.eventTime||!t.message)throw m.create("invalid cc log");D=i.__spreadArrays(D,[t])}function x(t,e){F||(F=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=t.apply(void 0,e);q({message:r,eventTime:Date.now()})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(V)),F(t,e)}function W(t){var e=I.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&v.getInstance().requiredApisAvailable()&&(t.isAuto&&A()!==y.VISIBLE||(3===U?K(t):P().then((function(){return K(t)}),(function(){return K(t)}))))}function K(t){if(T()){var e=I.getInstance();e.loggingEnabled&&e.logTraceAfterSampling&&setTimeout((function(){return x(t,1)}),0)}}function V(t,e){return 0===e?(r={url:(n=t).url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},i={application_info:J(),network_request_metric:r},JSON.stringify(i)):function(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);var n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);var r={application_info:J(),trace_metric:e};return JSON.stringify(r)}(t);var n,r,i}function J(){return{google_app_id:I.getInstance().getAppId(),app_instance_id:T(),web_app_info:{sdk_version:"0.4.2",page_url:v.getInstance().getUrl(),service_worker_status:(t=v.getInstance().navigator,"serviceWorker"in t?t.serviceWorker.controller?2:3:1),visibility_state:A(),effective_connection_type:S()},application_process_state:0};var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $=["_fp","_fcp","_fid"];
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var z=function(){function t(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=v.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark="FB-PERF-TRACE-START-"+this.randomId+"-"+this.name,this.traceStopMark="FB-PERF-TRACE-STOP-"+this.randomId+"-"+this.name,this.traceMeasure=n||"FB-PERF-TRACE-MEASURE-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return t.prototype.start=function(){if(1!==this.state)throw m.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2},t.prototype.stop=function(){if(2!==this.state)throw m.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),W(this)},t.prototype.record=function(t,e,n){if(t<=0)throw m.create("nonpositive trace startTime",{traceName:this.name});if(e<=0)throw m.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=i.__assign({},n.attributes)),n&&n.metrics)for(var r=0,o=Object.keys(n.metrics);r<o.length;r++){var a=o[r];isNaN(Number(n.metrics[a]))||(this.counters[a]=Number(Math.floor(n.metrics[a])))}W(this)},t.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)},t.prototype.putMetric=function(t,e){if(!function(t,e){return!(0===t.length||t.length>100)&&(e&&e.startsWith("_wt_")&&$.indexOf(t)>-1||!t.startsWith("_"))}(t,this.name))throw m.create("invalid custom metric name",{customMetricName:t});var n,r;this.counters[t]=(n=e,(r=Math.floor(n))<n&&h.info("Metric value should be an Integer, setting the value as : "+r+"."),r)},t.prototype.getMetric=function(t){return this.counters[t]||0},t.prototype.putAttribute=function(t,e){var n=function(t){return!(0===t.length||t.length>40)&&(!E.some((function(e){return t.startsWith(e)}))&&!!t.match(w))}(t),r=function(t){return 0!==t.length&&t.length<=100}(e);if(n&&r)this.customAttributes[t]=e;else{if(!n)throw m.create("invalid attribute name",{attributeName:t});if(!r)throw m.create("invalid attribute value",{attributeValue:e})}},t.prototype.getAttribute=function(t){return this.customAttributes[t]},t.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},t.prototype.getAttributes=function(){return i.__assign({},this.customAttributes)},t.prototype.setStartTime=function(t){this.startTimeUs=t},t.prototype.setDuration=function(t){this.durationUs=t},t.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},t.createOobTrace=function(e,n,r){var i=v.getInstance().getUrl();if(i){var o=new t("_wt_"+i,!0),a=Math.floor(1e3*v.getInstance().getTimeOrigin());o.setStartTime(a),e&&e[0]&&(o.setDuration(Math.floor(1e3*e[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));if(n){var s=n.find((function(t){return"first-paint"===t.name}));s&&s.startTime&&o.putMetric("_fp",Math.floor(1e3*s.startTime));var c=n.find((function(t){return"first-contentful-paint"===t.name}));c&&c.startTime&&o.putMetric("_fcp",Math.floor(1e3*c.startTime)),r&&o.putMetric("_fid",Math.floor(1e3*r))}W(o)}},t.createUserTimingTrace=function(e){W(new t(e,!1,e))},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){var e=t;if(e&&void 0!==e.responseStart){var n=v.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),i=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,o=Math.floor(1e3*(e.responseEnd-e.startTime));!function(t){var e=I.getInstance();if(e.instrumentationEnabled){var n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout((function(){return x(t,0)}),0)}}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(){T()&&(setTimeout((function(){return function(){var t=v.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint");if(t.onFirstInputDelay){var r=setTimeout((function(){z.createOobTrace(e,n),r=void 0}),5e3);t.onFirstInputDelay((function(t){r&&(clearTimeout(r),z.createOobTrace(e,n,t))}))}else z.createOobTrace(e,n)}()}),0),setTimeout((function(){return function(){for(var t=v.getInstance(),e=t.getEntriesByType("resource"),n=0,r=e;n<r.length;n++){H(r[n])}t.setupObserver("resource",H)}()}),0),setTimeout((function(){return function(){for(var t=v.getInstance(),e=t.getEntriesByType("measure"),n=0,r=e;n<r.length;n++){Q(r[n])}t.setupObserver("measure",Q)}()}),0))}function Q(t){var e=t.name;"FB-PERF-TRACE-MEASURE"!==e.substring(0,"FB-PERF-TRACE-MEASURE".length)&&z.createUserTimingTrace(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X=function(){function t(t){this.app=t,v.getInstance().requiredApisAvailable()&&o.validateIndexedDBOpenable().then((function(t){t&&(L||(j(5500),L=!0),P().then(G,G))})).catch((function(t){h.info("Environment doesn't support IndexedDB: "+t)}))}return t.prototype.trace=function(t){return new z(t)},Object.defineProperty(t.prototype,"instrumentationEnabled",{get:function(){return I.getInstance().instrumentationEnabled},set:function(t){I.getInstance().instrumentationEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dataCollectionEnabled",{get:function(){return I.getInstance().dataCollectionEnabled},set:function(t){I.getInstance().dataCollectionEnabled=t},enumerable:!1,configurable:!0}),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){var e=function(t,e){if("[DEFAULT]"!==t.name)throw m.create("FB not default");if("undefined"==typeof window)throw m.create("no window");return function(t){f=t}(window),I.getInstance().firebaseAppInstance=t,I.getInstance().installationsService=e,new X(t)};t.INTERNAL.registerComponent(new s.Component("performance",(function(t){var n=t.getProvider("app").getImmediate(),r=t.getProvider("installations").getImmediate();return e(n,r)}),"PUBLIC")),t.registerVersion("@firebase/performance","0.4.2")}Y(l.default),e.registerPerformance=Y},82:function(t,e,n){"use strict";n.r(e);n(78)}}]);