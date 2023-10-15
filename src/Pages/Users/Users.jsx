import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadUsers = useLoaderData();
    const [users, setUsers] = useState(loadUsers);
    const userDelete= (_id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`http://localhost:8080/user-delete/${_id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if (data.deletedCount) {
                        Swal.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        );
                        const newUser = loadUsers.filter(user=>user._id !== _id)
                        setUsers(newUser)
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                {
                    Swal.fire(
                      'Cancelled',
                      'Your imaginary user is safe :)',
                      'error'
                    )
                  }
            }
        });
    }
    return (
        <div className="container mx-auto md:px-20 py-5">
            <Link
                to="/"
                className="text-xl text-slate-700 items-center flex gap-2 py-2"
            >
                <FiArrowLeft></FiArrowLeft>
                <span className="text-2xl">Back to home</span>
            </Link>
            <h3></h3>
            <div className="relative overflow-x-auto">
                <h3 className="text-3xl text-center py-2">
                    Users: ({users.length})
                </h3>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase font-raleway bg-secondary">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                User Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created At
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last Login
                            </th>
                            <th scope="col" className="px-6 w-5 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr
                                    key={user._id}
                                    className="bg-white border-b"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 text-xl font-medium text-gray-900 whitespace-nowrap "
                                    >
                                        {user.email}
                                    </th>
                                    <td className="px-6 py-4 text-xl">
                                        {user.creationTime}
                                    </td>
                                    <td className="px-6 py-4 text-xl">
                                        {user.LastSignInTime}
                                    </td>
                                    <td className="px-6 py-4 text-xl">
                                        <button
                                            onClick={() => userDelete(user._id)}
                                            className="bg-red-500 text-white rounded py-1 px-2"
                                        >
                                            <BiTrash className="inline"></BiTrash>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
