import App from "@/App";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AppSpinner from "@/ui/AppSpinner";

function UsersTable({ children, isGettingUsers, data }) {
  if (isGettingUsers) {
    return <AppSpinner />;
  }
  if (!data || data.length === 0) return null;
  return (
    <>
      <Table className=" w-full border rounded-lg overflow-scroll ">
        <TableHeader className="bg-neutral-600">
          <TableRow className="h-25">
            <TableHead className="text-left text-[#f1f1f1]  text-3xl font-semibold">
              <p className="flex items-center justify-center">Name </p>
            </TableHead>
            <TableHead className=" text-left text-[#f1f1f1]  text-3xl  font-semibold">
              <p className="flex items-center justify-center">E-mail </p>
            </TableHead>
            <TableHead className=" text-left text-[#f1f1f1]  text-3xl font-semibold">
              <p className="flex items-center justify-center">Company </p>
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-[#f1f1f1]  text-3xl font-semibold">
              <p className="flex items-center justify-center"> </p>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">{children}</TableBody>
      </Table>
    </>
  );
}

export default UsersTable;
