const express = require("express");
const app = express();

app.use(express.json());

let customers = [
  { id: 1, name: "Dev Samurai", site: "https://devsamurai.com.br/" },
  { id: 2, name: "Google", site: "https://www.google.com.br/" },
  { id: 3, name: "YouTube", site: "https://www.youtube.com/" },
];

// list Customers
app.get("/customers", (req, res) => {
  return res.json(customers);
});

// Show specific customer
app.get("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customer = customers.find((item) => item.id === id);
  const status = customer ? 200 : 404;

  return res.status(status).json(customer);
});

// Post Customer
app.post("/customers", (req, res) => {
  const { name, site } = req.body;
  const id = customers[customers.length - 1].id + 1;

  const newCustomer = { id, name, site };

  customers.push(newCustomer);

  return res.status(201).json(newCustomer);
});

// Updating Customers
app.put("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, site } = req.body;

  const index = customers.findIndex((item) => item.id === id);
  const status = index ? 200 : 404;

  if (index >= 0) {
    customers[index] = { id: parseInt(id), name, site };
  }

  return res.send(status).json(customers[index]);
});

app.listen(8080);
