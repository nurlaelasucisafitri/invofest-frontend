import Button from "../components/Button";

export default function Competition() {
  return (
    <div>
      <section
        id="Seminar"
        className="max-w-7xl mx-auto py-16 flex gap-10 justify-between items-center px-4"
      >
        <div className="w-2/3 flex flex-col gap-6">
          <h1 data-aos="fade-right" data-aos-delay="300" className="text-4xl font-bold text-red-900">
            IT Competition <br />
            </h1>
            <h1 data-aos="fade-right" data-aos-delay="450" className="text-2xl text-red-900">
              "From Creation to Innovation"
            </h1>
          
          <p className="text-lg text-black-700">
            Kompetisi dalam INVOFEST ini mengusung tema <strong>"From Creation to
            Innovation"</strong>. Tema ini bertujuan mengajak generasi muda untuk
            mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki
            potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.
          </p>
          <div className="flex gap-4 mt-6">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
            alt="Maskot Lomba"
            className="w-full max-w-xs"
          />
        </div>
      </section>
    </div>
  );
}