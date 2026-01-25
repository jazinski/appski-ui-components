# Component Implementation Roadmap

This document tracks the progress of building the Appski UI component library
based on requirements from the mcp-jazinski-dev project.

## Overview

**Total Components**: 30+ planned **Completed**: 15 components (50%) **In
Progress**: 0 **Remaining**: ~15 components

---

## ✅ Completed Components (15)

These components are fully implemented with tests, stories, and documentation:

1. **badge** - Status and category labels with variants
2. **breadcrumb** - Navigation path component
3. **button** - Primary action component with variants
4. **card** - Container component for content grouping
5. **checkbox** - Form checkbox input with label
6. **dialog** - Modal dialog/popup component
7. **dropdown** - Action menu with trigger and items
8. **input** - Text input field with variants
9. **page-header** - Page title, description, and actions
10. **select** - Dropdown selection component
11. **spinner** - Loading indicator
12. **switch** - Toggle switch component
13. **tabs** - Tabbed navigation interface
14. **textarea** - Multi-line text input
15. **toast** - Notification/alert component

**Test Coverage**: 96.59% statements, 95.12% functions **All ESLint/TypeScript
checks**: ✅ Passing

---

## 🚧 Priority 1: Shell Components (8 components)

Critical components for building the main application layout and navigation.

### ⬜ Avatar

**Priority**: HIGH (Foundation for UserMenu) **Complexity**: LOW **Estimated
Time**: 1-2 hours

**Features**:

- Image with fallback to initials (2-3 letters)
- Sizes: xs (24px), sm (32px), md (40px), lg (48px), xl (64px)
- Status indicator dot (online/offline/away) - optional
- Variants: circle (default), square with rounded corners
- Alt text for accessibility
- Loading state with skeleton

**Usage**: User profiles, comment sections, team members list

**Implementation Notes**:

- Use `clsx` for conditional classes
- Support both image URL and initials
- Color initials background based on hash of name
- Use Tailwind ring utilities for status indicator

---

### ⬜ StatusIndicator / StatusBadge

**Priority**: HIGH (Used across dashboard) **Complexity**: LOW **Estimated
Time**: 1 hour

**Features**:

- Dot variant: Small colored circle with optional pulse animation
- Badge variant: Dot + label text
- States: online, offline, healthy, unhealthy, warning, loading
- Sizes: sm, md, lg
- Optional pulse animation for "active" states

**Usage**: Service health, user online status, system status

**Color Mapping**:

- online/healthy: green-500
- offline: gray-400
- unhealthy/error: red-500
- warning: yellow-500
- loading: indigo-500 (animated pulse)

---

### ⬜ SearchBar / SearchInput

**Priority**: HIGH (Multiple pages use search) **Complexity**: LOW-MEDIUM
**Estimated Time**: 2 hours

**Features**:

- Extends existing Input component
- Magnifying glass icon (Lucide Search) on left
- Clear button (X icon) on right when text present
- Debounced onChange callback (default 300ms)
- Loading state with spinner
- Keyboard shortcuts: Cmd/Ctrl+K to focus, Escape to clear
- Placeholder text variants

**Usage**: Developer search, audit log filtering, system health filtering

**Props**:

```typescript
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}
```

---

### ⬜ AppShell

**Priority**: HIGH (Main layout wrapper) **Complexity**: HIGH **Estimated
Time**: 4-6 hours

**Features**:

- Responsive layout with sidebar and main content area
- Mobile: Hamburger menu, collapsible sidebar, overlay
- Desktop: Fixed sidebar (240px width)
- Dark mode support throughout
- Smooth transitions for sidebar open/close
- Scroll behavior: sidebar independent of main content
- Header slot (optional, for future top nav)
- Footer slot (optional, for user menu)

**Layout Structure**:

```
┌─────────────────────────────────────┐
│  [Mobile: Header with hamburger]   │ (mobile only)
├──────────┬──────────────────────────┤
│          │                          │
│ Sidebar  │   Main Content Area      │
│ (240px)  │   (flex-1, scrollable)   │
│          │                          │
│          │                          │
│  [User]  │                          │
│  [Menu]  │                          │
└──────────┴──────────────────────────┘
```

**Usage**: Wrap entire application

---

### ⬜ Sidebar

**Priority**: HIGH (Part of AppShell) **Complexity**: MEDIUM **Estimated Time**:
3-4 hours

**Features**:

- Fixed position on desktop
- Slide-out drawer on mobile with overlay
- Logo at top
- Navigation sections with headers
- Footer area for user menu
- Collapsible state (future enhancement)
- Dark mode background (slate-900)
- Border on right (slate-800)

**Sections**:

1. Logo/Brand (top)
2. MainNav (navigation items)
3. UserMenu (bottom)

**Responsive Behavior**:

- Mobile: Hidden by default, slides in from left with overlay
- Desktop: Fixed 240px width, always visible

---

### ⬜ MainNav

**Priority**: HIGH (Navigation items) **Complexity**: MEDIUM **Estimated Time**:
2-3 hours

**Features**:

- Vertical list of navigation items
- Icon + label for each item
- Active state: indigo-600 background, indigo-500 left border
- Hover state: slate-800 background
- Section headers (optional dividers)
- Badge/count indicators (optional)
- Keyboard navigation support
- Support for nested items (future)

**Item Structure**:

```typescript
interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
  active?: boolean;
}
```

**Usage**: Inside Sidebar component

**Icons Used** (from Lucide):

- Home, Activity, Database, MessageSquare, Users, Settings, etc.

---

### ⬜ UserMenu

**Priority**: HIGH (User profile dropdown) **Complexity**: MEDIUM **Estimated
Time**: 2-3 hours

**Features**:

- Avatar + name + email
- Dropdown menu with items
- Uses Avatar component
- Uses Dropdown component
- Positioned at bottom of sidebar
- Chevron icon indicates expandable
- Menu items: Profile, Settings, Sign out
- Dividers between sections

**Menu Items**:

- User info (non-clickable, displays name/email)
- Profile (link)
- Settings (link)
- --- (divider)
- Sign out (action with logout icon)

**Usage**: In Sidebar footer

---

### ⬜ MobileMenu

**Priority**: MEDIUM (Mobile navigation) **Complexity**: MEDIUM **Estimated
Time**: 2-3 hours

**Features**:

- Hamburger icon trigger (Lucide Menu)
- Slide-out drawer from left
- Dark overlay when open
- Close button (X icon) in header
- Contains same nav items as desktop sidebar
- Smooth animations (transform, opacity)
- Lock body scroll when open
- Close on overlay click or item click

**Usage**: Part of AppShell for mobile devices

---

## 🔷 Priority 2: Data Display Components (3 components)

Components for displaying structured data and metrics.

### ⬜ Table / DataTable

**Priority**: HIGH (Critical for many pages) **Complexity**: HIGH **Estimated
Time**: 6-8 hours

**Features**:

- Sortable columns (asc/desc with icons)
- Filterable rows
- Pagination controls
- Row selection (checkboxes)
- Sticky header
- Loading state (skeleton rows)
- Empty state
- Responsive (horizontal scroll on mobile)
- Custom cell renderers
- Row actions menu
- Zebra striping (optional)

**Usage**: Developer list, audit logs, system health incidents

**Column Definition**:

```typescript
interface Column<T> {
  key: string;
  header: string;
  sortable?: boolean;
  width?: string;
  render?: (value: any, row: T) => React.ReactNode;
}
```

**Notes**: This is the most complex component. Consider using a library like
TanStack Table or building a simpler custom version first.

---

### ⬜ StatsCard

**Priority**: MEDIUM (Dashboard metrics) **Complexity**: LOW **Estimated Time**:
1-2 hours

**Features**:

- Extends Card component
- Icon on left (optional)
- Label text (small, muted)
- Large value text (primary)
- Trend indicator: up/down arrow + percentage (optional)
- Loading state (skeleton)
- Variants: default, success, warning, error

**Usage**: Dashboard stats (connections, uptime, requests, events)

**Example**:

```
┌─────────────────────┐
│ 🔌  Total           │
│     Connections     │
│                     │
│     847             │
│     ↑ 12%          │
└─────────────────────┘
```

---

### ⬜ EmptyState

**Priority**: MEDIUM (User feedback) **Complexity**: LOW **Estimated Time**: 1
hour

**Features**:

- Icon or illustration
- Heading text
- Description text (muted)
- Optional action button
- Centered layout
- Variants: no-data, no-results, error, no-permission

**Usage**: Empty tables, search with no results, pages with no data

**Example**:

```
      🔍
   No results found
Try adjusting your search or filters
   [Clear Filters]
```

---

## 📝 Priority 3: Additional Form Components (2 components)

### ⬜ RadioGroup

**Priority**: MEDIUM **Complexity**: LOW-MEDIUM **Estimated Time**: 2-3 hours

**Features**:

- Group of radio button options
- Label for group
- Individual labels for each option
- Description text for each option (optional)
- Horizontal or vertical layout
- Error state and message
- Disabled state
- Keyboard navigation (arrow keys)
- ARIA labels for accessibility

**Usage**: Settings, preferences, forms with exclusive options

---

### ⬜ Alert / Notification

**Priority**: MEDIUM **Complexity**: MEDIUM **Estimated Time**: 2-3 hours

**Features**:

- Variants: info, success, warning, error
- Icon matching variant (Lucide icons)
- Title text (bold)
- Description text
- Dismiss button (X icon) - optional
- Action button(s) - optional
- Border on left matching variant color
- Can be used inline or as toast alternative

**Usage**: System health incidents, form validation messages, page-level alerts

**Difference from Toast**:

- Alert: Inline, persistent, part of page flow
- Toast: Overlay, auto-dismiss, temporary notification

---

## ✨ Priority 4: Polish & Enhancement (2+ components)

### ⬜ Enhanced Loading States

**Priority**: LOW **Complexity**: LOW **Estimated Time**: 1-2 hours

**Features**:

- Full-page loading overlay
- Section loading states
- Progress bar component
- Shimmer effect utility

**Usage**: Page transitions, data fetching

---

### ⬜ Skeleton Variations

**Priority**: LOW **Complexity**: LOW **Estimated Time**: 1-2 hours

**Features**:

- Text skeleton (multiple lines)
- Card skeleton
- Table skeleton
- Avatar skeleton
- Button skeleton
- Customizable width/height/shape

**Usage**: Loading placeholders for content

**Note**: May already have basic skeleton from existing components - this is for
expanding it.

---

## 🎯 Implementation Strategy

### Phase 1: Foundation (Week 1)

Build the smallest, most reusable components first:

1. Avatar (dependency for UserMenu)
2. StatusIndicator (simple, high-value)
3. SearchBar (extends Input)

**Goal**: 3 components with full tests and stories

---

### Phase 2: Shell Structure (Week 2)

Build the application layout: 4. Sidebar 5. MainNav 6. UserMenu 7. MobileMenu 8.
AppShell (combines above)

**Goal**: Complete responsive layout shell

---

### Phase 3: Data Components (Week 3)

Build data display components: 9. StatsCard (quick win) 10. EmptyState (quick
win) 11. Table/DataTable (most complex)

**Goal**: Dashboard and list pages functional

---

### Phase 4: Forms & Polish (Week 4)

Complete remaining components: 12. RadioGroup 13. Alert/Notification 14.
Enhanced Loading 15. Skeleton variations

**Goal**: Feature-complete component library

---

## 📊 Progress Tracking

| Category         | Completed | Total   | Progress |
| ---------------- | --------- | ------- | -------- |
| **Forms**        | 5         | 7       | 71%      |
| **Data Display** | 2         | 5       | 40%      |
| **Feedback**     | 3         | 6       | 50%      |
| **Navigation**   | 2         | 7       | 29%      |
| **Layout**       | 1         | 4       | 25%      |
| **TOTAL**        | **15**    | **30+** | **~50%** |

---

## 🔧 Technical Standards

Every component must include:

- ✅ TypeScript types and interfaces
- ✅ CVA variants (when applicable)
- ✅ Dark mode support
- ✅ Accessibility (ARIA labels, keyboard nav)
- ✅ Vitest unit tests (>90% coverage)
- ✅ Storybook stories (all variants)
- ✅ JSDoc documentation
- ✅ Export from `src/components/ui/index.ts`

---

## 📚 Reference

**Primary Reference**: `/home/cjazinski/mcp-servers/mcp-jazinski-dev`

- `web-ui/src/components/` - Component implementations
- `web-ui/src/app/` - Usage examples in pages
- `web-ui/src/lib/` - Utility functions

**Design System**:

- Colors: Indigo primary, Slate neutral
- Font: Inter from Google Fonts
- Icons: Lucide React
- Dark Mode: Tailwind `dark:` prefix

---

## 🚀 Next Steps

1. **Immediate**: Start with Avatar component (simplest, high-value)
2. **This Week**: Complete Phase 1 (Avatar, StatusIndicator, SearchBar)
3. **Next Week**: Tackle Phase 2 (Shell components)
4. **Goal**: Ship 1-2 components per day with full quality standards

---

**Last Updated**: 2026-01-25 **Status**: Branding complete, ready to build
Priority 1 components
