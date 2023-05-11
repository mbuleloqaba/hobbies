$(document).ready(function() {
    var savedItems = [];
  
    $('.save-btn').on('click', function() {
      var item = $(this).closest('.item');
      var itemId = item.attr('id');
      var itemName = item.find('.item-name').text();
      var itemPrice = item.find('.item-price').text();
  
      savedItems.push({
        id: itemId,
        name: itemName,
        price: itemPrice
      });
  
      $('#saved-count').text('(' + savedItems.length + ')');
      alert('Item saved!');
  
      var savedItemsJSON = JSON.stringify(savedItems);
      localStorage.setItem('savedItems', savedItemsJSON);
    });
  });
  
  // on the saveditemsforlater.html page
  $(document).ready(function() {
    var savedItemsJSON = localStorage.getItem('savedItems');
    var savedItems = JSON.parse(savedItemsJSON);
  
    if (savedItems && savedItems.length > 0) {
      var savedItemsList = $('#saved-items-list');
  
      for (var i = 0; i < savedItems.length; i++) {
        var savedItem = savedItems[i];
        var itemHtml = '<li>' +
          '<h3 class="item-name">' + savedItem.name + '</h3>' +
          '<p class="item-price">' + savedItem.price + '</p>' +
          '</li>';
        savedItemsList.append(itemHtml);
      }
    }
    
    $('.like-btn').on('click', function() {
        var item = $(this).parent();
        var itemId = item.attr('id');
        var likes = []
        
        if (!likes[itemId]) {
          likes[itemId] = 0;
        }
        
        likes[itemId]++;
        var likeCount = likes[itemId];
        
        item.find('.like-count').text(likeCount);
        alert('Item liked!');
      });
    });
  