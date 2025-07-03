# DevTrack - Personal GitHub Issue Tracker

DevTrack is a personal productivity application designed to help developers track and manage GitHub repository issues efficiently. This React-based dashboard provides a clean, intuitive interface for monitoring your project's issues, their statuses (based on PRs and closed tickets), and overall project progress.

![DevTrack Dashboard](https://via.placeholder.com/800x450?text=DevTrack+Dashboard)

## The Story Behind DevTrack

As a developer working across multiple repositories and contributing to several open source projects, I found myself constantly switching between different GitHub tabs trying to track issues I was working on or responsible for. The GitHub interface, while powerful, didn't give me the personalized overview I needed.

After missing a few deadlines and losing track of critical tasks buried in the sea of notifications, I decided to build DevTrack - a single dashboard where I could see all my assigned issues, track my progress, and prioritize my work effectively.

What started as a simple weekend project has evolved into an indispensable tool in my daily workflow. Now I can instantly see which issues need attention, which PRs are awaiting review, and how my overall productivity has trended over time.

## Key Features

- **Dashboard Overview**: Get a bird's eye view of all your issues across repositories with key metrics and statistics
- **Issue Tracking**: Monitor issues by status (Not Started, In Progress, Completed)
- **PR Status Tracking**: See which issues have associated PRs and their current status
- **Custom Task Management**: Create personal tasks related to your GitHub issues
- **Dark/Light Mode**: Work comfortably day or night with theme options
- **Responsive Design**: Access your productivity dashboard on any device

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- GitHub account with personal access token (for API access)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/devtrack.git
   cd devtrack
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory with your GitHub token:
   ```
   VITE_GITHUB_TOKEN=your_github_personal_access_token
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Usage

After logging in with your GitHub account, DevTrack will:

1. **Connect to your GitHub account**: Automatically fetch issues from repositories you contribute to
2. **Display your dashboard**: Show statistics of your open, in-progress, and closed issues
3. **Track PR status**: Indicate which issues have pull requests and their current state (draft, open, merged)
4. **Filter and sort**: Organize issues by priority, repository, or due date

### Adding Your Repositories

To track specific repositories:

1. Navigate to Settings
2. Click "Add Repository"
3. Enter the repository name (format: `owner/repo`)
4. Select tracking preferences

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: Ant Design
- **Styling**: Styled Components
- **State Management**: React Query
- **Data Visualization**: Recharts
- **Backend Mock**: JSON Server (for development)

## Real-Life Impact

> "DevTrack transformed how I manage my open source contributions. Before, I was constantly context-switching between repositories and losing track of which issues needed my attention. Now, I have everything organized in one place, and my productivity has improved dramatically. I can focus on coding rather than on keeping track of what I need to code."
> 
> — Alex, Full Stack Developer

## Contributing

Contributions are welcome! If you have ideas for new features or find any bugs:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with React, Vite, and TypeScript
- UI components from Ant Design
- Special thanks to the open source community

---

Made with ❤️ by [Anik Dash Akash]
