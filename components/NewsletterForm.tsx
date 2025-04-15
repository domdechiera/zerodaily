import { useForm } from 'react-hook-form'

type FormData = {
  email: string
}

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Use a simple Beehiiv URL to avoid type issues
    window.location.href = 'https://newsletter.beehiiv.com/subscribe'
  }

  return (
    <div className="pt-4 pb-1">
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
        Stay Updated on Security Threats
      </div>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Get the latest cybersecurity news and analysis delivered to your inbox.
      </p>
      <form className="flex flex-col sm:flex-row" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full sm:w-2/3">
          <label
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="email-input"
          >
            Email address
          </label>
          <input
            autoComplete="email"
            className="focus:border-primary-500 focus:ring-primary-500 w-full rounded-md px-4 py-2 dark:bg-black"
            id="email-input"
            placeholder="Enter your email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Please enter a valid email',
              },
            })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message?.toString()}</span>
          )}
        </div>
        <div className="mt-2 flex w-full sm:mt-0 sm:w-1/3">
          <button
            className="bg-primary-500 dark:bg-primary-600 w-full rounded-md px-6 py-2 font-medium text-white sm:ml-2"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  )
}
