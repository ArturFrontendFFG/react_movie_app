import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useAllUser } from "../../../hook/queries/useAllUser";
import { useCorrectName } from "../../../hook/useCorrectName";
import { Alarm, Delete } from "@mui/icons-material";
import { accountService } from "../../../services/account.service";
import { useQueryClient } from "@tanstack/react-query";
const AdminList = () => {
  const { data, isLoading, error } = useAllUser();
  const queryClient = useQueryClient();
  if (isLoading) return;
  if (error) return <>Error: {error.message}</>;
  const deleteUser = (userId) => {
    accountService.deleteUser(userId);
    queryClient.refetchQueries([`getAllUser`])
  };
  return (
    <div className="container">
      <TableContainer sx={{ userSelect: "none" }}>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                "&> th": {
                  fontSize: 16,
                  pb: "2px !important",
                },
              }}
            >
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>User id</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: "none",
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {useCorrectName(item.name)}
                </TableCell>
                <TableCell>{item.lastname}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell align="right">
                  <IconButton
                    sx={{ color: "#fff" }}
                    onClick={() => deleteUser(item.id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminList;
