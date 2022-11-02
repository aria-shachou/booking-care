import db from "../models/index";
import CRUDservices from "../services/CRUDservices";
const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll();
    console.log(JSON.stringify(data));
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

const getCRUD = (req, res) => {
  res.render("crud");
};

const postCRUD = async (req, res) => {
  const message = await CRUDservices.createNewUser(req.body);
  console.log(message);
  return res.send("post successfully");
};

module.exports = {
  getHomePage,
  getCRUD,
  postCRUD,
};
