export default class MyWebApp {
    constructor() {
        this.app = new Vue({
            el: '#app',
            data: {
                message: 'Hello, World! This is a sample Vue.js application.',
                isLoading: true,
                error: null
            },
            methods: {
                async fetchData() {
                    try {
                        const response = await axios.get('http://localhost:8000/api/data');
                        this.message = response.data.message;
                        console.log(this.message);
                        if (response.status === 200) {
                            this.isLoading = false;
                            this.error = null;
                        } else {
                            this.error = response.data.message;
                        }
                    } catch (error) {
                        console.error(error);
                        this.isLoading = false;
                    }
                },
                async navigate() {
                    if (this.isLoading || !this.app.$data.loadError) {
                        this.app.$nextTick(() => {
                            this.$el.classList.add('loading');
                            setTimeout(() => {
                                this.app.$el.classList.remove('loading');
                            }, 300);
                        });
                    } else {
                        await this.fetchData();
                    }
                },
                async deleteItem(item) {
                    try {
                        const response = await axios.delete(`http://localhost:8000/api/items/${item}`);
                        console.log(response.data.message);
                        if (response.status === 200) {
                            window.location.href = '/items';
                        } else {
                            alert(response.data.message);
                        }
                    } catch (error) {
                        console.error(error);
                        this.app.$el.classList.add('loading');
                        setTimeout(() => {
                            this.app.$el.classList.remove('loading');
                        }, 300);
                    }
                },
                async updateItem(item, data) {
                    try {
                        const response = await axios.put(`http://localhost:8000/api/items/${item}`, data);
                        console.log(response.data.message);
                        if (response.status === 200) {
                            window.location.href = '/items';
                        } else {
                            alert(response.data.message);
                        }
                    } catch (error) {
                        console.error(error);
                    }
                },
            },
            mounted() {
                this.fetchData();
            }
        });
    }
}
