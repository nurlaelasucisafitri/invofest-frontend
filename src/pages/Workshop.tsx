import Button from "../components/Button";

export default function Workshop() {
  return (
    <div>
      <section
        id="Workshop"
        className="max-w-7xl mx-auto py-16 flex gap-10 justify-between items-center px-4"
      >
        <div className="w-2/3 flex flex-col gap-6">
          <h1 data-aos="fade-right" data-aos-delay="300" className="text-4xl font-bold text-red-900">
            IT Workshop <br />
            </h1>
            <h1 data-aos="fade-right" data-aos-delay="450" className="text-2xl text-red-900">
              “AI for a Sustainable Future: The Role of Z Generation in the Digital Era”
            </h1>
          <p className="text-lg text-black-700">
            IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. 
            Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
          </p>
          <div className="flex gap-4 mt-6">
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
            alt="Maskot Seminar"
            className="w-full max-w-xs"
          />
        </div>
      </section>
    </div>
  );
}