import KanbanBoard from "../../components/Kanban/KanbanBoard";

const Kanban = () => {
  return (
    <section className="p-4 sm:p-6">
      {/* Page Header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-[#211A52] sm:text-3xl">
          Kanban Board
        </h1>

        <p className="mx-auto mt-2 max-w-2xl text-sm text-[#8A86A3]">
          Track and manage your applications across every stage of your job
          search.
        </p>
      </div>

      {/* Kanban Board */}
      <KanbanBoard />
    </section>
  );
};

export default Kanban;