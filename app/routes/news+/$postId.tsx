import { useParams } from '@remix-run/react';

export default function News() {
  const params = useParams()
  console.log(params, 'params log');

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>This is Nested Single News Route by News ID. (With Folder Routing)</h1>
      <h2>{params.postId}</h2>
    </div>
  );
}