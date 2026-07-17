import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const ViewTeacherProfile = () => {
  const [teacher, setTeacher] = useState<any>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const fetchTeacher = async () => {
      if (!id) return

      try {
        const response = await axios.get(`/api/teachers/${id}`)
        setTeacher(response.data)
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Error fetching teacher data:", error.response?.data || error.message)
        } else {
          console.error("Unexpected error fetching teacher data:", error)
        }
      }
    }

    fetchTeacher()
  }, [id])

  const subjects = Array.isArray(teacher?.subjects)
    ? teacher.subjects
    : Array.isArray(teacher?.subject)
      ? teacher.subject
      : []

  return (
    <div className="min-h-[calc(100vh-16rem)] bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {teacher ? (
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-sky-950/30">
            <div className="h-32 bg-linear-to-r from-sky-500 via-blue-600 to-indigo-700" />

            <div className="relative px-6 pb-8 pt-0 sm:px-8 lg:px-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                  <img
                    src={teacher?.profilePicture || "https://via.placeholder.com/150"}
                    alt={teacher?.name || "Teacher profile"}
                    className="-mt-16 h-32 w-32 rounded-2xl border-4 border-slate-900 object-cover shadow-lg sm:h-36 sm:w-36"
                  />
                  <div className="pb-2">
                    <span className="inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                      {teacher?.role?.toUpperCase() || "TEACHER"}
                    </span>
                    <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                      {teacher?.name || "Teacher Name"}
                    </h1>
                  </div>
                </div>

                <Link
                  to={`/messages/${teacher?.id}`}
                  className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                >
                  Send Message
                </Link>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-6">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                      About
                    </h2>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {teacher?.bio || "No biography added yet."}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                      Subjects
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {subjects.length > 0 ? (
                        subjects.map((sub: string) => (
                          <span
                            key={sub}
                            className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-200"
                          >
                            {sub}
                          </span>
                        ))
                      ) : (
                        <span className="text-sm text-slate-400">No subjects listed.</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="mt-1 text-base font-medium text-white">
                      {teacher?.email || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Experience</p>
                    <p className="mt-1 text-base font-medium text-white">
                      {teacher?.experience || "Not specified"} Years
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Rate</p>
                    <p className="mt-1 text-base font-medium text-white">
                      {teacher?.rate ? `$${teacher.rate}` : "Rate not set"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl shadow-sky-950/20">
            <h2 className="text-2xl font-semibold text-white">Teacher not found</h2>
            <p className="mt-2 text-slate-400">The requested teacher profile could not be loaded.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ViewTeacherProfile