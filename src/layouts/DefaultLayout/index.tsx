import { Outlet } from "react-router-dom";
import { LayoutContainer } from "../DefaultLayout/styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
}
