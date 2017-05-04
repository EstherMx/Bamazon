
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "forever",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});


 // TODO: RUN AND DISPLAY ALL THE ITEMS AVAILABLE
function showTable(ViewTable){
  var table = new Table({
    head: ['item_id', 'product_name', 'department_name', 'price', 'stock_quantity', 'description']
  });
  connection.query('SELECT * FROM products', function(err, res){
    if(err) throw err;
    for (var i =0; i<res.length; i++){
      table.push([res[i].item_id, res[i].product_name, res[i].department_name, '$'+res[i].price.toFixed(2), res[i].stock_quantity, res[i].description]);
    }
    //-----                                                                                                                                                                             
    console.log(table.toString());
    //----                                                                                                                                                                              
    if (ViewTable != undefined) {
      ViewTable();
    }
    //userPrompts();                                                                                                                                                                    
  });
}

var runSearch = function() {
   inquirer.prompt({
    name: "item_id",
    type: "input",
    message: "What's the ID of the product you would like to buy?"
  }).then(function(answer) {
    console.log(answer.item_id);
    connection.query("SELECT * FROM products WHERE ?", { item_id: answer.item_id }, function(err, res) {
      console.log( " item_id: " + res[0].item_id + " || product: "
        + res[0].product_name + " || department: " + res[0].department_name  + " || price: " + res[0].price  + " || stock_quantity : " + res[0].stock_quantity);
      runSearch();
    });
  });
};

var runSearch = function() {
   inquirer.prompt({
    name: "quantity",
    type: "input",
    message: "How many units of the product you would like to buy?"
  }).then(function(answer) {
    console.log(answer.);
    connection.query("SELECT * FROM products WHERE ?", { item_id: answer.item_id }, function(err, res) {
      console.log( " item_id: " + res[0].item_id + " || product: "
        + res[0].product_name + " || department: " + res[0].department_name  + " || price: " + res[0].price  + " || stock_quantity : " + res[0].stock_quantity);
      runSearch();
    });
  });
};


      
// item_item_id INTEGER(10) NOT NULL auto_increment,
// product_name varchar(20) not null,
// department_name varchar(20) not null,
// price decimal (5,2) not null,
// stock_quantity      
   












//-------------------------For the table to be viewed by the user-----------------------//                                                                                              
function showTable(ViewTable){
  var table = new Table({
    head: ['item_item_id', 'product_name', 'department_name', 'price', 'stock_quantity', 'description']
  });
  connection.query('SELECT * FROM products', function(err, res){
    if(err) throw err;
    for (var i =0; i<res.length; i++){
      table.push([res[i].item_item_id, res[i].product_name, res[i].department_name, '$'+res[i].price.toFixed(2), res[i].stock_quantity, res[i].description]);
    }
    //-----                                                                                                                                                                             
    console.log(table.toString());
    //----                                                                                                                                                                              
    if (ViewTable != undefined) {
      ViewTable();
    }
    //userPrompts();                                                                                                                                                                    
  });
}