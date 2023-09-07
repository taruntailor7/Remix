import { Outlet } from '@remix-run/react'

export default function Posts() {
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h1>This is Posts Route</h1>
        <Outlet />
      </div>
    );
}