import { Outlet } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Folder Routing" },
    { name: "description", content: "Concerts" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>This is News Route Inside Folder. (With Folder Routing)</h1>
      <Outlet />
    </div>
  );
}