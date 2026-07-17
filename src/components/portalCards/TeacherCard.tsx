
import React from 'react'
import { Link } from 'react-router-dom'

interface Teacher {
    id: number;
    name: string;
    profilePicture: string;
    subjects: string[];
    bio: string;
    rate: number;
    experience: number;
}


const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => {


    return (
        <div className='bg-gray-800 m-3 p-5 rounded-2xl max-sm:w-[calc(100vw-6*4px)] h-fit relative'>
            <img 
            src={teacher.profilePicture} 
            className='w-20 h-20 rounded-full ' />

            <h2 
            className='font-bold'>
                {teacher.name}
            </h2>

            <div 
            className='flex gap-1 my-2'>
                {teacher.subjects.map((sub: string, index: number) => (

                    <p 
                    key={`${sub}-${index}`}
                    className='bg-gray-700 rounded-full px-2'>
                        {sub}
                    </p>
            ))}
            </div>

            <p>
                {teacher.bio.slice(0, 50)}...
            </p>

            <p 
            className='bg-gray-600 rounded-full px-2 w-fit mt-5'>
                {`Rate: ${teacher.rate} Rs /Mh`}
            </p>

            <p 
            className='bg-gray-500 rounded-full px-2 w-fit mt-2'>
                {`Experience: ${teacher.experience} years`}
            </p>

            <Link to={`/teacher/${teacher.id}`} className='absolute bottom-5 right-5 bg-blue-600 px-3 py-1 rounded-lg'>View Profile</Link>
            <Link to={`/teacher/${teacher.id}/mail`} className='absolute bottom-15 right-5 bg-green-600 px-3 py-1 rounded-lg'>Send mail</Link>

        </div>
    )
}

export default TeacherCard