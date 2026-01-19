import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AppSpinner from "@/ui/AppSpinner";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getTasks, getUserDetails } from "@/services/usersApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Error from "@/ui/Error";
import EmptyPage from "@/ui/EmptyPage";
import { Building2, LocationEdit, Phone, UserIcon } from "lucide-react";

function UserDetails() {
  const { id } = useParams();

  const {
    data: user,
    isLoading: isFetching,
    error,
    isError,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserDetails(id),
  });

  const {
    data: todosData,
    isLoading: isLoadingTodos,
    error: todosError,
    isError: isTodosError,
  } = useQuery({
    queryKey: ["Tasks", id],
    queryFn: () => getTasks(id),
  });

  if (isFetching || isLoadingTodos)
    return <AppSpinner className="flex items-center justify-center " />;
  if (isError || isTodosError) {
    if (error) return <Error error={error?.message || String(error)} />;
    else if (todosError)
      return <Error error={todosError?.message || String(todosError)} />;
  }
  if (user)
    return (
      <div className="flex flex-col bg-white w-screen h-screen md:ml-10 ">
        {Object.keys(user)?.length === 0 ? (
          <EmptyPage data="user" />
        ) : (
          <div className="flex flex-row md:mt-10">
            <Avatar className=" w-25 h-25 md:w-50 md:h-50 md:ml-14 sm:ml-10 md:mt-10 mt-5 ">
              <AvatarImage src="/ava.png" alt="avatar" />
              <AvatarFallback>USER</AvatarFallback>
            </Avatar>
            <Card className="sm:w-100 sm:h-270  md:w-200 md:ml-20 sm:ml-5 mr-20 mt-5 md:mb-15 mb-5 md:h-100 bg-neutral-100 text-neutral-800 text-lg ">
              <div className="flex space-x-4">
                <h1 className="md:w-180 md:h-15 font-semibold ml-5  bg-neutral-200 rounded-l-lg">
                  {" "}
                  <p className="flex flex-row items-baseline ">
                    <UserIcon /> User Name:{" "}
                    <span className="sm:ml-10 sm:mt-0 md:mt-0 md:ml-25 ">
                      {user?.name}{" "}
                    </span>
                  </p>
                </h1>
              </div>
              <div>
                <span className="flex ">
                  <h2 className=" font-semibold ml-5">
                    {" "}
                    <Building2 /> Company Details:
                  </h2>
                  <span className="md:ml-18 ml-5">
                    <h3>
                      {" "}
                      <span className="font-semibold "> Name:</span>{" "}
                      {user?.company?.name}{" "}
                    </h3>
                    <h3>
                      {" "}
                      <span className="font-semibold"> CatchPhrase:</span>{" "}
                      {user?.company?.catchPhrase}{" "}
                    </h3>
                    <h3>
                      {" "}
                      <span className="font-semibold">business: </span>{" "}
                      {user?.company?.bs}{" "}
                    </h3>
                  </span>
                </span>
              </div>
              <div>
                <span className="flex items-baseline">
                  <span className="font-semibold ml-5">
                    {" "}
                    <LocationEdit /> User Address:{" "}
                  </span>
                  <h2 className="md:ml-25 ml-5">
                    {" "}
                    {user?.address?.city}/{user?.address?.street}{" "}
                  </h2>
                </span>
              </div>

              <div>
                <span className="flex items-baseline">
                  {" "}
                  <span className="font-semibold ml-5">
                    {" "}
                    <Phone />
                    Phone Number:
                  </span>{" "}
                  <h2 className="md:ml-22 font-semibold "> {user?.phone} </h2>
                </span>
              </div>
            </Card>
          </div>
        )}

        {Object.keys(todosData)?.length === 0 ? (
          <EmptyPage data="todos" />
        ) : (
          <Card className=" bg-neutral-100 md:w-200 sm:w-130 md:ml-85  ml-24 ">
            <Table className=" ml-10 overflow-x-auto">
              <TableHeader className="">
                <TableRow>
                  <TableHead className=" text-lg text-neutral-800 font-semibold ">
                    Task Id
                  </TableHead>

                  <TableHead className="pr-40 text-lg text-neutral-800 font-semibold ">
                    Task Title
                  </TableHead>
                  <TableHead className="pr-40 text-lg text-neutral-800 font-semibold  ">
                    Task Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {todosData?.map((todo) => (
                  <TableRow
                    className="hover:bg-neutral-300 hover:cursor-cell "
                    key={todo.id}
                  >
                    <TableCell className="text-[20px] font-medium max-w-5  ">
                      {todo.id}
                    </TableCell>
                    <TableCell className=" md:text-base truncate max-w-25 ">
                      {todo.title}{" "}
                    </TableCell>
                    <TableCell className="text-[20px] text-gray-900">
                      {todo.completed ? "Completed ✅" : "Pending ⌛"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        )}
      </div>
    );
}

export default UserDetails;
