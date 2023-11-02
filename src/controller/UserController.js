const User = require("../model/User");

module.exports = {
  async registerUser(req, res) {
    const { email, password, repeat_password } = req.body;

    if (password !== repeat_password) {
      return res.status(400).json({ error: "As senhas não coincidem" });
    }

    try {
      const newUser = await User.create({ email, password });
      return res
        .status(201)
        .json({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
      return res
        .status(500)
        .json({
          error: "Falha ao cadastrar o usuário",
          message: error.message,
        });
    }
  },

  async loginUser(req, res) {
    const { email, password } = req.body;
    console.log(email, password);
    try {
      const user = await User.findOne({
        where: { email: email },
      });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }
      if (user.password === password) {
        return res.status(200).json({ access: true, id: user.id });
      } else {
        return res.status(403).json({ message: "Senha incorreta." });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
