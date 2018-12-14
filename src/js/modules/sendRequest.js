// функция подготовки url'а для GET запроса
function sendRequest(data, onSuccess) {
  let xhr = new XMLHttpRequest;

  xhr.open('GET', data);

  xhr.send();

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      const responseObj = JSON.parse(xhr.responseText);

      onSuccess(responseObj);


      // const wrap = document.querySelector(bookCardTemplate.wrap);

      // if (wrap.children) {
      //   wrap.innerHTML = '';
      // }
      // console.log(request.items);
      // addPage(request.items, bookCardTemplate);

    } else {

    }
  }
}

export default sendRequest
