import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
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
    const [searchQuary, setSearchQuary] = useState<string>('')
    const [sort , setSort] = useState<string>('')

    const handleSearch = () => {
        axios.get(`/api/teachers?subject=${searchQuary}`)
            .then(data => setTeachers(data.data))
            .catch(error => console.error('Error fetching teacher data:', error))
    }

    useEffect(()=>{
        if(sort!==''){
        axios.get(`/api/teachers?sort=${sort}`)
            .then(data => setTeachers(data.data))
            .catch(error => console.error('Error fetching teacher data:', error))
        }
    },[sort])
    
    

    useEffect(() => {
        axios.get('/api/teachers')
            .then(data => setTeachers(data.data))
            .catch(error => console.error('Error fetching teacher data:', error))
    }, [])


    return (
        <>
            {/* search */}
            <div className='flex items-center justify-between px-3 gap-1'>
            <form
                className='justify-center items-center flex relative w-fit'
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSearch()
                }}
            >
                <input type='text'
                    placeholder='Search Subject..'
                    className='bg-gray-700 px-5 rounded-full text-xl py-2 mt-4 max-sm:w-[calc(100vw-10rem)]'
                    value={searchQuary}
                    onChange={(e) => setSearchQuary(e.target.value)}
                />

                <button type='submit' className='absolute  bg-blue-600 px-3 py-1 rounded-full right-0.5 top-4.5 cursor-pointer'><IoSearchOutline size={32} /></button>

            </form>

            {/* shorting */}
            <div className='flex justify-center items-center mt-5 '>
                <select 
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className='bg-gray-700 text-white px-4 py-2 rounded-full'>
                    <option value=''>Sort by...</option>
                    <option value='rate'>Rate</option>
                    <option value='experience'>Experience</option>
                </select>
            </div>


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