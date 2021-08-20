const app = Vue.createApp({
    data(){
        return{
            product: 'Socks',
            description: 'This is a comfortable sock',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.google.com',
            inventory: 9,
            showIfTrue: true
        }
    }
})