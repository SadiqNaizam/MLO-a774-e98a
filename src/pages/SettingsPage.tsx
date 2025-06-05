import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NowPlayingBar from '@/components/NowPlayingBar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { dummyNowPlayingBarProps } from './placeholder-data';

const SettingsPage = () => {
  console.log('SettingsPage loaded');

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 overflow-hidden">
        <Header />
        <ScrollArea className="flex-1">
          <div className="pb-[96px]">
            <main className="p-6">
              <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Settings</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>View and manage your public profile.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="https://github.com/shadcn.png" alt="Doraemon" />
                        <AvatarFallback>DM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-xl font-semibold">Doraemon</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">doraemon@future.com</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="TheDoraemon" disabled />
                    </div>
                     <div className="space-y-1">
                      <Label htmlFor="displayName">Display Name</Label>
                      <Input id="displayName" defaultValue="Doraemon (Official)" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="ml-auto bg-blue-500 hover:bg-blue-600">Save Profile</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account security.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-1">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="destructive">Logout</Button>
                    <Button className="bg-blue-500 hover:bg-blue-600">Change Password</Button>
                  </CardFooter>
                </Card>
              </div>
            </main>
            <Footer />
          </div>
        </ScrollArea>
        <NowPlayingBar {...dummyNowPlayingBarProps} />
      </div>
    </div>
  );
};

export default SettingsPage;