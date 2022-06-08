chrome.contextMenus.create ({
    "title": "select wish list to move items from saved for later to",
    "contexts": ["selection"],
    "onclick": openTab()
});

function openTab(){
    return function(info, tab){
      let text = info.selectionText;
      let wishlistLink = "https://www.amazon.com/hz/wishlist/ls/ref=cm_wl_your_lists"
      chrome.tabs.create ({index: tab.index + 1, url: wishlistLink, selected: true});
    }
};
