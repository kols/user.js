// my prefs
user_pref("_user.js.parrot", "my prefs");

// url, search bar open in new tab
user_pref("browser.search.openintab", true);
user_pref("browser.urlbar.openintab", true);

// my overrides
user_pref("_user.js.parrot", "my overrides");

// no letterboxing
user_pref("privacy.resistFingerprinting.letterboxing", false);

// disable password saving
user_pref("signon.rememberSignons", false);

// do not track
user_pref("privacy.donottrackheader.enabled", true);

// do not delete cookies
/// delegated to Cookie AutoDelete extension
user_pref("network.cookie.lifetimePolicy", 0);

// enable chrome/userChrome.css in profile folder
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("ui.prefersReducedMotion", 1);

// always send referer header (mitigate auth problems)
user_pref("network.http.referer.XOriginPolicy", 0);
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);

// resume previous session
user_pref("browser.startup.page", 3);
/// do not clear data on shutdown
user_pref("privacy.clearOnShutdown.cache", false);
user_pref("privacy.clearOnShutdown.downloads", false);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.cookies", false);

user_pref("dom.serviceWorkers.enabled", true);                                                                          user_pref("dom.push.enabled", true);
