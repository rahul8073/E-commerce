import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <h1>Hello,<b>Rahul</b></h1>
      <ul>
        <li>
          <Link to="" >view profile</Link>
        </li>
        <li>
          <Link to="" >Your Orders</Link>
        </li>
      </ul>
    </div>
  )
}

export default Profile