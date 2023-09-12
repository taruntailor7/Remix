import { useLoaderData, Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import {db} from '~/utils/db.server';

export const loader = async () => {
  // For Server-Side stuff API Call and all other  
  //  console.log("inside loader");
  const data = {
    news: await db.post.findMany({
      take: 20,
      select: { id: true, title: true, createdAt: true},
      orderBy: {createdAt: 'desc'},
    }),
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
    <>
      <div className='page-header'>
        <h1>This is News Route Inside Folder. (With Folder Routing)</h1>
        <Link to='/news/new'>New Post</Link>
      </div>
      <ul className='posts-list'>
        {news.map((news)=> (
          <li key={news.id}>
            <Link to={`/news/${news.id}`}>
              <h3>{news.title}</h3>
              {new Date(news.createdAt).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
} 