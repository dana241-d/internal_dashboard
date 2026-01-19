import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/services/usersApi";
import { Link } from "react-router-dom";
import UsersTable from "@/features/users/UsersTable";
import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import AppSpinner from "@/ui/AppSpinner";
import EmptyPage from "@/ui/EmptyPage";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import { Eye } from "lucide-react";
import Error from "@/ui/Error";
function UsersList() {
  const {
    data: users,
    isLoading: isGettingUsers,
    error,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  console.log("users error", isError);
  return (
    <div className="w-full flex flex-col ">
      {isGettingUsers ? (
        <AppSpinner />
      ) : (
        <div className="w-full overflow-x-auto border-y md:border  md:rounded-lg">
          {" "}
          <UsersTable isGettingUsers={isGettingUsers} data={users}>
            {users?.map((user) => (
              <TableRow
                className="w-full h-12 hover:bg-neutral-400 cursor-auto"
                key={user.id}
              >
                <TableCell className="md:text-lg text-sm  px-6 py-4 text-neutral-800  ">
                  <p className="text-center">{user.name}</p>
                </TableCell>
                <TableCell className="md:text-lg px-6 py-4 text-gray-700  ">
                  <p className="text-center"> {user.email} </p>
                </TableCell>
                <TableCell className="md:text-lg px-6 py-4 text-gray-700 ">
                  <p className="text-center"> {user.company.name} </p>
                </TableCell>
                <TableCell className="md:text-lg px-6 py-4 text-gray-700 text-center ">
                  <Link
                    to={`/users/${user.id}`}
                    className="relative group hover:underline hover:icon hover:font-bold"
                  >
                    {" "}
                    View Details{" "}
                    <span className="ml-5 absolute  top-[0.7] translate-y-0.5 opacity-0  group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-5 h-5" />
                    </span>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </UsersTable>
        </div>
      )}

      {users?.length < 1 && <EmptyPage data="users" />}
      {isError && <Error error={error.message} />}
    </div>
  );
}

export default UsersList;
