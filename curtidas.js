const feedJSON = require('./feed.json');

function curtir(feed, id) {
    const post = feed.find(item => item.id === id);
}

    if (!post) {
    console.log("Post não encontrado.");
    return;
}

    if (!post.publicado ) {
    console.log("Não é possível curtir um rascunho");
    return;
}

post.metricas.curtidas++;
console.log(`Post de @${post.autor} agora tem ${post.metricas.curtidas} curtidas.`);
}

function descurtir(feed, id) {
    const post = feed.find(item => item.id === id)

    if(post.metricas.curtidas === 0) {
        console.log
    }
}


