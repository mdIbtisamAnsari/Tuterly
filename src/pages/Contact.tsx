import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Contact: React.FC = () => {

    const [currentState, setCurrentState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    
    const navigate = useNavigate()


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    useEffect(() => {
        console.log('Current state:', currentState)
    }, [currentState])
    
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault()
        setCurrentState('submitting')
        
        await axios.post('http://localhost:3000/api/contact', formData)
            .then(
                () => {setCurrentState('success')
                alert('Form submitted successfully!')
                setCurrentState('idle')
                navigate('/')
            }
            )
            .catch(error => {
                console.error('Error submitting form:', error)
                setCurrentState('error')
                alert('An error occurred while submitting the form. Please try again later.')
                setCurrentState('idle')
                location
            }
        )
    }

    

    if (currentState === 'submitting'){
      return(
        //loaging animation
        <div className='flex items-center justify-center h-screen'>
            <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
        </div>
    )  
    } 

    return (
        <div className='border border-gray-700 rounded-lg m-auto p-4 max-md:w-[calc(100vw-2rem)] md:w-[calc(60vw-2rem)] mt-30 w'>
            <h1 className="text-5xl font-bold mb-4 text-center">Contact</h1>
            <form className='*:flex *:flex-col *:*:not-first:border *:*:not-first:border-gray-700 *:*:not-first:rounded *:*:not-first:p-1.5 *:*:not-first:focus:border-gray-500' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows={5} required onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact