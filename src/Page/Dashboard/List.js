import React from 'react'

function List({ students, handleEdit, handleDelete }) {
    console.log(students)
    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>Roll Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Subjects</th>
                        <th>Image</th>
                        <th>Gender</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student, i) => (
                            <tr key={student.id}>
                                <td>{student.rollnumber}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.address}</td>
                                <td>{student.personName}</td>
                                <td>{student.imgfile} </td>
                                <td>{student.gender} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(student.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(student.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Student</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List