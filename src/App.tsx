import Header from "./components/Header";
import Button from "./components/Button";
import { Collapse } from "./components/Collapse";
import SpeakerCard from "./components/ui/SpeakerCard";
import Card from "./components/Card";

function App() {

  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "AWS Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
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

  const cardItems = [
    {
      name: "IT Seminar",
      description: 'Seminar nasional ini membahas "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif" untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.',
      price: 50000,
    },
    {
      name: "IT Talkshow",
      description: 'Talkshow "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan" membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.',
      price: 40000,
    },
    {
      name: "IT Competition",
      description: 'Kompetisi "From Creation to Innovation" mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.',
      price: 60000,
    },
    {
      name: "IT Workshop",
      description: 'Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era" membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.',
      price: 45000,
    },
  ];

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <section id="hero" className="py-10 flex gap-10 justify-between items-center">
          <div className="w-2/3 flex flex-col gap-6">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              alt=""
              className="w-96"
            />
            <p className="text-gray-700 text-lg leading-relaxed">
            Invofest (Informatics Vocational Festival) adalah festival tahunan
            yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
            Indonesia dalam menghadapi era digital. Dengan mengusung tema
            <span className="font-bold"> "Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow"</span>.
          </p>
            <div className="flex gap-3">
              <a href="#Info-Selengkapnya">
              <Button label="Info Selengkapnya" variant="primary" />
              </a>
              <Button label="Hubungi Panitia" variant="outline" />
            </div>

          </div>
          
          <div className="w-1/3">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt=""
            />
          </div>
          
        </section>

          <section id="Info-Selengkapnya" className="py-20 bg-[#FFF0F3] px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-12">
              <h2 className="text-5xl font-bold text-red-900 mb-6">Tentang INVOFEST</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, 
                adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia 
                dalam menghadapi era digital. Dengan mengusung tema <strong>"Beyond Limits, Beyond Intelligence: 
                Innovate for a Smarter Tomorrow"</strong>. Invofest 2025 menghadirkan berbagai kegiatan menarik 
                seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi.
              </p>
            </div>

            <div id="cards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cardItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-white border-r-8 border-red-900 rounded-lg shadow-sm"
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="speaker" className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            ))}
          </div>
        </section>

        <section id="collapse" className="py-24 flex flex-col gap-2 px-3">
          {collapseItems.map((item, index) => (
            <Collapse key={index} title={item.title} description={item.description} />
          ))}
        </section>
        
      </div>
    </>
  );
}

export default App;