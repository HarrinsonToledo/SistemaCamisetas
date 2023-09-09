import oracledb from 'oracledb';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  user: process.env.oracleUser,
  password: process.env.oraclePassword,
  connectString: 'localhost:1521/xe'
};

async function getData(req, res) {
  let conn
  let result

  try {
    conn = await oracledb.getConnection(config)
    console.log("Se realizo una solicitud a la base de datos")
    result = await conn.execute("select * from estudiante")

  } catch (err) {
    console.log('Ouch!', err)
  } finally {
    if (conn) {
      await conn.close()
    }
  }
  if(result.rows.length == 0) {
      return res.send("No se obtuvo nada")
  } else {
      return res.json(result.rows)
  }
}

export default {getData};