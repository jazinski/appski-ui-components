import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Settings, Trash2, AlertTriangle, Check } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './dialog';
import { Button } from './button';
import { Input } from './input';

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// ============================================================================
// Basic Dialog
// ============================================================================

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description. It provides additional context about the dialog content.
          </DialogDescription>
        </DialogHeader>
        <p className="text-muted-foreground text-sm">
          Dialog body content goes here. You can include any content you want.
        </p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// ============================================================================
// Sizes
// ============================================================================

export const Small: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Small Dialog</Button>
      </DialogTrigger>
      <DialogContent size="sm">
        <DialogHeader>
          <DialogTitle>Small Dialog</DialogTitle>
          <DialogDescription>This is a small dialog with max-width of sm.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Large: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Large Dialog</Button>
      </DialogTrigger>
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Large Dialog</DialogTitle>
          <DialogDescription>This is a large dialog with max-width of 2xl.</DialogDescription>
        </DialogHeader>
        <p className="text-muted-foreground text-sm">
          Large dialogs are useful for displaying more complex content like forms, tables, or
          detailed information.
        </p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ExtraLarge: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Extra Large Dialog</Button>
      </DialogTrigger>
      <DialogContent size="xl">
        <DialogHeader>
          <DialogTitle>Extra Large Dialog</DialogTitle>
          <DialogDescription>
            This is an extra large dialog with max-width of 4xl.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-border rounded-lg border p-4">
            <h3 className="font-medium">Column 1</h3>
            <p className="text-muted-foreground text-sm">Content in the first column.</p>
          </div>
          <div className="border-border rounded-lg border p-4">
            <h3 className="font-medium">Column 2</h3>
            <p className="text-muted-foreground text-sm">Content in the second column.</p>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// ============================================================================
// With Form
// ============================================================================

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Settings className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input label="Name" id="name" defaultValue="John Doe" />
          <Input label="Email" id="email" type="email" defaultValue="john@example.com" />
          <Input label="Username" id="username" defaultValue="@johndoe" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// ============================================================================
// Confirmation Dialog
// ============================================================================

export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Item
        </Button>
      </DialogTrigger>
      <DialogContent size="sm">
        <DialogHeader>
          <DialogTitle className="text-destructive flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Delete Item
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this item? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// ============================================================================
// Success Dialog
// ============================================================================

export const Success: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show Success</Button>
      </DialogTrigger>
      <DialogContent size="sm" showCloseButton={false}>
        <div className="flex flex-col items-center py-4">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <DialogHeader className="text-center">
            <DialogTitle>Success!</DialogTitle>
            <DialogDescription>Your changes have been saved successfully.</DialogDescription>
          </DialogHeader>
        </div>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button>Continue</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// ============================================================================
// Without Close Button
// ============================================================================

export const NoCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">No Close Button</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>No Close Button</DialogTitle>
          <DialogDescription>
            This dialog doesn't have an X button. Use the footer buttons or press ESC to close.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// ============================================================================
// Controlled Dialog
// ============================================================================

function ControlledDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-muted-foreground text-sm">
        Dialog is: <strong>{open ? 'Open' : 'Closed'}</strong>
      </p>
      <div className="flex gap-2">
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Dialog
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setOpen(false);
          }}
          disabled={!open}
        >
          Close from Outside
        </Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled Dialog</DialogTitle>
            <DialogDescription>
              This dialog's open state is controlled externally.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setOpen(false);
              }}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledDialogExample />,
};

// ============================================================================
// Disable Close on Overlay Click
// ============================================================================

export const NoOverlayClose: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Can't Click Outside</Button>
      </DialogTrigger>
      <DialogContent closeOnOverlayClick={false}>
        <DialogHeader>
          <DialogTitle>No Overlay Close</DialogTitle>
          <DialogDescription>
            Clicking outside this dialog won't close it. Use the X button, ESC key, or footer
            buttons.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Got it</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// ============================================================================
// Scrollable Content
// ============================================================================

export const ScrollableContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Scrollable Dialog</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>Please read our terms of service carefully.</DialogDescription>
        </DialogHeader>
        <div className="text-muted-foreground space-y-4 text-sm">
          {Array.from({ length: 10 }, (_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel
              consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.
              Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt
              nisl nunc euismod nunc.
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Decline</Button>
          </DialogClose>
          <Button>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// ============================================================================
// Multiple Dialogs (Nested)
// ============================================================================

export const NestedDialogs: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open First Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>First Dialog</DialogTitle>
          <DialogDescription>This is the first dialog. You can open another one.</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center py-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Second Dialog</Button>
            </DialogTrigger>
            <DialogContent size="sm">
              <DialogHeader>
                <DialogTitle>Second Dialog</DialogTitle>
                <DialogDescription>This is a nested dialog.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Close This</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close First Dialog</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
