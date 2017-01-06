class ServerIndexComponent {
    beforeRegister() {
        this.is = 'server-index';
    }

    ready() {
        this.indexHandler = (req, res) => {
            res.render('index', { title: 'Express' });
        };
    }
}

Polymer(ServerIndexComponent);
