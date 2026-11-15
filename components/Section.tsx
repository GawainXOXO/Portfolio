export function PageTitle({ children, lead }: { children: React.ReactNode; lead?: string }) {
  const file = String(children).toLowerCase().replace(/\s+/g, "_");
  return (
    <div className="mb-8">
      <div className="titlebar"><span>{file}.txt</span><b>_ □ ×</b></div>
      <div className="card-in border-t-0 p-4">
        <h1 className="px text-2xl leading-tight sm:text-3xl">
          <span className="script text-4xl text-accent sm:text-5xl">{String(children)[0]}</span>
          {String(children).slice(1).toUpperCase()}
        </h1>
        {lead && <p className="mt-2 text-muted">{lead}</p>}
      </div>
    </div>
  );
}
export function Block({ title, children, n }: { title: string; children: React.ReactNode; n?: string }) {
  return (
    <section className="mb-12">
      <h2 className="px mb-4 flex items-center gap-3 text-[0.7rem] uppercase">
        {n && <span className="text-accent">( {n} )</span>}
        {title}
        <span className="stripe flex-1" />
      </h2>
      {children}
    </section>
  );
}
