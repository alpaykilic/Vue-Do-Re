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
        resim: req.body.resim,
        isim: req.body.isim,
        fiyat: req.body.fiyat,
        taksit: req.body.taksit
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

    return client.db('VueDore').collection('piyanoUrun');
}


module.exports = router;