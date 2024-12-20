// app/page.tsx
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Careers from "@/components/Careers";
import JobsList from "@/components/JobsList";

export default function Home() {
  return (
    <>
      <Hero />
      <Founder/>
      <Careers/>
      <JobsList />
    </>
  );
}