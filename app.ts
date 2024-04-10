interface Shop {
    name: string;
    items: string[];
  }
  
  const shops: Shop[] = [
    { name: 'revathi home needs', items: ['Milk', 'nivea soap', 'sunflower oil','vasline','maggi'] },
    { name: 'velayutham stores', items: ['wheat flour', 'nivea soap', 'ponds coal face wash'] },
    { name: 'reliance', items: ['nivea soap', 'ponds moisterizer', 'fair and lovely'] }
  ];
  
  class ShopSelector {
    constructor(private shops: Shop[]) {}
  
    renderShops() {
      const shopListElement = document.getElementById('shop-list');
      if (shopListElement) {
        shopListElement.innerHTML = '';
        this.shops.forEach(shop => {
          const div = document.createElement('div');
          div.classList.add('shop');
          div.textContent = shop.name;
          div.addEventListener('click', () => this.showItems(shop.items));
          shopListElement.appendChild(div);
        });
      }
    }
  
    showItems(items: string[]) {
      const itemListElement = document.getElementById('item-list');
      if (itemListElement) {
        itemListElement.innerHTML = '';
        items.forEach(item => {
          const div = document.createElement('div');
          div.classList.add('item');
          div.innerHTML = `<p class="item-title">${item}</p>`;
          itemListElement.appendChild(div);
        });
      }
    }
  }
  
  const shopSelector = new ShopSelector(shops);
  shopSelector.renderShops();
  