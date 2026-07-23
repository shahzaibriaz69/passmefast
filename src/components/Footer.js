// src/components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <Link href="/" className="text-xl font-black text-white">
            <span className="text-emerald-400">PASS</span>MEFAST
          </Link>
          <p className="mt-4 text-xs text-gray-400 leading-relaxed">
            Fast-track driving courses across the UK. Get your driving licence in weeks instead of months.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3">Courses</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="#" className="hover:text-emerald-400">Beginner Courses</Link></li>
            <li><Link href="#" className="hover:text-emerald-400">Intermediate Courses</Link></li>
            <li><Link href="#" className="hover:text-emerald-400">Refresher Courses</Link></li>
            <li><Link href="#" className="hover:text-emerald-400">Automatic Driving Lessons</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3">Popular Areas</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="#" className="hover:text-emerald-400">Driving Courses London</Link></li>
            <li><Link href="#" className="hover:text-emerald-400">Driving Courses Manchester</Link></li>
            <li><Link href="#" className="hover:text-emerald-400">Driving Courses Birmingham</Link></li>
            <li><Link href="#" className="hover:text-emerald-400">Driving Courses Leeds</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3">Contact</h4>
          <p className="text-xs">📞 0333 123 4567</p>
          <p className="text-xs mt-2">✉️ info@passmefast-clone.co.uk</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-slate-800 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} PassMeFast Clone. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}