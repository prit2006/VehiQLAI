"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ArrowLeft, CarFront, Heart, Layout } from "lucide-react";

import { Button } from "./ui/button";

const HeaderAuth = ({ isAdmin = false, isAdminPage = false }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10" aria-hidden="true" />;
  }

  return (
    <div className="flex items-center space-x-4">
      {isAdminPage ? (
        <Button variant="outline" className="flex items-center gap-2" asChild>
          <Link href="/">
            <ArrowLeft size={18} />
            <span>Back to App</span>
          </Link>
        </Button>
      ) : (
        <SignedIn>
          {!isAdmin && (
            <Button
              variant="outline"
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
              asChild
            >
              <Link href="/reservations">
                <CarFront size={18} />
                <span className="hidden md:inline">My Reservations</span>
              </Link>
            </Button>
          )}
          <Button className="flex items-center gap-2" asChild>
            <Link href="/saved-cars">
              <Heart size={18} />
              <span className="hidden md:inline">Saved Cars</span>
            </Link>
          </Button>
          {isAdmin && (
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <Link href="/admin">
                <Layout size={18} />
                <span className="hidden md:inline">Admin Portal</span>
              </Link>
            </Button>
          )}
        </SignedIn>
      )}

      <SignedOut>
        {!isAdminPage && (
          <SignInButton forceRedirectUrl="/">
            <Button variant="outline">Login</Button>
          </SignInButton>
        )}
      </SignedOut>

      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-10 h-10",
            },
          }}
        />
      </SignedIn>
    </div>
  );
};

export default HeaderAuth;
