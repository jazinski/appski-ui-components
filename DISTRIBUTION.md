# 📦 Private Distribution Guide

## How to Share @appski/ui Components Privately

This component library is **private** and will NOT be published to any public
npm registry. Here are your options for distribution.

---

## 🎯 Recommended Approach: Git + Pre-built Package

### For the Component Library (You - Maintainer)

1. **Build the package:**
   ```bash
   bun run build
   npm pack
   # Creates: appski-ui-0.1.0.tgz
   ```

2. **Commit the build artifacts** (one-time setup):
   ```bash
   # Create a dist branch for releases
   git checkout -b releases

   # Add built files
   git add dist/
   git commit -m "Release v0.1.0"
   git tag v0.1.0
   git push origin releases --tags
   ```

### For Consumers (Your Team)

**Method A: Install from Git (Recommended)**

```bash
# Install from specific tag/version
bun add git+ssh://git@github.com/jazinski/appski-ui-components.git#v0.1.0

# Or install from releases branch
bun add git+ssh://git@github.com/jazinski/appski-ui-components.git#releases
```

**Method B: Install from Tarball**

```bash
# Download the .tgz file you built
bun add /path/to/appski-ui-0.1.0.tgz

# Or from a URL (if hosted on your network)
bun add https://code-server.jazinski.com/packages/appski-ui-0.1.0.tgz
```

---

## 📋 Setup in Consumer Projects

### 1. Install the Package

```bash
# Using Git (auto-updates with bun install)
bun add git+ssh://git@github.com/jazinski/appski-ui-components.git#v0.1.0
```

### 2. Import Styles

```tsx
// In your main app file (e.g., src/index.tsx or src/App.tsx)
import "@appski/ui/styles.css";
```

### 3. Configure Tailwind CSS

Create or update `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Include component library
    "./node_modules/@appski/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
```

### 4. Add CSS Variables

Add to your global CSS file (e.g., `src/index.css` or `src/globals.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}
```

### 5. Use Components

```tsx
import { Badge, Button, Card, Input } from "@appski/ui";

function App() {
  return (
    <div className="p-8">
      <Card>
        <Card.Header>
          <Card.Title>Welcome</Card.Title>
          <Card.Description>Using @appski/ui components</Card.Description>
        </Card.Header>
        <Card.Content>
          <Input placeholder="Enter text..." />
        </Card.Content>
        <Card.Footer>
          <Button>Submit</Button>
          <Badge variant="success">Active</Badge>
        </Card.Footer>
      </Card>
    </div>
  );
}
```

---

## 🔄 Updating to New Versions

### When a new version is released:

```bash
# Update to specific version
bun add git+ssh://git@github.com/jazinski/appski-ui-components.git#v0.2.0

# Or update to latest on releases branch
bun update @appski/ui
```

---

## 🏗️ Alternative: Private npm Registry (Advanced)

If you want a full npm-like experience, you can run **Verdaccio** on your
server:

### On Server (code-server.jazinski.com)

```bash
# Install Verdaccio
npm install -g verdaccio

# Run it
verdaccio
# Runs on http://localhost:4873
```

### Configure in Component Library

```bash
# Set registry
npm set registry http://code-server.jazinski.com:4873

# Add user
npm adduser --registry http://code-server.jazinski.com:4873

# Publish
bun run build
npm publish
```

### Configure in Consumer Projects

```bash
# Set registry for @appski scope
npm config set @appski:registry http://code-server.jazinski.com:4873

# Install normally
bun add @appski/ui
```

---

## 📊 Comparison

| Method                | Setup  | Updates      | Speed   | Best For           |
| --------------------- | ------ | ------------ | ------- | ------------------ |
| **Git (Recommended)** | Easy   | `bun update` | Medium  | Small-medium teams |
| **Tarball**           | Easy   | Manual       | Fast    | Quick testing      |
| **Verdaccio**         | Medium | `bun update` | Fast    | Larger teams       |
| **Workspace**         | Easy   | Instant      | Instant | Monorepo only      |

---

## 🎯 Recommended Workflow

1. **Development:** Work in `appski-ui-components` repo
2. **Build:** Run `bun run build` when ready
3. **Tag:** Create Git tag: `git tag v0.1.0 && git push --tags`
4. **Distribute:** Team installs via Git URL with tag
5. **Storybook:** View docs at https://ui.appski.me (Docker deployment)

---

## ⚠️ Important Notes

- **Never commit `node_modules/`** to Git
- **Do commit `dist/`** to releases branch for easier consumption
- **Use semantic versioning** for tags (v0.1.0, v0.2.0, etc.)
- **Storybook is for documentation only** - not for distribution
- **Keep repository private** on GitHub

---

## 📞 Support

For questions about using the components:

1. Check Storybook: https://ui.appski.me
2. View component source code
3. Check this documentation
