#!/bin/bash
# 🧹 GitHub Repository Cleanup Script

echo "🧹 GITHUB REPOSITORY CLEANUP"
echo "=============================="

echo "📋 This script will help you clean up your GitHub repository"
echo ""

# Step 1: Clone repository
echo "1️⃣ CLONE YOUR REPOSITORY:"
echo "   git clone https://github.com/alcariss/flashcards.git"
echo "   cd flashcards"
echo ""

# Step 2: Remove unwanted files
echo "2️⃣ REMOVE UNWANTED FILES:"
echo "   git rm .DS_Store"
echo "   git rm test-suite.sh"
echo "   git rm platform-test.sh" 
echo "   git rm update-test.sh"
echo "   git rm PWA-TEST.md"
echo "   git rm TEST-RESULTS.md"
echo "   git rm VERIFICATION-REPORT.md"
echo ""

# Step 3: Add gitignore
echo "3️⃣ ADD .GITIGNORE (to prevent future uploads):"
echo "   # Copy the .gitignore file we created to the cloned directory"
echo "   git add .gitignore"
echo ""

# Step 4: Commit changes
echo "4️⃣ COMMIT CLEANUP:"
echo "   git commit -m '🧹 Clean up repository: Remove testing files and add .gitignore'"
echo ""

# Step 5: Push changes
echo "5️⃣ PUSH TO GITHUB:"
echo "   git push origin main"
echo ""

echo "✅ RESULT: Clean repository with only essential PWA files!"
echo ""

echo "📁 FINAL REPOSITORY STRUCTURE:"
echo "   ├── index.html           ✅ Core PWA"
echo "   ├── manifest.json        ✅ Core PWA"  
echo "   ├── sw.js               ✅ Core PWA"
echo "   ├── icon-192.png        ✅ Core PWA"
echo "   ├── icon-512.png        ✅ Core PWA"
echo "   ├── README.md           ✅ Documentation"
echo "   ├── UPDATE-SYSTEM.md    ✅ Documentation"
echo "   └── .gitignore          ✅ Git config"
echo ""

echo "🚀 Your repository will be clean and professional!"