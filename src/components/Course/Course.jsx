import { CourseCard } from "./CourseCard";
export const Course = () => {
  return (
    <main className="max-w-3xl m-auto my-12">
      <div className="grid grid-cols-3 gap-4">
        <CourseCard tema="Selamatkan Makhluk Hidup" subtema="Subtema 1" judul="Tumbuhan Sahabatku" />
        <CourseCard tema="Selamatkan Makhluk Hidup" subtema="Subtema 2" judul="Hewan Sahabatku" />
        <CourseCard tema="Selamatkan Makhluk Hidup" subtema="Subtema 3" judul="Ayo Selamatkan Hewan dan Tumbuhan " />
      </div>
    </main>
  );
};
