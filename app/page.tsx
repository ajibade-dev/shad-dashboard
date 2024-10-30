"use client"
import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import PostsTable from "@/components/posts/PostsTable";
import AnayliticsChart from "@/components/dashboard/AnayliticsChart";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-between gap-5 mb-5 lg:flex-row">
      <DashboardCard title='Posts' count={100} icon={<Newspaper className="text-slate-500 " size={72} />} />
      <DashboardCard title='Categories' count={12} icon={<Folder className="text-slate-500 " size={72} />} />
      <DashboardCard title='Users' count={750} icon={<User className="text-slate-500 " size={72} />} />
      <DashboardCard title='Comments' count={1200} icon={<MessageCircle className="text-slate-500 " size={72} />} />
    </div>
    <AnayliticsChart />
    <PostsTable
    title="Latest Posts"
    limit={5}
    />
    
    </>
  );
}
