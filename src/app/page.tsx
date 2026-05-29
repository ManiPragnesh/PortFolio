import { Hero } from "@/components/sections/Hero";
import { Identity } from "@/components/sections/Identity";
import { Systems } from "@/components/sections/Systems";
import { Profile } from "@/components/sections/Profile";
import { Connect } from "@/components/sections/Connect";
import { SiteBrand } from "@/components/ui/SiteBrand";
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050505]">
      <Hero />
      <Identity />
      <Systems />
      <Profile />
      <Connect />
    </main>
  );
}
