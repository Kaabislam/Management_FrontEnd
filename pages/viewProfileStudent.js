import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import ViewProfileStudent from "../component/StudentDashboard/ViewProfileStudent";

export default function ViewStudentProfile() {
  const router = useRouter();

  return (
    <Container maxWidth="sm">
      <ViewProfileStudent/>
    </Container>
  );
}
