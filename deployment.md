### **Step 1: Install GitHub Pages Package**
If you haven't already, navigate to your React project folder and install the `gh-pages` package:
```bash
npm install gh-pages --save-dev
```

### **Step 2: Update `package.json`**
Edit your `package.json` file and add the following lines:

1. **Set the homepage property** (Replace `username` and `repo-name` with your GitHub username and repository name):
   ```json
   "homepage": "https://username.github.io/repo-name"
   ```

2. **Add deploy scripts:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

### **Step 3: Initialize Git and Push Code**
Ensure your project is a Git repository and push it to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

### **Step 4: Deploy the React App**
Run the following command:
```bash
npm run deploy
```
This will create a `build` folder and push the contents to the `gh-pages` branch.

### **Step 5: Enable GitHub Pages**
1. Go to your GitHub repository.
2. Navigate to **Settings** > **Pages**.
3. Under **Source**, select `gh-pages` branch.
4. Click **Save**.

### **Step 6: Access Your Website**
Once the deployment is complete, visit:
```
https://username.github.io/repo-name
```

Your React app is now live on GitHub Pages! 🚀