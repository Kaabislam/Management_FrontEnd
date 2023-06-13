import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import TeacherDashBoard from "../component/TeacherDashboard/TeacherDashboard";

export default function TeacherDashboard() {
  const router = useRouter();

  return (
    <Container maxWidth="sm">
      <TeacherDashBoard/>
    </Container>
  );
}
