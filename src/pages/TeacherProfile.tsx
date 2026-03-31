import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type Teacher = {
    id: number
    name: string;
    profile?: string;
    email: string;
    subjects: string[];
    bio: string;
    rate: number;
    experience: number;
    rating: number;
}|null


const TeacherProfile: React.FC = () => {

    const[teacher, setTeacher] = useState<Teacher>({ id: 1, name: "John Doe", email: "john@example.com", subjects: ["Math", "Physics"], bio: "Experienced tutor with a passion for teaching.", rate: 40, experience: 5, rating: 4.8 })
    const { teacherid } = useParams()

    // useEffect(() => {
    //     axios.get(`/api/teacher/${teacherid}`)
    //     .then(res => setTeacher(res.data))
    //     .catch(err => console.error(err))
    // }, [])


    if (!teacher) return <div className="min-h-screen bg-primary flex items-center justify-center text-accent">Loading...</div>

    return (
        <div className="min-h-screen bg-primary text-accent px-6 py-10 max-w-2xl mx-auto">
            <div className="flex items-center gap-5 mb-8">
                <img
                    src={teacher.profile ?? "../logo.svg"}
                    alt={teacher.name}
                    className="w-24 h-24 rounded-full object-cover shrink-0"
                />
                <div>
                    <h1 className="font-heading text-2xl font-bold">{teacher.name}</h1>
                    <p className="text-tersary text-sm mt-1">{teacher.email}</p>
                    <div className="flex items-center gap-3 mt-2 text-sm text-tersary">
                        <span>⭐ {teacher?.rating?.toFixed(1)}</span>
                        <span>·</span>
                        <span>{teacher.experience} yr{teacher.experience !== 1 ? "s" : ""} exp</span>
                        <span>·</span>
                        <span className="text-accent font-medium">Rs {teacher.rate}<span className="font-normal text-tersary">/hr/month</span></span>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <h2 className="font-body font-semibold text-sm text-tersary uppercase tracking-wide mb-2">Subjects</h2>
                <div className="flex flex-wrap gap-2">
                    {teacher?.subjects?.map(sub => (
                        <span key={sub} className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full">{sub}</span>
                    ))}
                </div>
            </div>

            <div className="mb-8">
                <h2 className="font-body font-semibold text-sm text-tersary uppercase tracking-wide mb-2">About</h2>
                <p className="text-accent/80 text-sm leading-relaxed">{teacher.bio}</p>
            </div>

            <button className="w-full bg-accent text-primary font-body font-semibold py-3 rounded-lg hover:bg-accent/90 transition">
                Contact {teacher.name}
            </button>
        </div>
    )
}

export default TeacherProfile