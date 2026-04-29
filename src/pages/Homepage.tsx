import Button from "../components/Button";
import { Collapse } from "../components/Collapse";

export default function Homepage() {
  const categories = [
    {
      id: "seminar",
      title: "IT Seminar",
      link: "https://pendaftaran-seminar.example.com", 
      desc: "Seminar nasional ini membahas 'Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif' untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.",
    },
    {
      id: "talkshow",
      title: "IT Talkshow",
      link: "https://pendaftaran-talkshow.example.com",
      desc: "Talkshow 'Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan' membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.",
    },
    {
      id: "competition",
      title: "IT Competition",
      link: "https://pendaftaran-lomba.example.com",
      desc: "Kompetisi 'From Creation to Innovation' mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa. yang mampu mewujudkan masa depan yang berkelanjutan.",
    },
    {
      id: "workshop",
      title: "IT Workshop",
      link: "https://pendaftaran-workshop.example.com",
      desc: "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Invofest?",
      description: 'Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema "Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow".',
    },
    {
      title: "Kapan dan di mana Invofest akan diselenggarakan?",
      description: "Invofest akan diselenggarakan pada tanggal 15-17 November 2024 di Universitas Harkat Negeri Kota Tegal, Indonesia.",
    },
    {
      title: "Siapa saja yang dapat mengikuti Invofest?",
      description: "Invofest terbuka untuk semua kalangan, terutama mahasiswa, pelajar, profesional muda, dan siapa saja yang tertarik dengan teknologi dan inovasi. Acara ini dirancang untuk memberikan inspirasi dan pengetahuan kepada semua peserta, tanpa memandang latar belakang atau tingkat keahlian.",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAction = (url: string) => {
    if (typeof window !== "undefined" && url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="overflow-x-hidden font-sans">
      <section id="hero" className="max-w-7xl mx-auto py-16 flex flex-col md:flex-row gap-10 justify-between items-center px-4">
        <div className="md:w-2/3 flex flex-col gap-6">
          <img src="https://www.invofest-harkatnegeri.com/assets/text-image.png" alt="Invofest Logo" className="w-full max-w-md" />
          <p className="text-gray-800 text-xl leading-relaxed">
            Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema 
            <span className="font-bold"> "Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow".</span>
          </p>
          <div className="flex gap-4">
            <a href="#Info-Selengkapnya">
            <Button label="Info Selengkapnya" variant="primary" />
            </a>
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>
        <div className="md:w-2/5 flex justify-end">
          <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" alt="Maskot Hero" className="w-full h-auto drop-shadow-2xl" />
        </div>
      </section>

      <section id="Info-Selengkapnya" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#FDF0F3] rounded-[100px] scale-x-125 transform transition-transform"></div>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#801B30] mb-8 uppercase">Tentang INVOFEST</h2>
          <p className="text-gray-700 max-w-5xl text-lg leading-relaxed mb-16">
            Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan 
            generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”. Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-2xl border-r-8 border-b-8 border-[#801B30] shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-all">
                <div>
                  <h3 className="text-2xl font-bold text-[#801B30] mb-5">{item.title}</h3>
                  <p className="text-gray-600 leading-snug">{item.desc}</p>
                </div>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="bg-[#801B30] text-white text-sm font-bold py-3 px-6 rounded-lg mt-6 w-fit uppercase tracking-wider hover:bg-[#a0233c] transition-colors">
                  Info Selengkapnya
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-10">
        {/* SEMINAR */}
        <section id="seminar" className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-3/5">
            <h2 className="text-4xl md:text-6xl font-bold text-[#801B30] mb-8 uppercase">IT Seminar</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Seminar Nasional ini mengangkat tema <span className="font-bold">"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif."</span>
              Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
            </p>
            <Button label="DAFTAR IT SEMINAR" variant="primary" onClick={() => handleAction(categories[0].link)} />
          </div>
          <div className="w-full md:w-2/5 flex justify-center">
            <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png" className="w-full max-w-md drop-shadow-xl" alt="Seminar" />
          </div>
        </section>

        {/* TALKSHOW */}
        <section id="talkshow" className="bg-[#FDF0F3] py-24 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="w-full md:w-3/5">
              <h2 className="text-4xl md:text-6xl font-bold text-[#801B30] mb-8 uppercase">IT Talkshow</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                Membahas <span className="font-bold">"Humanizing Technology"</span>Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, 
                tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI.
              </p>
              <Button label="DAFTAR IT TALKSHOW" variant="primary" onClick={() => handleAction(categories[1].link)} />
            </div>
            <div className="w-full md:w-2/5 flex justify-center">
              <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png" className="w-full max-w-md drop-shadow-xl" alt="Talkshow" />
            </div>
          </div>
        </section>

        {/* COMPETITION */}
        <section id="competition" className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-3/5">
            <h2 className="text-4xl md:text-6xl font-bold text-[#801B30] mb-8 uppercase">IT Competition</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Ajang <span className="font-bold">"From Creation to Innovation"</span> adalah sebuah kompetisi IT yang dirancang untuk menjembatani jurang antara ide kreatif dan inovasi nyata. Ajang ini menantang para talenta digital untuk tidak hanya menciptakan sesuatu yang baru, tetapi juga mengembangkannya menjadi solusi yang berdampak, berkelanjutan, dan bernilai guna tinggi.
            </p>
            <Button label="DAFTAR IT COMPETITION" variant="primary" onClick={() => handleAction(categories[2].link)} />
          </div>
          <div className="w-full md:w-2/5 flex justify-center">
            <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png" className="w-full max-w-md drop-shadow-xl" alt="Competition" />
          </div>
        </section>

        {/* WORKSHOP */}
        <section id="workshop" className="bg-[#FDF0F3] py-24 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="w-full md:w-3/5">
              <h2 className="text-4xl md:text-6xl font-bold text-[#801B30] mb-8 uppercase">IT Workshop</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
              </p>
              <Button label="DAFTAR IT WORKSHOP" variant="primary" onClick={() => handleAction(categories[3].link)} />
            </div>
            <div className="w-full md:w-2/5 flex justify-center">
              <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png" className="w-full max-w-md drop-shadow-xl" alt="Workshop" />
            </div>
          </div>
        </section>

        {/* 4. FAQ SECTION */}
        <section id="faq" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h4 className="text-gray-600 font-bold tracking-widest uppercase mb-2 text-sm">FAQ</h4>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Punya Pertanyaan? Lihat <span className="text-[#801B30]">Disini</span>
            </h2>
            <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Ada banyak informasi yang terkait dengan INVOFEST di bawah ini.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {collapseItems.map((item, index) => (
                <div key={index} className="rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-r-[6px] border-b-[6px] border-[#801B30] overflow-hidden self-start">
                  <Collapse title={item.title} description={item.description} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}