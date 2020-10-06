fetch("/data").then((responce) => {
  responce.json().then((data) => {
    var table = document.querySelector("table");
    var tbody = table.querySelector("tbody");

    for (var i of data) {
      if (i.address === data[0].address) {
        var address = "Not mentioned";
      } else {
        var address = i.address.street + ", " + i.address.city;
      }
      if (i.company === data[0].company) {
        var company = "Not mentioned";
      } else {
        var company = i.company.name;
      }
      tbody.innerHTML += `<tr>
            <th scope="row">${i.id}</th>
            <td>${i.name}</td>
            <td>${i.username}</td>
            <td>${i.email}</td>
            <td>${address}</td>
            <td>${i.phone}</td>
            <td>${i.website}</td>
            <td>${company}</td>
          </tr>`;
    }
  });
});
