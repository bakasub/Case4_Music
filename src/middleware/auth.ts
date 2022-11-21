import jwt from 'jsonwebtoken'
export const SECRET = 'Secret';
export const auth = (req,res,next) => {
  let authorization=req.headers.authorization;
  if (authorization){

  }
}