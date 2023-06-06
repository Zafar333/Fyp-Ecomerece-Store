import jwt from "jsonwebtoken";

export const GenerateToken = (user, data, resp, next) => {
  let id = user;
  if (user && data) {
    jwt.sign({ id }, process.env.SECRET, { expiresIn: "5h" }, (err, token) => {
      if (err) {
        next(err);
      }

      return resp.json({ ...data, user: token });
    });
  }
};
