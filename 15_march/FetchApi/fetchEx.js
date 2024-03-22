function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  // Example usage:
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  
  fetchData(apiUrl)
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  