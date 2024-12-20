// app/page.tsx
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Careers from "@/components/Careers";
import JobsList from "@/components/JobsList";
import CompanyBanner from "@/components/CompanyBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Founder/>
      <Careers/>
      <CompanyBanner/>
      <JobsList />
    </>
  );
}