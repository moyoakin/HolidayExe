

const _counter = new WeakMap();
class User {
    constructor(userName) {
        this.userName = userName;
        let counter = _counter.get(this);
        console.log(counter);
       if(counter === undefined){
           counter = 1;
       }else{
           counter++;
           _counter.delete(this);
       }
        _counter.set(this, counter);
    }

    static get userCount() {
        return _counter.get(this);
    }

}

const newUser = new User('wiz');
const newUser1 = new User('king');

console.log(_counter);
console.log(User.userCount);