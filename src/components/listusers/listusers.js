// listUsers.js
import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./listusers.css"
import "../layout.css"
import BtnAddUser from "../buttons/BtnAddUser"
import Buscador from "../buscador/buscador"
import BtnUserDelete from "../buttons/BtnDeleteUser"
import BtnRolUser from "../buttons/btnUserRol"
import BtnUserEdit from "../buttons/BtnEditUser"
import BtnMasInfo from "../buttons/BtnMasInfo"

const ListUsers = ({ url }) => {
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${url}?query=${encodeURIComponent(searchQuery)}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setUsers(data.users)
        setMessage(data.menssage)
      } catch (error) {
        console.error("Error al buscar la lista de usuarios", error)
      }
    }
    fetchUser()
  }, [url, searchQuery])

  const handleSearch = query => {
    setSearchQuery(query)
    setSelectedUserId(null)
  }

  const handleSelect = id => {
    setSelectedUserId(id)
    const element = document.getElementById(id)
    if (element) {
      element.querySelector(".personal").classList.add("highlight")
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const filterUsers = () => {
    if (searchQuery === "") {
      setFilteredUsers(users)
    } else {
      const filtered = users.filter(user => {
        const nameMatch = user.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
        const roleMatch = user.role
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
        return nameMatch || roleMatch
      })
      setFilteredUsers(filtered)
    }
  }

  useEffect(() => {
    filterUsers()
  }, [searchQuery, users])

  const updateUserRole = (email, newRole) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.email === email ? { ...user, role: newRole } : user
      )
    )
  }

  const updateUserName = (email, newName) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.email === email ? { ...user, name: newName } : user
      )
    )
  }

  const deleteUser = email => {
    setUsers(prevUsers => prevUsers.filter(user => user.email !== email))
  }

  return (
    <>
      <div className="juntos">
        <BtnAddUser />
        <Buscador onSearch={handleSearch} onSelect={handleSelect} />
      </div>
      <h1 className="h1User">{message}</h1>
      <div className="listado">
        {filteredUsers.map(user => (
          <div key={user.id} id={user.id}>
            <div
              className={
                selectedUserId === user.id ? "personal highlight" : "personal"
              }
            >
              <BtnMasInfo mailto={user.email}></BtnMasInfo>
              <br></br>
              <br></br>
              <StaticImage
                className="btnProfile icon-perfil img-personal"
                src="../../images/icons/profile-2.svg"
                alt="Perfil"
              />
              <p>{user.name}</p>
              <p>{user.role}</p>
              <BtnUserEdit mailto={user.email} updateUserName={updateUserName}/>
              <BtnRolUser mailto={user.email} updateUserRole={updateUserRole} />
              <BtnUserDelete mailto={user.email} deleteUser={deleteUser} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ListUsers
