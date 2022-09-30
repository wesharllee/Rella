import { useEffect, useState } from "react"
import { getAllUsers, updateUser } from "./UserManager"
import "./Rella.css"

export const Rella = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers().then(usersData => setUsers(usersData))
    }, [])

    return <section className="section">
        <article className="outer-container">
            <div className="form-container">

                {users.map((user) => {
                    let fullName = user.firstName + " " + user.lastName
                    let avatar = user.avatar

                    return <div className="list-container">
                        <div className="title-box">
                            <img className="circle-img" src={avatar} />
                            <div className="title-1">{fullName}</div>
                        </div>

                        <div className="title-3">TikTok</div>
                        {user.tikTok ?
                            <div className="button-box">
                                <button type="relink"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.tikTok = true
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="complete-buttonz">Relink
                                </button>
                                <button type="remove"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.tikTok = false
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="complete-buttonz">Remove
                                </button>
                            </div>
                            :
                            <div className="button-box">
                                <button type="relink"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.tikTok = true
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="incomplete-buttonz">Relink
                                </button>
                                <button type="remove"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.tikTok = false
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="complete-buttonz">Remove
                                </button>
                            </div>}
                        <div className="title-3">YouTube</div>
                        {user.youTube ?
                            <div className="button-box">
                                <button type="relink"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.youTube = true
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="complete-buttonz">Relink
                                </button>
                                <button type="remove"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.youTube = false
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="complete-buttonz">Remove
                                </button>
                            </div>
                            :
                            <div className="button-box">
                                <button type="relink"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.youTube = true
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="incomplete-buttonz">Relink
                                </button>
                                <button type="remove"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.youTube = false
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="complete-buttonz">Remove
                                </button>
                            </div>}
                        <div className="title-3">Pinterest</div>
                        {user.pinterest ?
                            <div className="button-box">
                                <button type="relink"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.pinterest = true
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="complete-buttonz">Relink
                                </button>
                                <button type="remove"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.pinterest = false
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="complete-buttonz">Remove
                                </button>
                            </div>
                            :
                            <div className="button-box">
                                <button type="relink"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.pinterest = true
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="incomplete-buttonz">Relink
                                </button>
                                <button type="remove"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.pinterest = false
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="complete-buttonz">Remove
                                </button>
                            </div>}
                        <div className="title-3">LinkedIn</div>
                        {user.linkedIn ?
                            <div className="button-box">
                                <button type="relink"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.linkedIn = true
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="complete-buttonz">Relink
                                </button>
                                <button type="remove"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.linkedIn = false
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="complete-buttonz">Remove
                                </button>
                            </div>
                            :
                            <div className="button-box">
                                <button type="relink"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.linkedIn = true
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="incomplete-buttonz">Relink
                                </button>
                                <button type="remove"
                                    onClick={() => {
                                        const copy = { ...user }
                                        copy.linkedIn = false
                                        updateUser(copy.id, copy).then(() => {
                                            getAllUsers().then(usersData => setUsers(usersData))
                                        })
                                    }}
                                    className="complete-buttonz">Remove
                                </button>
                            </div>}

                    </div>

                })}
            </div>

        </article>

    </section >



}