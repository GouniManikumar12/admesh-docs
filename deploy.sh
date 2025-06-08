#!/bin/bash

# AdMesh Documentation Deployment Script
# This script builds and deploys the documentation site

set -e  # Exit on any error

echo "🚀 Starting AdMesh Documentation Deployment"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the docs directory
if [ ! -f "docusaurus.config.js" ]; then
    print_error "This script must be run from the docs directory"
    print_error "Current directory: $(pwd)"
    print_error "Please run: cd docs && ./deploy.sh"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18 or higher is required. Current version: $(node --version)"
    exit 1
fi

print_status "Node.js version: $(node --version) ✓"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm and try again."
    exit 1
fi

print_status "npm version: $(npm --version) ✓"

# Install dependencies
print_status "Installing dependencies..."
if npm ci; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Run type checking if TypeScript is available
if command -v npx &> /dev/null && npx tsc --version &> /dev/null; then
    print_status "Running type checking..."
    if npm run typecheck; then
        print_success "Type checking passed"
    else
        print_warning "Type checking failed, but continuing with build..."
    fi
fi

# Build the documentation
print_status "Building documentation..."
if npm run build; then
    print_success "Documentation built successfully"
else
    print_error "Failed to build documentation"
    exit 1
fi

# Check if build directory exists and has content
if [ ! -d "build" ] || [ -z "$(ls -A build)" ]; then
    print_error "Build directory is empty or doesn't exist"
    exit 1
fi

print_success "Build directory created with $(du -sh build | cut -f1) of content"

# Deployment options
echo ""
echo "📦 Build completed successfully!"
echo ""
echo "Choose deployment option:"
echo "1) GitHub Pages"
echo "2) Vercel"
echo "3) Netlify"
echo "4) Custom server (SCP)"
echo "5) Local preview only"
echo ""

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        print_status "Deploying to GitHub Pages..."
        
        # Check if we're in a git repository
        if [ ! -d ".git" ]; then
            print_error "Not in a git repository. GitHub Pages deployment requires git."
            exit 1
        fi
        
        # Check if gh-pages branch exists or create it
        if git show-ref --verify --quiet refs/heads/gh-pages; then
            print_status "gh-pages branch exists"
        else
            print_status "Creating gh-pages branch..."
            git checkout --orphan gh-pages
            git rm -rf .
            git commit --allow-empty -m "Initial gh-pages commit"
            git checkout main  # or master
        fi
        
        # Deploy using Docusaurus
        if npm run deploy; then
            print_success "Successfully deployed to GitHub Pages!"
            print_success "Your documentation will be available at: https://$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^/]*\)\/\([^.]*\).*/\1.github.io\/\2/')"
        else
            print_error "GitHub Pages deployment failed"
            exit 1
        fi
        ;;
        
    2)
        print_status "Preparing for Vercel deployment..."
        
        # Create vercel.json if it doesn't exist
        if [ ! -f "vercel.json" ]; then
            cat > vercel.json << EOF
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "installCommand": "npm ci"
}
EOF
            print_success "Created vercel.json configuration"
        fi
        
        print_success "Vercel configuration ready!"
        echo ""
        echo "To deploy to Vercel:"
        echo "1. Install Vercel CLI: npm i -g vercel"
        echo "2. Run: vercel --prod"
        echo "3. Or connect your GitHub repo to Vercel dashboard"
        ;;
        
    3)
        print_status "Preparing for Netlify deployment..."
        
        # Create netlify.toml if it doesn't exist
        if [ ! -f "netlify.toml" ]; then
            cat > netlify.toml << EOF
[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOF
            print_success "Created netlify.toml configuration"
        fi
        
        print_success "Netlify configuration ready!"
        echo ""
        echo "To deploy to Netlify:"
        echo "1. Drag and drop the 'build' folder to netlify.com/drop"
        echo "2. Or connect your GitHub repo to Netlify dashboard"
        echo "3. Or use Netlify CLI: netlify deploy --prod --dir=build"
        ;;
        
    4)
        print_status "Preparing for custom server deployment..."
        
        read -p "Enter server hostname: " hostname
        read -p "Enter server path: " server_path
        read -p "Enter username: " username
        
        if [ -z "$hostname" ] || [ -z "$server_path" ] || [ -z "$username" ]; then
            print_error "All fields are required for SCP deployment"
            exit 1
        fi
        
        print_status "Uploading to $username@$hostname:$server_path..."
        
        if scp -r build/* "$username@$hostname:$server_path/"; then
            print_success "Successfully deployed to custom server!"
            print_success "Your documentation should be available at your server URL"
        else
            print_error "SCP deployment failed"
            exit 1
        fi
        ;;
        
    5)
        print_status "Starting local preview server..."
        print_success "Documentation built successfully!"
        echo ""
        echo "To preview locally, run:"
        echo "  npm run serve"
        echo ""
        echo "The documentation will be available at http://localhost:3000"
        ;;
        
    *)
        print_error "Invalid choice. Please run the script again and choose 1-5."
        exit 1
        ;;
esac

echo ""
print_success "🎉 Deployment process completed!"
echo ""
echo "📚 Documentation includes:"
echo "  • Getting Started guides"
echo "  • Python SDK documentation"
echo "  • TypeScript SDK documentation"
echo "  • UI SDK documentation"
echo "  • AI Integration guides"
echo "  • API Reference"
echo "  • Real-world examples"
echo ""
echo "🔗 Useful links:"
echo "  • AdMesh Dashboard: https://useadmesh.com"
echo "  • Python SDK: https://github.com/GouniManikumar12/admesh-python"
echo "  • TypeScript SDK: https://github.com/GouniManikumar12/admesh-typescript"
echo "  • UI SDK: https://github.com/GouniManikumar12/admesh-ui-sdk"
echo ""
print_success "Happy coding! 🚀"
