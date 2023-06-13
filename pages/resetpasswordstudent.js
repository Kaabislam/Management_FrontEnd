import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import ResetPasswordStudentIndex from "../component/StudentDashboard/ResetPasswordStudentIndex";

export default function ResetPasswordStudent() {
  const router = useRouter();

  return (
    <Container maxWidth="sm">
      <ResetPasswordStudentIndex/>
    </Container>
  );
}
