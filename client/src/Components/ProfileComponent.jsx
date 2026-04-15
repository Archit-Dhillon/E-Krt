import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileComponent({ user, heading }) {

    return (
        <>
            <h5 className='bg-primary text-center text-light jj p2'>{heading}

            </h5>
            <table className='table table-striped-columns'>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <th>Phone no.</th>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <th>Role</th>
                        <td>{user.role}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>{user.address}</td>
                    </tr>
                    <tr>
                        <th>Pin Code</th>
                        <td>{user.pin}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>{user.city}</td>
                    </tr>
                    <tr>
                        <th>State</th>
                        <td>{user.state}</td>
                    </tr>

                    <tr>
                        <td className='up' colSpan={2}><Link style={{ color: "black" }} to="/profile/update">Update Profile</Link></td>


                    </tr>

                </tbody>
            </table>

        </>
    )
}
