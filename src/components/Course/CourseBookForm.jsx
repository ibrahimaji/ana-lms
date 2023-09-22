export const CourseBookForm = () => {
  return (
    <main className="h-screen flex justify-center items-center">
    <div className="w-[260px] space-y-2">
      <h1>Gabung ke Materi</h1>
      <Input name="email" placeholder="Masukan email Anda" />
      <Input
        name="password"
        type="password"
        placeholder="Masukan password Anda"
      />
      <Button color="primary">Gabung</Button>
    </div>
    </main>
  );
};
