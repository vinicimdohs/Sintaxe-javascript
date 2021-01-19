class EntityBase {
    #name
    #age
    #gender

    constructor({name,age,gender}){
        this.#name = name;
        this.#gender = gender;
        this.#age = age;
    }

    get name(){
        const preffix = this.#gender ==="male" ? "Mr." : "Ms.";
        return `${preffix}${this.#name}`;
    }

    get birthDay(){
        if(!this.#age){
            throw new Error('you must define age first!!');
        }
        return new Date().getFullYear() - this.#age;
    }

    set age(value){
        this.#age = value;
    }
}


module.exports = EntityBase;