import TeacherCard from "../Components/TeacherCard"
import { Search } from "lucide-react"
import { useState, useEffect } from "react"
import useDebounce from "../hooks/useDebounce"
import axios from "axios"
import { API_BASE_URL } from "../assets/constants"
import { Link } from "react-router-dom"


type Teacher = {
  id: number
  profile: string
  name: string
  subject: string[]
  rate: number
  experience: number
  rating: number
}



const Portal = () => {
  const [sort, setSort] = useState("")
  const [query, setQuery] = useState("")
  const [teachers, setTeachers] = useState<Teacher[]>([{
  id: 1,
  profile: "./logo.svg",
  name: "string",
  subject: ["Sub1", "Sub2"],
  rate: 20,
  experience: 4,
  rating:0,
},{
  id: 2,
  profile: "string",
  name: "string",
  subject: ["Sub1", "Sub2"],
  rate: 12,
  experience: 3,
  rating: 2,
},{
  id: 3,
  profile: "string",
  name: "string",
  subject: ["Sub1", "Sub2"],
  rate: 21,
  experience: 2,
  rating: 3.6,
},{
  id: 4,
  profile: "string",
  name: "string",
  subject: ["Sub1", "Sub2"],
  rate: 25,
  experience: 1,
  rating: 4.5,
}])
  const debouncedQuery = useDebounce(query, 1000)

  useEffect(() => {
    if (!debouncedQuery.trim()) return
    axios.get(`${API_BASE_URL}/search?query=${debouncedQuery}`)
    .then((res)=>setTeachers(res.data))
    .catch(err => console.error(err))
  }, [debouncedQuery])


  const handleShort = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const value = e.target.value
  if(value === "rating"){
    setTeachers(prev => [...prev].sort((a,b) => b.rating - a.rating))
  }else if(value === "experience"){
    setTeachers(prev => [...prev].sort((a,b) => b.experience - a.experience))
  }else if(value === "price"){
    setTeachers(prev => [...prev].sort((a,b) => a.rate - b.rate))
  }else if(value === "price_desc"){
    setTeachers(prev => [...prev].sort((a,b) => b.rate - a.rate))
  }
  setSort(value)
}

  return (
    <div className="bg-primary text-accent min-h-screen p-5">
      <div className="flex justify-center items-center mb-10 gap-3">
        <div className="relative w-full max-w-md">
          <input
            className="w-full bg-secondary text-accent placeholder-tersary rounded px-5 py-2 pr-11 outline-none focus:ring-2 focus:ring-tersary transition-all duration-200"
            type="text"
            placeholder="Search subject you want.."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-tersary w-4 h-4 pointer-events-none" />
        </div>

        <select name="Short by" className="bg-secondary text-accent rounded px-3 py-2 outline-none transition-all duration-200" value={sort} onChange={handleShort}>
          <option value="" disabled >Short by</option>
          <option value="rating">Rating</option>
          <option value="experience">Experience</option>
          <option value="price">Price ( low to heigh )</option>
          <option value="price_desc">Price ( heigh to low )</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {teachers.map(teacher => (
          <Link to={`/teacher/${teacher.id}`} key={teacher.id}>
            <TeacherCard key={teacher.id} {...teacher} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Portal