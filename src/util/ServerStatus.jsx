/**
 * A function that checks the status of a Minecraft server.
 * @param {string} ip - The IP address of the server to check.
 * @returns {Promise} - A Promise that resolves to an object with information about the server status.
 */
export default function ServerStatus(ip) {
    return new Promise(async (resolve, reject) => {
      var requestOptions = {
        method: 'GET'
      }
      await fetch('https://api.mcsrvstat.us/2/' + ip, requestOptions)
        .then(res => res.json())
        .then(res => {
          if(res.online) {
            console.log(res)
            resolve(res);
          } else {
            resolve({
              "status": false,
              "message": "The server is currently unavailable..."
            });
          }
        })
        .catch(err => reject(err))
    })
  }
  