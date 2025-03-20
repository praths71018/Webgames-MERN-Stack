# Webgames

A website in which you can play 3 games which are :

- Tic Tac Toe
- Rock Paper Scissors
- Guess The Number

The selling points in this project:

- The design of the project is completely done manually (in [Homepage.css](https://github.com/praths71018/Webgames-MERN-Stack/blob/main/src/components/Homepage.css))
- Utilises MERN (MongoDB,Express,React,Node) Stack
- Attractive and eye catching UI, Both for the games and for webpage (refer to [Output.pdf](https://github.com/praths71018/Webgames-MERN-Stack/blob/main/Output.pdf))

## Running the Application

To run the backend components (login, signup, comment.js) and the frontend of the Webgames project, follow these instructions:

### a. Running the Backend:

#### 1. Login:
1. Open your terminal.
2. Navigate to the `login` directory of your backend project:
   
   ```bash
   cd backend/login
   ```
   
3. Start the login server using npm:
   
   ```bash
   npm run dev
   ```
   
4. After starting, you should see a message indicating that the server is listening on port 8080 and that the connection has succeeded.

#### 2. Signup:
1. Open your terminal.
2. Navigate to the `signup` directory of your backend project:
   
   ```bash
   cd backend/signup
   ```
   
3. Start the signup server using npm:
   
   ```bash
   npm run dev
   ```
   
4. After starting, you should see a message indicating that the server is listening on port 8000 and that the connection has succeeded.

#### 3. Comment.js (MongoDB):
1. Open your terminal.
2. Navigate to the `src/components` directory of your project:
   
   ```bash
   cd src/components
   ```
  
3. Start the comment.js server using node:
   
   ```bash
   node comment.js
   ```
   
4. After starting, you should see a message indicating that the server is listening on port 4000 and that the connection has succeeded.

### b. Running the Frontend:

1. Open your terminal.
2. Navigate to the main directory of your project.
3. Start the frontend server using npm:
   
   ```bash
   npm start
   ```
   
4. After starting, you should see a message indicating that the frontend has been compiled successfully, and you can now view it in the browser.
   - Local: [http://localhost:3000](http://localhost:3000)
   - On Your Network: http://192.168.0.101:3000 (if you want to access it from other devices in the same network)

Make sure you have MongoDB running if you're using comment.js to ensure the connection succeeds.
