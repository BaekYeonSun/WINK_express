module.exports = function(app, Board){
    app.post('/board', function(req, res){
        const board = new Board();
        board.title = req.body.title;
        board.body = req.body.body;

        board.save(function(err){
            if(err){
                console.error(err);
                res.json({message : 'fail'});
                return;
            }
            res.json({message : 'success'});
        });
    });

    app.get('/board/:title', function(req, res){
        Board.findOne({title: req.params.title}, function(err, board){
            if(err) return res.status(500).json({error: err});
            if(!board) return res.status(404).json({error: '해당 제목의 게시글이 존재하지 않습니다.'});
            res.json(board);
        })
    });
}