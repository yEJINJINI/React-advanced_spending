import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
    <>
      <Navbar>여기가 네비게이션 바</Navbar>
      <Outlet />
    </>
  );
}
