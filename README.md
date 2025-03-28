

### Welcome!
Thank you for your interest in joining! This is a simplified skill test designed to understand your approach to problem-solving and development. The tasks are categorized based on your area of expertise.

---

### 🎯 **Objective:**
Build a small part of a card memory game based on your assigned role. This is meant to be completed within **2–3 hours** to showcase your skills.

### 🛠️ **Tech Stack:**
- Frontend: React, Vite
- Backend: Node.js, Express
- Database: MongoDB (only if applicable)
- Web3: MetaMask integration (only if applicable)

### 🚀 **Setup Guide:**
1. Clone the repository:
   ```bash
   git clone https://github.com/belolabs1024/Test.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Test
   ```
3. Set up the backend:
   ```bash
   cd ./backend
   npm install
   npm start
   ```
4. Set up the frontend:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
5. Visit `http://localhost:5173` to see the project.

---

### 🧩 **Task Breakdown by Role (Ordered by Importance):**

#### **Tech Lead:**
- Review the existing codebase and suggest architectural improvements.
- Draft a brief project roadmap highlighting key milestones and dependencies for scaling the game.

#### **Project Manager:**
- Create a simple project plan or task board to showcase how you would organize and prioritize tasks for a small team.
- Identify potential risks in the project and propose mitigation strategies.

#### **Frontend Developer:**
- Style the login page to be visually appealing and responsive.
- Create a modal dialog for level selection (Easy, Medium, Hard).

#### **Backend Developer:**
- Implement a simple API endpoint to save game results.
- Create a route to fetch the game result history (no need for complex authentication).

#### **Full Stack Developer:**
- Complete both the Frontend and Backend tasks.
- Integrate the API to display the game result history on a new page.

#### **Web3 Developer:**
- Implement MetaMask wallet connection.
- Show a message displaying the connected wallet address.

#### **Blockchain Developer:**
- Implement a simple Solidity smart contract that handles basic game logic (e.g., validating moves).
- Deploy the contract locally using Hardhat and demonstrate interaction with the frontend.

#### **Software Engineer:**
- Optimize the card-flip logic for smooth performance.
- Implement basic automated tests for the frontend.

#### **Designer:**
- Create assets like a styled Play button and card designs.
- Suggest UI/UX improvements for the main screen.

---



### ⚡ **Good Luck and Have Fun!**

Notes from developer:

- Game results are already stored in >>Save<< schema so no need for new schema.
- Added field >>score<< which indicates the score reached by the player for that particular game
  - Includes simple formula to calculate score
    - score = 1 / timeTaken * failed * 1000;
      
   - Explanation:
     - timeTaken in seconds and number of failed attempts
     - the longer the game is played and more failed attempts results in lower score
     - "* 1000" so the score is a full number ranging 1-1000 instead of small 0.0001 -> 1.0

- Added function to retrieve game results from db memoryController.js -> fetchSaveHistory
  - The function expects userId as parameter found in request.params and 
   returns filtered saved games just for that particular user
  - Returns top 5 scores ordered by score descending

- Route, defined in routes/memoryRoutes.js takes :userId as query param which is not ideal. 
Ideally i think would be for UI to send User JWT token in every request inside "Authorization Bearer"
header. The backend would then decode the token and read the userId from there after successful validation.

On Frontend:

- redesigned login page but very basic, using Card component from Material UI Framework
- Added High Scores page which displays top 5 high scores for the logged-in user. 
  - Could be improved further by designing a table in a nicer way 
  - perhaps use localStorage and state management to avoid too many calls to backend

Frontend development is not my specialty but I do know my way around most popular frameworks like react and vue.js

I mostly specialized in backends and devops, i am very good with python, linux shells, 
docker containerization, devops pipelines, i have worked with all major cloud services, like AWS, Azure, 
even SAP BTP. 

Another thing I'd like to mention is, I'd rather use python for backends like this.
Using modern frameworks like FastAPI and Pydantic for model definitions and validation
can save a lot of time and effort, but maybe that's just the python developer's in me opinion :) 
Always fun to use new tools and have new challenges :)

