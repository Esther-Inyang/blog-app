"use client";
import { redirect } from "next/navigation";

const Dashboard: React.FC = () => {
  redirect("/dashboard/add-post");

  return null;
};

export default Dashboard;
