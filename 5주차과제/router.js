module.exports = function(app, User){
    app.post('/board', function(req, res){
        const user = new User();
        user.title = req.body.title;
        user.body = req.body.body;

        user.save(function(err){
            if(err){
                console.error(err);
                res.json({message : 'fail'});
                return;
            }
            res.json({message : 'success'});
        });
    });

    app.get('/board/:title', function(req, res){
        User.findOne({title: req.params.title}, function(err, user){
            if(err) return res.status(500).json({error: err});
            if(!user) return res.status(404).json({error: '해당 제목의 게시글이 존재하지 않습니다.'});
            res.json(user);
        })
    });
}