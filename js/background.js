chrome.contextMenus.create ({
    "title": "select wish list to move items from saved for later to",
    "contexts": ["selection"],
    "onclick": openTab()
});

function openTab(){
    return function(info, tab){
      let text = info.selectionText;
      let wishlistLink = "https://www.amazon.com/hz/wishlist/ls/ref=cm_wl_your_lists" + format(text)
      chrome.tabs.create ({index: tab.index + 1, url: wishlistLink, selected: true});
    }
};


//somehow need to get the code 3O6MPC8BWUEPE in my default wishlist from the URL in the list of wishlists and then put that into the function moveToWishList() 
//get wishlist URL and strip?
//https://www.amazon.com/hz/wishlist/ls/ref=cm_wl_your_lists
//https://www.amazon.com/hz/wishlist/ls/3O6MPC8BWUEPE
//

---

function moveToWishList() {
	var query = document.querySelectorAll("#sc-saved-cart input[value='Move to Wish List']")
	if (query.length) {
		query[0].click();
	}
	var query2 = document.querySelectorAll("#registry-3O6MPC8BWUEPE a")
	if (query2.length) {
		query2[0].click();
	}
	if (query.length > 1) {
		setTimeout(moveToWishList,10000);
	}
	else {
		console.log('Finished');
	}
}
moveToWishList();
