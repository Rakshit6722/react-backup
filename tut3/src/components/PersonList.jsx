import React from 'react'
import Person from './Person'
function PersonList() {
    const persons = [
        {
            id:0,
            name:'rakshit',
            age:21
        },
        {
            id:1,
            name:'rakshit',
            age:21
        },
        {
            id:2,
            name:'rakshit',
            age:21
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}/> )
  return (
    <div>
      {personList}
    </div>
  )
}

export default PersonList
