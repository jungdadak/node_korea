export default function date_finger_princess(request, response) {
  //   let today = new Date();
  //   let year = today.getFullYear();
  //   let month = today.getMonth();
  //   let date = today.getDate();
  //   let day = today.getDay();
  //   let time = today.getHours();
  //   let min = today.getMinutes();
  //   let sec = today.getSeconds();

  let today = new Date().toLocaleString();

  console.log(today);

  if (request.method == 'GET') {
    return response.status(200).json(today);
  }
}
