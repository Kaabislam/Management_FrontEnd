import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import DashboardIndex from "../component/DashBoard/DashboardIndex";
import StudentAddIndex from "../component/DashBoard/StudentAdd/StudentAddIndex";
import TeacherAddIndex from "../component/DashBoard/StudentAdd/TeacherAddIndex";

export default function Addstudent() {
  const router = useRouter();

  
  return (
    <Container maxWidth="sm">
     
     <TeacherAddIndex/>
    </Container>
  );
}
