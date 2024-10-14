Team Collaboration App
Overview
The Team Collaboration App is a simple web application built using React.js that allows users to manage tasks, apply filters, and track their progress. It features user authentication, task management, and local storage for persistence. The app is designed to help teams collaborate by organizing tasks with features such as priority assignment, status updates, and due dates.

Features
1. Authentication System:
Users can register, log in, and log out using a basic authentication context (AuthContext).
After login, users are redirected to the dashboard, where they can view and manage tasks.
2. Task Management:
Users can create new tasks by filling out a form. Each task has a:
Title
Status (In Progress or Completed)
Priority (High, Medium, Low)
Due date
Tasks are stored in the browser’s local storage, ensuring persistence between sessions.
3. Filtering Tasks:
Tasks can be filtered by:
Status
Priority
Due date
The filtering system helps users focus on specific tasks depending on their needs.
4. Task Operations:
Add Task: Users can create tasks through a form and assign necessary fields such as title, status, priority, and due date.
Update Task: Users can update the status of tasks (e.g., mark a task as "Completed").
Delete Task: Users can delete tasks they no longer need.
Components
1. Dashboard
The main area where users manage their tasks.
Displays a list of tasks with options to filter by status, priority, and due date.
Allows users to update the status of tasks to "Completed" or delete tasks altogether.
2. TaskForm
A form component that allows users to create new tasks by entering details such as task title, status, priority, and due date.
3. TaskList
A simple display component that lists all the tasks from the task context, showing their title.
4. Login
A form that enables users to log in to their accounts by entering their email and password.
After login, users are redirected to the dashboard to manage their tasks.
5. Header
Contains navigation links for logging in or registering.
Once logged in, the user’s email is displayed along with a logout button.
Context
1. AuthContext
Provides authentication functionality across the app. It manages user login, logout, and user session information.
2. TaskContext
(Potential Feature) Could be extended to manage tasks globally in the future, making it easier to access tasks across different components.
Technologies Used
React.js: Core framework for building user interfaces.
React Router: For handling navigation between login, register, and dashboard views.
CSS: Basic styling.
Local Storage: To persist tasks across user sessions.
React Context API: For managing global state such as authentication and tasks.
Future Improvements
TaskContext Implementation: Currently, tasks are managed in the Dashboard component. Using a global TaskContext will allow better scalability.
User-specific Task Storage: Move from local storage to a database to allow different users to have their own set of tasks.
Notifications: Add notifications to alert users of upcoming due dates or completed tasks.