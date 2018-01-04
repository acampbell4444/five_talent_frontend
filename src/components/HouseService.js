import axios from 'axios';

class HouseService {

  sendData(data) {
    axios.post('http://localhost:4200/houses/add/post', {
      house: data
    })
    .then(res => this.setState({ houses: res.data }))
    .catch(err => console.log(err))
  }

  updateData(data, id){
    axios.post('http://localhost:4200/houses/update/'+id, {
      house: data
    })
    .then(res => this.setState({ houses: res.data }))
    .catch(err => console.log(err))
  }

  deleteData(id){
    axios.get('http://localhost:4200/houses/delete/'+id)
    .then().catch(err => console.log(err))
  }
}

export default HouseService;
