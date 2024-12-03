import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
  }
  
  const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
  }

  const remove = (id, newObject) => {

    console.log('delete id: ' + id)

    const request = axios.delete(`${baseUrl}/${id}`, newObject)
    .then(response => {
      console.log(`deleted post with ID ${id}`);
    })
  }

  export default { getAll, create, update, remove }