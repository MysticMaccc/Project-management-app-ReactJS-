import Tasks from "./Tasks";

export default function SelectedProject({project,onDelete,onAddTask,onDeleteTask,tasks}) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: '2-digit',
        month: 'short',
        day: 'numeric'
    });
    return (
        <div className="w=[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center  gap-56">
                    <h1 className="text-3xl font-bold text-stone-600">{project.title}</h1>
                    <button className="text-stone-600 hover:text-stone-950" onClick={onDelete}>
                        Delete
                    </button>
                </div>
                <p className="mb-4 text-stone-400">
                    {project.formattedDate}
                </p>
                <p className="text-stone-600 whitespace-pre-wrap">
                    {project.description}
                </p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
        </div>
    );
}