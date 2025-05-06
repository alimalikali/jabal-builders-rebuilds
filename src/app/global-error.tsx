'use client'

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <div className="flex flex-col items-center justify-center">
          <div className="w-[300px] h-[200px] relative">
            <Image src="/assets/images/logo/logo-02.png" alt="Jabal Builders" fill sizes="100vw" className="object-contain" />
          </div>
          <div className="max-w-md w-full space-y-6">
            <Alert variant="destructive">
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle className="text-lg font-semibold">Something went wrong</AlertTitle>
            <AlertDescription>
              {error.message || "An unexpected error occurred."}
              {error.digest && <p className="mt-2 text-sm text-muted-foreground">Digest: {error.digest}</p>}
            </AlertDescription>
          </Alert>

          <div className="flex justify-center">
            <Button variant="outline" onClick={() => reset()}>
              Try Again
            </Button>
          </div>
        </div>
        </div>
      </body>
    </html>
  )
}
