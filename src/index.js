// const EntityBase = require('./entityBase');

// const e = new EntityBase ({
//     name:'Vinicius Fernandes',
//     gender: 'male'
// })

const assert = require('assert');
const Employee = require('./employee');
const Manager = require('./manager');
const Util = require('./util');

const GENDER = {
    male:'male',
    female:'female'
}

// {
//     const employee = new Employee({
//         name: 'vinicius Fernandes',
//         gender: GENDER.male
//     })

//     assert.throws(()=> employee.birthDay,{message:'you must define age first'});

// }

const CURRENT_YEAR = 2021
Date.prototype.getFullYear = () => CURRENT_YEAR;

{
    const employee = new Employee({
        name:'Livia Brunelle',
        age:20,
        gender: GENDER.female
    })

    assert.deepStrictEqual(employee.name,"Ms.Livia Brunelle")
    assert.deepStrictEqual(employee.age,undefined);
    assert.deepStrictEqual(employee.gender,undefined);
    assert.deepStrictEqual(employee.grossPay,Util.formatCurrency(5000.40));
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32));

    const expectedBirthYear = 2001;
    assert.deepStrictEqual(employee.birthDay,expectedBirthYear);

    //nao tem set,não vai mudar
    employee.birthDay = new Date().getFullYear() - 80;
    assert.deepStrictEqual(employee.birthDay, expectedBirthYear);

    employee.age = 80;
    assert.deepStrictEqual(employee.birthDay,1941)
    console.log('\n------------employee----------')
    console.log('employee.name',employee.name)
    console.log('employee.age',employee.age)
    console.log('employee.gender',employee.gender)
    console.log('employee.grossPay',employee.grossPay)
    console.log('employee.netPay',employee.netPay)
}

{
    const manager = new Manager({
        name:'Mariazinha',
        age:18,
        gender:GENDER.female
    })

    assert.deepStrictEqual(manager.name,"Ms.Mariazinha")
    assert.deepStrictEqual(manager.age,undefined);
    assert.deepStrictEqual(manager.gender,undefined);
    assert.deepStrictEqual(manager.birthDay,2003);
    assert.deepStrictEqual(manager.grossPay,Util.formatCurrency(5000.40));
    assert.deepStrictEqual(manager.bonuses,Util.formatCurrency(2000))
    assert.deepStrictEqual(manager.netPay,Util.formatCurrency(6000.32));

    console.log('\n--------manager----------')
    console.log('manager.name',manager.name)
    console.log(' manager.age', manager.age)
    console.log('manager.gender',manager.gender)
    console.log('manager.birthDay',manager.birthDay)
    console.log('manager.grossPay',manager.grossPay)
    console.log('manager.bonuses',manager.bonuses)
    console.log('manager.netPay',manager.netPay)

}