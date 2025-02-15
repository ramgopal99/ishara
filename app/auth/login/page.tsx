'use client'

import { signIn, useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      if (session.user.role === 'ADMIN') {
        router.push('/admin/dashboard')
      } else {
        router.push('/dashboard')
      }
    }
  }, [session, router])

  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: '/dashboard' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-indigo-950 mb-2">Welcome Back</h1>
          <p className="text-indigo-600">Sign in to continue your learning journey</p>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-indigo-100">
          <div className="space-y-6">
            {/* Google Sign In Button */}
            <Button 
              onClick={handleGoogleLogin}
              variant="outline" 
              className="w-full h-12 flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-800 border-gray-300 hover:border-gray-400 transition-all duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </Button>

  

            {/* Footer Text */}
            <p className="text-center text-sm text-gray-600">
              By signing in, you agree to our{' '}
              <a href="/terms" className="text-indigo-600 hover:text-indigo-800">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-indigo-600 hover:text-indigo-800">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 