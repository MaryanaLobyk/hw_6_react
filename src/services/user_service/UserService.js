export  class UserService {
    url = "https://jsonplaceholder.typicode.com/users";

    getUser(id) {
        return  fetch(`${this.url}/${id}`).then(value => value.json())
    }

}