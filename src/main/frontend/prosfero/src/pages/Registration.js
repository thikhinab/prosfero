import { useContext, useState } from "react"
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { UserContext } from "../utils/UserContext"
import NavigationBar from "../components/NavigationBar"

const Registration = () => {

    const {user, setUser} = useContext(UserContext)
    setUser(null)

    let history = useHistory();

    const url = 'http://localhost:8080/api/v1/registration'

    const [state, setState] = useState({
        firstName:'',
        lastName: '',
        username: '',
        email: '',
        password: '',
    })


    const change = (e) => {
        const newState = {...state}
        newState[e.target.name] = e.target.value
        setState(newState)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post(url, {
            firstName: state.firstName,
            lastName: state.lastName,
            username: state.username,
            email: state.email,
            password: state.password,
        }).then(
            res => {
                console.log(res.data)
                alert("User Registered!")
                history.push("/login")
            }
        ).catch(
            err => alert(err)
        )

        setState({
            firstName:'',
            lastName: '',
            username: '',
            email: '',
            password: '',
        })
    }


    return (
        <>
            <NavigationBar loggedin={user}/>
            <div className='registration-form'>
                <form>
                    <div className='text-center'>
                        <h1 id='registration-title'>Registration</h1>
                    </div>
                    <div className="mb-3">
                        <label 
                        className="form-label">First name</label>
                        <input type="text" className="form-control" name="firstName" onChange={e => change(e)} value={state.firstName} id="registration-first-name" />
                    </div>
                <   div className="mb-3">
                        <label className="form-label">Last name</label>
                        <input type="text" className="form-control" name="lastName" onChange={e => change(e)} value={state.lastName} id="registration-last-name" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" onChange={e => change(e)} value={state.username} id="registration-username" />
  
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" onChange={e => change(e)} value={state.email} id="registration-email" />
       
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" onChange={e => change(e)} value={state.password} id="registation-password"/>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={e => onSubmit(e)}>Register</button>
                    </div>
                </form>
            </div>
    </>
    )
}

export default Registration