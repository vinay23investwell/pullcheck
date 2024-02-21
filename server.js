const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('project', 'vinay', 'VinayKumar', {
  host: 'localhost',
  dialect: 'mysql', 
});



const Student = sequelize.define('Vinay', {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  grade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


async function performOperations() {
  try {
    
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    
    await Student.sync();
    console.log('Student model synced with database.');

    
    // const newStudent = await Student.create({
    //   name: 'Vinay Kumar',
    //   age: 22,
    //   grade: 'A',
    // });
    // console.log('New student created:', newStudent.toJSON());


    const newStudent = await Student.create({
      name: 'Tushar',
      age: 23,
      grade: 'A',
    });
    console.log('New student created:', newStudent.toJSON());

    
    // const allStudents = await Student.findAll();
    // console.log('All students:', allStudents.map(student => student.toJSON()));



    // const oneStudent = await Student.findOne({ where: { id: 2 } });
    // console.log('Student with ID 2:', oneStudent ? oneStudent.toJSON() : 'Not found');


    
    // const [updatedRows] = await Student.update({ age: 26 }, { where: { id: 2 } });
    // console.log('Student updated:', updatedRows === 1 ? 'Success' : 'Failed');


    // const [updatedRows] = await Student.update({ age: 27 }, { where: { id: 2 } });
    // console.log('Student updated:', updatedRows === 1 ? 'Success' : 'Failed');



    // const deletedRows = await Student.destroy({ where: { id:2 } });
    // console.log('Number of students deleted:', deletedRows);


  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


performOperations();


app.listen(9000,()=>{
    console.log("port started of backend")
})

