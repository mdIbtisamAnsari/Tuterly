import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TeacherCard from '../../components/portalCards/TeacherCard'

const PortalForTeacher: React.FC = () => {

    interface Teacher {
        id: number;
        name: string;
        profilePicture: string;
        subjects: string[];
        bio: string;
        rate: number;
        experience: number;
    }

    const [teachers, setTeachers] = useState<Teacher[] | []>([])

    useEffect(() => {
        axios.get('/api/teachers')
            .then(data => setTeachers(data.data))
            .catch(error => console.error('Error fetching teacher data:', error))
    }, [])


    return (
        <>
        {/* search */}
        <div className='justify-center items-center flex relative'>
            
            <input type='text' 
            placeholder='Search Subject..'
            className='bg-gray-700 px-5 rounded-full text-xl py-2 mt-4'/>

        </div>
        {/* result */}
        <div className='min-h-[calc(100vh-15rem)]'>

            <div className=' sm:grid sm:grid-cols-2 lg:grid-cols-3 '>

                {teachers.map((teacher: Teacher) => (
                    
                    <TeacherCard key={teacher.id} teacher={teacher} />

                ))}

            </div>

        </div>
        </>
    )
}

export default PortalForTeacher