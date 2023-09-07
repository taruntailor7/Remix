import { useLoaderData, Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const loader = () => {
  // For Server-Side stuff API Call and all other  
  console.log("123", "inside loader");
  const data = {
    news: [
      {id: 1,  title: 'news 1', body: 'This is a test news 1'},
      {id: 2,  title: 'news 2', body: 'This is a test news 2'},
      {id: 3,  title: 'news 3', body: 'This is a test news 3'}
    ]
  } 
  return data;
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Folder Routing" },
    { name: "description", content: "Concerts" },
  ];
};

export default function Index() {
  const {news} = useLoaderData();
  console.log(news, "news");
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>This is News Route Inside Folder. (With Folder Routing)</h1>
      <Link to='/news/new'>New Post</Link>
      <ul>
        {news.map((news)=> (
          <li key={news.id}>
            <Link to={`/news/${news.id}`}>
              <h3>{news.title}</h3>
              {/* {new Date(news.createdAt).toLocaleString()} */}
            </Link>
        </li>
        ))}
      </ul>
    </div>
  );
}