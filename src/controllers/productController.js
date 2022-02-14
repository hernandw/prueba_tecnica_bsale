const mysql = require('mysql2');
const connection = require('../config/config');


exports.home = (req, res) => {
  const sql = "SELECT * FROM product";
  connection.query(sql, (error, results) => {
    if (error) {
      console.log({
        message: "Error: " +error
      });
    }
    if (results.length > 0) {
      res.render('products', {
        data: results
      })
      
    } else {
      res.send("Not result");
    }
  });
};

exports.api = (req, res) => {
  const sql = "SELECT * FROM product";
  connection.query(sql, (error, results) => {
    if (error) {
      console.log({
        message: "Error: " +error
      });
    }
    if (results.length > 0) {
      const resultados = res.json(results)
      
    } else {
      res.send("Not result");
    }
  });
};
  
exports.busqueda = (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM product WHERE id = ${id}`;
  connection.query(sql, (error, result) => {
    if (error) throw error;

    if (result.length > 0) {
      res.render('resultProduct', {
        data: result
        
      });
    } else {
      res.send('Not result');
    }
  });
}
