const pool = require("../../config/DB");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into register(name, username, pword, email) 
                values(?,?,?,?)`,
      [
        data.name,
        data.username,
        data.pword,
        data.email
        
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
}

getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from register where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
  getUserByUserid: (id, callBack) => {
    pool.query(
      `select id,name,username,pword,email from register where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
  getUsers: callBack => {
    pool.query(
      `select id,name,username,email from register`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
  updateUsers: (data, callBack) => {
    pool.query(
      `update register set name=?, username=?,  email=?, pword=? where id = ?`,
      [
        data.name,
        data.username,
        data.pword,
        data.email
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from register where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }

  