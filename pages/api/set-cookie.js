// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cookie from "cookie";

export default (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", req.body.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "strict",
      path: "/",
    })
  );
  res.statusCode = 200;
  res.json({ success: true });
};