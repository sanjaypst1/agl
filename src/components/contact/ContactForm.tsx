"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  organisation: z.string().min(2, "Enter your organisation"),
  role: z.string().min(2, "Enter your role"),
  message: z.string().min(20, "Please provide a short message (20+ characters)"),
  privacy: z.boolean().refine((value) => value === true, {
    message: "Privacy acknowledgement is required",
  }),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    const subject = encodeURIComponent(
      `Risk Solutions conversation — ${values.name} (${values.organisation})`,
    );
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nOrganisation: ${values.organisation}\nRole: ${values.role}\n\nMessage:\n${values.message}\n\nPrivacy acknowledgement: Yes`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="surface space-y-5 p-6 md:p-8"
      noValidate
    >
      <div role="alert" aria-live="polite" className="text-sm text-muted">
        {Object.keys(errors).length > 0
          ? "Please correct the highlighted fields before continuing."
          : submitted
            ? "Your email client should open with a pre-filled message. If it does not, email directly using the address on this page."
            : "This static form opens a mailto draft. No data is stored on a server in this version."}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1 block font-semibold">Name</span>
          <input
            className="w-full rounded-xl border border-line bg-white px-3 py-2"
            autoComplete="name"
            {...register("name")}
          />
          {errors.name ? <span className="mt-1 block text-coral">{errors.name.message}</span> : null}
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-semibold">Email</span>
          <input
            type="email"
            className="w-full rounded-xl border border-line bg-white px-3 py-2"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email ? (
            <span className="mt-1 block text-coral">{errors.email.message}</span>
          ) : null}
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-semibold">Organisation</span>
          <input
            className="w-full rounded-xl border border-line bg-white px-3 py-2"
            autoComplete="organization"
            {...register("organisation")}
          />
          {errors.organisation ? (
            <span className="mt-1 block text-coral">{errors.organisation.message}</span>
          ) : null}
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-semibold">Role</span>
          <input
            className="w-full rounded-xl border border-line bg-white px-3 py-2"
            autoComplete="organization-title"
            {...register("role")}
          />
          {errors.role ? <span className="mt-1 block text-coral">{errors.role.message}</span> : null}
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1 block font-semibold">Message</span>
        <textarea
          className="min-h-36 w-full rounded-xl border border-line bg-white px-3 py-2"
          {...register("message")}
        />
        {errors.message ? (
          <span className="mt-1 block text-coral">{errors.message.message}</span>
        ) : null}
      </label>

      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" className="mt-1" {...register("privacy")} />
        <span>
          I acknowledge that this form opens a local email draft and that message content should not
          include confidential risk, customer or commercially sensitive data. See the{" "}
          <a href="/privacy" className="font-semibold text-teal">
            privacy page
          </a>
          .
        </span>
      </label>
      {errors.privacy ? (
        <p className="text-sm text-coral">{errors.privacy.message}</p>
      ) : null}

      <Button type="submit">Open email draft</Button>
    </form>
  );
}
