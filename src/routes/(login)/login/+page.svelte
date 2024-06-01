<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { login } from "@/utils/pocketbase_utils";
  import type { ButtonEventHandler } from "bits-ui";
  import { toast } from "svelte-sonner";
  let identifier: string = "";
  let password: string = "";
  const handleLogin = async (e: ButtonEventHandler<MouseEvent>) => {
    e.preventDefault();
    if (identifier && password) {
      await login(identifier, password);
    } else {
      toast.error("Required fields missing");
    }
  };
</script>

<div class="grid place-items-center h-[100dvh] bg-slate-700">
  <Card.Root class="w-full max-w-sm">
    <Card.Header>
      <Card.Title class="text-2xl">Login</Card.Title>
      <Card.Description>Enter your email below to login to your account</Card.Description>
    </Card.Header>
    <Card.Content>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email or Username</Label>
          <Input id="email" type="text" placeholder="m@example.com" bind:value={identifier} required />
        </div>
        <div class="grid gap-2">
          <div class="flex items-center">
            <Label for="password">Password</Label>
            <a href="##" class="ml-auto inline-block text-sm underline">Forgot your password?</a>
          </div>
          <Input id="password" type="password" bind:value={password} required />
        </div>
        <Button type="submit" class="w-full" on:click={(e) => handleLogin(e)}>Login</Button>
      </div>
      <div class="mt-4 text-center text-sm">
        Don't have an account?
        <a href="/register" class="underline"> Sign up </a>
      </div>
    </Card.Content>
  </Card.Root>
</div>
