
function twitchCheck(){$.getJSON("https://api.twitch.tv/kraken/streams/mickagamer_?client_id=API_KEY", function(channel) {
 
  if (channel["stream"] == null) {
  
    linkUrl = "https://www.youtube.com/user/micka69250?sub_confirmation=1&?igr=mickagamer";
    chrome.browserAction.setIcon({path: "img/offline.png"});
  
  } else {
      linkUrl = "http://twitch.tv/mickagamer_/";
      chrome.browserAction.setIcon({path: "img/online.png"});
 
    }
})};
var linkUrl = "";
twitchCheck();

chrome.alarms.create('twitchAlarm', {delayInMinutes: 5, periodInMinutes: 5});

chrome.alarms.onAlarm.addListener(function( twitchAlarm ) {
  twitchCheck();
});

chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = linkUrl;
    chrome.tabs.create({ url: newURL });
});
