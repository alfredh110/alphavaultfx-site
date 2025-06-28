export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-4">For support, email us at support@alphavaultfx.com</p>
      <a
        href="mailto:support@alphavaultfx.com"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
      >
        Email Support
      </a>
    </div>
  )
}
