import React,{useEffect} from 'react';
import Employee from './Employee';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeDetails } from '../../redux/actions/EmployeeAction';

const EmployeeList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmployeeDetails());
    });

    const employees = useSelector(state => state.employees.employees);
    console.log(employees)

    return(
        <div className="employee_details">
                <table className="employeeList">
				<tr>
					<th>Name</th>
					<th>Age</th>
					<th>Gender</th>
					<th>Email</th>
					<th>Phone No</th>
				</tr>

				{ employees && employees.users && employees.users.map(user => (
                <Employee 
                name={user.name}
                gender={user.gender}
                age={user.age}
                phoneNo={user.phoneNo}
                email={user.email}
                key={user.id}
             />
            ))}
			</table>
            
        </div>
    )
}

export default EmployeeList;