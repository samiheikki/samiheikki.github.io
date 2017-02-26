/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","39dcb509da95d3eb7f2a095a76b4127a"],["img/favicon.ico","0511bb8fc9b2e1293147035b2006c5aa"],["img/icons/icon-144x144.png","5e3d373d493e8b0cb25b4c7ce7cda86d"],["img/icons/icon-192x192.png","9a35aa5a74e20d849fcb918d16b007d2"],["img/icons/icon-48x48.png","0511bb8fc9b2e1293147035b2006c5aa"],["img/icons/icon-512x512.png","2bc90f585c4d3b65ce0ff659aedca25f"],["img/icons/icon-72x72.png","2fc2f6bdf6954b2170960b053672a594"],["img/icons/icon-96x96.png","cde28d7fe173dd3c0961b8bea6130238"],["img/og_image.png","bb29748b0730bfed0d1e95e571c168f7"],["img/open_in_new.svg","a426249f1bd87819ba2c97db61a5cea6"],["img/wave.svg","a3bc9e4dcfeb9f4c6a1b0ac9380fb901"],["index.html","877e77d30ef07ad7edfd2f47574ea2e5"],["manifest.json","a39d6eb63703354587b2d9412d37af91"],["node_modules/abbrev/README.md","96b93093abdfdfef1ef8a3e2d5ca7f71"],["node_modules/abbrev/abbrev.js","295cdcca75c99f4bc11113aca4cc9dac"],["node_modules/abbrev/package.json","872c0ff73a0406fdd5ca4f41e307a652"],["node_modules/align-text/README.md","287156d400786e2c18daed8d86214257"],["node_modules/align-text/index.js","c90afbbae728aeefd3628fe5f9e0779e"],["node_modules/align-text/package.json","ec272ab3abd9037c35126aaedaca00b7"],["node_modules/async/README.md","c0900735f205ab79ef2d35762ee7d55c"],["node_modules/async/component.json","aec01451771f878693dda7bf040642ae"],["node_modules/async/lib/async.js","fe09e04d0bd97bdc821e560491b10231"],["node_modules/async/package.json","2bba010ba4da684f317ad3849e932e76"],["node_modules/balanced-match/LICENSE.md","7fa99ddc3424107350ca6e9a24552085"],["node_modules/balanced-match/README.md","2b81a22fa44f4237c9a42b1cbb260159"],["node_modules/balanced-match/index.js","77122288ffceba0a2f5079eb6b1b31bf"],["node_modules/balanced-match/package.json","ec8507fed318304bca18d9f187f0374f"],["node_modules/brace-expansion/README.md","1edd1c31a0eba1f6df0576b366191a07"],["node_modules/brace-expansion/index.js","ce45252e95549a88db7c1df129c91271"],["node_modules/brace-expansion/package.json","2a85348666385ce22dff2764cc915388"],["node_modules/camelcase/index.js","a54880edac7c4a1c5468f9932d18ed2d"],["node_modules/camelcase/package.json","789278757de650f7343a2ecc3656a184"],["node_modules/camelcase/readme.md","df8609d24a87a1e2f367510d9cb57383"],["node_modules/center-align/README.md","4ebb49c811e34cff3af41de81362e8eb"],["node_modules/center-align/index.js","8653353875e2a26ba0282e11650288ea"],["node_modules/center-align/package.json","b372cb91f8c676beb9dd6d2d584a1195"],["node_modules/center-align/utils.js","364cc21e2594d2cc085bd2c6e37aea18"],["node_modules/cliui/LICENSE.txt","83623193d3051ca8068a89a455c699ca"],["node_modules/cliui/README.md","678fa0144b90610cd0b91f3991142578"],["node_modules/cliui/index.js","15312c831b943804b6034b1427a5e76a"],["node_modules/cliui/package.json","fc7568b01e26221160b86cbb18c63057"],["node_modules/cliui/test/cliui.js","443ddffc7da0d7c0539c1d21997e84ec"],["node_modules/commander/History.md","02521eb17b21843097e09703b6b46473"],["node_modules/commander/Readme.md","ec144a1b476bcccdade49c2d2ee10c08"],["node_modules/commander/index.js","36cd7a486d3e9abc4f58b9264b4be220"],["node_modules/commander/package.json","d274e151bc80c2b0fb9d3685217a85b7"],["node_modules/concat-map/README.markdown","3de808d1c878e1d12f12c8d849710db2"],["node_modules/concat-map/example/map.js","42b2341e75e2e29012793c31222c2783"],["node_modules/concat-map/index.js","8ef754ba23fdd37b3e8a1c52739ace80"],["node_modules/concat-map/package.json","29c98319aec036997376b532ba302672"],["node_modules/concat-map/test/map.js","a8e1d80e4629945216de220e4b580cf5"],["node_modules/css-resolve-import/index.js","92e667ea1d15bae21350e735199b6c82"],["node_modules/css-resolve-import/package.json","79f3709919ccb7d79a48c469e779153c"],["node_modules/css-resolve-import/src/parse.js","36250e29e22f858434e1f2c1898f1aa3"],["node_modules/css-resolve-import/src/strip-utf8-byte-order.js","7354ce727ddb87a3aff8ddce9dbc8225"],["node_modules/decamelize/index.js","983084e6146528df1707b0aa3ff6cd9a"],["node_modules/decamelize/package.json","8c889bf702ae711a864fc4381062252b"],["node_modules/decamelize/readme.md","71b1684a019e2f3d5cc76429939db237"],["node_modules/fmerge/fmerge.min.js","fb170ed634c71fed7befec06c6aaefba"],["node_modules/fmerge/index.js","831ef473c2223cbaebc753a1d8d83c3c"],["node_modules/fmerge/install.js","5a4b0045380000d0b19985e6c89a764b"],["node_modules/fmerge/package.json","e5e84bbc6acedb9bf970e3f37d4e3d70"],["node_modules/fmerge/readme.md","e13bfd6cfeb65e9e1b429b6ff16cf600"],["node_modules/fs.realpath/README.md","b0e79f63ca0f7b8904b2b0e01b8aa1ed"],["node_modules/fs.realpath/index.js","81443ae283d9031000862ce501c9f964"],["node_modules/fs.realpath/old.js","8c3d2bd3edf5d8918b7cbf3c93b3ba32"],["node_modules/fs.realpath/package.json","92b9f68559f2c5198882349af333405b"],["node_modules/glob/README.md","ebb6bd70ed9742c82792656adb349111"],["node_modules/glob/changelog.md","00f1acff927a7059ab085d87c72bbf43"],["node_modules/glob/common.js","0041795c4700b9e1c1cd76729517f08b"],["node_modules/glob/glob.js","c89733e498a13b6b3b4b29d82467efab"],["node_modules/glob/package.json","07ef48d9bd2f0044225bba8669ca00aa"],["node_modules/glob/sync.js","c29ff74e143a933770c75a66998fbeeb"],["node_modules/graceful-readlink/README.md","b9904d50144e42cef045e8b61edda5ca"],["node_modules/graceful-readlink/index.js","41da23167bf209c4e54cad707466a1ac"],["node_modules/graceful-readlink/package.json","38b54475b8a98abdea308216f040e8c5"],["node_modules/hogan.js/README.md","b387bdf63851496391984c09d9fbedee"],["node_modules/hogan.js/build/gh-pages/1.0.0/hogan.js","0672f2e3f619375f299cc1cf4b9b018d"],["node_modules/hogan.js/build/gh-pages/1.0.0/hogan.min.js","22666f0a71d4ffd2460114172558d2f2"],["node_modules/hogan.js/build/gh-pages/builds/1.0.0/hogan.js","0672f2e3f619375f299cc1cf4b9b018d"],["node_modules/hogan.js/build/gh-pages/builds/1.0.0/hogan.min.js","22666f0a71d4ffd2460114172558d2f2"],["node_modules/hogan.js/build/gh-pages/builds/1.0.3/hogan.js","61746a86c6369591861ef9c9013fca87"],["node_modules/hogan.js/build/gh-pages/builds/1.0.3/hogan.min.js","478f574b8438d12ca33e030811fbb57e"],["node_modules/hogan.js/build/gh-pages/builds/1.0.4/hogan-1.0.4.amd.js","e1da9e241c832242ed9771cae6ae4700"],["node_modules/hogan.js/build/gh-pages/builds/1.0.4/hogan-1.0.4.common.js","12c60753b68169646bad22b7271f63ca"],["node_modules/hogan.js/build/gh-pages/builds/1.0.4/hogan-1.0.4.js","f2ef5bbbd7da451fbcae183efa03f9df"],["node_modules/hogan.js/build/gh-pages/builds/1.0.4/hogan-1.0.4.min.amd.js","421a6d435d27e7240a0bf5035f86db55"],["node_modules/hogan.js/build/gh-pages/builds/1.0.4/hogan-1.0.4.min.common.js","c2175a38c90a7c4ce0d51167251bd4db"],["node_modules/hogan.js/build/gh-pages/builds/1.0.4/hogan-1.0.4.min.js","534f30f34eb90fd339928078273512b5"],["node_modules/hogan.js/build/gh-pages/builds/1.0.4/hogan-1.0.4.min.mustache.js","e9ece58599bcd3aee6d1cbc4dd3030b2"],["node_modules/hogan.js/build/gh-pages/builds/1.0.4/hogan-1.0.4.mustache.js","3a953cc26b627d3e19e2b7fac2bc25a8"],["node_modules/hogan.js/build/gh-pages/builds/1.0.4/template-1.0.4.js","1300a58ba45e06bcb4ef4365781ad308"],["node_modules/hogan.js/build/gh-pages/builds/1.0.4/template-1.0.4.min.js","4f07582fe0a7b527c25a13d52b46b9e2"],["node_modules/hogan.js/build/gh-pages/builds/1.0.5/hogan-1.0.5.amd.js","70c5dec3d74b890388d44bc2e1d25029"],["node_modules/hogan.js/build/gh-pages/builds/1.0.5/hogan-1.0.5.common.js","83fa4c8e5c97ef7504d79da371a2f5cd"],["node_modules/hogan.js/build/gh-pages/builds/1.0.5/hogan-1.0.5.js","524728f4e6f7917d81918bf8155106ba"],["node_modules/hogan.js/build/gh-pages/builds/1.0.5/hogan-1.0.5.min.amd.js","6ac106eb40ccc38744f7d8b5fa53b4b1"],["node_modules/hogan.js/build/gh-pages/builds/1.0.5/hogan-1.0.5.min.common.js","f30dbfff54d9ef641b40075504c430f7"],["node_modules/hogan.js/build/gh-pages/builds/1.0.5/hogan-1.0.5.min.js","4925466c99e485aca1f9edd87c9fd698"],["node_modules/hogan.js/build/gh-pages/builds/1.0.5/hogan-1.0.5.min.mustache.js","db5eb81061a0aa714f049097f785e7fa"],["node_modules/hogan.js/build/gh-pages/builds/1.0.5/hogan-1.0.5.mustache.js","e01f45ead9f0565b98d3decd70cb04fb"],["node_modules/hogan.js/build/gh-pages/builds/1.0.5/template-1.0.5.js","085b283ca6b702861043769b051c226d"],["node_modules/hogan.js/build/gh-pages/builds/1.0.5/template-1.0.5.min.js","50df260124603ce0f3bea2ba24ec4993"],["node_modules/hogan.js/build/gh-pages/builds/2.0.0/hogan-2.0.0.amd.js","ebf5ccb48289a4edcce8a8526c06715e"],["node_modules/hogan.js/build/gh-pages/builds/2.0.0/hogan-2.0.0.common.js","80ae3b5bd004d5169a6e038837a3ef3d"],["node_modules/hogan.js/build/gh-pages/builds/2.0.0/hogan-2.0.0.js","949ad653f92b837524b840479840129a"],["node_modules/hogan.js/build/gh-pages/builds/2.0.0/hogan-2.0.0.min.amd.js","97f098b375f172f952861c00bcc0b3b4"],["node_modules/hogan.js/build/gh-pages/builds/2.0.0/hogan-2.0.0.min.common.js","3c1fe20fce70888dd64b521da239b952"],["node_modules/hogan.js/build/gh-pages/builds/2.0.0/hogan-2.0.0.min.js","0a7ee151a54e80bb14b55daaa873fc1f"],["node_modules/hogan.js/build/gh-pages/builds/2.0.0/hogan-2.0.0.min.mustache.js","bb033938442f38a2614264e058028e9f"],["node_modules/hogan.js/build/gh-pages/builds/2.0.0/hogan-2.0.0.mustache.js","6d1241442e8a0bce032374e4621ed4b0"],["node_modules/hogan.js/build/gh-pages/builds/2.0.0/template-2.0.0.js","ebd1e31b808cf3ef3ff1228461b373ab"],["node_modules/hogan.js/build/gh-pages/builds/2.0.0/template-2.0.0.min.js","b0c1b067dc5b6d57b092642f252ad21a"],["node_modules/hogan.js/build/gh-pages/favicon.ico","971a83d0165f077826d5bb64bcb635b5"],["node_modules/hogan.js/build/gh-pages/images/logo.png","74b3ff3e6913a7a1f55fbb8f130cc89d"],["node_modules/hogan.js/build/gh-pages/images/noise.png","9b092a24ab3f7f962fb96ed36b769166"],["node_modules/hogan.js/build/gh-pages/images/small-hogan-icon.png","c8afe6516eada18635db1be193b77a81"],["node_modules/hogan.js/build/gh-pages/images/stripes.png","bf660e1d9021f1fb65e4f71536178735"],["node_modules/hogan.js/build/gh-pages/index.html","cfeacf452a47d2c85ee13ca30afe7b62"],["node_modules/hogan.js/build/gh-pages/stylesheets/layout.css","4b2a36044a521d7a664230e0045cd245"],["node_modules/hogan.js/build/gh-pages/stylesheets/skeleton.css","a916e52dd603dc4c8deb1f2264e938d1"],["node_modules/hogan.js/component.json","c2259c64bb28e4af59544023a9bd0e4a"],["node_modules/hogan.js/dist/hogan-3.0.2.amd.js","ebeab4a1bdda5c402997739099f2f142"],["node_modules/hogan.js/dist/hogan-3.0.2.common.js","1837e9195f894583222f0a700f26cf46"],["node_modules/hogan.js/dist/hogan-3.0.2.js","f092b0452bdf5c0e139b8345ca7cbf30"],["node_modules/hogan.js/dist/hogan-3.0.2.min.amd.js","97ef238f0415647eb2c91bcbd8383733"],["node_modules/hogan.js/dist/hogan-3.0.2.min.common.js","0560dd20d463ae8453166e11f5ad5023"],["node_modules/hogan.js/dist/hogan-3.0.2.min.js","9ebb5103b40b35d86d73835cccca641f"],["node_modules/hogan.js/dist/hogan-3.0.2.min.mustache.js","547b0806a4712cb02a7664f63533f740"],["node_modules/hogan.js/dist/hogan-3.0.2.mustache.js","f0dae272de652ffa17412d0c09e22279"],["node_modules/hogan.js/dist/template-3.0.2.js","02d14640a3a44d47ef690e85261be9ce"],["node_modules/hogan.js/dist/template-3.0.2.min.js","b913659cfacab67c36b3348179304d3b"],["node_modules/hogan.js/inheritance.html","a2687e43b6a0a3016dafefa47f91b700"],["node_modules/hogan.js/inheritance.js","56c4c8d203f3ce46d25d4e2e1e6eccb5"],["node_modules/hogan.js/lib/compiler.js","5f136cb93f7c98800607e512294027b1"],["node_modules/hogan.js/lib/hogan.js","49edb75705a78ee5d5d48efe35005ae2"],["node_modules/hogan.js/lib/template.js","02d14640a3a44d47ef690e85261be9ce"],["node_modules/hogan.js/package.json","7a35c2c0abeadaac186a8b82a9d514ee"],["node_modules/hogan.js/test.html","f295f28bcfc2a30a709ab0a8b2ea79d0"],["node_modules/hogan.js/test.js","24e0688b2769c472767e52fb2a292178"],["node_modules/hogan.js/test.mustache","623c2ec3a8cee001107b4a1af7792643"],["node_modules/hogan.js/web/builds/1.0.0/hogan.js","0672f2e3f619375f299cc1cf4b9b018d"],["node_modules/hogan.js/web/builds/1.0.0/hogan.min.js","22666f0a71d4ffd2460114172558d2f2"],["node_modules/hogan.js/web/builds/1.0.3/hogan.js","61746a86c6369591861ef9c9013fca87"],["node_modules/hogan.js/web/builds/1.0.3/hogan.min.js","478f574b8438d12ca33e030811fbb57e"],["node_modules/hogan.js/web/builds/1.0.4/hogan-1.0.4.amd.js","e1da9e241c832242ed9771cae6ae4700"],["node_modules/hogan.js/web/builds/1.0.4/hogan-1.0.4.common.js","12c60753b68169646bad22b7271f63ca"],["node_modules/hogan.js/web/builds/1.0.4/hogan-1.0.4.js","f2ef5bbbd7da451fbcae183efa03f9df"],["node_modules/hogan.js/web/builds/1.0.4/hogan-1.0.4.min.amd.js","421a6d435d27e7240a0bf5035f86db55"],["node_modules/hogan.js/web/builds/1.0.4/hogan-1.0.4.min.common.js","c2175a38c90a7c4ce0d51167251bd4db"],["node_modules/hogan.js/web/builds/1.0.4/hogan-1.0.4.min.js","534f30f34eb90fd339928078273512b5"],["node_modules/hogan.js/web/builds/1.0.4/hogan-1.0.4.min.mustache.js","e9ece58599bcd3aee6d1cbc4dd3030b2"],["node_modules/hogan.js/web/builds/1.0.4/hogan-1.0.4.mustache.js","3a953cc26b627d3e19e2b7fac2bc25a8"],["node_modules/hogan.js/web/builds/1.0.4/template-1.0.4.js","1300a58ba45e06bcb4ef4365781ad308"],["node_modules/hogan.js/web/builds/1.0.4/template-1.0.4.min.js","4f07582fe0a7b527c25a13d52b46b9e2"],["node_modules/hogan.js/web/builds/1.0.5/hogan-1.0.5.amd.js","70c5dec3d74b890388d44bc2e1d25029"],["node_modules/hogan.js/web/builds/1.0.5/hogan-1.0.5.common.js","83fa4c8e5c97ef7504d79da371a2f5cd"],["node_modules/hogan.js/web/builds/1.0.5/hogan-1.0.5.js","524728f4e6f7917d81918bf8155106ba"],["node_modules/hogan.js/web/builds/1.0.5/hogan-1.0.5.min.amd.js","6ac106eb40ccc38744f7d8b5fa53b4b1"],["node_modules/hogan.js/web/builds/1.0.5/hogan-1.0.5.min.common.js","f30dbfff54d9ef641b40075504c430f7"],["node_modules/hogan.js/web/builds/1.0.5/hogan-1.0.5.min.js","4925466c99e485aca1f9edd87c9fd698"],["node_modules/hogan.js/web/builds/1.0.5/hogan-1.0.5.min.mustache.js","db5eb81061a0aa714f049097f785e7fa"],["node_modules/hogan.js/web/builds/1.0.5/hogan-1.0.5.mustache.js","e01f45ead9f0565b98d3decd70cb04fb"],["node_modules/hogan.js/web/builds/1.0.5/template-1.0.5.js","085b283ca6b702861043769b051c226d"],["node_modules/hogan.js/web/builds/1.0.5/template-1.0.5.min.js","50df260124603ce0f3bea2ba24ec4993"],["node_modules/hogan.js/web/builds/2.0.0/hogan-2.0.0.amd.js","ebf5ccb48289a4edcce8a8526c06715e"],["node_modules/hogan.js/web/builds/2.0.0/hogan-2.0.0.common.js","80ae3b5bd004d5169a6e038837a3ef3d"],["node_modules/hogan.js/web/builds/2.0.0/hogan-2.0.0.js","949ad653f92b837524b840479840129a"],["node_modules/hogan.js/web/builds/2.0.0/hogan-2.0.0.min.amd.js","97f098b375f172f952861c00bcc0b3b4"],["node_modules/hogan.js/web/builds/2.0.0/hogan-2.0.0.min.common.js","3c1fe20fce70888dd64b521da239b952"],["node_modules/hogan.js/web/builds/2.0.0/hogan-2.0.0.min.js","0a7ee151a54e80bb14b55daaa873fc1f"],["node_modules/hogan.js/web/builds/2.0.0/hogan-2.0.0.min.mustache.js","bb033938442f38a2614264e058028e9f"],["node_modules/hogan.js/web/builds/2.0.0/hogan-2.0.0.mustache.js","6d1241442e8a0bce032374e4621ed4b0"],["node_modules/hogan.js/web/builds/2.0.0/template-2.0.0.js","ebd1e31b808cf3ef3ff1228461b373ab"],["node_modules/hogan.js/web/builds/2.0.0/template-2.0.0.min.js","b0c1b067dc5b6d57b092642f252ad21a"],["node_modules/hogan.js/web/builds/3.0.0/hogan-3.0.0.amd.js","9f38d25c6b41ad44e7748a0e55eb9656"],["node_modules/hogan.js/web/builds/3.0.0/hogan-3.0.0.common.js","5ca93280a66251178247aeb1a619c908"],["node_modules/hogan.js/web/builds/3.0.0/hogan-3.0.0.js","2778e85fe05366ea117629b8b7b2c386"],["node_modules/hogan.js/web/builds/3.0.0/hogan-3.0.0.min.amd.js","174b6434143426205036a3a8d52449ef"],["node_modules/hogan.js/web/builds/3.0.0/hogan-3.0.0.min.common.js","0e48d983be447465ec9d1361983615bc"],["node_modules/hogan.js/web/builds/3.0.0/hogan-3.0.0.min.js","d4c9f77a145c5abc2a907f2aa4d91ea1"],["node_modules/hogan.js/web/builds/3.0.0/hogan-3.0.0.min.mustache.js","5aca4129b84032a2f20f2b55e7976577"],["node_modules/hogan.js/web/builds/3.0.0/hogan-3.0.0.mustache.js","e0fa0bed8ad101486677863f8f807ec5"],["node_modules/hogan.js/web/builds/3.0.0/hogan.template-3.0.0.amd.js","8e4d13a396f8c7144ab80b29bc547022"],["node_modules/hogan.js/web/builds/3.0.0/hogan.template-3.0.0.common.js","2077cfa30fb433e378a865ea5cf33d8b"],["node_modules/hogan.js/web/builds/3.0.0/hogan.template-3.0.0.js","5b70e1f18f7ead9a1019f7f1e1c26d4c"],["node_modules/hogan.js/web/builds/3.0.0/hogan.template-3.0.0.min.amd.js","592b0ab092b677111b80c906fd40d158"],["node_modules/hogan.js/web/builds/3.0.0/hogan.template-3.0.0.min.common.js","a36129e7b8c63f3ffa38ea6946386542"],["node_modules/hogan.js/web/builds/3.0.0/hogan.template-3.0.0.min.js","41dcca766f5fd5c2b637f4fdb48b15ce"],["node_modules/hogan.js/web/builds/3.0.0/hogan.template-3.0.0.min.mustache.js","43a649152423a04e4b224211b1da364c"],["node_modules/hogan.js/web/builds/3.0.0/hogan.template-3.0.0.mustache.js","6f4ba8e78b21022b0964f2f367fbe12a"],["node_modules/hogan.js/web/builds/3.0.1/hogan-3.0.1.amd.js","9f38d25c6b41ad44e7748a0e55eb9656"],["node_modules/hogan.js/web/builds/3.0.1/hogan-3.0.1.common.js","5ca93280a66251178247aeb1a619c908"],["node_modules/hogan.js/web/builds/3.0.1/hogan-3.0.1.js","2778e85fe05366ea117629b8b7b2c386"],["node_modules/hogan.js/web/builds/3.0.1/hogan-3.0.1.min.amd.js","174b6434143426205036a3a8d52449ef"],["node_modules/hogan.js/web/builds/3.0.1/hogan-3.0.1.min.common.js","0e48d983be447465ec9d1361983615bc"],["node_modules/hogan.js/web/builds/3.0.1/hogan-3.0.1.min.js","d4c9f77a145c5abc2a907f2aa4d91ea1"],["node_modules/hogan.js/web/builds/3.0.1/hogan-3.0.1.min.mustache.js","5aca4129b84032a2f20f2b55e7976577"],["node_modules/hogan.js/web/builds/3.0.1/hogan-3.0.1.mustache.js","e0fa0bed8ad101486677863f8f807ec5"],["node_modules/hogan.js/web/builds/3.0.1/hogan.template-3.0.1.amd.js","8e4d13a396f8c7144ab80b29bc547022"],["node_modules/hogan.js/web/builds/3.0.1/hogan.template-3.0.1.common.js","2077cfa30fb433e378a865ea5cf33d8b"],["node_modules/hogan.js/web/builds/3.0.1/hogan.template-3.0.1.js","5b70e1f18f7ead9a1019f7f1e1c26d4c"],["node_modules/hogan.js/web/builds/3.0.1/hogan.template-3.0.1.min.amd.js","592b0ab092b677111b80c906fd40d158"],["node_modules/hogan.js/web/builds/3.0.1/hogan.template-3.0.1.min.common.js","a36129e7b8c63f3ffa38ea6946386542"],["node_modules/hogan.js/web/builds/3.0.1/hogan.template-3.0.1.min.js","41dcca766f5fd5c2b637f4fdb48b15ce"],["node_modules/hogan.js/web/builds/3.0.1/hogan.template-3.0.1.min.mustache.js","43a649152423a04e4b224211b1da364c"],["node_modules/hogan.js/web/builds/3.0.1/hogan.template-3.0.1.mustache.js","6f4ba8e78b21022b0964f2f367fbe12a"],["node_modules/hogan.js/web/builds/3.0.2/hogan-3.0.2.amd.js","ebeab4a1bdda5c402997739099f2f142"],["node_modules/hogan.js/web/builds/3.0.2/hogan-3.0.2.common.js","1837e9195f894583222f0a700f26cf46"],["node_modules/hogan.js/web/builds/3.0.2/hogan-3.0.2.js","f092b0452bdf5c0e139b8345ca7cbf30"],["node_modules/hogan.js/web/builds/3.0.2/hogan-3.0.2.min.amd.js","97ef238f0415647eb2c91bcbd8383733"],["node_modules/hogan.js/web/builds/3.0.2/hogan-3.0.2.min.common.js","0560dd20d463ae8453166e11f5ad5023"],["node_modules/hogan.js/web/builds/3.0.2/hogan-3.0.2.min.js","9ebb5103b40b35d86d73835cccca641f"],["node_modules/hogan.js/web/builds/3.0.2/hogan-3.0.2.min.mustache.js","547b0806a4712cb02a7664f63533f740"],["node_modules/hogan.js/web/builds/3.0.2/hogan-3.0.2.mustache.js","f0dae272de652ffa17412d0c09e22279"],["node_modules/hogan.js/web/builds/3.0.2/template-3.0.2.js","02d14640a3a44d47ef690e85261be9ce"],["node_modules/hogan.js/web/builds/3.0.2/template-3.0.2.min.js","b913659cfacab67c36b3348179304d3b"],["node_modules/inflight/README.md","0a30dbf89df03dc7c954f830946f66d8"],["node_modules/inflight/inflight.js","42bbc3622abfefca5862fd0d12441a15"],["node_modules/inflight/package.json","b567ac0fc2dbbfdbd7f48be403f58464"],["node_modules/inherits/README.md","de7eab94959b05c9765cad499ab092db"],["node_modules/inherits/inherits.js","09b210610125b162700734fb93dc892c"],["node_modules/inherits/inherits_browser.js","7c26fc24b695f2afbc284bbd5f64d6a4"],["node_modules/inherits/package.json","97d92a606f92de78f02d8dd271fee4b2"],["node_modules/is-buffer/README.md","41f05901c566930e99d3cb707bff5be2"],["node_modules/is-buffer/index.js","b7412cddcc361499cb97de2fde16d633"],["node_modules/is-buffer/package.json","6b0071376b3b2d3b31d65ea951df03d3"],["node_modules/is-buffer/test/basic.js","a464c09281c3a6d95e23046d8b4b14b1"],["node_modules/kind-of/README.md","e2282372a2cd23e2b423e778e4ad19ee"],["node_modules/kind-of/index.js","280314fed4c6c584cb6aeeca6efa69ee"],["node_modules/kind-of/package.json","e00ef791d61c6d2f2326ea62bcce3b55"],["node_modules/lazy-cache/README.md","a13997da9042d38d73704db5ff076cb4"],["node_modules/lazy-cache/index.js","403899881bd8b4a8ab7e8b36a56024f2"],["node_modules/lazy-cache/package.json","140e9c4231966b7f0f463997082fd19c"],["node_modules/longest/README.md","f8e2c5378fab44016468fded33e52390"],["node_modules/longest/index.js","14539a2cf27890937f0176b341fe3727"],["node_modules/longest/package.json","461308b9f3db1e792413257aff6c3d2c"],["node_modules/minifier/index.js","3fb1fad31b472ab6063ff9d8453265d3"],["node_modules/minifier/package.json","1e1fd39d270823bfce58b88febb70d31"],["node_modules/minifier/readme.md","0e5e86bfab7a762a56584069acc86769"],["node_modules/minifier/src/css.js","3edd3841c9fe665b046adcaeaa123d89"],["node_modules/minifier/src/minify.js","9d4e828e03ad0cb33a066c6615114fce"],["node_modules/minifier/src/utils.js","77489c6375d6b36a5cace86b59482f61"],["node_modules/minimatch/README.md","69c8fd8e7fc4051b61c6343c0357be2b"],["node_modules/minimatch/minimatch.js","9e22ccffac9538b210d6bc9e120e8f15"],["node_modules/minimatch/package.json","53fb7e592f77874d1803da5e1358c76b"],["node_modules/mkdirp/README.markdown","b27d545ea9189a2071105544f0f5f4e9"],["node_modules/mkdirp/examples/pow.js","7440de96a1a111e53e3da08f0d8bb8eb"],["node_modules/mkdirp/examples/pow.js.orig","3d856ec09bb472721f0f3bf6b1032c45"],["node_modules/mkdirp/examples/pow.js.rej","7be82534b60ae0e9078d9740979f7e79"],["node_modules/mkdirp/index.js","ff5a9ddf410f5568d8fdbcbaa1b65254"],["node_modules/mkdirp/package.json","09871564590e39c312559325caf2ee6e"],["node_modules/mkdirp/test/chmod.js","c28bcbdf53353174c7c98282939a7cf2"],["node_modules/mkdirp/test/clobber.js","7e1dbdaeed839c0f8c05ee2ea9c0442e"],["node_modules/mkdirp/test/mkdirp.js","a65c98505ff8ee06ae4479720c4ba191"],["node_modules/mkdirp/test/perm.js","d6f0894505c496bde19af66d737f94ce"],["node_modules/mkdirp/test/perm_sync.js","782e264e9eb7e53308a7892f387e9357"],["node_modules/mkdirp/test/race.js","009053221aaea15a1cd91315df02c692"],["node_modules/mkdirp/test/rel.js","07d6c34b711eba8f3a6f67224d9963e8"],["node_modules/mkdirp/test/sync.js","d7d2800323d465429315a6fb5d447686"],["node_modules/mkdirp/test/umask.js","36337676061be80f79542a64e947aa2b"],["node_modules/mkdirp/test/umask_sync.js","696aa47161182a262530a1dc2efa7c33"],["node_modules/nopt/README.md","967cce780a52ec49365908a271dda3b7"],["node_modules/nopt/bin/nopt.js","710a03abdc3782ccc050ab1ded8cc5f4"],["node_modules/nopt/examples/my-program.js","18282294fd8652f91c5d31e86f456f54"],["node_modules/nopt/lib/nopt.js","debadd9f22faf8ff9bf9e58d35e1774b"],["node_modules/nopt/package.json","490be32f25547890642546e730132eab"],["node_modules/once/README.md","58f1e04252b1477aacd25268d88d5d50"],["node_modules/once/once.js","d1d6962324348ad89bf780a233952c61"],["node_modules/once/package.json","e8efd585e257863d0a6fec2ddc12ca53"],["node_modules/path-is-absolute/index.js","135a9dc74dc76b698c2abeaaa165f889"],["node_modules/path-is-absolute/package.json","dbebab694f0b78289d2ec4ef2997e57f"],["node_modules/path-is-absolute/readme.md","77dcaf91010aea98f54e727c5c34a297"],["node_modules/repeat-string/README.md","96ae96f4b3ce79313a574f25d891b4a6"],["node_modules/repeat-string/index.js","5f8c0fdde909e8211553a109f4441f69"],["node_modules/repeat-string/package.json","8f15ecca12097aedfc534891addb791d"],["node_modules/right-align/README.md","ac380a592a270791a091c609e9d2b1b6"],["node_modules/right-align/index.js","c81de29e4ef81b9b999bf24ac7fc92d7"],["node_modules/right-align/package.json","f81f18cf00c78d45ca8fb46eca0b3612"],["node_modules/source-map/CHANGELOG.md","a3af94376054cec4d2e6fdcf2831d7e0"],["node_modules/source-map/README.md","c0e72d4b1efa90a809c82825e8036901"],["node_modules/source-map/dist/source-map.debug.js","5fbd198a5f9d7f3df90ceedcc78a8e81"],["node_modules/source-map/dist/source-map.js","8ecffd21dbe96e735c45f011ce302f30"],["node_modules/source-map/dist/source-map.min.js","cf38403a77f0805b4cabfe4a6a252bc2"],["node_modules/source-map/dist/source-map.min.js.map","d5b5ec36f347390ee07f6c54604c6a42"],["node_modules/source-map/lib/array-set.js","6fa0a3d699a6a1669fff4a2714d4eb0e"],["node_modules/source-map/lib/base64-vlq.js","10ab2672fb7feaa6e4a2ca651d2412f9"],["node_modules/source-map/lib/base64.js","d6ba9a233e14b859b51f538c0b295953"],["node_modules/source-map/lib/binary-search.js","250315731532fce9f782a6dcc6a0f569"],["node_modules/source-map/lib/mapping-list.js","b43d49bb65a0e89b26e13a97de816cad"],["node_modules/source-map/lib/quick-sort.js","dfeffc75906e8f42d235a55801ae2a42"],["node_modules/source-map/lib/source-map-consumer.js","7c554dd02418736eadec52587fc657f9"],["node_modules/source-map/lib/source-map-generator.js","0bc3dae1a1d8db68eb3dbcb50aae1b6d"],["node_modules/source-map/lib/source-node.js","d1b867885bdba3d99c73f85c596d79bb"],["node_modules/source-map/lib/util.js","ec9ae29400d07c9b1266bc612acda893"],["node_modules/source-map/package.json","bc63c869dc05579eac686d978c9c79a4"],["node_modules/source-map/source-map.js","1bb9c1d35d2fbb3779c67306ca3d8070"],["node_modules/sqwish/README.md","00fbc1e24ba95ee9aebe2aa7ea792ff4"],["node_modules/sqwish/example/styles.css","8661d639b65b0803f8a3d1ba13d76063"],["node_modules/sqwish/example/styles.min.css","2cb79475639396fd7210e81cea5a9996"],["node_modules/sqwish/package.json","9d82019c9d5094247738f60dfd7a1d13"],["node_modules/sqwish/src/index.js","5ff51ee101f99183158603bd76e3feaa"],["node_modules/sqwish/tests/tests.js","e04a4ab8f095502f07b017f394675f47"],["node_modules/uglify-js/README.md","f7e316ad4787511fed9da3a0f386d9ae"],["node_modules/uglify-js/bin/extract-props.js","b5d5ee0515ed1316429c97606744fa2b"],["node_modules/uglify-js/lib/ast.js","5e7d559f022255ab3c1f4f6b754f43d4"],["node_modules/uglify-js/lib/compress.js","579251750cc4ba3c3ef8f4e87cb58ad2"],["node_modules/uglify-js/lib/mozilla-ast.js","ee173e805788e69c13f60e6af389e1d8"],["node_modules/uglify-js/lib/output.js","f6cb1a9bfbb1830e56c8259decde860f"],["node_modules/uglify-js/lib/parse.js","98a3b7680e4cccd603ad4f3e25db5f3b"],["node_modules/uglify-js/lib/propmangle.js","eef30af80da22716259acfbb0e4da8c9"],["node_modules/uglify-js/lib/scope.js","0e57c737646576835d3aa775c190706f"],["node_modules/uglify-js/lib/sourcemap.js","3660da26e2c584b20804a6e2c444c470"],["node_modules/uglify-js/lib/transform.js","7a631f991a192d5eed60bf1075f9693b"],["node_modules/uglify-js/lib/utils.js","a2bce74e1b469b0458da4e3f05b008da"],["node_modules/uglify-js/package.json","e082928e1e99d653e283503281910406"],["node_modules/uglify-js/tools/domprops.json","9180f044c8f725b624b4fd6611a8707a"],["node_modules/uglify-js/tools/exports.js","1bf1773188e69ea6efec273cf5114ad2"],["node_modules/uglify-js/tools/node.js","adec2cabc01102a0b8e8f0d1854e9e1e"],["node_modules/uglify-js/tools/props.html","3d2296edf2b290065052d13607789002"],["node_modules/uglify-to-browserify/README.md","3b7a77da18e8002ff9fb0f52f9051e8f"],["node_modules/uglify-to-browserify/index.js","2d988bce415093fc3e0c1def8d07cf63"],["node_modules/uglify-to-browserify/package.json","486fdb206cfe1f30ef907ec481138c24"],["node_modules/uglify-to-browserify/test/index.js","49eebadd33751cb77024719beb261fb4"],["node_modules/window-size/README.md","a546edcf254635a0c3e06d4daf3aa44a"],["node_modules/window-size/index.js","676ffee450ebd4c253886ef72e33a32e"],["node_modules/window-size/package.json","d2dceea93f20456d506917172c4cbd8b"],["node_modules/wordwrap/README.markdown","8f734870852f7846a45edaa66aef5170"],["node_modules/wordwrap/example/center.js","4b2980029d6410678fdc2d1844bcc653"],["node_modules/wordwrap/example/meat.js","6dd9bdc5946202e7f7d039855c600c6d"],["node_modules/wordwrap/index.js","3d84eeca2461535450a0170fed972d8d"],["node_modules/wordwrap/package.json","8b0a36f1c5dbeeaeb6bc1071aceb99ef"],["node_modules/wordwrap/test/break.js","31242884205e2baa900ac2cd708931cb"],["node_modules/wordwrap/test/idleness.txt","9a1eafba7a0938b9540bf1673b2494dd"],["node_modules/wordwrap/test/wrap.js","cd4e1370804eda03cff4a9e327c06dfe"],["node_modules/wrappy/README.md","55b4b44807d7edaf6084e42a5ae078d6"],["node_modules/wrappy/package.json","0b3912c07a2d14e18c3734d0b6241f23"],["node_modules/wrappy/wrappy.js","04a65e1669dc90fa11c900693c1974b1"],["node_modules/yargs/CHANGELOG.md","40944d732f30b98cc77891725146a344"],["node_modules/yargs/README.md","c0ca377e9879e3bc0c0b89663c48e302"],["node_modules/yargs/completion.sh.hbs","f0a8e26e6f1a609e452aacb9ceee3e84"],["node_modules/yargs/index.js","72ad126fc0b3ce13bd915e72b88e05e0"],["node_modules/yargs/lib/completion.js","22a96915bbcd4c2a838f87aab25249c6"],["node_modules/yargs/lib/parser.js","0f56740d485ac16dd1ca63c616199d54"],["node_modules/yargs/lib/usage.js","a4ce4c53119beb497f90040db9a98dfb"],["node_modules/yargs/lib/validation.js","d58968d68c85ddefb2994fc72c2f40f8"],["node_modules/yargs/package.json","f11427682ed231246d7cc793238f60bf"],["package.json","4df54f7132320765f66870ced44e8509"],["styles.css","b6fd7b9b4cf3523d903a33c19e4e8071"],["styles.min.css","d282821d18414c7c2eb46dac39c41bf4"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







