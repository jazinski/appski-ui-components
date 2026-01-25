import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Input } from './input';
import { Button } from './button';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'underline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-muted-foreground">
          Make changes to your account here. Click save when you&apos;re done.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-muted-foreground">
          Change your password here. After saving, you&apos;ll be logged out.
        </p>
      </TabsContent>
      <TabsContent value="settings">
        <p className="text-sm text-muted-foreground">
          Configure your application settings and preferences.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const Underline: Story = {
  render: () => (
    <Tabs defaultValue="overview" variant="underline" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="pt-4 text-sm text-muted-foreground">Overview content goes here.</p>
      </TabsContent>
      <TabsContent value="analytics">
        <p className="pt-4 text-sm text-muted-foreground">Analytics content goes here.</p>
      </TabsContent>
      <TabsContent value="reports">
        <p className="pt-4 text-sm text-muted-foreground">Reports content goes here.</p>
      </TabsContent>
      <TabsContent value="notifications">
        <p className="pt-4 text-sm text-muted-foreground">Notifications content goes here.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Active Tab</TabsTrigger>
        <TabsTrigger value="tab2">Another Tab</TabsTrigger>
        <TabsTrigger value="tab3" disabled>
          Disabled Tab
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-sm text-muted-foreground">This tab is active.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-sm text-muted-foreground">This is another tab.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-sm text-muted-foreground">This tab is disabled.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithCards: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[450px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Name" defaultValue="John Doe" />
            <Input label="Username" defaultValue="@johndoe" />
            <Button>Save changes</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Current password" type="password" />
            <Input label="New password" type="password" />
            <Button>Change password</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1" variant="underline" className="w-full max-w-2xl">
      <TabsList>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Projects</TabsTrigger>
        <TabsTrigger value="tab3">Team</TabsTrigger>
        <TabsTrigger value="tab4">Settings</TabsTrigger>
        <TabsTrigger value="tab5">Billing</TabsTrigger>
        <TabsTrigger value="tab6">Integrations</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="py-4">Overview content</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="py-4">Projects content</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="py-4">Team content</p>
      </TabsContent>
      <TabsContent value="tab4">
        <p className="py-4">Settings content</p>
      </TabsContent>
      <TabsContent value="tab5">
        <p className="py-4">Billing content</p>
      </TabsContent>
      <TabsContent value="tab6">
        <p className="py-4">Integrations content</p>
      </TabsContent>
    </Tabs>
  ),
};
