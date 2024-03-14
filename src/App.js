import axios from 'axios';

import './App.css';
import MainPage from './components/MainPage/MainPage';
import MapContainer from './components/MapContainer/MapContainer';

export const adapter = axios.create({
  withCredentials: true,
	httpsAgent: { 
    keepAlive: true
  },
  baseURL: "http://127.0.0.1:7000/api/"
})

adapter.get("getCSRFToken")
  .then(response => {
    adapter.defaults.headers.common['X-CSRF-Token'] = response.data.csrftoken
  })
  .catch(error => {
    console.log(error)
  })

const App = () => {
  return (
    <div id='app'>
      <MainPage />
      <MapContainer />
    </div> 
  )
}

export default App