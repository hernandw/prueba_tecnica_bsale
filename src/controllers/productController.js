exports.home = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM product", (err, products) => {
      if (err) {
        res.json(err);
      }
      console.log(products);
      res.render("products", {
        data: products,
      });
    });
  });
};

exports.busqueda = (req, res, next) => {
    const { id } = req.params.id;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM product", (err, rows)=>{
            if(err){
                console.log(err); 
                return next("mysql Error, check your query");
            }
            
            res.render('edit', {title: "Edit user", data: rows});
        });
    });
}
