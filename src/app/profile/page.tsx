"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  SignInButton,
  SignedIn,
  useClerk,
  useUser,
} from "@clerk/nextjs";
import { useSubscription, SubscriptionDetailsButton } from "@clerk/nextjs/experimental";
import Navbar from "@/components/Navbar";
import toast from "react-hot-toast";
import { 
  User, 
  Mail, 
  CreditCard, 
  Settings, 
  Save, 
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Calendar,
  DollarSign,
  Shield
} from "lucide-react";

function StatusPill({ status }: { status?: string }) {
  const configs: Record<string, { bg: string; text: string; border: string; label: string }> = {
    active: { 
      bg: "bg-emerald-500/10", 
      text: "text-emerald-700 dark:text-emerald-400", 
      border: "border-emerald-200 dark:border-emerald-800",
      label: "Active"
    },
    trialing: { 
      bg: "bg-blue-500/10", 
      text: "text-blue-700 dark:text-blue-400", 
      border: "border-blue-200 dark:border-blue-800",
      label: "Trial"
    },
    past_due: { 
      bg: "bg-amber-500/10", 
      text: "text-amber-700 dark:text-amber-400", 
      border: "border-amber-200 dark:border-amber-800",
      label: "Past Due"
    },
    canceled: { 
      bg: "bg-zinc-500/10", 
      text: "text-zinc-700 dark:text-zinc-400", 
      border: "border-zinc-200 dark:border-zinc-800",
      label: "Canceled"
    },
    unpaid: { 
      bg: "bg-destructive/10", 
      text: "text-destructive", 
      border: "border-destructive/30",
      label: "Unpaid"
    },
  };

  const config = configs[status ?? ""] ?? { 
    bg: "bg-muted", 
    text: "text-muted-foreground", 
    border: "border-border",
    label: "Unknown"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${config.bg} ${config.text} ${config.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'active' ? 'bg-emerald-500' : 'bg-current'}`} />
      {config.label}
    </span>
  );
}

export default function ProfilePage() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { openUserProfile } = useClerk();

  const {
    data: subscription,
    isLoading: subLoading,
    error: subError,
  } = useSubscription({ for: "user" });

  const primaryEmail = useMemo(() => {
    if (!user) return "";
    return user.primaryEmailAddress?.emailAddress ?? "";
  }, [user]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  if (!isLoaded) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading your profile...</p>
          </div>
        </div>
      </>
    );
  }

  if (!isSignedIn) {
    return (
      <>
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <div className="max-w-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Sign in Required
            </h1>
            <p className="text-muted-foreground mb-6">
              You need to sign in to view and manage your profile.
            </p>
            <SignInButton mode="modal">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all">
                Sign In to Continue
              </button>
            </SignInButton>
          </div>
        </div>
      </>
    );
  }

  const displayName =
    user.fullName ||
    `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() ||
    "User";

  const avatarUrl = user.imageUrl;

  const handleSave = async () => {
    setIsSaving(true);
    const loadingToast = toast.loading("Updating your profile...");

    try {
      const nextFirst = firstName.trim();
      const nextLast = lastName.trim();

      await user.update({
        firstName: nextFirst.length ? nextFirst : user.firstName ?? undefined,
        lastName: nextLast.length ? nextLast : user.lastName ?? undefined,
      });

      setFirstName("");
      setLastName("");
      
      toast.success("Profile updated successfully!", {
        id: loadingToast,
        icon: "✓",
      });
    } catch (err: any) {
      toast.error(err?.errors?.[0]?.message ?? "Failed to update profile", {
        id: loadingToast,
      });
    } finally {
      setIsSaving(false);
    }
  };

  const firstItem = subscription?.subscriptionItems?.[0];
  const planName =
    (firstItem as any)?.plan?.name ??
    (firstItem as any)?.plan?.slug ??
    (subscription as any)?.plan?.name ??
    "Free Plan";

  const nextPayment = subscription?.nextPayment;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          {/* Header */}
          <div className="mb-8 sm:mb-10">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6 bg-card border border-border rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 flex-1">
                <div className="relative">
                  <img
                    src={avatarUrl}
                    alt={displayName}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-border"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-card rounded-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    {displayName}
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <p className="text-sm truncate">{primaryEmail}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => openUserProfile()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-background hover:bg-accent transition-all text-sm font-medium"
                  type="button"
                >
                  <Settings className="w-4 h-4" />
                  Manage Account
                </button>

                <button
                  onClick={handleSave}
                  disabled={isSaving || (!firstName.trim() && !lastName.trim())}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm font-medium"
                  type="button"
                >
                  {isSaving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Cards */}
          <section className="grid gap-6 lg:grid-cols-2">
            {/* Personal Info */}
            <div className="border border-border rounded-2xl p-6 sm:p-8 bg-card">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-1">
                    Personal Information
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Update your display name and personal details.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={user.firstName ?? "Enter first name"}
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={user.lastName ?? "Enter last name"}
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>

                <div className="bg-muted/50 rounded-xl p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Email address and security settings are managed through your Clerk account settings. Click "Manage Account" above to update them.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription */}
            <div className="border border-border rounded-2xl p-6 sm:p-8 bg-card">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground mb-1">
                      Subscription
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Your current plan and billing status.
                    </p>
                  </div>
                </div>

                <SignedIn>
                  <SubscriptionDetailsButton>
                    <button
                      type="button"
                      className="px-4 py-2 rounded-xl border border-border bg-background hover:bg-accent transition-all text-sm font-medium whitespace-nowrap"
                    >
                      Manage Plan
                    </button>
                  </SubscriptionDetailsButton>
                </SignedIn>
              </div>

              <div className="space-y-4">
                {subLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="text-center">
                      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground">Loading subscription...</p>
                    </div>
                  </div>
                ) : subError ? (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-destructive mb-1">
                          Failed to load subscription
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {subError.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : !subscription ? (
                  <div className="bg-muted/50 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      No active subscription found.
                    </p>
                    <Link 
                      href="/pricing" 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-all"
                    >
                      View Available Plans
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Current Plan</p>
                          <p className="text-xs text-muted-foreground">Active subscription</p>
                        </div>
                      </div>
                      <p className="text-lg font-bold text-primary">{planName}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2">
                        <p className="text-sm text-muted-foreground">Status</p>
                        <StatusPill status={subscription.status} />
                      </div>

                      {subscription.activeAt && (
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">Active Since</p>
                          </div>
                          <p className="text-sm font-medium text-foreground">
                            {new Date(subscription.activeAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric"
                            })}
                          </p>
                        </div>
                      )}

                      {nextPayment && (
                        <div className="flex items-center justify-between py-2 mt-4 pt-4 border-t border-border">
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">Next Payment</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-foreground">
                              {nextPayment.amount.amountFormatted}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(nextPayment.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                              })}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>

          {/* Account Stats */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Account Overview</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Member Since</p>
                </div>
                <p className="text-lg font-bold text-foreground">
                  {new Date(user.createdAt ?? Date.now()).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric"
                  })}
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-xs text-muted-foreground">Email Verified</p>
                </div>
                <p className="text-lg font-bold text-foreground">
                  {user.primaryEmailAddress?.verification?.status === "verified" ? "Yes" : "No"}
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-xs text-muted-foreground">Account Type</p>
                </div>
                <p className="text-lg font-bold text-foreground">Patient</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-amber-600" />
                  </div>
                  <p className="text-xs text-muted-foreground">2FA Status</p>
                </div>
                <p className="text-lg font-bold text-foreground">
                  {user.twoFactorEnabled ? "Enabled" : "Disabled"}
                </p>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/appointments"
                className="bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Calendar className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">Book Appointment</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Schedule a visit with our specialists
                </p>
              </Link>

              <Link
                href="/dashboard"
                className="bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Settings className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">My Dashboard</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  View appointments and health records
                </p>
              </Link>

              <Link
                href="/pro"
                className="bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <CreditCard className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">Upgrade Plan</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Unlock AI voice assistant and more
                </p>
              </Link>
            </div>
          </section>

          {/* Security & Privacy */}
          <section className="mt-6">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-1">
                    Security & Privacy
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Keep your account secure with these recommended settings
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 ${user.twoFactorEnabled ? 'text-emerald-600' : 'text-muted-foreground'}`} />
                    <div>
                      <p className="text-sm font-medium text-foreground">Two-Factor Authentication</p>
                      <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
                    </div>
                  </div>
                  <button
                    onClick={() => openUserProfile()}
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    {user.twoFactorEnabled ? 'Manage' : 'Enable'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 ${user.primaryEmailAddress?.verification?.status === 'verified' ? 'text-emerald-600' : 'text-amber-600'}`} />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email Verification</p>
                      <p className="text-xs text-muted-foreground">Verify your email address</p>
                    </div>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    user.primaryEmailAddress?.verification?.status === 'verified' 
                      ? 'bg-emerald-500/10 text-emerald-700' 
                      : 'bg-amber-500/10 text-amber-700'
                  }`}>
                    {user.primaryEmailAddress?.verification?.status === 'verified' ? 'Verified' : 'Pending'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Password</p>
                      <p className="text-xs text-muted-foreground">Last updated recently</p>
                    </div>
                  </div>
                  <button
                    onClick={() => openUserProfile()}
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}