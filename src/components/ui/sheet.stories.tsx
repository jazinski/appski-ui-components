import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Settings, Trash2, AlertTriangle, Check } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from './sheet';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';

const meta: Meta<typeof Sheet> = {
  title: 'UI/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controlled open state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

// ============================================================================
// Basic Sheet
export const Default: Story = {
  name: 'Default (Right)',
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <p>Sheet body content</p>
      </SheetContent>
    </Sheet>
  ),
};

export const LeftSide: Story = {
  name: 'Left Side',
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Slide-over panel docked to the left edge.</SheetDescription>
        </SheetHeader>
        <p>Sheet body content</p>
      </SheetContent>
    </Sheet>
  ),
};

export const TopSide: Story = {
  name: 'Top Side',
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Search</SheetTitle>
          <SheetDescription>Slide-over panel docked to the top edge.</SheetDescription>
        </SheetHeader>
        <p>Sheet body content</p>
      </SheetContent>
    </Sheet>
  ),
};

export const BottomSide: Story = {
  name: 'Bottom Side',
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Slide-over panel docked to the bottom edge.</SheetDescription>
        </SheetHeader>
        <p>Sheet body content</p>
      </SheetContent>
    </Sheet>
  ),
};

export const WithForm: Story = {
  name: 'With Form',
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Settings className="h-4 w-4" />
          Edit Profile
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Chris Jazinski" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="cjazinski" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Confirmation: Story = {
  name: 'Confirmation',
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="h-4 w-4" />
          Delete Account
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account and remove
            your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="destructive">Delete</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const NoCloseButton: Story = {
  name: 'No Close Button',
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>No close button</SheetTitle>
          <SheetDescription>
            The X button is hidden; use the footer button or Escape to close.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

function ControlledSheetExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Controlled Sheet
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Controlled sheet</SheetTitle>
            <SheetDescription>Open state is managed by the parent.</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export const Controlled: Story = {
  name: 'Controlled',
  render: () => <ControlledSheetExample />,
};

export const NoOverlayClose: Story = {
  name: 'No Overlay Close',
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent closeOnOverlayClick={false}>
        <SheetHeader>
          <SheetTitle>Overlay click disabled</SheetTitle>
          <SheetDescription>
            Clicking the overlay will not close this sheet. Use the close button or Escape.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const ScrollableContent: Story = {
  name: 'Scrollable Content',
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Long Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Long content</SheetTitle>
          <SheetDescription>The panel scrolls when content overflows.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} className="text-muted-foreground text-sm">
              Item {i + 1} — sheet panels keep their header and footer visible while the body
              scrolls.
            </p>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const StatusSheet: Story = {
  name: 'Status / Success',
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Check className="h-4 w-4" />
          View Status
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="sm:max-w-none">
        <SheetHeader>
          <SheetTitle>Deployment succeeded</SheetTitle>
          <SheetDescription>
            All checks passed and the new version is live. Warnings are listed below.
          </SheetDescription>
        </SheetHeader>
        <div className="flex items-start gap-2 text-sm">
          <AlertTriangle className="text-muted-foreground mt-0.5 h-4 w-4 shrink-0" />
          <p className="text-muted-foreground">
            Cache purge is still running in the background and may take a few minutes.
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Acknowledge</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
