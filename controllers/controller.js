
exports.homepage = async (req, res) => {
  try {
    await res.render("home");
  } catch (error) {
    res.status(404).send({ message: error.message || "Error Occured" });
  }
};

exports.projects = async (req, res) => {
  try {
    await res.render("projects", { title: "Projects" });
  } catch (error) {
    res.status(404).send({ message: error.message || "Error Occured" });
  }
};

exports.sign_in = async (req, res) => {
  try {
    res.render("sign_in", { title: "Sign in" });
  } catch (error) {
    res.status(404).send({ message: error.message || "Error Occured" });
  }
};

exports.sign_up = async (req, res) => {
  try {
    res.render("sign_up", { title: "Sign up" });
  } catch (error) {
    res.status(404).send({ message: error.message || "Error Occured" });
  }
};

exports.about = async (req, res) => {
  try {
    res.render("about", { title: "About" });
  } catch (error) {
    res.status(404).send({ message: error.message || "Error Occured" });
  }
};
