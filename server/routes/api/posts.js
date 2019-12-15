const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get post
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});


//add post

router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        id: req.body.id,
        isim: req.body.isim,
        resim: req.body.resim,
        fiyat: req.body.fiyat
    });
    res.status(201).send();
});

//delete post

router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID (req.params.id)});
    res.status(200).send();
});



async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://alpay:123@vuedore-oociv.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('VueDore').collection('posts');
}


module.exports = router;