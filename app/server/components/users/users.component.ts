class ServerUsersComponent {
    beforeRegister() {
        this.is = 'server-users';
    }

    ready() {
        /*
         * GET userlist.
         */
        this.userListHandler = (req, res) => {
            const db = req.db;
            const collection = db.get('userlist');
            collection.find({}, {}, (e,docs) => {
                res.json(docs);
            });
        };

        /*
         * POST to adduser.
         */
        this.addUserHandler = (req, res) => {
            const db = req.db;
            const collection = db.get('userlist');
            collection.insert(req.body, (err, result) => {
                res.send(
                    (err === null) ? { msg: '' } : { msg: err }
                );
            });
        };

        /*
         * DELETE to deleteuser.
         */
        this.deleteUserHandler = (req, res) => {
            const db = req.db;
            const collection = db.get('userlist');
            const userToDelete = req.params.id;
            collection.remove({ '_id' : userToDelete }, (err) => {
                res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
            });
        };
    }
}

Polymer(ServerUsersComponent);
