const contactModel = require("../models/model");

module.exports.getData = async (req, res) => {
  const data = await contactModel.find();
  res.send(data);
};

module.exports.getDataById = async (req, res) => {
  const { _id } = req.body;
  const data = await contactModel.findById(_id);
  res.send(data);
};

module.exports.saveData = async (req, res) => {
  const { firstName, lastName, phone, email, address } = req.body;

  contactModel
    .create({
      firstName,
      lastName,
      phone,
      email,
      address,
    })
    .then((data) => {
      console.log("added successfully...");
      console.log(data);
      res.send(data);
    });
};

module.exports.updateData = async (req, res) => {
  const { _id, firstName, lastName, phone, email, address } = req.body;
  contactModel
    .findByIdAndUpdate(_id, { firstName, lastName, phone, email, address })
    .then(() => res.send("update successfully"))
    .catch((err) => console.log(err));
};

module.exports.deleteData = async (req, res) => {
  const { _id } = req.body;
  contactModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => console.log(err));
};
