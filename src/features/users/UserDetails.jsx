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
      <div className="flex flex-col bg-white w-screen h-screen ">
        {Object.keys(user)?.length === 0 ? (
          <EmptyPage data="user" />
        ) : (
          <div className="flex flex-row mt-10">
            <Avatar className=" w-25 h-25 md:w-50 md:h-50 md:ml-14 sm:ml-10 mt-10 ">
              <AvatarImage src="src/assets/ava.png" alt="avatar" />
              <AvatarFallback>USER</AvatarFallback>
            </Avatar>
            <Card className="sm:w-100 sm:h-200 md:w-200 md:ml-20 sm:ml-5 mr-20 mt-5 mb-15 md:h-80 bg-neutral-100 text-neutral-800 text-lg ">
              <div>
                <h1 className=" font-semibold ml-5">
                  {" "}
                  User Name: <span className=" ml-30">{user?.name} </span>
                </h1>
              </div>
              <div>
                <span className="flex">
                  <h2 className="font-semibold ml-5"> Company Details:</h2>
                  <span className=" ml-20">
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
                <span className="flex">
                  <span className="font-semibold ml-5"> User Address: </span>
                  <h2 className="ml-25">
                    {" "}
                    {user?.address?.city}/{user?.address?.street}{" "}
                  </h2>
                </span>
              </div>

              <div>
                <span className="flex">
                  {" "}
                  <span className="font-semibold ml-5">
                    {" "}
                    Phone Number:
                  </span>{" "}
                  <h2 className="ml-22"> {user?.phone} </h2>
                </span>
              </div>
            </Card>
          </div>
        )}

        {Object.keys(todosData)?.length === 0 ? (
          <EmptyPage data="todos" />
        ) : (
          <Card className=" bg-neutral-100 md:w-200 sm:w-100 md:ml-85  ">
            <Table className="ml-10">
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
                    className="hover:bg-neutral-300 hover:cursor-cell"
                    key={todo.id}
                  >
                    <TableCell className="text-[20px] ">{todo.id}</TableCell>
                    <TableCell className=" text-base w-40 ">
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
