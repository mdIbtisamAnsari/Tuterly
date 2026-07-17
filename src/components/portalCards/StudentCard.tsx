
import React from 'react'
import { Link } from 'react-router-dom'

interface Student {
    id: number;
    name: string;
    profilePicture: string;
    subjects: string[];
    bio: string;
    rate: number;
    class: string;
}


const StudentCard: React.FC<{ student : Student }> = ({ student }) => {


    return (
        <div className='bg-gray-800 m-3 p-5 rounded-2xl max-sm:w-[calc(100vw-6*4px)] h-fit relative'>
            <img 
            src={student.profilePicture} 
            className='w-20 h-20 rounded-full ' />

            <h2 
            className='font-bold'>
                {student.name}
            </h2>

            <div 
            className='flex gap-1 my-2'>
                {student.subjects.map((sub: string, index: number) => (

                    <p 
                    key={`${sub}-${index}`}
                    className='bg-gray-700 rounded-full px-2'>
                        {sub}
                    </p>
            ))}
            </div>

            <p>
                {student.bio.slice(0, 50)}...
            </p>

            <p 
            className='bg-gray-600 rounded-full px-2 w-fit mt-5'>
                {`Rate: ${student.rate} Rs /Mh`}
            </p>

            <p 
            className='bg-gray-500 rounded-full px-2 w-fit mt-2'>
                {`Class: ${student.class} years`}
            </p>

            <Link to={`/student/${student.id}`} className='absolute bottom-5 right-5 bg-blue-600 px-3 py-1 rounded-lg'>View Profile</Link>
            <Link to={`/student/${student.id}/mail`} className='absolute bottom-15 right-5 bg-green-600 px-3 py-1 rounded-lg'>Send mail</Link>

        </div>
    )
}

export default StudentCard