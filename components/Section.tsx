export function PageTitle({ children, lead }: { children: React.ReactNode; lead?: string }) {
  return (
    <div className="mb-8">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">{children}</h1>
      {lead && <p className="mt-2 text-muted">{lead}</p>}
    </div>
  );
}
export function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
        {title}<span className="h-px flex-1 bg-line" />
      </h2>
      {children}
    </section>
  );
}
