import React from "react";

const Employee = ({ name, age, gender, phoneNo, email }) => {
	return (
        <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{email}</td>
            <td>{phoneNo}</td>
        </tr>
		// <table className="employeeList">
		// 		<tr>
		// 			<th>Name</th>
		// 			<th>Age</th>
		// 			<th>Gender</th>
		// 			<th>Email</th>
		// 			<th>PhoneNo</th>
		// 		</tr>

        //         { employees && employees.users && employees.users.map(user => (
		// 		<tr>
		// 			<td>{name}</td>
		// 			<td>{age}</td>
		// 			<td>{gender}</td>
		// 			<td>{email}</td>
		// 			<td>{phoneNo}</td>
		// 		</tr>
        //          ))}
		// 	</table>
	);
};

export default Employee;
