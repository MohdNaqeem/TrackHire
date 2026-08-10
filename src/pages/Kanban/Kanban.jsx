import KanbanBoard from "../../components/Kanban/KanbanBoard";

const Kanban = () => {
  return (
    <section className="p-6">
      {/* Page Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#211A52]">
            Kanban Board
          </h1>

          <p className="mt-1 text-sm text-[#8A86A3]">
            Manage your job applications through every stage.
          </p>
        </div>

        <button className="rounded-xl bg-[#3CBFA4] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#32A88F]">
          + Add Application
        </button>
      </div>

      {/* Kanban Board */}
      <KanbanBoard />
    </section>
  );
};

export default Kanban;