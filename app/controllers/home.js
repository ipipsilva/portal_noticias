module.exports.index = function(application, req, res){

    var connection = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    noticiasDAO.get5UltimasNoticias(function(erro, result){

        if(erro) console.log(erro);

        res.render('home/index', {noticias: result});
    });
}