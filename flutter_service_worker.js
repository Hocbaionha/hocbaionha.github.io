'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "prod/index.html": "d543277345663527f56c187963c7c585",
"/": "d2405a1fd4c9698b69e24cd029b6299d",
"version.json": "d245be0472b8d7bb01d1bb904641f9ef",
"favicon.ico": "229c7a4252f75a1c58a8c550c1226c54",
"index.html": "db555f9e0040eae06b13d374128cbcf4",
"styles.css": "c6d8274f01d6c6241224aa82b8e40ec5",
"main.dart.js_4.part.js": "a54296e2dfc07b3aa95c9b1c9f48ddc4",
"main.dart.js": "d951f542816dcc34125bf715d1995442",
"img/hbon_logo.png": "555d0cdd5810cff75f0bbc97e29b2520",
"img/atom_loading.gif": "5be9eccdb762d4c58c44823d01ab3c4b",
"img/hocbaionha_logo.png": "e4ecad386d238e2b46e4784f8dfdf097",
"icons/favicon-16x16.png": "bc5c6147a3bb9f954d37c188d5ae4664",
"icons/favicon.ico": "229c7a4252f75a1c58a8c550c1226c54",
"icons/android-chrome-192x192.png": "d6b89c6b51fe48cc9b5bf76d6d0568a2",
"icons/apple-touch-icon.png": "3eadce61cfb86d9c7bf2d3d1da8ac813",
"icons/android-chrome-512x512.png": "9ba3c0c1836abf454c2d2f2707a73198",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"icons/favicon-32x32.png": "6486cdde38c9103aece6fb80e6603cef",
"manifest.json": "09aac043b257dd15d5a88f7cea188f6e",
"dev/index.html": "d2405a1fd4c9698b69e24cd029b6299d",
"main.dart.js_1.part.js": "da33600813ba689da2e86c364e824a0a",
"main.dart.js_3.part.js": "e0745f636c5c2f1a7bbdff11a07bec5a",
"assets/AssetManifest.json": "afe3811d61ee516f49ff3b6f3747203b",
"assets/NOTICES": "2439ca9cfc7ae3a324e488cf4fe2d4ca",
"assets/FontManifest.json": "9f726b0a41de7deb606c5819aecc5399",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/default_avatar.png": "1d82c82b27bfc7dfedb8d8a5af076a1a",
"assets/assets/images/icon_add_image.svg": "21d4ff6b3868aa4828922c33eb6893b0",
"assets/assets/images/hbon_icon_url.png": "f87eae7f04abb9ff0743e086b878c5a9",
"assets/assets/images/loading_atom.webp": "ca051fe0426dece5ffa5f908b65f147e",
"assets/assets/images/score_3_stars.svg": "12c98f31b001460ec35b519da717c9ba",
"assets/assets/images/placeholder_like.png": "85fbee85c658d2d088c5afd3f32a580a",
"assets/assets/images/icon_school.svg": "3e3ef522cbd9dd3229c7eb3882df81c9",
"assets/assets/images/progressing_illustration.png": "f6e047943766a551aa17b5be1a383d8d",
"assets/assets/images/icon_video_recorder.svg": "4d1fc607c22def6b54fb34ef59d111dd",
"assets/assets/images/icon_arrow_next.svg": "2655abdcfb0e19b9c2dac10fa5311c59",
"assets/assets/images/link_student_step2_vi_dark.jpg": "fa0a57e099f4852b270ca4a85c49769d",
"assets/assets/images/icon_tips_and_updates.svg": "891007e34e06d77198312ec9ab6fe899",
"assets/assets/images/icon_assignment_image.svg": "955b3317c82168b87e2460a4951ca4fb",
"assets/assets/images/icon_done_ribbon.svg": "ca557446dffbe84e9910ed34ff49b892",
"assets/assets/images/page_not_found_illustration.png": "71f07b42c85f0347c3ebd6da98145cfa",
"assets/assets/images/hbon_icon_phet.png": "7e371353f70be9f0e4d5533e323d8f00",
"assets/assets/images/add_bookmark_illustration.png": "26456668e72b50a228615a046a1404f5",
"assets/assets/images/icon_microphone.svg": "ced7db4c46dbca5dd1119898637e3d17",
"assets/assets/images/icon_quiz_feedback.svg": "b559fb4a7b1fcb23547241cf5e7c0a37",
"assets/assets/images/icon_share.svg": "c2473d3693b998d79e80a8648d07a89f",
"assets/assets/images/feedback_illustration.png": "6959c18fde147b0fba8c798d37f5257c",
"assets/assets/images/quiz_alert_background.png": "0251d85bc3d3a139a1f17858a0280c49",
"assets/assets/images/link_student_step1_en_dark.jpg": "8c9401cdada5e0901304a5ab7c3b24fd",
"assets/assets/images/icon_arrow_prev.svg": "858c51f232e073db2ab085ed54ef8aba",
"assets/assets/images/app_dev_illusstration.png": "5a2ee8424c1d7d09ce470d1ff93e9109",
"assets/assets/images/icon_unsave.svg": "bb71d18b80b8ac1225c0671fdd83c9af",
"assets/assets/images/icon_like_white.png": "fcd08ab4c7fd35000b1a6694515f1777",
"assets/assets/images/link_student_step1_en.jpg": "8cf098f3fdbc949631f94ba6243fb21d",
"assets/assets/images/default_cover.png": "541e489ede06733fd61339c10bb114dd",
"assets/assets/images/father_daughter_illustration.png": "7e67513b1dfbb9f0c60a668a4140fd1e",
"assets/assets/images/icon_languages.svg": "4f2928216d953ca44eee32d2691fe432",
"assets/assets/images/hbon_icon_video.png": "931747cd087d33a087c7ec200ea226c4",
"assets/assets/images/like_small.png": "f5fa974a5460f35874cfecce0ad1be5d",
"assets/assets/images/icon_lamp.svg": "5a4650cc882b0cd4ada434d43cd413b3",
"assets/assets/images/icon_quiz.svg": "05f15c05686e7d4be5b2f1ecf5847473",
"assets/assets/images/hbon_icon_h5p.png": "2777ff3c2a3be380ee3f35af6494321a",
"assets/assets/images/icon_assignment_video.svg": "ddeec20f5c26a8c761bb34be2129b8ec",
"assets/assets/images/2.0x/default_avatar.png": "ec3f095cc2b0116f3fb4891788ede686",
"assets/assets/images/2.0x/placeholder_like.png": "a50eda88e28feba30e9ba64cf2b665c8",
"assets/assets/images/2.0x/icon_like_white.png": "9d1243c08eb6b978a0bf37976642bbe9",
"assets/assets/images/2.0x/hbon_logo.png": "e0f668d52882ce09a3f6b28a487061f1",
"assets/assets/images/2.0x/like.png": "043043cd9bb9c6fa2f90bbbd2975a35b",
"assets/assets/images/2.0x/hocbaionha_logo.png": "cd5f04904b45d702496205ca706e5021",
"assets/assets/images/2.0x/cert_background.jpg": "fb4804738b53b0f13b4d544e7d99d4d0",
"assets/assets/images/2.0x/hocbaionha_text.png": "1458c59419326d26ded0e26c3ae629fb",
"assets/assets/images/hbon_icon_geo.png": "4e420d5918ee07c5a45b09301283256f",
"assets/assets/images/icon_text.svg": "d63a857d9038bd845330db824aa1bf8d",
"assets/assets/images/logo_elsa.png": "a1edd98a04ce1117b3046d8499d0516a",
"assets/assets/images/link_student_step1_vi.jpg": "34c00e2a7cb6b729694288dd7643474a",
"assets/assets/images/icon_quiz_alt.svg": "aac317d21ebbf43de621d8a677eb7e7a",
"assets/assets/images/typewriter_illustration.png": "2427adaddbbea68d9d7993f60421553a",
"assets/assets/images/icon_voice.svg": "4d09174ec75282d710e00226164aefcc",
"assets/assets/images/hbon_coin.svg": "b993a1b4dad99a096af18f6d432a8778",
"assets/assets/images/like_small_gray.png": "4ec38711bf6ec3f4cc79b8b35cb124f5",
"assets/assets/images/startled_illustration.png": "ae30d51ae7b5c63d0aadb334d87d879c",
"assets/assets/images/icon_add_camera.svg": "f4b8b36bea1d98b254759428b6003f80",
"assets/assets/images/icon_app_info.svg": "f584d5d9f7e3f8724e8ab5ee6d706ec2",
"assets/assets/images/icon_light_bulb.svg": "a047875096a0419b3ff70c80e4da4650",
"assets/assets/images/hbon_logo.png": "ddabf71843f3383625f0e83b1c446d9f",
"assets/assets/images/score_2_stars.svg": "895ff4fa9e4a5688741278bcea77e327",
"assets/assets/images/studying_illustration.png": "01c1bfd861beb52121c0bd35a7ffc183",
"assets/assets/images/icon_paper_plane.svg": "382f1e7d2a9c640e8929da4717bbd267",
"assets/assets/images/link_student_step2_en_dark.jpg": "2ed91936092c63ea430137f2fde55d30",
"assets/assets/images/google_icon.svg": "a36f67490671043a455c1d6e9bab0630",
"assets/assets/images/empty_illustration.png": "f41e78120dcbb03939c88a4e2e34d9bd",
"assets/assets/images/icon_image.svg": "463bb2224087235dba480dbb59ba8cbd",
"assets/assets/images/icon_add_file.svg": "1a6700201def25b2b1c113b842f2cd09",
"assets/assets/images/hbon_icon_quiz.png": "b84cf5f8d57955815ab990cf51024404",
"assets/assets/images/icon_report_message.svg": "f40ca86391440dbe375bc15fdaa8e343",
"assets/assets/images/link_student_step1_vi_dark.jpg": "999559b1cdcc988e488e04740e8af9b9",
"assets/assets/images/cert_divider_2.svg": "e63a2ec112e6d68160e24039bf73f06a",
"assets/assets/images/cert_divider_3.svg": "dbbffde46c6042f79f43c396cfe0f7b0",
"assets/assets/images/icon_internet.svg": "1f4ae7014ac5e966cbc4a60483b4d297",
"assets/assets/images/waiting_illustration.png": "64cda2a6c894519ae371b6d5e835f3bc",
"assets/assets/images/3.0x/default_avatar.png": "b7d034244763bcc88507a0bad0d0ea40",
"assets/assets/images/3.0x/placeholder_like.png": "1a0eb6b282460f45b6fc7914bcf135a8",
"assets/assets/images/3.0x/icon_like_white.png": "7096d5dd1b10913452a6517a83c40bd5",
"assets/assets/images/3.0x/hbon_logo.png": "555d0cdd5810cff75f0bbc97e29b2520",
"assets/assets/images/3.0x/like.png": "88bb6c54dc97b684555d41f078f7082c",
"assets/assets/images/3.0x/hocbaionha_logo.png": "e4ecad386d238e2b46e4784f8dfdf097",
"assets/assets/images/3.0x/cert_background.jpg": "76a1e46e2bfe399ac88897aebb875c4e",
"assets/assets/images/3.0x/hocbaionha_text.png": "d3ae9912ee37043b53ee7e98b3319149",
"assets/assets/images/cert_divider_1.svg": "f6cbe871fc825c270c96b392d9df9887",
"assets/assets/images/like.png": "9b8cedd20ad0347875f89cea79a08afa",
"assets/assets/images/search_background.jpg": "5d26b1c7910e52c5b2d5531bfd8d5d08",
"assets/assets/images/hbon_star.svg": "68c0799acd7e3875ce1cd9b86d2ca9a1",
"assets/assets/images/group_illustration.png": "53479921d4d1942f3367f958aaeec4e6",
"assets/assets/images/score_1_stars.svg": "6d40e6e3238597719a4e80f215e84396",
"assets/assets/images/icon_assignment_file.svg": "f10ef92d63c2555c9a88c2971ec534ce",
"assets/assets/images/ringing_alarm.webp": "006a60bbb9c2d96a5f4a4cb2b2aa1981",
"assets/assets/images/icon_appearance.svg": "2b076ce2487ee9e0bed3b0b02e2ad314",
"assets/assets/images/teaching_illustration.png": "53789e7b9f63875961709e02e224b5f4",
"assets/assets/images/lending_slide4.jpg": "20478288fd9b623bcbdb93af316b0fc2",
"assets/assets/images/icon_flash.svg": "b910e53bb0513a0d93f51ada08ad00c6",
"assets/assets/images/like.webp": "7efe62d385013e833f952c841661f752",
"assets/assets/images/icon_hot_tag.svg": "c5808ec542efad0cdc490c6ddb588c41",
"assets/assets/images/link_student_step2_en.jpg": "4949350b1e069123e500764ce22c8159",
"assets/assets/images/hocbaionha_logo.png": "c6e340af9825fb1978559c21d6ff6741",
"assets/assets/images/icon_check.svg": "4004290289c075c5f10bd14789651785",
"assets/assets/images/arrow_right_thin.svg": "4b713cfeb6d51be8acd2325c8b8b456a",
"assets/assets/images/loading_book.webp": "702feb2f2600ebfe2c7761d4880b37ff",
"assets/assets/images/lending_slide3.jpg": "91af3addf7a1a57c22eee8757ca8f108",
"assets/assets/images/cert_background.jpg": "e1ca8491b4d8bf6abbc9e1c25d422e2f",
"assets/assets/images/icon_studying.svg": "486b52a90b2446f65a368c683ca672b1",
"assets/assets/images/empty_mail_illustration.png": "199cb9f4cd8f9a6d0d62c2b9fe4a7168",
"assets/assets/images/icon_bell.svg": "08336ebe75da2830375601c414e08c09",
"assets/assets/images/lending_slide2.jpg": "18741430e70b5a2ef08aa53ca2052563",
"assets/assets/images/icon_no_contacts.svg": "6555a6148e6f67f1907c7217903bf7af",
"assets/assets/images/icon_info.svg": "4ab7f567494363c35aaf4a881785277f",
"assets/assets/images/icon_link_account.svg": "bf253958789a878388c8e19320d01ff6",
"assets/assets/images/loading_atom_dark.webp": "0530f8e4bca9bdd015929631061a80b3",
"assets/assets/images/hbon_icon_wiki.png": "9e510a90d1b7e5e01e794e752929fd09",
"assets/assets/images/lending_slide1.jpg": "2020365fdb0e534c836020a7df640203",
"assets/assets/images/time_count_illustration.png": "fae556bb465f75358ecc9a6554319409",
"assets/assets/images/icon_assignment_library.svg": "c1268eb8f33a0b15c6dc667204bd960f",
"assets/assets/images/facebook_icon.svg": "3bbb4650ea9c855b148abab181816c23",
"assets/assets/images/icon_camera.svg": "66a15736bc91cfc80f43eafb291eda46",
"assets/assets/images/icon_like.svg": "a8162b9b1956f79c15f3638691a5da51",
"assets/assets/images/hocbaionha_logo_large.png": "e4ecad386d238e2b46e4784f8dfdf097",
"assets/assets/images/like_grey.webp": "ef787f9c4124fc6d309c987664e6abd4",
"assets/assets/images/like_dark.webp": "9e7533c400316a14432528c5f6d887b4",
"assets/assets/images/icon_bulb.svg": "32925a332b1bbd3aad84c5dd9dd19173",
"assets/assets/images/icon_report.svg": "7939a51d3f17874a75d498a12f47d295",
"assets/assets/images/empty_folder.svg": "827317b16d127175f2128e7f0bb3b4d4",
"assets/assets/images/icon_paper_clip.svg": "2d317378533b22827e9d0b19738ecafd",
"assets/assets/images/icon_camera_alt.svg": "97c6953233b192dccad772843695a5d5",
"assets/assets/images/icon_catalog.svg": "1688564635158e8bdae93aa0b8a06c6c",
"assets/assets/images/loading_atom.svg": "400eeffb49d61e20aca210a773a66af4",
"assets/assets/images/piggy_bank.svg": "1ce5f5de12c0df4683e8b26bb0ec38ab",
"assets/assets/images/reading_illustration.png": "63961776609ebb8f263792e07a74ad2c",
"assets/assets/images/hbon_icon_attach.png": "94e82f8bb4981cfb4e0736f8c8fc9c91",
"assets/assets/images/loading_book_dark.webp": "6c750cdaf5060c3d0370727b50186ff2",
"assets/assets/images/apple_icon.svg": "3c5affab7ef34e707d68661e6dbbfaf5",
"assets/assets/images/icon_snooze.svg": "f78d2ae7710ec9b60eb82e9ba8809750",
"assets/assets/images/icon_aac_file.svg": "58ce48d4e1954b87549c4260a3a0dd53",
"assets/assets/images/icon_wav_file.svg": "29f7604a999e2cfc9085dd3a61444166",
"assets/assets/images/icon_file_empty.svg": "037996320592496c33828c0d78721d28",
"assets/assets/images/link_student_step2_vi.jpg": "b775060d90996c6624e3e5e490423b12",
"assets/assets/images/icon_hot_tag.png": "aba06cb8df729f9740d83b1674e4761e",
"assets/assets/images/icon_classroom.svg": "8977abc75b6ac516918b50489346ee78",
"assets/assets/images/error_unauthorized_illustration.png": "fc9989812216e3d941fe0b7e38d93c33",
"assets/assets/images/hocbaionha_text.png": "3ab8c427bd3ba8274b61caf5e09d2837",
"assets/assets/images/searching_illustration.png": "27e7c9bfdfe7de72ea536340b3dab903",
"assets/assets/images/icon_groups.svg": "cd35846384aae5e98a27541835c5c5b8",
"assets/assets/images/icon_handwriting.svg": "fe1d40e9da32949c619d3280eab072b5",
"assets/assets/images/icons_background.svg": "f1bb163108b5ed3b8961a81aa4529c72",
"assets/assets/images/hocbaionha_cert_copyright.png": "8f06ce43677446554e3e5911ebca95b4",
"assets/assets/anims/error.json": "6f2cc9987ece7cb7a9133e6c0ba5dc66",
"assets/assets/anims/warning_check.flr": "ff4a110b8d905dedb4d4639a17399703",
"assets/assets/anims/loading.flr": "b6987a8e6de74062b8c002539d2d043e",
"assets/assets/anims/almost_correct_check.flr": "386ff74207138764689bf56917e69484",
"assets/assets/anims/info_check.flr": "f6b81c2aa3ae36418c13bfd36d11ac04",
"assets/assets/anims/search_not_found.json": "08f8528864085817831ebd90e1846d6a",
"assets/assets/anims/success_check.flr": "9d163bcc6f6b58566e0abde7761a67a0",
"assets/assets/anims/error_check.flr": "d9f54791d0d79935d22206966707e4b3",
"assets/assets/sounds/wrong_answer.wav": "8a1b4019034dff1cb614a8b01e33a034",
"assets/assets/sounds/almost_right_answer.wav": "86f5b7836fcf7d2e7d4a244729388a16",
"assets/assets/sounds/correct_answer.mp3": "caa6470ff6e88721f049ce3f85b99ae2",
"assets/assets/sounds/click.wav": "38494f675479adabe450c96c2e3d05a7",
"assets/assets/sounds/ding.wav": "d9753fd7fed472a1adb2dc0288819dee",
"assets/assets/fonts/Rounds_Black.otf": "4aa47bde10dae48172f599b4181ca75b",
"main.dart.js_2.part.js": "7b6057d0eaab317b0b1d02041e2abd33"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
