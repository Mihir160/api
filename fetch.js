// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


  // function loadData(){
  //   url = 'https://jsonplaceholder.typicode.com/todos/1';
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // }


  function loadData1(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUser(data))
  }

  function displayUser(data){
    const ul = document.getElementById('users-list');
    for(let user of data){
      const li =document.createElement('li');
      li.innerText = user.name;
      ul.appendChild(li);
    }
  }