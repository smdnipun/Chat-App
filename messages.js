import React, { useState, useEffect } from 'react'
import Message from './message'
import axios from 'axios'
import './css/message.css'

export default function AllMessage() {
  const name = localStorage.getItem('userN')
  const email = localStorage.getItem('user')
  const ps = localStorage.getItem('userP')
  const [gid, setGid] = useState('')

  const loadData = () => {
    if (ps === 'Student') {
      axios
        .post('http://localhost:5000/group/check', {
          email: email,
        })
        .then((response) => {
          const gid = response.data[0].gid
          setGid(gid)
        })
        .catch(function (error) {
          console.log(error)
        })
    } else if (ps === 'Supervisor') {
        axios
          .get(`http://localhost:5000/group/supervisor/${name}`)
          .then((response) => {
            const gid = response.data[0].gid
            setGid(gid)
          })
          .catch(function (error) {
            console.log(error)
          })
    } else if (ps === 'co-supervisor') {
      axios
        .get(`http://localhost:5000/group/csupervisor/${name}`)
        .then((response) => {
          const gid = response.data[0].gid
          setGid(gid)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  useEffect(() => {
    loadData()
  }, [])
  console.log(gid)
  console.log(name)
  console.log(email)

  return (
    <div>
      <Message gid={gid} username={name} email={email} />
    </div>
  )
}
