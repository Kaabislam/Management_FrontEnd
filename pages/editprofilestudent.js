import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import EditStudentProfile from "../component/StudentDashboard/EditStudentProfile";
export default function EditProfileStudent() {
  const router = useRouter();

  return (
    <Container maxWidth="sm">
     <EditStudentProfile/>
    </Container>
  );
}
