export function Avatar() {
  return (
    <div className="flex justify-center">
      <img
        src="/me.jpg"
        alt="Luiz Almeida"
        className="w-32 h-32 rounded-full object-cover ring-2 ring-border"
      />
    </div>
  );
}
