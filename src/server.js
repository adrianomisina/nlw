require('express')()
.get("/", (req, res) => {
    return res.sendFile('./src/views/index.html');
    console.log('my dir', __dirname)})
.get("/study", (req, res) => {
    return res.send("Study")
})
.listen(3000)
