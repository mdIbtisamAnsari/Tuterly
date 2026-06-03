import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TeacherCard from '../../components/portalCards/TeacherCard'

const PortalForTeacher: React.FC = () => {

    const [teachers, setTeachers] = useState<any[]>([])

    useEffect(() => {
        axios.get('/api/teachers')
            .then(data => setTeachers(data.data))
            .catch(error => console.error('Error fetching teacher data:', error))
    }, [])
    return (
        <div className='min-h-screen'>
            {teachers.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
        </div>
    )
}

export default PortalForTeacher