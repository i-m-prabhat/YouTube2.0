import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com/auto-complete/';

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {q: 'desp', hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': '1e8c369534mshc97cd60fe30c95cp1f293bjsn188a05ff24f3',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};