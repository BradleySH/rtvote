import React, {useState} from "react";
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

const UserProvider = (props) => {
  const initState = { 
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "", 
    issues: [],
    errMsg: "" 
  };
  const [userState, setUserState] = useState(initState);

  const signup = (credentials) => {
    axios.post("/auth/signup", credentials)
    .then(res => {
      const { user, token } = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      setUserState(prevUserState => ({
        ...prevUserState,
        user,
        token
      }))
    })
    .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  const login = (credentials) => {
    axios.post("/auth/login", credentials)
    .then(res => {
      const { user, token } = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      getUserIssue()
      setUserState(prevUserState => ({
        ...prevUserState,
        user,
        token
    }))
  })
    .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      issues: []
    })
  }

  const resetAuthErr = () => {
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }

  const handleAuthErr = (errMsg) => {
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }

  const getUserIssue = () => {
    userAxios.get("/api/issues/user")
    .then(res => {
      setUserState(prevState => ({
        ...prevState,
        issues: res.data
      }))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  const addIssue = (newIssue) => {
    userAxios.post("/api/issues", newIssue)
    .then(res => {
      setUserState(prevState => ({
        ...prevState,
        issues: [...prevState.issues, res.data]
      }))
    })
    .catch(err => console.log(err.response.data.errMsg))

  }

  const addComment = () => {
    userAxios.post("/api/issues/comments")
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data.errMsg))
  }

  return (
    <UserContext.Provider value={{
      ...userState,
      signup,
      login,
      logout,
      addIssue,
      resetAuthErr,
      addComment
    }}>
      { props.children }
    </UserContext.Provider>
  )
}

export default UserProvider