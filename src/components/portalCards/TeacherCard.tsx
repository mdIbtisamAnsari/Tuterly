
import React from 'react'

const TeacherCard: React.FC<{ teacher: any }> = ({ teacher }) => {
    return (
        <div className='bg-gray-800 m-3 p-5 rounded-2xl min-w-[calc(100vw-6*4px)]'>
            <img src={teacher.profilePicture} className='w-20'/>
            <h2 >{teacher.name}</h2>
            <p>{teacher.subjects.join(', ')}</p>
            <p>{teacher.bio}</p>
            <p>{teacher.rate}</p>
            <p>{teacher.experience}</p>
        </div>
    )
}

export default TeacherCard