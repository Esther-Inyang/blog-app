import { postsData } from "@/app/data";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main>
      <Blog postsData={postsData} />
    </main>
  );
}
