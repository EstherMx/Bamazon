var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "forever",
    database: "Bamazon"
})

connection.connect(function(err) {
  if (err) throw err;
  console.log("");
  showTable();
  })


var showTable = function() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(" itemId: " + res[i].item_id + " || product: " + res[i].product_name + " || department: " + res[i].department_name + " || price: " + res[i].price + "|| quantity: " + res[i].stock_quantity);

        }
    });
}


var selectProduct = function() {
inquirer.prompt([

  // Here we create a basic text prompt.
  {
    type: "input",
    message: "What is the ID of the product you would like to buy?",
    name: "id"
  },
  {
    type: "input",
    message: "How many units of the product you would like to buy?",
    name: "units"
  }

]).then(function(user) {
    
    var the_index = user.id - 1;

connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  var parse_stock = parseInt(res[the_index].stock_quantity);
   var parse_userUnits = parseInt (user.units);
   var quantity_left = parse_stock - parse_userUnits;
  var total_cost = res[the_index].price * user.units;
  var sales= res[the_index].product_sales + total_cost;
  
  if (parse_stock >= parse_userUnits){
    connection.query('UPDATE products SET ? WHERE ?', [{
        stock_quantity: quantity_left
    },{
        item_id: user.id
    }], function(err, res) {
        
        console.log('Your order was successfully processed! The cost of your purchase is'
         + " " + "$"+ total_cost );
    })
    connection.query('UPDATE products SET ? WHERE ?', [{
        product_sales: sales
    },{
        item_id: user.id
    }], function(err, res) {
    })

  }
  else{
    console.log('Insufficient quantity!');
    console.log('Please, place another order.');
    selectProduct();
  }
});
 

});
};
selectProduct();

