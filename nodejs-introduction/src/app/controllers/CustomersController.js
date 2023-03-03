let customers = [
  { id: 1, name: "Mojang", site: "https://www.minecraft.net/pt-pt" },
  { id: 2, name: "Youtube", site: "https://www.youtube.com/" },
  { id: 3, name: "Dev Samurai", site: "https://devsamurai.com.br/" },
];

class CustomersController {
  // Listagem dos registros
  index(req, res) {
    return res.json();
  }

  // Recupera 1 registro
  show(req, res) {
    const id = parseInt(req.params.id);
    const customer = customers.find((item) => item.id === id);
    const status = customer ? 200 : 404;

    return res.status(status).json(customer);
  }

  // Cria novo registro
  create(req, res) {
    const { name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;

    const newCustomer = { id, name, site };
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
  }

  // Atualiza dados de registro
  update(req, res) {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;

    const index = customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      customers[index] = { id: parseInt(id), name, site };
    }

    return res.status(status).json(customers[index]);
  }

  // Exclui um registro
  destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      customers.splice(index, 1);
    }

    return res.status(status).json();
  }
}

module.exports = new CustomersController();
