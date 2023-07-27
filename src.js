// #region API
// const fetch = require('node-fetch');

const getData = async () => {
  const url = 'https://hafez.p.rapidapi.com/fal';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c8e6bd8884msh5eebf499b34a12ap1d79d6jsn98df11354ed7',
      'X-RapidAPI-Host': 'hafez.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    throw error;
  }

}

// #endregion
const btn = document.getElementById('btn')
const p = document.querySelector('p')

const refreshFal = async () => {
  let data = await getData();
  let fal = data.text;
  p.innerText = fal;
}

btn.addEventListener('click',refreshFal)