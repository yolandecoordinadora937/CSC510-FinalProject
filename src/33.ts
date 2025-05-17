export class MyWebApp {
    constructor() {
        this.app = new express();
        this.port = process.env.PORT || 5000;
        this.createServer();
    }

    async start() {
        const server = await this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });

        try {
            const { error } = await axios.get('http://localhost:${this.port}/api/v1/health');
            if (error) throw error;
            console.log("App is up and running.");
        } catch (err) {
            console.error(err);
        }
    }

    async getRoutes() {
        this.app.get('/api/v1/routes', (req, res) => {
            res.send(`My routes here`);
        });
    }
}

export default MyWebApp;
