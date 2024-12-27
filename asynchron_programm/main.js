/* 1
// Функция, которая возвращает Promise с задержкой
function delay(seconds) {
    return new Promise(resolve => {
      setTimeout(resolve, seconds * 1000);
    });
  }
  
  // Функция для вывода сообщений с задержкой
  async function countdown() {
    for (let i = 3; i > 0; i--) {
      await delay(1); // Задержка 1 секунда
      console.log(`${i}...`);
    }
    console.log("Поехали!");
  }
  
  countdown(); */

/* 2
// Запрос данных о пользователе с помощью fetch
function getUserData() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        console.log(`Имя: ${data.name}`);
        console.log(`Адрес: ${data.address.street}, ${data.address.city}`);
      })
      .catch(error => console.error('Ошибка при получении данных:', error));
  }
  
  getUserData();

// Запрос данных о пользователе с использованием async/await
async function getUserDataAsync() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      console.log(`Имя: ${data.name}`);
      console.log(`Адрес: ${data.address.street}, ${data.address.city}`);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }
  
  getUserDataAsync(); */

/* 3
// Функция для выполнения параллельных запросов
async function getPostsData() {
    const urls = [
      'https://jsonplaceholder.typicode.com/posts/1',
      'https://jsonplaceholder.typicode.com/posts/2',
      'https://jsonplaceholder.typicode.com/posts/3'
    ];
  
    try {
      // Используем Promise.all для параллельного выполнения запросов
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const posts = await Promise.all(responses.map(res => res.json()));
      posts.forEach((post, index) => {
        console.log(`Пост ${index + 1}: ${post.title}`);
      });
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }
  
  getPostsData(); */

/* 4
// Функция для получения данных о пользователе и его постах последовательно
function getUserAndPosts() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(user => {
        console.log(`Имя пользователя: ${user.name}`);
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
      })
      .then(response => response.json())
      .then(posts => {
        posts.forEach(post => console.log(`Пост: ${post.title}`));
      })
      .catch(error => console.error('Ошибка:', error));
  }
  
  getUserAndPosts();

// Функция для получения данных о пользователе и его постах с использованием async/await
async function getUserAndPostsAsync() {
    try {
      const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const user = await userResponse.json();
      console.log(`Имя пользователя: ${user.name}`);
      
      const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
      const posts = await postsResponse.json();
      posts.forEach(post => console.log(`Пост: ${post.title}`));
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
  
  getUserAndPostsAsync(); */
  
/* 5
// Запрос к несуществующему URL с обработкой ошибки
function fetchNonExistentData() {
    fetch('https://jsonplaceholder.typicode.com/nonexistent')
      .then(response => {
        if (!response.ok) {
          throw new Error('Запрос не удался');
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error('Ошибка:', error));
  }
  
  fetchNonExistentData();

// Запрос к несуществующему URL с обработкой ошибки через try/catch
async function fetchNonExistentDataAsync() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/nonexistent');
      if (!response.ok) {
        throw new Error('Запрос не удался');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
  
  fetchNonExistentDataAsync(); */
  