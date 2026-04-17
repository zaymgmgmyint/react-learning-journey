import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: [],
    });

    function handelAddTask(text) {
        const taskId = Math.random();
        setProjectState(prevState => {
            const newTask = {
                text: text,
                projectId: prevState.selectedProjectId,
                id: taskId,
            }
            return {
                ...prevState,
                tasks: [newTask, ...prevState.tasks]
            }
        })
    }

    function handelRemoveTask(taskId) {
        setProjectState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(task => task.id !== taskId)
            }
        });
    }

    function handleStartProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
            }
        })
    }

    function handleCancelProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined
            }
        });
    }

    function handleSelectProject(projectId) {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: projectId
            }
        });
    }

    function handleAddProject(projectData) {
        const projectId = Math.random();
        setProjectState(prevState => {
            const newProject = {
                ...projectData,
                id: projectId
            }
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject]
            }
        });
    }

    function handleDeleteProject(projectId) {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
            }
        });
    }

    const selectedProject = projectState.projects.find(
        project => project.id === projectState.selectedProjectId);

    let content = <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handelAddTask}
        onDeleteTask={handelRemoveTask}
        tasks={projectState.tasks}
    />;

    if (projectState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject}/>;
    } else if (projectState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddproject={handleStartProject}/>;
    }

    return (
        <>
            <main className="h-screen my-8 flex gap-8">
                <ProjectsSidebar
                    onAddproject={handleStartProject}
                    projects={projectState.projects}
                    onSelectProject={handleSelectProject}
                    selectedProjectId={projectState.selectedProjectId}/>
                {content}
            </main>
        </>
    );
}

export default App;
