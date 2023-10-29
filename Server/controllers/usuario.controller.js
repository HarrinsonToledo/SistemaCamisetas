import oracledb from 'oracledb';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  user: process.env.oracleUser,
  password: process.env.oraclePassword,
  connectString: process.env.stringConnection
};

async function getRoles(req, res) {
  let conn
  let result

  try {
    conn = await oracledb.getConnection(config)
    result = await conn.execute("select * from rol")

  } catch (err) {
    console.log('Ouch!', err  )
  } finally {
    if (conn) {
      await conn.close()
    }
  }
  if(result.rows.length == 0) {
      return res.status(400).send("Error roles no recuperados")
  } else {
      return res.json(result.rows)
  }
}

export { getRoles };