const user = {
    name:'Adit',
    cities:['Harapan kita','Karawaci','Tangerang'],
    printTempatTInggal(){
        return this.cities.map((city) => this.name+' tinggal di '+city);
    }
}

console.log(user.printTempatTInggal());

const multipler = {
    numbers:[10,20,30],
    multiplyBy:3,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number)
    }
}

console.log(multipler.multiply());