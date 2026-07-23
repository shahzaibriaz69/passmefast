// src/app/page.js
import Hero from '@/components/Hero';
import LandingSections from '@/components/LandingSections';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-16">
      <Hero />
      <LandingSections />
    </main>
  );
}