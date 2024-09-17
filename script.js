// for (let i = 0; i <= 10; i++) {
//     console.log(i);

// }

// const obj = {
//     name: 'daniyar',
//     job: 'bissnes',
// }

// const arr = ['apple', 'melon', 'grain']

// console.log(arr[1]);

document
  .getElementById('telegramForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '7468903894:AAHQyBppSQtHNdyEYIsscNZs01X7d6fEVDI'; // Замените на ваш токен
    const chat_id = '-4574918556'; // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;

    const data = {
      chat_id: chat_id,
      text: message,
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          //   alert('Message sent!');

          setTimeout(() => {
            location.reload();
          }, 3000);
          const thanks = document.querySelector('#thanks');
          thanks.innerText = 'спасибо';
        } else {
          alert('Error sending message.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error sending message.');
      });
  });
