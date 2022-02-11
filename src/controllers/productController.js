exports.home = (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM product', (err, products) => {
            if(err) {
                res.json(err);
            }
            console.log(products);
            res.render('products', {
                data: products
            })
        })
    })
    
} 