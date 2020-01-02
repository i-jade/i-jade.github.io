/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "20171231/first-day-of-spring-2016-northern-hemisphere.gif",
    "revision": "6f22be4e029e93d82823665a482806b0"
  },
  {
    "url": "20171231/homeScreen128.png",
    "revision": "cf6a4e8b13ae7b1e0cd300acc74d0f57"
  },
  {
    "url": "20171231/homeScreen144.png",
    "revision": "99690ef2f9d004dd33eceb86c7f6b444"
  },
  {
    "url": "20171231/homeScreen48 .png",
    "revision": "d7d65854637293c5630cc7cbbea111d3"
  },
  {
    "url": "20171231/homeScreen48.png",
    "revision": "fb050608ac666852b29a5eac4182c12f"
  },
  {
    "url": "20171231/homeScreen72.png",
    "revision": "45bb5841e83c5f87598894e9edc4f782"
  },
  {
    "url": "20171231/homeScreen96.png",
    "revision": "3a170dde273ba3f736b2f3475be0809a"
  },
  {
    "url": "20171231/logo.png",
    "revision": "d7d65854637293c5630cc7cbbea111d3"
  },
  {
    "url": "20171231/summer-solstice-strawberry-moon.gif",
    "revision": "75d8fb9ccbd0995d026ed784a72e486f"
  },
  {
    "url": "20171231/tooth.gif",
    "revision": "1d5b4434920a088ca92202a1019e84fe"
  },
  {
    "url": "404.html",
    "revision": "e98ee04ecb10ee2c315d3f3855de283e"
  },
  {
    "url": "about.html",
    "revision": "19f78cf3e9e9383db9288a5efdde04c4"
  },
  {
    "url": "assets/css/0.styles.0508cdda.css",
    "revision": "4f3ec611f8fbf45eb50a8c5471476eec"
  },
  {
    "url": "assets/img/banner.8069aec6.png",
    "revision": "8069aec697a05cbba6d6a4e5b238b7a6"
  },
  {
    "url": "assets/img/default.7d5bc7de.jpg",
    "revision": "7d5bc7de7aa5d9e320f7a771619870f5"
  },
  {
    "url": "assets/img/first-day-of-spring-2016-northern-hemisphere.6f22be4e.gif",
    "revision": "6f22be4e029e93d82823665a482806b0"
  },
  {
    "url": "assets/img/footer-title-icon-1.2d88de07.png",
    "revision": "2d88de07905a123a030e467bdceeca2f"
  },
  {
    "url": "assets/img/NotFound.b5c9b223.jpg",
    "revision": "b5c9b223d7dc40d8f56617c8979d30a2"
  },
  {
    "url": "assets/img/summer-solstice-strawberry-moon.75d8fb9c.gif",
    "revision": "75d8fb9ccbd0995d026ed784a72e486f"
  },
  {
    "url": "assets/js/10.fadf1f04.js",
    "revision": "5a328befe44d23d9db3b471cc8eb3310"
  },
  {
    "url": "assets/js/11.66e7c4c4.js",
    "revision": "a62783e8bea094cf54be67ba84a59805"
  },
  {
    "url": "assets/js/12.6c680796.js",
    "revision": "a6da89c00154ab8e6c01e0084b3c08e5"
  },
  {
    "url": "assets/js/13.ecc8773d.js",
    "revision": "859b861ca7b8209a2fc1104446260a2c"
  },
  {
    "url": "assets/js/14.20bd40a1.js",
    "revision": "f66a570ce1fd404a50330a8a1399a4b8"
  },
  {
    "url": "assets/js/15.c6a078c0.js",
    "revision": "89bc8f0051f228f1416b543a7fc6f687"
  },
  {
    "url": "assets/js/16.1d8cfc6f.js",
    "revision": "5930adaef4395b6041fe145406c77096"
  },
  {
    "url": "assets/js/17.9fc3f7d9.js",
    "revision": "453be36c6af9a3a9f9049a8711a29023"
  },
  {
    "url": "assets/js/18.0c8c2b24.js",
    "revision": "1d16244cba2845589dc5e288ca9f8a03"
  },
  {
    "url": "assets/js/19.011c1a0b.js",
    "revision": "9dc6dabbe4b8b3a4dda7b45d08fd83cd"
  },
  {
    "url": "assets/js/2.857a2d3c.js",
    "revision": "dcdc04cb5a8c78afe4c82560142e3f07"
  },
  {
    "url": "assets/js/20.38be90f3.js",
    "revision": "41b0dd93bcb34abde740bb9929c85017"
  },
  {
    "url": "assets/js/21.db762969.js",
    "revision": "51b8a8502c4b26cb8cf9e96eb757f67b"
  },
  {
    "url": "assets/js/22.b7352065.js",
    "revision": "a1ad7c3a71220fe177d0e9fd36d0384b"
  },
  {
    "url": "assets/js/23.9bffbde4.js",
    "revision": "ebb5899946b304bc5fce999071e06af7"
  },
  {
    "url": "assets/js/24.e1f21e04.js",
    "revision": "2aede268e6d27fb74b16c65939d4a6c6"
  },
  {
    "url": "assets/js/25.fb5f6090.js",
    "revision": "4ceba45f9898e6f146fd777555158987"
  },
  {
    "url": "assets/js/26.52ab2002.js",
    "revision": "d47d8f996a713ee270473daeae247eee"
  },
  {
    "url": "assets/js/3.f079de29.js",
    "revision": "b2cfe8d0af5ce529c04d8da2a9bb8d9f"
  },
  {
    "url": "assets/js/4.f9e2a123.js",
    "revision": "fa03527543c6e421b9d47ff425771099"
  },
  {
    "url": "assets/js/5.e15a0e5c.js",
    "revision": "52d8252cf216213bb2bd44744ce6849a"
  },
  {
    "url": "assets/js/6.236fd6c6.js",
    "revision": "6370bb2254a312b185325bb2b1cff0b8"
  },
  {
    "url": "assets/js/7.d2ef6f71.js",
    "revision": "f8c7b2da3866a9b793b9018c122d437b"
  },
  {
    "url": "assets/js/8.d5e265a9.js",
    "revision": "4233b0bcb925af34bd12034e773a80c7"
  },
  {
    "url": "assets/js/9.5990eaa8.js",
    "revision": "1c85eecc75085fd435d883bf3c35ba7e"
  },
  {
    "url": "assets/js/app.69f92f52.js",
    "revision": "abcd76aeb0e0c029dbd99dd550818053"
  },
  {
    "url": "index.html",
    "revision": "741d487643255682d52c0a34ffb87d20"
  },
  {
    "url": "life/191017.html",
    "revision": "4dbd709b8d13bebd381e4cd2b1936270"
  },
  {
    "url": "life/index.html",
    "revision": "b8edff211a5355c6e74c89b05e0b2d41"
  },
  {
    "url": "life/test.html",
    "revision": "98f93b7e726c45efe947d80f24c3821c"
  },
  {
    "url": "life/zi-lu.html",
    "revision": "065db4a3ed1fcfab46396c407bd1adcc"
  },
  {
    "url": "link.html",
    "revision": "c48581a2b4dc78ccbe78d07d5c89721d"
  },
  {
    "url": "other/ce-shi-wen-zhang.html",
    "revision": "2984a45e0a23b391be16ce190954041e"
  },
  {
    "url": "other/hahaha.html",
    "revision": "a2522dd98f055afcb339e173f67b76ef"
  },
  {
    "url": "other/index.html",
    "revision": "a4b022566f8b5fbe8892d60985313a88"
  },
  {
    "url": "other/markdown-shi-yong-jiao-cheng.html",
    "revision": "d074a2a7f840de486491e27602b8fb73"
  },
  {
    "url": "other/shi-li.html",
    "revision": "9b95292f93fcba478003ee2bcfcf0f75"
  },
  {
    "url": "posts/index.html",
    "revision": "8d3145e5a5c1d04a937db2df698802d1"
  },
  {
    "url": "program/200102flutter-zhongshowbottomsheet-she-zhi-yuan-jiao.html",
    "revision": "9c6c0f6dc4dead5affd36b8528413cb6"
  },
  {
    "url": "program/flutter-web_view-bu-neng-fang-wenhttp-jie-jue-ban-fa.html",
    "revision": "bcbd248353100d99de13e1422c735e7a"
  },
  {
    "url": "program/index.html",
    "revision": "9b0ccac7c63426cb482bd9f07f3c1aff"
  },
  {
    "url": "program/jie-juestartforeground-bad-notification-error-cuo-wu.html",
    "revision": "44430c2cb54a83faebc5a463fb527c14"
  },
  {
    "url": "program/my-first-blog.html",
    "revision": "e8e8142353d2bcf46b2ffab986ded545"
  },
  {
    "url": "program/test.html",
    "revision": "0a917b28360f2b89e9e72f94c410ebf4"
  },
  {
    "url": "tags/index.html",
    "revision": "48d52ef741d8315d15ec8bdd4a853a66"
  },
  {
    "url": "timeline.html",
    "revision": "6858ef2fdd7c3788a554147bd68c017c"
  },
  {
    "url": "tool/index.html",
    "revision": "2d7f508413e9dae34e6fe679be87a031"
  },
  {
    "url": "tool/test.html",
    "revision": "a4c9a3ae95ddc540a22066715c296659"
  },
  {
    "url": "tool/test2.html",
    "revision": "9d2bbf1a3b75b2275db93e583cd7e950"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
