import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Button } from './button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'elevated', 'ghost'],
    },
    status: {
      control: 'select',
      options: ['default', 'active', 'inactive'],
      description: 'Status indicator with left border accent',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with some example text to demonstrate the layout.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Outline: Story = {
  render: () => (
    <Card variant="outline" className="w-[350px]">
      <CardHeader>
        <CardTitle>Outline Card</CardTitle>
        <CardDescription>A card with outline variant.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has no shadow, just a border.</p>
      </CardContent>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated" className="w-[350px]">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>A card with elevated shadow.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has a more prominent shadow.</p>
      </CardContent>
    </Card>
  ),
};

export const Ghost: Story = {
  render: () => (
    <Card variant="ghost" className="w-[350px]">
      <CardHeader>
        <CardTitle>Ghost Card</CardTitle>
        <CardDescription>A card with no border or shadow.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card is transparent and minimal.</p>
      </CardContent>
    </Card>
  ),
};

export const SimpleContent: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>A simple card with just content, no header or footer.</p>
      </CardContent>
    </Card>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Manage your account preferences.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Update your profile information, change password, and manage notifications.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card className="w-[250px]">
        <CardHeader>
          <CardTitle>Default</CardTitle>
        </CardHeader>
        <CardContent>Default variant</CardContent>
      </Card>
      <Card variant="outline" className="w-[250px]">
        <CardHeader>
          <CardTitle>Outline</CardTitle>
        </CardHeader>
        <CardContent>Outline variant</CardContent>
      </Card>
      <Card variant="elevated" className="w-[250px]">
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
        </CardHeader>
        <CardContent>Elevated variant</CardContent>
      </Card>
      <Card variant="ghost" className="w-[250px]">
        <CardHeader>
          <CardTitle>Ghost</CardTitle>
        </CardHeader>
        <CardContent>Ghost variant</CardContent>
      </Card>
    </div>
  ),
};

export const ActiveStatus: Story = {
  render: () => (
    <Card status="active" className="w-[350px]">
      <CardHeader>
        <CardTitle>Active Card</CardTitle>
        <CardDescription>This card has an active status with a colored left border.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Use the status prop to indicate active/inactive states without changing the card's overall appearance.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const InactiveStatus: Story = {
  render: () => (
    <Card status="inactive" className="w-[350px]">
      <CardHeader>
        <CardTitle>Inactive Card</CardTitle>
        <CardDescription>This card has an inactive status with a muted left border.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>The inactive status provides a subtle visual distinction without making the card look washed out.</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const StatusComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-foreground">Status Variants for Active/Inactive States</h3>
      <div className="flex flex-wrap gap-4">
        <Card status="active" className="w-[280px]">
          <CardHeader>
            <CardTitle className="text-base">Active Agent</CardTitle>
            <CardDescription>Enabled and running</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">This agent is currently active and processing requests.</p>
          </CardContent>
        </Card>
        <Card status="inactive" className="w-[280px]">
          <CardHeader>
            <CardTitle className="text-base">Inactive Agent</CardTitle>
            <CardDescription>Disabled</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">This agent is currently disabled and not processing requests.</p>
          </CardContent>
        </Card>
        <Card className="w-[280px]">
          <CardHeader>
            <CardTitle className="text-base">Default Card</CardTitle>
            <CardDescription>No status</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">This card has no status indicator.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};
