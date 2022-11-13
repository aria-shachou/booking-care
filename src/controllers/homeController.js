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

const displayGetCRUD = async (req, res) => {
  let data = await CRUDservices.getAllUser();

  return res.render("displayCRUD.ejs", {
    data,
  });
};

const getEditCRUD = async (req, res) => {
  const userId = req.query.id;
  if (userId) {
    const userData = await CRUDservices.getUserInfoById(userId);
    return res.render("editCRUD.ejs", {
      user: userData,
    });
  }
  return res.send("User not found!");
};

const putCRUD = async (req, res) => {
  const data = req.body;
  const allUser = await CRUDservices.updateUserData(data);
  return res.render("displayCRUD.ejs", {
    data: allUser,
  });
};

const deleteCRUD = async (req, res) => {
  const id = req.query.id;
  if (id) {
    await CRUDservices.deleteUserById(id);
    return res.send("Delete successfully!");
  } else {
    return res.send("User nor found!");
  }
};

module.exports = {
  getHomePage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
