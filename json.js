const shop ={
    owner: 'Alia',
    address: {
        street : 'kochukhet  voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products : ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}

const shopJson = JSON.stringify(shop);
console.log(shopJson);

const shopObj = JSON.parse(shopJson);
console.log(shopObj);